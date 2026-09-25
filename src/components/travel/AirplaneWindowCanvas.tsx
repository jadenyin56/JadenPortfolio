"use client";

import { Image, PerspectiveCamera, RoundedBox } from "@react-three/drei";
import { Canvas, type ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { ShadeCommand } from "@/components/travel/AirplaneWindowExperience";
import type { TravelEntrancePhase } from "@/components/travel/TravelsExperience";
import { playUiTap } from "@/lib/audio";

type AirplaneWindowCanvasProps = {
  phase: TravelEntrancePhase;
  theme: "day" | "night";
  command: ShadeCommand;
  onProgress: (progress: number) => void;
  onOpen: () => void;
  onCameraPass: () => void;
  onReady: () => void;
};

type DragState = {
  pointerId: number;
  startY: number;
  startProgress: number;
  lastY: number;
  lastTime: number;
  velocity: number;
};

const WINDOW_APERTURE = {
  width: 3.62,
  height: 5.28,
  radius: 1.34,
} as const;

const SHADE = {
  width: WINDOW_APERTURE.width + 0.06,
  height: WINDOW_APERTURE.height + 0.17,
  lowerRailWidth: 2.72,
} as const;

function roundedRectanglePath(width: number, height: number, radius: number) {
  const path = new THREE.Path();
  const x = -width / 2;
  const y = -height / 2;
  path.moveTo(x + radius, y);
  path.lineTo(x + width - radius, y);
  path.quadraticCurveTo(x + width, y, x + width, y + radius);
  path.lineTo(x + width, y + height - radius);
  path.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  path.lineTo(x + radius, y + height);
  path.quadraticCurveTo(x, y + height, x, y + height - radius);
  path.lineTo(x, y + radius);
  path.quadraticCurveTo(x, y, x + radius, y);
  path.closePath();
  return path;
}

function ringShape(outerWidth: number, outerHeight: number, outerRadius: number, innerWidth: number, innerHeight: number, innerRadius: number) {
  const shape = new THREE.Shape();
  const outer = roundedRectanglePath(outerWidth, outerHeight, outerRadius);
  shape.curves = outer.curves;
  shape.currentPoint.copy(outer.currentPoint);
  shape.holes.push(roundedRectanglePath(innerWidth, innerHeight, innerRadius));
  return shape;
}

function wallShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-10, -7);
  shape.lineTo(10, -7);
  shape.lineTo(10, 7);
  shape.lineTo(-10, 7);
  shape.closePath();
  shape.holes.push(roundedRectanglePath(4.58, 6.28, 1.62));
  return shape;
}

function applyResistance(progress: number) {
  const clamped = THREE.MathUtils.clamp(progress, 0, 1);
  if (clamped <= 0.85) return clamped;
  return 0.85 + (clamped - 0.85) * 0.75;
}

function WindowScene({ phase, theme, command, onProgress, onOpen, onCameraPass, onReady }: AirplaneWindowCanvasProps) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const shadeRef = useRef<THREE.Group>(null);
  const wallRef = useRef<THREE.Group>(null);
  const sceneryRef = useRef<THREE.Group>(null);
  const veilRef = useRef<THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>>(null);
  const dragRef = useRef<DragState | null>(null);
  const controllerRef = useRef({ current: 0.1, target: 0.1 });
  const openingProgress = useRef({ value: 0 });
  const transitionStarted = useRef(false);
  const { pointer, size } = useThree();
  const mobile = size.width < 760;
  const windowX = mobile ? 0 : 1.34;
  const windowScale = mobile ? 0.54 : 1;

  const wall = useMemo(() => wallShape(), []);
  const outerFrame = useMemo(() => ringShape(5.08, 6.78, 1.88, 4.35, 6.02, 1.57), []);
  const innerFrame = useMemo(() => ringShape(
    4.4,
    6.08,
    1.6,
    WINDOW_APERTURE.width,
    WINDOW_APERTURE.height,
    WINDOW_APERTURE.radius,
  ), []);

  const wallColor = theme === "night" ? "#111a21" : "#eee9de";
  const frameColor = theme === "night" ? "#344955" : "#eee9de";
  const trimColor = theme === "night" ? "#526b76" : "#d7d0c3";
  const shadeColor = theme === "night" ? "#26343c" : "#e4ded2";
  const photo = theme === "night"
    ? "/images/editorial/night-tokyo-train-webgl.webp"
    : "/images/editorial/travel-train-webgl.webp";

  function releasePointer(event: ThreeEvent<PointerEvent>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    event.stopPropagation();
    (event.target as EventTarget & { releasePointerCapture: (pointerId: number) => void })
      .releasePointerCapture(event.pointerId);
    dragRef.current = null;

    if (controllerRef.current.target >= 0.95) {
      controllerRef.current.target = 1;
      playUiTap();
      onOpen();
      return;
    }

    controllerRef.current.target = THREE.MathUtils.clamp(
      controllerRef.current.target + drag.velocity * 0.055,
      0,
      0.94,
    );
  }

  const pointerHandlers = {
    onPointerDown: (event: ThreeEvent<PointerEvent>) => {
      if (phase !== "window") return;
      event.stopPropagation();
      (event.target as EventTarget & { setPointerCapture: (pointerId: number) => void })
        .setPointerCapture(event.pointerId);
      const now = performance.now();
      dragRef.current = {
        pointerId: event.pointerId,
        startY: event.nativeEvent.clientY,
        startProgress: controllerRef.current.target,
        lastY: event.nativeEvent.clientY,
        lastTime: now,
        velocity: 0,
      };
    },
    onPointerMove: (event: ThreeEvent<PointerEvent>) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== event.pointerId || phase !== "window") return;
      event.stopPropagation();
      const now = performance.now();
      const travel = Math.min(window.innerHeight * 0.62, 620);
      const raw = drag.startProgress + (drag.startY - event.nativeEvent.clientY) / travel;
      controllerRef.current.target = applyResistance(raw);
      const elapsed = Math.max(now - drag.lastTime, 8);
      drag.velocity = ((drag.lastY - event.nativeEvent.clientY) / travel) / (elapsed / 1000);
      drag.lastY = event.nativeEvent.clientY;
      drag.lastTime = now;
    },
    onPointerUp: releasePointer,
    onPointerCancel: releasePointer,
  };

  useEffect(() => {
    if (command.id === 0) return;
    controllerRef.current.target = command.target;
  }, [command]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(onReady);
    return () => window.cancelAnimationFrame(frame);
  }, [onReady]);

  useEffect(() => {
    if (phase !== "opening" || transitionStarted.current) return;
    transitionStarted.current = true;
    controllerRef.current.target = 1;
    const camera = cameraRef.current;
    if (!camera) return;

    const timeline = gsap.timeline({
      defaults: { overwrite: true },
      onComplete: onCameraPass,
    });
    timeline
      .to({}, { duration: 0.46 })
      .to(openingProgress.current, { value: 1, duration: 2.65, ease: "power2.inOut" })
      .to(camera.position, { z: -0.38, duration: 2.65, ease: "power2.inOut" }, "<")
      .to(sceneryRef.current?.position ?? {}, { z: -4.45, duration: 2.65, ease: "power2.inOut" }, "<")
      .to(sceneryRef.current?.scale ?? {}, { x: 0.4, y: 0.4, z: 0.4, duration: 2.65, ease: "power2.inOut" }, "<");

    return () => {
      timeline.kill();
    };
  }, [onCameraPass, phase]);

  useFrame((state, delta) => {
    const damping = dragRef.current ? 22 : 10;
    controllerRef.current.current = THREE.MathUtils.damp(
      controllerRef.current.current,
      controllerRef.current.target,
      damping,
      delta,
    );

    const progress = controllerRef.current.current;
    if (shadeRef.current) shadeRef.current.position.y = THREE.MathUtils.lerp(0.48, 5.72, progress);
    if (veilRef.current) {
      veilRef.current.material.opacity = THREE.MathUtils.lerp(theme === "night" ? 0.28 : 0.42, 0.04, progress);
    }
    onProgress(progress);

    const time = state.clock.elapsedTime;
    const idleX = mobile ? Math.sin(time * 0.32) * 0.035 : pointer.x * 0.085;
    const idleY = mobile ? Math.cos(time * 0.27) * 0.025 : pointer.y * 0.055;
    const passage = openingProgress.current.value;
    if (cameraRef.current) {
      cameraRef.current.position.x = windowX + THREE.MathUtils.lerp(idleX, 0, passage);
      cameraRef.current.position.y = THREE.MathUtils.lerp(idleY, 0, passage);
    }

    if (wallRef.current) {
      wallRef.current.rotation.y = THREE.MathUtils.damp(
        wallRef.current.rotation.y,
        phase === "window" ? -idleX * 0.16 : 0,
        5,
        delta,
      );
      wallRef.current.rotation.x = THREE.MathUtils.damp(
        wallRef.current.rotation.x,
        phase === "window" ? idleY * 0.12 : 0,
        5,
        delta,
      );
    }
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[windowX, 0, 8.6]}
        fov={40}
        filmOffset={mobile ? 0 : -5.25}
        near={0.08}
        far={60}
      />
      <color attach="background" args={[theme === "night" ? "#090f14" : "#d8d1c4"]} />
      <ambientLight intensity={theme === "night" ? 0.68 : 1.35} />
      <hemisphereLight
        args={[theme === "night" ? "#8bc9d9" : "#fff8e8", theme === "night" ? "#03080c" : "#6d685f", theme === "night" ? 0.82 : 1.25]}
      />
      <directionalLight
        castShadow
        position={[-4.5, 7, 7]}
        intensity={theme === "night" ? 1.72 : 3.4}
        color={theme === "night" ? "#a8d9e4" : "#fff4dc"}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0002}
      />
      <pointLight
        position={[5, -3, 4]}
        intensity={theme === "night" ? 0.3 : 0.42}
        color={theme === "night" ? "#c3538f" : "#d9b894"}
      />

      <group ref={wallRef} position={[windowX, 0, 0]} scale={windowScale}>
        <group ref={sceneryRef} position={[0, 0, -1.58]}>
          <Suspense
            fallback={(
              <mesh position={[0, 0, 0]}>
                <planeGeometry args={[13.4, 8.4]} />
                <meshBasicMaterial color={theme === "night" ? "#111821" : "#a9b5aa"} />
              </mesh>
            )}
          >
            {/* Drei's WebGL image has no DOM alt attribute. The canvas is described by its surrounding region. */}
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              url={photo}
              scale={[13.4, 8.4]}
              position={[0, 0, 0]}
              toneMapped={false}
              transparent={false}
            />
          </Suspense>
          <mesh ref={veilRef} position={[0, 0, 0.04]}>
            <planeGeometry args={[13.4, 8.4]} />
            <meshBasicMaterial color={theme === "night" ? "#050a0e" : "#111513"} transparent opacity={theme === "night" ? 0.28 : 0.42} depthWrite={false} />
          </mesh>
        </group>

        <group ref={shadeRef} position={[0, 0.48, -0.08]} {...pointerHandlers}>
          <RoundedBox args={[SHADE.width, SHADE.height, 0.18]} radius={0.24} smoothness={5} castShadow receiveShadow>
            <meshStandardMaterial color={shadeColor} roughness={0.82} metalness={0} />
          </RoundedBox>
          <RoundedBox args={[1.1, 0.22, 0.19]} radius={0.1} smoothness={4} position={[0, -2.53, 0.15]} castShadow>
            <meshStandardMaterial color={trimColor} roughness={0.7} metalness={theme === "night" ? 0.18 : 0} />
          </RoundedBox>
          <mesh position={[0, -2.68, 0.02]} castShadow>
            <boxGeometry args={[SHADE.lowerRailWidth, 0.12, 0.24]} />
            <meshStandardMaterial color={trimColor} roughness={0.68} metalness={theme === "night" ? 0.22 : 0} />
          </mesh>
        </group>

        <mesh position={[0, 0, -0.01]} receiveShadow>
          <extrudeGeometry args={[wall, { depth: 0.28, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.07, bevelSegments: 3, curveSegments: 16 }]} />
          <meshStandardMaterial color={wallColor} roughness={0.82} metalness={theme === "night" ? 0.06 : 0} />
        </mesh>

        <mesh position={[0, 0, 0.16]} castShadow receiveShadow>
          <extrudeGeometry args={[outerFrame, { depth: 0.42, bevelEnabled: true, bevelSize: 0.12, bevelThickness: 0.12, bevelSegments: 6, curveSegments: 20 }]} />
          <meshStandardMaterial color={frameColor} roughness={0.66} metalness={theme === "night" ? 0.12 : 0} />
        </mesh>

        <mesh position={[0, 0, 0.58]} castShadow receiveShadow>
          <extrudeGeometry args={[innerFrame, { depth: 0.2, bevelEnabled: true, bevelSize: 0.08, bevelThickness: 0.08, bevelSegments: 5, curveSegments: 20 }]} />
          <meshStandardMaterial color={trimColor} roughness={0.7} metalness={theme === "night" ? 0.18 : 0} />
        </mesh>

        <mesh position={[0, 0, 0.86]} {...pointerHandlers}>
          <planeGeometry args={[WINDOW_APERTURE.width - 0.04, WINDOW_APERTURE.height - 0.06]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>
      </group>
    </>
  );
}

export default function AirplaneWindowCanvas(props: AirplaneWindowCanvasProps) {
  return (
    <Canvas
      className="travel-window-canvas"
      dpr={[1, 1.5]}
      shadows
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
    >
      <WindowScene {...props} />
    </Canvas>
  );
}

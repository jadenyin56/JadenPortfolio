"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { ArchitectureNode } from "@/data/projects";

export default function ArchitectureDiagram({ nodes }: { nodes: ArchitectureNode[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  return <div className="rounded-2xl border border-white/10 bg-white/[.025] p-4 sm:p-6">
    <div className={`architecture-flow nodes-${nodes.length}`}>
      {nodes.map((node, index) => <div className="contents" key={node.label}>
        <button type="button" onClick={() => setActive(index)} className={`architecture-node ${active === index ? "active" : ""}`} aria-pressed={active === index}>
          <span className="font-mono text-[10px] text-zinc-600">0{index + 1}</span><strong>{node.label}</strong>
        </button>
        {index < nodes.length - 1 && <div className="relative mx-auto h-6 w-px overflow-hidden bg-white/10 md:h-px md:w-8"><motion.span className="absolute inset-0 bg-sky-400" initial={reduce ? false : { x: "-100%" }} whileInView={{ x: "100%" }} viewport={{ once: true }} transition={{ duration: 1.2, delay: index * .15, repeat: reduce ? 0 : 1 }} /></div>}
      </div>)}
    </div>
    <motion.p key={active} initial={reduce ? false : { opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-5 border-t border-white/8 pt-5 text-sm text-zinc-400"><span className="mr-2 text-zinc-200">{nodes[active].label}:</span>{nodes[active].detail}</motion.p>
  </div>;
}

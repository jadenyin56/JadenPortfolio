"use client";
import { useState } from "react";
import type { ArchitectureNode } from "@/data/projects";
export default function ArchitectureDiagram({ nodes }: { nodes: ArchitectureNode[] }) { const [active, setActive] = useState(0); return <div className="architecture"><div className="architecture-flow">{nodes.map((node, index) => <button className={active === index ? "active" : ""} type="button" onClick={() => setActive(index)} key={node.label}><span>0{index + 1}</span>{node.label}</button>)}</div><p><strong>{nodes[active].label}</strong>{nodes[active].detail}</p></div>; }

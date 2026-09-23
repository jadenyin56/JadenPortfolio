"use client";

import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { useWorkDoorTransition } from "./PageTransition";

export function WorkDoorLink() {
  const startDoor = useWorkDoorTransition();

  return (
    <Link
      className="button button-primary"
      href="/projects"
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (startDoor("/projects")) event.preventDefault();
      }}
    >
      View work <ArrowDownRight size={16} />
    </Link>
  );
}

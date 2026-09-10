import { cn } from "@/lib/utils";

export function Tag({ children, inverted = false }: { children: React.ReactNode; inverted?: boolean }) {
  return <span className={cn("tag", inverted && "tag-inverted")}>{children}</span>;
}

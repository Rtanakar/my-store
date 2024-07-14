"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function BackButton({ href, label }: { href: string; label: string }) {
  return (
    <Button asChild variant={"link"} className="font-medium w-full">
      <Link href={href} aria-label={label}>
        {label}
      </Link>
    </Button>
  );
}

export default BackButton;

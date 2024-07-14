"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export default function ProductTag() {
  const router = useRouter();
  const params = useSearchParams();
  const tag = params.get("tag");

  const setFilter = (tag: string) => {
    if (tag) {
      router.push(`?tag=${tag}`);
    }
    if (!tag) {
      router.push("/");
    }
  };

  return (
    <div className="my-4 flex gap-4 items-center justify-center">
      <Badge
        onClick={() => setFilter("")}
        className={cn(
          "cursor-pointer bg-black hover:bg-black/75 hover:opacity-100",
          !tag ? "opacity-100" : "opacity-50"
        )}
      >
        All
      </Badge>

      <Badge
        onClick={() => setFilter("blue")}
        className={cn(
          "cursor-pointer bg-blue-400 hover:bg-blue-400 hover:opacity-100",
          tag === "blue" && tag ? "opacity-100" : "opacity-50"
        )}
      >
        Blue
      </Badge>

      <Badge
        onClick={() => setFilter("pink")}
        className={cn(
          "cursor-pointer bg-pink-400 hover:bg-pink-500 hover:opacity-100",
          tag === "pink" && tag ? "opacity-100" : "opacity-50"
        )}
      >
        Pink
      </Badge>
    </div>
  );
}

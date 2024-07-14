"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export default function Stars({
  rating,
  totalReviews,
  size = 14,
}: {
  rating: number;
  totalReviews?: number;
  size?: number;
}) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          size={size}
          key={star}
          className={cn(
            "text-primary bg-transparent transition-all duration-300 ease-in-out",
            rating >= star ? "fill-primary" : "fill-transparent"
          )}
        ></Star>
      ))}

      {/* Agar total reviews barabar 0 ho to ye chalega */}
      {totalReviews === 0 && (
        <p className="text-muted-foreground font-bold text-sm ml-2">
          no reviews
        </p>
      )}

      {/* Agar total reviews hai to ye chalega nahi to kush nahi dega khali rahega*/}
      {totalReviews ? (
        <span className="text-secondary-foreground font-bold text-sm ml-2">
          {totalReviews} reviews
        </span>
      ) : null}
    </div>
  );
}

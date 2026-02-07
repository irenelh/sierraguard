import { Star } from "lucide-react";

export default function RatingBadge() {
  return (
    <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <span className="text-sm font-semibold text-foreground">5.0</span>
      <span className="text-xs text-muted-foreground">(47 reseñas)</span>
    </div>
  );
}

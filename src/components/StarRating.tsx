import { Star } from 'lucide-react';

export default function StarRating({
  rating = 5,
  max = 5,
  size = 16,
  className = '',
}: {
  rating?: number;
  max?: number;
  size?: number;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'fill-current' : 'fill-none'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

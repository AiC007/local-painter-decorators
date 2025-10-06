import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  area: string;
  jobType: string;
  rating: number;
  quote: string;
}

export default function TestimonialCard({
  name,
  area,
  jobType,
  rating,
  quote
}: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Star rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 mb-4 leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Attribution */}
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{area}</p>
        <p className="text-sm text-gray-500 mt-1">{jobType}</p>
      </div>
    </div>
  );
}

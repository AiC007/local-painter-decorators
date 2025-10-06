import { Star, Quote } from 'lucide-react';

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
    <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group">
      {/* Decorative gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Quote icon decoration */}
      <div className="absolute -top-2 -right-2 opacity-10">
        <Quote className="w-24 h-24 text-blue-600" />
      </div>

      <div className="relative z-10">
        {/* Star rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 transition-all ${
                i < rating ? 'fill-yellow-400 text-yellow-400 drop-shadow-sm' : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-gray-700 mb-6 leading-relaxed text-base">
          <span className="text-blue-600 font-bold text-2xl">"</span>
          {quote}
          <span className="text-blue-600 font-bold text-2xl">"</span>
        </blockquote>

        {/* Attribution */}
        <div className="border-t border-gray-200 pt-4">
          <p className="font-bold text-gray-900 text-lg">{name}</p>
          <p className="text-sm text-gray-600 font-medium mt-1">{area}</p>
          <p className="text-sm text-gray-500 mt-1 italic">{jobType}</p>
        </div>
      </div>
    </div>
  );
}

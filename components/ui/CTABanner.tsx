import CTAButton from './CTAButton';
import { siteConfig } from '@/lib/config';
import { Sparkles } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
}

export default function CTABanner({
  title = "Ready to Transform Your Space?",
  subtitle = "Get a free, no-obligation quote today",
  showPhone = true
}: CTABannerProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-16 rounded-2xl shadow-2xl overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Decorative blobs */}
      <div className="shape-blob absolute -top-10 -left-10 w-40 h-40 bg-purple-400"></div>
      <div className="shape-blob absolute -bottom-10 -right-10 w-48 h-48 bg-blue-400" style={{ animationDelay: '5s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-semibold">Free Quote Available</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">{title}</h2>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 drop-shadow-md max-w-2xl mx-auto">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <CTAButton variant="call" size="lg" className="btn-glow !bg-white !text-blue-600 hover:!bg-gray-100 shadow-xl" />
          <CTAButton variant="quote" size="lg" className="btn-glow shadow-xl" />
          {siteConfig.whatsapp.enabled && <CTAButton variant="whatsapp" size="lg" className="btn-glow shadow-xl" />}
        </div>

        {showPhone && (
          <p className="mt-6 text-blue-100 text-lg">
            Or call us directly:{' '}
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="font-bold text-white hover:underline text-xl"
            >
              {siteConfig.business.phoneFormatted}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

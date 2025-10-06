import CTAButton from './CTAButton';
import { siteConfig } from '@/lib/config';

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
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 rounded-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        <p className="text-lg md:text-xl mb-6 text-blue-100">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton variant="call" size="lg" className="!bg-white !text-blue-600 hover:!bg-gray-100" />
          <CTAButton variant="quote" size="lg" />
          {siteConfig.whatsapp.enabled && <CTAButton variant="whatsapp" size="lg" />}
        </div>

        {showPhone && (
          <p className="mt-6 text-blue-100">
            Or call us directly:{' '}
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="font-bold text-white hover:underline"
            >
              {siteConfig.business.phoneFormatted}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

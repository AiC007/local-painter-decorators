import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Local Painter & Decorators',
  description: 'Privacy policy for Local Painter & Decorators. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: 6 October 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Local Painter & Decorators (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <p className="text-gray-700 mb-4">
                Our registered office is located at [Company Address]. We are registered in England and Wales under company number [Company Number]. For data protection queries, please contact us at [Privacy Email].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Contact Information:</strong> Name, email address, phone number, postal address</li>
                <li><strong>Project Details:</strong> Information about your painting and decorating requirements, property location, preferred timescales</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system</li>
                <li><strong>Usage Data:</strong> How you navigate and interact with our website</li>
                <li><strong>Marketing Preferences:</strong> Your choices regarding marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Collect Your Information</h2>
              <p className="text-gray-700 mb-4">We collect information through:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Contact Forms:</strong> When you request a quote or contact us through our website</li>
                <li><strong>Email Communications:</strong> When you correspond with us directly</li>
                <li><strong>Phone Calls:</strong> When you call our business number</li>
                <li><strong>Cookies:</strong> Automated technologies that collect technical data (see our Cookie Policy)</li>
                <li><strong>Social Media:</strong> When you interact with our social media profiles</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Service Delivery:</strong> To provide quotes, schedule appointments, and deliver painting and decorating services</li>
                <li><strong>Communication:</strong> To respond to your inquiries and keep you updated about your projects</li>
                <li><strong>Business Operations:</strong> To maintain records, process payments, and manage customer relationships</li>
                <li><strong>Website Improvement:</strong> To analyze website usage and enhance user experience</li>
                <li><strong>Marketing:</strong> To send promotional materials about our services (with your consent)</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our business interests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Legal Basis for Processing</h2>
              <p className="text-gray-700 mb-4">We process your personal data under the following lawful bases:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Consent:</strong> You have given clear consent for us to process your data for specific purposes</li>
                <li><strong>Contract:</strong> Processing is necessary to fulfill a contract with you</li>
                <li><strong>Legal Obligation:</strong> Processing is necessary to comply with the law</li>
                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests, provided this does not override your rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Sharing and Third Parties</h2>
              <p className="text-gray-700 mb-4">
                We do not sell your personal data. We may share your information with trusted third parties who assist us in operating our website and conducting our business, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Website Hosting Providers:</strong> To host our website and store data</li>
                <li><strong>Email Service Providers:</strong> To send communications and marketing emails</li>
                <li><strong>Analytics Providers:</strong> To understand website usage (e.g., Google Analytics)</li>
                <li><strong>Payment Processors:</strong> To process payments securely</li>
                <li><strong>Professional Advisors:</strong> Including lawyers and accountants</li>
              </ul>
              <p className="text-gray-700 mb-4">
                All third-party providers are required to maintain appropriate security measures and process your data only as instructed by us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security and Retention</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
              </p>
              <p className="text-gray-700 mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, typically for the duration of our business relationship and for up to 7 years afterward to comply with legal and accounting requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights Under UK GDPR</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data in certain circumstances</li>
                <li><strong>Right to Restriction:</strong> Request restriction of processing in certain situations</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise any of these rights, please contact us at [Privacy Email]. We will respond to your request within one month.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Our website uses cookies to enhance your browsing experience and analyze website traffic. For detailed information about the cookies we use and how to manage them, please see our <a href="/legal/cookies" className="text-blue-600 hover:text-blue-800 underline">Cookie Policy</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on this page with an updated &quot;Last Updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:
              </p>
              <ul className="list-none mb-4 text-gray-700">
                <li><strong>Email:</strong> [Privacy Email]</li>
                <li><strong>Phone:</strong> [Phone Number]</li>
                <li><strong>Address:</strong> [Company Address]</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO), the UK supervisory authority for data protection issues, at <a href="https://ico.org.uk" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">www.ico.org.uk</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

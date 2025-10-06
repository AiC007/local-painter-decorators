import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Local Painter & Decorators',
  description: 'Cookie policy for Local Painter & Decorators. Learn about the cookies we use, why we use them, and how to manage your preferences.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: 6 October 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                This Cookie Policy explains how Local Painter & Decorators uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies in accordance with this policy.
              </p>
              <p className="text-gray-700 mb-4">
                This policy should be read in conjunction with our <a href="/legal/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>, which provides information about how we collect and use your personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-gray-700 mb-4">
                Cookies can be &quot;persistent&quot; (remaining on your device until deleted or expired) or &quot;session&quot; (deleted when you close your browser). They can also be &quot;first-party&quot; (set by the website you&apos;re visiting) or &quot;third-party&quot; (set by other websites).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies We Use</h2>
              <p className="text-gray-700 mb-4">
                We use the following types of cookies on our website:
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Strictly Necessary Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Session Cookies:</strong> Maintain your session as you navigate through the website</li>
                  <li><strong>Security Cookies:</strong> Authenticate users and prevent fraudulent use</li>
                  <li><strong>Cookie Consent:</strong> Remember your cookie preferences</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Performance and Analytics Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies collect information about how visitors use our website, such as which pages are visited most often and whether users receive error messages. This helps us improve how our website works.
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Google Analytics:</strong> Tracks visitor behavior, page views, session duration, and traffic sources</li>
                  <li><strong>Performance Monitoring:</strong> Identifies technical issues and improves website speed</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  The information collected is aggregated and anonymized. We do not use these cookies to identify individual users.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Functionality Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced, personalized features.
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Location Cookies:</strong> Store your location to show relevant content</li>
                  <li><strong>Form Data:</strong> Remember information you&apos;ve entered in forms</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Targeting and Advertising Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are used to deliver advertisements that are relevant to you and your interests. They may also limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Social Media Cookies:</strong> Enable sharing of content on social media platforms</li>
                  <li><strong>Advertising Cookies:</strong> Track effectiveness of online advertising campaigns</li>
                  <li><strong>Remarketing Cookies:</strong> Show relevant ads based on your previous visits</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                Some cookies on our website are set by third-party services. We have no control over these cookies, and you should review the privacy policies of these third parties for more information.
              </p>
              <p className="text-gray-700 mb-4">Third-party services we use include:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                <li><strong>Google Maps:</strong> Interactive maps and location services</li>
                <li><strong>Social Media Platforms:</strong> Embedded content from Facebook, Instagram, Twitter, etc.</li>
                <li><strong>Advertising Networks:</strong> Google Ads, Facebook Ads, and other advertising platforms</li>
                <li><strong>Content Delivery Networks:</strong> Services that help deliver website content efficiently</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Why We Use Cookies</h2>
              <p className="text-gray-700 mb-4">We use cookies for several important reasons:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Essential Functionality:</strong> To enable core website features and ensure security</li>
                <li><strong>User Experience:</strong> To remember your preferences and provide personalized content</li>
                <li><strong>Performance Improvement:</strong> To understand how visitors use our site and identify areas for improvement</li>
                <li><strong>Analytics:</strong> To measure website traffic and understand user behavior patterns</li>
                <li><strong>Marketing Effectiveness:</strong> To measure the success of our marketing campaigns and show relevant advertisements</li>
                <li><strong>Business Operations:</strong> To track quote requests and customer interactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. How to Control and Delete Cookies</h2>
              <p className="text-gray-700 mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in the following ways:
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Browser Settings</h3>
                <p className="text-gray-700 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can set your browser to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Block all cookies</li>
                  <li>Allow only first-party cookies</li>
                  <li>Delete cookies when you close the browser</li>
                  <li>Ask for your permission before accepting each cookie</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  For instructions on managing cookies in specific browsers, please visit:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Opt-Out Tools</h3>
                <p className="text-gray-700 mb-4">
                  You can opt out of specific types of cookies using these tools:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><a href="https://www.youronlinechoices.com/uk/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a> - Opt out of behavioral advertising</li>
                  <li><a href="https://optout.networkadvertising.org/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a> - Opt out of targeted advertising</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Impact of Disabling Cookies</h3>
                <p className="text-gray-700 mb-4">
                  Please note that blocking or deleting cookies may impact your experience on our website. Some features may not function properly, and you may need to re-enter information or preferences.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will notify you of any significant changes by posting the updated policy on this page with a new &quot;Last Updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <ul className="list-none mb-4 text-gray-700">
                <li><strong>Email:</strong> [Contact Email]</li>
                <li><strong>Phone:</strong> [Phone Number]</li>
                <li><strong>Address:</strong> [Company Address]</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

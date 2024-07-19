
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Head from 'next/head';

export default function PrivacyPolicy() {
    const currentDate = new Date();

    // Get the current date and time with specified options
    const formattedDate = currentDate.toDateString();
    const formattedTime = currentDate.toLocaleTimeString("en-US");
  return (
    <main className="container w-full max-w-max  p-8">
      <div className="">
        <Card className="w-full mb-6">
          <CardHeader className="text-center">
            <CardTitle>Privacy Policy - Godavi LLC</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 p-8">
            <p>Last Updated:  {formattedDate} - {formattedTime}</p>

            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p>
              Godavi LLC (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [website URL], use our services, or interact with us. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
            </p>
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <p>
              We may collect and process the following data about you:
              <ul className="list-disc ml-6 space-y-2">
                <li>Personal Identification Information: Name, email address, phone number, etc.</li>
                <li>Order Information: Details about the products you purchase, shipping address, payment details, etc.</li>
                <li>Technical Data: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.</li>
                <li>Usage Data: Information about how you use our website, products, and services.</li>
                <li>Marketing and Communications Data: Your preferences in receiving marketing from us and your communication preferences.</li>
              </ul>
            </p>
            <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
            <p>
              We use the information we collect in the following ways:
              <ul className="list-disc ml-6 space-y-2">
                <li>To Provide and Maintain Our Service: Including processing transactions and managing your orders.</li>
                <li>To Improve Our Website: To better understand how visitors interact with our website and to make improvements.</li>
                <li>To Communicate With You: To send you updates, marketing communications, and information about changes to our terms and policies.</li>
                <li>For Legal and Security Purposes: To protect our rights and comply with legal obligations.</li>
              </ul>
            </p>
            <h2 className="text-2xl font-semibold">Sharing Your Information</h2>
            <p>
              We may share your information with:
              <ul className="list-disc ml-6 space-y-2">
                <li>Service Providers: Third-party vendors that provide services on our behalf, such as payment processing, shipping, and marketing.</li>
                <li>Business Transfers: In connection with a merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                <li>Legal Requirements: If required by law or in response to valid requests by public authorities.</li>
              </ul>
            </p>
            <h2 className="text-2xl font-semibold">Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal information:
              <ul className="list-disc ml-6 space-y-2">
                <li>Access: The right to access your personal information.</li>
                <li>Rectification: The right to correct any inaccuracies in your personal information.</li>
                <li>Erasure: The right to request the deletion of your personal information.</li>
                <li>Restriction of Processing: The right to restrict how we use your personal information.</li>
                <li>Data Portability: The right to request the transfer of your personal information.</li>
              </ul>
            </p>
            <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
              <ul className="list-disc ml-6 space-y-2">
                <li>By email: [your email address]</li>
                <li>By visiting this page on our website: [contact page URL]</li>
              </ul>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
  const currentDate = new Date();

  // Get the current date and time with specified options
  const formattedDate = currentDate.toDateString();
  const formattedTime = currentDate.toLocaleTimeString("en-US");

  return (
    <main className="container w-full max-w-max  p-8">
      <div className="">
        <Card className="w-full mb-6">
          <CardHeader className="text-center">
            <CardTitle>Terms of Service - Godavi LLC</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 p-8">
            <p>
              <strong>
                Last Updated: {formattedDate} - {formattedTime}
              </strong>
            </p>

            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p>
              Welcome to Godavi LLC (&quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;). By accessing or using our website [website URL],
              you agree to comply with and be bound by the following Terms of
              Service. Please review these terms carefully. If you do not agree
              to these terms, you should not use our website.
            </p>

            <h2 className="text-2xl font-semibold">Use of Our Website</h2>
            <p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Eligibility:</strong> You must be at least 18 years
                  old to use our website. By using our website, you represent
                  and warrant that you meet this age requirement.
                </li>
                <li>
                  <strong>Account:</strong> You may need to create an account to
                  access certain features. You are responsible for maintaining
                  the confidentiality of your account information and for all
                  activities that occur under your account.
                </li>
                <li>
                  <strong>Prohibited Activities:</strong> You agree not to
                  engage in any activity that could harm us or others, interfere
                  with the proper working of the website, or violate any laws.
                </li>
              </ul>
            </p>

            <h2 className="text-2xl font-semibold">Products and Services</h2>
            <p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Orders:</strong> All orders are subject to acceptance
                  and availability. We reserve the right to refuse or cancel any
                  order at our discretion.
                </li>
                <li>
                  <strong>Pricing:</strong> Prices are subject to change without
                  notice. We are not responsible for typographical errors in
                  pricing.
                </li>
                <li>
                  <strong>Payments:</strong> All payments must be made through
                  our designated payment systems. We do not store your payment
                  information.
                </li>
              </ul>
            </p>

            <h2 className="text-2xl font-semibold">Intellectual Property</h2>
            <p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Ownership:</strong> All content on our website,
                  including text, graphics, logos, and images, is the property
                  of Godavi LLC or our licensors and is protected by copyright
                  and other intellectual property laws.
                </li>
                <li>
                  <strong>License:</strong> We grant you a limited,
                  non-exclusive, non-transferable, and revocable license to use
                  our website for personal, non-commercial use.
                </li>
              </ul>
            </p>

            <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Godavi LLC shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use,
              goodwill, or other intangible losses, resulting from (a) your use
              or inability to use our website; (b) any unauthorized access to or
              use of our servers and/or any personal information stored therein;
              (c) any interruption or cessation of transmission to or from our
              website; (d) any bugs, viruses, Trojan horses, or the like that
              may be transmitted to or through our website by any third party;
              (e) any errors or omissions in any content or for any loss or
              damage incurred as a result of the use of any content posted,
              emailed, transmitted, or otherwise made available through our
              website; and/or (f) the defamatory, offensive, or illegal conduct
              of any third party.
            </p>

            <h2 className="text-2xl font-semibold">Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Godavi LLC, its
              officers, directors, employees, agents, and affiliates, from and
              against any claims, liabilities, damages, losses, and expenses,
              including, without limitation, reasonable legal and accounting
              fees, arising out of or in any way connected with your access to
              or use of our website or your violation of these Terms of Service.
            </p>

            <h2 className="text-2xl font-semibold">Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of [Your Country/State], without regard
              to its conflict of law principles.
            </p>

            <h2 className="text-2xl font-semibold">Changes to These Terms</h2>
            <p>
              We reserve the right to make changes to these Terms of Service at
              any time. We will notify you of any changes by posting the new
              Terms of Service on this page. Your continued use of the website
              following the posting of changes constitutes your acceptance of
              such changes.
            </p>

            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us:
              <ul className="list-disc ml-6 space-y-2">
                <li>By email: [your email address]</li>
                <li>
                  By visiting this page on our website: [contact page URL]
                </li>
              </ul>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

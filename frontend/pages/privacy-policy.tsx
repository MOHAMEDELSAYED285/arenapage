// frontend/pages/privacy-policy.tsx

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black mb-4">ARENA PLATFORM LTD: Privacy Policy</h1>
          <p className="text-gray-600 mb-8">
            This privacy policy tells you what to expect us to do with your personal information.
          </p>
          
          {/* Contact Details */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact details</h2>
            <div className="space-y-2">
              <div>
                <strong className="block">Post</strong>
                <p>86-90 Paul Street, London, EC2A 4NE, GB</p>
              </div>
              <div>
                <strong className="block">Email</strong>
                <p>contact@joinarena.co.uk</p>
              </div>
            </div>
          </section>

          {/* Information Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What information we collect, use, and why</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Products and Services</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Names and contact details</li>
                  <li>Addresses</li>
                  <li>Gender</li>
                  <li>Date of birth</li>
                  <li>Payment details (including card or bank information for transfers and direct debits)</li>
                  <li>Transaction data (including details about payments to and from you and details of products and services you have purchased)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Client or Customer Accounts</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Names and contact details</li>
                  <li>Addresses</li>
                  <li>Purchase or service history</li>
                  <li>Account information, including registration details</li>
                  <li>Information used for security purposes</li>
                  <li>Marketing preferences</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legal Basis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Lawful bases and data protection rights</h2>
            <p className="mb-4">Under UK data protection law, we must have a "lawful basis" for collecting and using your personal information.</p>
            
            <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right of access</strong> - You have the right to ask us for copies of your personal information.</li>
              <li><strong>Right to rectification</strong> - You have the right to ask us to correct or delete personal information you think is inaccurate.</li>
              <li><strong>Right to erasure</strong> - You have the right to ask us to delete your personal information.</li>
              <li><strong>Right to restriction</strong> - You have the right to ask us to limit how we use your personal information.</li>
              <li><strong>Right to data portability</strong> - You have the right to ask that we transfer your information to another organisation.</li>
            </ul>
          </section>

          {/* Data Sources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Where we get personal information from</h2>
            <ul className="list-disc pl-6">
              <li>Directly from you</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How long we keep information</h2>
            <p>Your information is securely stored.</p>
            <p>We keep the information you provide indefinitely. We will dispose your information upon request.</p>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Who we share information with</h2>
            <h3 className="text-xl font-semibold mb-3">Data processors</h3>
            <p><strong>AWS</strong></p>
            <p>This data processor does the following activities for us: Securely store records.</p>
          </section>

          {/* Complaints */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How to complain</h2>
            <p className="mb-4">If you have any concerns about our use of your personal data, you can make a complaint to us using the contact details at the top of this privacy notice.</p>
            <p className="mb-4">If you remain unhappy with how we've used your data after raising a complaint with us, you can also complain to the ICO.</p>
            
            <div className="mt-4">
              <strong className="block">The ICO's address:</strong>
              <p>Information Commissioner's Office<br />
              Wycliffe House<br />
              Water Lane<br />
              Wilmslow<br />
              Cheshire<br />
              SK9 5AF</p>
            </div>
            
            <div className="mt-4">
              <p><strong>Helpline number:</strong> 0303 123 1113</p>
              <p><strong>Website:</strong> <a href="https://www.ico.org.uk/make-a-complaint" className="text-[#F5A524] hover:underline" target="_blank" rel="noopener noreferrer">https://www.ico.org.uk/make-a-complaint</a></p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-16">
            <p className="text-sm text-gray-600">Last updated: 15 January 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
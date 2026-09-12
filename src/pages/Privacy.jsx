import LegalPage, { LegalSection } from '../components/LegalPage.jsx'

export default function Privacy() {
  return (
    <LegalPage eyebrow="PRV" title="Privacy Policy">
      <p className="max-w-2xl text-base leading-relaxed text-[#9E9E9E]">
        Anti AI ("we", "our", "us") respects your privacy and is committed to protecting the personal information
        you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your
        information when you visit our website or interact with our services.
      </p>

      <LegalSection title="Information We Collect">
        <p>
          We may collect personal information you voluntarily provide, such as your name, email address, phone
          number, and messages submitted through our contact forms. We may also collect technical information
          including IP address, browser type, device information, operating system, and usage data.
        </p>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <p>
          Information collected is used to respond to inquiries, provide services, improve our website, enhance
          user experience, maintain security, and comply with legal obligations.
        </p>
      </LegalSection>

      <LegalSection title="Data Protection & Security">
        <p>
          We implement reasonable technical and organizational safeguards to protect your personal data. However,
          no method of transmission over the internet is completely secure.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Links">
        <p>
          Our website may contain links to third-party services. We are not responsible for their privacy
          practices and encourage you to review their policies.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights">
        <p>
          Depending on your jurisdiction, you may have rights to access, correct, or request deletion of your
          personal data. Please contact us through the website to exercise these rights.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          We reserve the right to update this Privacy Policy at any time. Continued use of the website indicates
          acceptance of the updated policy.
        </p>
      </LegalSection>
    </LegalPage>
  )
}

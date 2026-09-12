import LegalPage, { LegalSection } from '../components/LegalPage.jsx'

export default function Terms() {
  return (
    <LegalPage eyebrow="TRM" title="Terms & Conditions">
      <p className="max-w-2xl text-base leading-relaxed text-[#9E9E9E]">
        These Terms & Conditions govern your access to and use of the Anti AI website, products, services, and
        related communications. By using this website, you agree to comply with these terms.
      </p>

      <LegalSection title="Purpose of the Website">
        <p>
          The Anti AI website provides information about our services, research, and initiatives related to
          artificial intelligence and ethical technology. Content is for informational purposes only.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable Use">
        <p>
          You agree to use this website only for lawful purposes and not to misuse the platform, attempt
          unauthorized access, disrupt services, or submit false information.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          All content on this website, including text, graphics, branding, layouts, and code, is the property of
          Anti AI unless stated otherwise. Unauthorized use is prohibited.
        </p>
      </LegalSection>

      <LegalSection title="User Submissions">
        <p>
          Any information submitted through contact forms must be accurate and lawful. Submission does not create
          any contractual or employment relationship unless formally agreed in writing.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          Anti AI shall not be liable for any direct, indirect, incidental, or consequential damages arising from
          your use of this website.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.</p>
      </LegalSection>
    </LegalPage>
  )
}

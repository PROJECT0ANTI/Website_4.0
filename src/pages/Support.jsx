import { Link } from 'react-router-dom'
import LegalPage, { LegalSection } from '../components/LegalPage.jsx'

export default function Support() {
  return (
    <LegalPage
      eyebrow="SUP"
      title="App Support"
      intro="If you need help with the ANTI AI mobile application, we're here to support you."
    >
      <ul className="max-w-2xl space-y-2.5">
        {[
          'Account or login issues',
          'App functionality questions',
          'Bug reports or unexpected behavior',
          'Data, privacy, or security-related concerns',
        ].map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-[#EDEDED]/80 sm:text-base">
            <span className="h-1 w-1 rotate-45 bg-[#D62828]" />
            {item}
          </li>
        ))}
      </ul>

      <LegalSection title="How to Contact Us">
        <p>
          Email:{' '}
          <a href="mailto:support@antiai.ltd" className="link-sweep text-[#D62828]">
            support@antiai.ltd
          </a>
        </p>
        <p>We usually respond within 24–48 business hours.</p>
        <p>
          For details on how we handle user data, please review our{' '}
          <Link to="/privacy" className="link-sweep text-[#D62828]">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}

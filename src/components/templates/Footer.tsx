import Link from 'next/link';

import { Background } from '@/components/background/Background';
import { CenteredFooter } from '@/components/footer/CenteredFooter';
import { Logo } from '@/components/templates/Logo';
import { Section } from '@/layout/Section';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter logo={<Logo />}>
        <li>
          <Link href="https://github.com/unit-mesh">GitHub</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };

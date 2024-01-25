import Link from 'next/link';

import { Background } from '@/components/background/Background';
import { CenteredFooter } from '@/components/footer/CenteredFooter';
import { GitHubIcon } from '@/components/icon/GitHubIcon';

import { Section } from '../../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <>
            <Link href="/public">
              <GitHubIcon />
            </Link>
          </>
        }
      >
        <li>
          <Link href="https://github.com/unit-mesh">GitHub</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'AI 赋能软件研发全流程\n'}
            <span className="text-primary-500">开源方案</span>
          </>
        }
        description="Exploring NextGen Software Generative Architectural Paradigms with GenAI"
        button={
          <Link href="https://github.com/unit-mesh/">
            <Button xl>浏览我们的 GitHub </Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };

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
          <Link href="https://github.com/unit-mesh">GitHub</Link>
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
        description="Unveiling Next-Gen Software: Pioneering Architectural Paradigms with GenAI"
        button={
          <Link href="https://raw.githubusercontent.com/unit-mesh/whitebook/master/2023-whitebook.pdf">
            <Button xl>下载《UnitMesh 白皮书》</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };

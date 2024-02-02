import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Background } from '@/components/background/Background';
import { Button } from '@/components/button/Button';
import { HeroOneButton } from '@/components/hero/HeroOneButton';
import { NavbarTwoColumns } from '@/components/navigation/NavbarTwoColumns';
import { Section } from '@/layout/Section';

import { Logo } from './Logo';

const Hero = function () {
  const { t } = useTranslation();

  return (
    <Background color="">
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
              <>{`${t('AI4SDLC')}\n`}</>
              <span className="text-primary-500">{t('OS Solution')}</span>
            </>
          }
          description="Unveiling Next-Gen Software Enginneering: Pioneering Architectural Paradigms with GenAI"
          button={
            <>
              <Link
                target="_blank"
                href="https://raw.githubusercontent.com/unit-mesh/whitebook/master/2023-whitebook.pdf"
              >
                <Button xl>{t('Download White Paper')}</Button>
              </Link>
            </>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };

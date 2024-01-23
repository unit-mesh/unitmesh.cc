import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="探索新架构开发范式，构建下一代研发组织"
      subtitle="立即使用 UnitMesh"
      button={
        <Link href="https://github.com/unit-mesh">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };

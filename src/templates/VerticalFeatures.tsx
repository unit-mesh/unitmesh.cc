import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="端到端的 AI 赋能软件研发全流程"
    description="构建下一代软件生成式架构范式"
  >
    <VerticalFeatureRow
      title="AI 辅助编程"
      description="🧙‍AutoDev: The AI-powered coding wizard with multilingual support 🌐, auto code generation 🏗️, and a helpful bug-slaying assistant 🐞! Customizable prompts 🎨 and a magic Auto Testing feature 🧪 included! 🚀 "
      image="/assets/images/autodev.svg"
      imageAlt="AutoDev Architecture"
    />
    <VerticalFeatureRow
      title="AI 开发框架"
      description="Chocolate Factory 是一款开源的 LLM 应用开发框架，旨在帮助您轻松打造强大的软件开发 SDLC + LLM 生成助手。"
      image="/assets/images/chocolat-factory.svg"
      imageAlt="Chocolate Factory Architecture diagram"
      reverse
    />
    <VerticalFeatureRow
      title="研发模型微调"
      description="UnitGen 是一个用于生成微调代码的数据框架 —— 直接从你的代码库中生成微调数据：代码补全、测试生成、文档生成等。"
      image="/assets/images/unitgen.svg"
      imageAlt="UnitGen Architecture diagram"
    />
    <VerticalFeatureRow
      title="辅助需求编程器"
      description="Studio B3 是一个为内容创作设计的 AI 编辑器，适用于各种格式，如博客、文章、用户故事等。"
      image="/assets/images/studio-b3.svg"
      imageAlt="UnitGen Architecture diagram"
      reverse
    />
  </Section>
);

export { VerticalFeatures };

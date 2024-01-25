import { VerticalFeatureRow } from '@/components/feature/VerticalFeatureRow';

import { Section } from '../../layout/Section';

function Overview() {
  return <img width={'100%'} src={`/overview.svg`} alt="overview" />;
}

const VerticalFeatures = () => (
  <Section
    title="端到端的 AI 赋能软件研发全流程"
    description="构建下一代软件生成式架构范式"
  >
    <Overview />
    <VerticalFeatureRow
      title="AI 辅助编程"
      description="AutoDev 能够与您的需求管理系统直接对接，只需简单点击，就会根据您的需求自动为您生成代码。您所需做的，仅仅是对生成的代码进行质量检查。"
      image="/assets/images/autodev-overview.svg"
      imageAlt="AutoDev Architecture"
      projectLink="https://github.com/unit-mesh/auto-dev"
      demoVideo="https://www.bilibili.com/video/BV1yV4y1i74c/"
      docLink="https://ide.unitmesh.cc"
    />
    <VerticalFeatureRow
      title="智能应用开发框架"
      description="Chocolate Factory 是一款开源的 LLM 应用开发框架，旨在帮助您轻松打造强大的软件开发 SDLC + LLM 生成助手。"
      image="/assets/images/chocolate-factory.svg"
      imageAlt="Chocolate Factory Architecture diagram"
      projectLink="https://github.com/unit-mesh/chocolate-factory"
      demoVideo="https://www.bilibili.com/video/BV1T14y1C7p2/"
      docLink="https://framework.unitmesh.cc"
      reverse
    />
    <VerticalFeatureRow
      title="AI 文本编程器"
      description="Studio B3 是一个为内容创作设计的 AI 编辑器，适用于各种格式，如博客、文章、用户故事等。"
      image="/assets/images/studio-b3.svg"
      projectLink="https://github.com/unit-mesh/b3"
      demoVideo="https://www.bilibili.com/video/BV1E64y1j7hJ/"
      imageAlt="Studio B3"
    />
    <VerticalFeatureRow
      title="模型微调数据框架"
      description="UnitGen 是一个用于生成微调代码的数据框架 —— 直接从你的代码库中生成微调数据：代码补全、测试生成、文档生成等。"
      image="/assets/images/unit-gen.svg"
      imageAlt="UnitGen Architecture diagram"
      projectLink="https://github.com/unit-mesh/unit-gen"
      demoVideo="https://www.bilibili.com/video/BV1si4y1h7Vw/"
      docLink="https://gen.unitmesh.cc"
      reverse
    />
    <VerticalFeatureRow
      title="架构师 AI 助手"
      description="ArchGuard Co-mate 旨在探索架构师助手的能力，包括本地语义分析、动态上下文收集API、架构规范检查等。"
      image="/assets/images/co-mate.svg"
      imageAlt="UnitGen Architecture diagram"
      projectLink="https://github.com/unit-mesh/co-mate"
      demoVideo="https://www.bilibili.com/video/BV1aT4y1b7mq/"
    />
    <VerticalFeatureRow
      title="虚拟团队接口人"
      description="CoUnit 是一个基于 LLM 的虚拟团队接口人（API），通过向量化文档、知识库、SDK和 API 等，结合 LLM 智能化团队间对接与协作。"
      image="/assets/images/co-unit.svg"
      imageAlt="CoUnit Architecture diagram"
      projectLink="https://github.com/unit-mesh/co-unit"
      reverse
    />
    <VerticalFeatureRow
      title="移动设备智能"
      description="EdgeInfer 旨在资源受限的设备上运行小型 AI 模型（包括向量化和 Onnx 模型），如 Android、iOS 或 MCUs，实现高效的边缘智能，用于实时决策。"
      image="/assets/images/edge-infer.svg"
      imageAlt="EdgeInfer Architecture diagram"
      projectLink="https://github.com/unit-mesh/edge-infer"
    />
  </Section>
);

export { VerticalFeatures };
import { VerticalFeatureRow } from '@/components/feature/VerticalFeatureRow';
import { Section } from '@/layout/Section';

function Overview() {
  return <img width={'100%'} src={`/overview.svg`} alt="overview" />;
}

const VerticalFeatures = () => (
  <Section
    title="端到端的开源 AI 赋能软件研发全流程"
    description="构建下一代软件生成式应用开发范式"
  >
    <Overview />
    <VerticalFeatureRow
      title="AI 编码助手"
      description="AutoDev 是一个高度自定义、上下文感知的 AI 编程插件。借助我们丰富的软件工程、静态代码分析经验，可以生成精准的代码、测
      试用例、文档，并实现 Unit（单元）粒度的 AutoPage、AutoSQL 精准生成。你还可以将 AutoDev 接入您的需求系统，以使用 AutoCRUD 等 AI Agent。"
      image="/assets/images/autodev-overview.svg"
      imageAlt="AutoDev Architecture"
      projectLink="https://github.com/unit-mesh/auto-dev"
      demoVideo="https://www.bilibili.com/video/BV1yV4y1i74c/"
      docLink="https://ide.unitmesh.cc"
    />
    <VerticalFeatureRow
      title="智能应用开发框架"
      description="Chocolate Factory 是一个面向软件研发场景的 LLM 应用开发框架，旨在帮助您轻松打造强大的软件开发 SDLC + LLM 生成助手。其内置
      了大量软件研发场景所需要的模块，如静态代码分析、版本管理、代码语义化切分等。"
      image="/assets/images/chocolate-factory.svg"
      imageAlt="Chocolate Factory Architecture diagram"
      projectLink="https://github.com/unit-mesh/chocolate-factory"
      demoVideo="https://www.bilibili.com/video/BV1T14y1C7p2/"
      docLink="https://framework.unitmesh.cc"
      reverse
    />
    <VerticalFeatureRow
      title="AI 文本编程器"
      description="Studio B3 是一个为内容创作设计的 AI 文本编辑器（React），适用于各种文本编程场景，如测试用例、博客、文章、用户故事等。"
      image="/assets/images/b3-architecture.svg"
      projectLink="https://github.com/unit-mesh/b3"
      demoVideo="https://www.bilibili.com/video/BV1E64y1j7hJ/"
      imageAlt="Studio B3"
    />
    <VerticalFeatureRow
      title="高质量模型微调数据框架"
      description="UnitGen 是一个用于生成微调代码指令的数据框架。结合静态代码分析与内置的质量控制流水线，可以直接从你的代码库中生成高质量微调数据：代码补全、测试生成、文档生成等。"
      image="/assets/images/unit-gen.svg"
      imageAlt="UnitGen Architecture diagram"
      projectLink="https://github.com/unit-mesh/unit-gen"
      demoVideo="https://www.bilibili.com/video/BV1si4y1h7Vw/"
      docLink="https://gen.unitmesh.cc"
      reverse
    />
    <VerticalFeatureRow
      title="架构师 AI 助手"
      description="ArchGuard Co-mate 一个 AI 辅助的架构师治理助手，结合 ArchGuard 架构治理平台扩展，支持包括本地语义分析、动态上下文收集API、架构规范检查等场景傅。"
      image="/assets/images/co-mate-overview.svg"
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
    <VerticalFeatureRow
      title="微调模型 AutoDev Coder"
      description="AutoDev Coder 是一个面向 AutoDev 插件的微調模型。通过结合 UnitGen 微调数据框架，构建适用于 AutoDev 的微调模型。"
      image="/assets/images/autodev-coder.svg"
      imageAlt="AutoDev Coder"
      projectLink="https://huggingface.co/unit-mesh"
      reverse
    />
  </Section>
);

export { VerticalFeatures };

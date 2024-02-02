import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  zh: {
    translation: {
      AI4SDLC: '生成式 AI 赋能软件研发',
      'OS Solution': '开源解决方案',
      'Download White Paper': '下载《UnitMesh 技术白皮书》',
      // 端到端的开源 AI 赋能软件研发全流程
      'E2E open source AI4SDLC': '端到端的开源 AI 赋能软件研发全流程',
      // 构建下一代软件生成式应用开发范式
      'Build NG AI4SE': '构建下一代软件生成式应用开发范式',
      // AI 编码助手
      'AI-Assistant Development': 'AI 编码助手'
    }
  },
  'en-US': {
    translation: {
      AI4SDLC: 'AI Empowered Software Development',
      'OS Solution': 'Open Source Solution',
      'Download White Paper': 'Download White Paper of UnitMesh Technology',
      'E2E open source AI4SDLC': 'End-to-end open source AI4SDLC',
      'Build NG AI4SE': 'Build next-gen AI4SDLC',
      'AI-Assistant Development': 'AI-Assistant Development'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init(
    {
      resources,
      fallbackLng: 'en-US',
      // debug: true,
      lng: 'zh', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option

      interpolation: {
        escapeValue: false // react already safes from xss
      }
    },
    (err) => {
      if (err) return console.log('something went wrong loading', err);
      console.log('i18n loaded successfully');
    }
  );

export default i18n;

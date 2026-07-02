export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  siteFooter: {
    tagline: string;
    productsHeading: string;
    keymodSeries: string;
    kvmGoSeries: string;
    miniKvm: string;
    accessories: string;
    resourcesHeading: string;
    videos: string;
    faqs: string;
    apps: string;
    support: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterSubmit: string;
    newsletterNamePlaceholder: string;
    newsletterEmailPlaceholder: string;
    newsletterFootnote: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  productLanding: {
    downloadApp: string;
    backers: string;
    theProblem: string;
    theSolution: string;
    hwSoftwareTitle: string;
    hwSoftwareSubtitle: string;
    hardware: string;
    software: string;
    swFallback: string;
    keySpecs: string;
    useCases: string;
    documentation: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "產品指南、常見問題、教程和應用下載請訪問 docs.openterface.com。",
    "homeMessage": "教程、常見問題、應用下載和產品指南請訪問 docs.openterface.com。",
    "linkLabel": "打開文檔 ↗",
    "productMessage": "詳細規格、設置指南和常見問題請訪問 docs.openterface.com。"
  },
  "homeSubscribe": {
    "kicker": "保持關注",
    "heading": "第一時間獲取 KVM-GO、KeyMod 和 Mini-KVM 更新",
    "description": "產品發佈、固件更新和實用 IT 技巧 — 每月最多一封，無垃圾郵件，只有 Openterface 團隊的有用資訊。",
    "benefitCrowdfunding": "眾籌和預購窗口的早期訪問",
    "benefitGuides": "設置指南和應用發佈說明",
    "benefitUnsubscribe": "隨時一鍵取消訂閱",
    "submitLabel": "訂閱更新",
    "namePlaceholder": "姓名（可選）",
    "emailPlaceholder": "郵箱地址 *",
    "footnote": "每月最多一封郵件。隨時可取消訂閱。諮詢：info@openterface.com"
  },
  "siteFooter": {
    "tagline": "專為 IT 專業人士打造的超緊湊 KVM-over-USB 解決方案。",
    "productsHeading": "產品",
    "keymodSeries": "KeyMod 系列",
    "kvmGoSeries": "KVM-GO 系列",
    "miniKvm": "Mini-KVM",
    "accessories": "配件",
    "resourcesHeading": "資源",
    "videos": "視頻",
    "faqs": "常見問題",
    "apps": "應用",
    "support": "支持",
    "newsletterTitle": "郵件訂閲",
    "newsletterDescription": "每月獲取產品、固件與 KVM 技巧更新。",
    "newsletterSubmit": "訂閲",
    "newsletterNamePlaceholder": "姓名",
    "newsletterEmailPlaceholder": "郵箱 *",
    "newsletterFootnote": "隨時可取消訂閲。",
    "copyright": "Openterface. 開源 KVM-over-USB。",
    "privacy": "隱私政策",
    "terms": "服務條款",
    "newsletterLink": "Newsletter"
  },
  "productLanding": {
    "downloadApp": "下載應用",
    "backers": "支持者",
    "theProblem": "痛點",
    "theSolution": "解決方案",
    "hwSoftwareTitle": "硬件 + 軟件",
    "hwSoftwareSubtitle": "Openterface 產品與我們的開源主機應用配合使用效果最佳。",
    "hardware": "硬件",
    "software": "軟件",
    "swFallback": "配件兼容性詳情請查看 TxA Shop。",
    "keySpecs": "核心規格",
    "useCases": "使用場景",
    "documentation": "文檔",
    "ctaTitle": "準備好開始了嗎？",
    "ctaSubtitle": "訂購硬件並下載適用於您平台的 Openterface 應用。"
  },
  "productSubscribe": {
    "kicker": "Stay in the loop",
    "heading": "Get {product} launch & firmware updates",
    "description": "Be first to know about pre-orders, firmware releases, and setup tips for this product — at most one email per month.",
    "benefitCrowdfunding": "Early access to crowdfunding and pre-order windows",
    "benefitGuides": "Setup guides and app release notes",
    "benefitUnsubscribe": "Unsubscribe anytime with one click",
    "submitLabel": "Subscribe for updates",
    "namePlaceholder": "Name (optional)",
    "emailPlaceholder": "Email address *",
    "footnote": "At most one email per month. Unsubscribe anytime."
  }
};

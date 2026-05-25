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
  }
};

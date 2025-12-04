export type LanguageCode = "en" | "my";

type LanguageCopy = {
  shortLabel: string;
  greeting: string;
  content1: string;
  content2: string;
  contactLabel: string;
  anonymousLabel: string;
  platforms: string[];
};




export const languageContent: Record<LanguageCode, LanguageCopy> = {
  en: {
    shortLabel: "EN",
    greeting: "Hi! 👋",
    content1:
      'I\'m Lin Phay Oo, a software engineer originally from Myanmar, currently based in Singapore. I specialize in crafting solid, scalable backend systems, and I do this day to day at <a href="https://www.sph.com.sg/" target="_blank" rel="noopener noreferrer" class="text-accent-light dark:text-accent-dark hover:opacity-80 transition-colors">SPH</a>. Before landing here, I spent time shaping things up at <a href="https://www.zig.live/" target="_blank" rel="noopener noreferrer" class="text-accent-light dark:text-accent-dark hover:opacity-80 transition-colors">Zig</a> (a ComfortDelGro company) and leveled up my skills significantly at <a href="https://expa.ai/" target="_blank" rel="noopener noreferrer" class="text-accent-light dark:text-accent-dark hover:opacity-80 transition-colors">Expa.ai</a>.',
    content2:
      "I live to build cool stuff, often fueled by the holy trinity of code, coffee, and music, maybe a cold beer when the work is done. Beyond the screen, I love exploring tech, gaming, and anything else that grabs my curiosity.",
    contactLabel: "Hit me up on :",
    anonymousLabel: "Or anonymously message me :",
    platforms: ["Mail", "WhatsApp", "Facebook", "GitHub"],
  },
  my: {
    shortLabel: "MM",
    greeting: "ဟိုင်း 👋",
    content1:
      'ကျနော်နာမည် လင်းဖေဦးပါ စလုံးမှာ ကုဒ်ရေးနေတာ ၂ နှစ် ၃ နှစ် လောက်ရှိပါပီ။ တစ်ခုခု မေးစရာရှိတာဘဲ ဖြစ်ဖြစ် beer သောက်ဖို့ အဖော်မရှိတာ ဖြစ်ဖြစ် ဆက်သွယ်လို့ရပါတယ် 😂',
    content2:
      "",
    contactLabel: "",
    anonymousLabel: "",
    platforms: ["Mail", "WhatsApp", "Facebook"],
  },
};

export const languageOrder = Object.keys(languageContent) as LanguageCode[];
export const defaultLanguage = languageOrder[0];


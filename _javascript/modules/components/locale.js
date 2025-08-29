/**
 * For user select locale
 */

class LocaleManager {
  static get currentLang() {
    return localStorage.getItem('selectedLang') || document.documentElement.lang || 'en';
  }

  static applyLang() {
    const lang = this.currentLang;
    document.documentElement.setAttribute('lang', lang);
  }
}

// 페이지 로딩 시 바로 적용
export function initLocale() {
    LocaleManager.applyLang();
}
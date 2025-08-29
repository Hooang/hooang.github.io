const ATTR_DISPLAY = 'sidebar-display';
const $sidebar = document.getElementById('sidebar');
const $trigger = document.getElementById('sidebar-trigger');
const $mask = document.getElementById('mask');

class SidebarUtil {
  static #isExpanded = false;

  static toggle() {
    this.#isExpanded = !this.#isExpanded;
    document.body.toggleAttribute(ATTR_DISPLAY, this.#isExpanded);
    $sidebar.classList.toggle('z-2', this.#isExpanded);
    $mask.classList.toggle('d-none', !this.#isExpanded);
  }

  // === 언어 선택 기능 ===
  static initLangSelector() {
    const $langBtn = document.getElementById('lang-btn');
    const $langBubble = document.getElementById('lang-bubble');

    if (!$langBtn || !$langBubble) return;

    $langBtn.addEventListener('click', () => {
      $langBubble.classList.toggle('d-none');
    });

    const langs = $langBubble.querySelectorAll('.lang-emoji');
    langs.forEach(el => {
      el.addEventListener('click', () => {
        const lang = el.dataset.lang;
        localStorage.setItem('site-lang', lang);
        $langBubble.classList.add('d-none');
      });
    });
  }
}

export function initSidebar() {
  $trigger.onclick = $mask.onclick = () => SidebarUtil.toggle();

  SidebarUtil.initLangSelector();
}

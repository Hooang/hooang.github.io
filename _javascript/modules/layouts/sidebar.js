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
}

export function initSidebar() {
  $trigger.onclick = $mask.onclick = () => SidebarUtil.toggle();

console.log("Test");

  // === 언어 버튼 ===
  const $langBtn = document.getElementById('lang-btn');
  const $langBubble = document.getElementById('lang-bubble');

  if ($langBtn && $langBubble) {
    console.log("Test");
    $langBtn.addEventListener('click', () => {
      $langBubble.classList.toggle('d-none');
    });

    // 언어 선택 이벤트 (옵션)
    const langs = $langBubble.querySelectorAll('.lang-emoji');
    langs.forEach(el => {
      el.addEventListener('click', () => {
        const lang = el.dataset.lang;
        console.log("선택된 언어:", lang);
        // TODO: 언어 변경 로직 추가 (쿠키 저장, 페이지 리로드 등)
      });
    });
  }
}

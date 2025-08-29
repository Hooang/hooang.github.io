import { back2top, loadTooptip, modeWatcher, initLocale } from '../components';

export function basic() {
  modeWatcher();
  back2top();
  loadTooptip();
  initLocale();
}

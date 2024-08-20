import { getElement } from './helpers/queryDOM.js';
import { ToastType } from './types/types.js';
const main = getElement('#toast');

const toast = (message: string, type: ToastType) => {
  if (main) {
    const toast = document.createElement('div');
    toast.classList.add('toast', `toast-${type}`);
    toast.innerHTML = `
							<p class="toast-msg">${message}</p>
						`;
    main.appendChild(toast);
    setTimeout(() => {
      main.removeChild(toast);
    }, 4000);
  }
};

export { toast };

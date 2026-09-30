(() => {
  const storageKey = 'restaurantSelectedFood';
  const getLanguage = () => document.documentElement.lang === 'ar' ? 'ar' : 'en';
  const text = (el) => {
    if (!el) return '';
    const lang = getLanguage();
    return el.getAttribute(`data-${lang}`) || el.textContent.trim();
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.body_menu article').forEach((article) => {
      const button = article.querySelector('#order_now');
      if (!button || button.dataset.bound === '1') return;
      button.dataset.bound = '1';
      button.addEventListener('click', () => {
        const nameEl = article.querySelector('#name');
        const priceEl = article.querySelector('#price');
        const imageEl = article.querySelector('img');
        const food = {
          name: text(nameEl),
          price: Number(String(priceEl?.textContent || '').replace(/[^0-9.]/g, '')) || 0,
          image: imageEl?.getAttribute('src') || '',
          language: getLanguage()
        };
        sessionStorage.setItem(storageKey, JSON.stringify(food));
      });
    });
  });
})();

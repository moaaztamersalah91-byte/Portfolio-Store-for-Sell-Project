(() => {
  const storageKey = 'restaurantSelectedFood';
  const getLang = () => document.documentElement.lang === 'ar' ? 'ar' : 'en';
  const copy = {
    en: {
      selected: 'Selected item',
      none: 'No item selected yet. Choose an item from the menu first.',
      required: 'Please complete your name, phone number and delivery address.',
      success: 'Your order details were saved successfully.',
      item: 'Item',
      price: 'Price'
    },
    ar: {
      selected: 'الطلب المختار',
      none: 'مفيش صنف متحدد. اختار صنف من القائمة الأول.',
      required: 'من فضلك اكتب الاسم ورقم الهاتف وعنوان التوصيل.',
      success: 'تم حفظ بيانات طلبك بنجاح.',
      item: 'الصنف',
      price: 'السعر'
    }
  };

  function loadFood() {
    try { return JSON.parse(sessionStorage.getItem(storageKey) || 'null'); } catch (_) { return null; }
  }

  function renderFood(food) {
    const lang = getLang();
    const existing = document.getElementById('selected-food-summary');
    if (existing) existing.remove();
    const box = document.createElement('div');
    box.id = 'selected-food-summary';
    box.style.cssText = 'margin:0 0 24px;padding:18px;border:1px solid rgba(0,0,0,.15);border-radius:14px;background:rgba(255,255,255,.06);';
    if (!food) {
      box.innerHTML = `<strong>${copy[lang].selected}</strong><p style="margin:.5rem 0 0">${copy[lang].none}</p>`;
    } else {
      box.innerHTML = `<strong>${copy[lang].selected}</strong><p style="margin:.5rem 0 0"><b>${copy[lang].item}:</b> ${escapeHtml(food.name)}<br><b>${copy[lang].price}:</b> $${Number(food.price || 0).toFixed(2)}</p>`;
    }
    const form = document.querySelector('.customer_information');
    if (form) form.insertBefore(box, form.firstChild);
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('place_order');
    const food = loadFood();
    renderFood(food);
    if (!button) return;
    button.addEventListener('click', () => {
      const lang = getLang();
      const name = document.getElementById('customer_name')?.value.trim();
      const phone = document.getElementById('customer_phone')?.value.trim();
      const address = document.getElementById('customer_address')?.value.trim();
      if (!name || !phone || !address) {
        window.alert(copy[lang].required);
        return;
      }
      const order = { food, name, phone, address, notes: document.getElementById('order_notes')?.value.trim() || '', createdAt: new Date().toISOString() };
      const existing = (() => { try { return JSON.parse(localStorage.getItem('restaurantOrders') || '[]'); } catch (_) { return []; } })();
      existing.push(order);
      localStorage.setItem('restaurantOrders', JSON.stringify(existing.slice(-50)));
      window.alert(copy[lang].success);
      sessionStorage.removeItem(storageKey);
      document.getElementById('customer_name').value='';
      document.getElementById('customer_phone').value='';
      document.getElementById('customer_address').value='';
      document.getElementById('order_notes').value='';
      renderFood(null);
    });
  });
})();

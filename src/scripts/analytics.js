// Lightweight analytics helper for CTA clicks
(function () {
  if (typeof window === 'undefined') return;

  function pushEvent(event) {
    // If a dataLayer exists (GTM), push there; otherwise log to console as a safe fallback
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push(event);
    } else if (window.newrelic && typeof window.newrelic.addPageAction === 'function') {
      window.newrelic.addPageAction(event.event || 'cta_click', event);
    } else {
      console.info('[analytics] event', event);
    }
  }

  function handleClick(e) {
    var target = e.target;
    while (target && target !== document.body) {
      if (target.dataset && (target.dataset.ctaId || target.dataset.ctaLabel)) {
        var evt = {
          event: 'cta_click',
          ctaId: target.dataset.ctaId || null,
          label: target.dataset.ctaLabel || target.textContent.trim(),
          href: target.getAttribute('href') || null,
          timestamp: new Date().toISOString()
        };
        pushEvent(evt);
        return;
      }
      target = target.parentElement;
    }
  }

  document.addEventListener('click', handleClick, true);
})();

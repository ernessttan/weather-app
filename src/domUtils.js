function createElement(type, options = {}) {
  const element = document.createElement(type);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') {
      element.classList.add(value);
      return;
    }

    if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
      return;
    }

    if (key === 'text') {
      element.textContent = value;
      return;
    }

    element.setAttribute(key, value);
  });
  return element;
}

function querySelector(selector, parent = document) {
  return parent.querySelector(selector);
}

export { createElement, querySelector };

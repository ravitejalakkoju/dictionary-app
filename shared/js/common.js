import { Theme } from './constants.js';

const templateRegex = /<template>(.*?)<\/template>/;

export function loadHTML(path, id, obj) {
  return fetch(path).then(response => response.text());
}

export function mountComponent(component) {
  document.getElementById(component.id).innerHTML = htmlParser(component.html, component.model.getModel());
}

export function updateComponent(key, value) {
  const template = document.getElementById(`${key}-template`);
  const newValue = template?.innerHTML.replace(`{${key}}`, value) || value;
  document.getElementById(`js-${key}`).innerHTML = newValue;
}

function htmlParser(html, model) {
  Object.keys(model)?.forEach(item => {
    const value = model[item];
    if(!Array.isArray(value))
      html = html.replace("{"+item+"}", value || '');
    else {
      var listHtml = '';
      const parsedHtml = new DOMParser().parseFromString(html, "text/html");
      var li = parsedHtml.getElementById(item+'-template').innerHTML;
      value?.forEach(it => {
        listHtml += htmlParser(li, it);
      });
      html = html.replaceAll("{"+item+"}", listHtml);
    }
  });
  return html;
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function updateTheme(isLight) {
  if(isLight) document.body.classList.remove("dark-theme");
  else document.body.classList.add("dark-theme");
  document.getElementById('js-theme-checkbox').checked = !isLight;
}

export function updateFont(selectedFont) {
  document.documentElement.style.setProperty('--font-family', selectedFont);
}

export function loadDefaultSettings() {
  updateFont(localStorage.getItem("dictionary-font"));
  updateTheme(localStorage.getItem("dictionary-theme") == Theme.light);
}
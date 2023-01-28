export function loadHTML(path, id, obj) {
  fetch(path)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      loadValues(obj);      
  });
}

export function loadValues(obj) {
  for (let key in obj) {
    document.getElementById(key+'') ? document.getElementById(key+'').innerHTML = obj[key] : null;
  }
}
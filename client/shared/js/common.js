export function loadHTML(path, id, obj) {
  fetch(path)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      loadValues(id, obj);      
  });
}

export function loadValues(component_id, obj) {
  for (let state_id in obj) {
    var node = document.getElementById(component_id+'-'+state_id);
    
    if(!node) return;

    switch(node.nodeName) {
      case 'SELECT': 
        document.querySelector(":root").style.setProperty('--fontfamily', obj[state_id]);
        break;
      default: 
        document.getElementById(component_id+'-'+state_id).innerHTML = obj[state_id];
        break;
    }
  }
}
const body = document.getElementsByTagName("body"); // indica el cuerpo de html //

let table = document.createElement("table"); // se crea el elemento table //

table.classList.add("table");  // se le asigna una clase //

document.body.appendChild(table); // este metodo o funcion es para agregarlo al body osea indica que es hijo //

let thead = document.createElement("thead");

thead.classList.add("thead");

table.appendChild(thead);

let thead_item = document.createElement("tr");

thead.appendChild(thead_item);

let item_th1 = document.createElement("th");

item_th1.innerText = "informacion";

thead_item.appendChild(item_th1);

let item_th2 = document.createElement("th");

item_th2.innerText = "version";

thead_item.appendChild(item_th2);

let item_th3 = document.createElement("th");

item_th3.innerText = "algo";

thead_item.appendChild(item_th3);

let tbody = document.createElement("tbody");

tbody.classList.add("tbody");

table.appendChild(tbody);

let tbody_item = document.createElement("tr");

tbody.appendChild(tbody_item);

let item_td1 = document.createElement("td");

item_td1.innerText = "objeto";

tbody_item.appendChild(item_td1);

let item_td2 = document.createElement("td");

item_td2.innerText = "no se";

tbody_item.appendChild(item_td2);

let item_td3 = document.createElement("td");

item_td3.innerText = "imagen";

tbody_item.appendChild(item_td3);


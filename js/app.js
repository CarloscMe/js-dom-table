const body = document.body; // indica el cuerpo de html //

const click = document.querySelector(".click");

click.addEventListener("click", table, { once: true } );

function table (){

let table = document.createElement("table"); // se crea el elemento table //

table.classList.add("table");  // se le asigna una clase //

document.body.appendChild(table); // este metodo o funcion es para agregarlo al body osea indica que es hijo //

let thead = document.createElement("thead");

thead.classList.add("thead");

table.appendChild(thead);

let thead_item = document.createElement("tr");

thead.appendChild(thead_item);

let thead_item_th = ["nombre", "version", "algo asi"];

thead_item_th.forEach((text) => {

    let item_th = document.createElement("th");

    item_th.innerText = text;

    thead_item.appendChild(item_th)
}
);

let tbody = document.createElement("tbody");

tbody.classList.add("tbody");

table.appendChild(tbody);

let tbody_item = document.createElement("tr");

tbody.appendChild(tbody_item);

let tbody_item_td1 = ["mario broos", "1.02", "si"];

tbody_item_td1.forEach((text) =>{

    let item_td1 = document.createElement("td");

    item_td1.innerText = text;

    tbody_item.appendChild(item_td1);
}
);

let tbody_item2 = document.createElement("tr");

tbody.appendChild(tbody_item2);

let tbody_item_td2 = ["sonic", "3.0", "mas o menos"];

tbody_item_td2.forEach((text) =>{

    let item_td2 = document.createElement("td");

    item_td2.innerText = text;

    tbody_item2.appendChild(item_td2)
}
);

let tbody_item3 = document.createElement("tr");

tbody.appendChild(tbody_item3);

let tbody_item_td3 = ["aña", "dd", "ohhyeah"];

tbody_item_td3.forEach((text) =>{

    let item_td3 = document.createElement("td");

    item_td3.innerText = text;

    tbody_item3.appendChild(item_td3)
}
);

let tbody_item4 = document.createElement("tr");

tbody.appendChild(tbody_item4);

let tbody_item_td4 = ["nos", "dad", "oahhyeah"];

tbody_item_td4.forEach((text) =>{

    let item_td4 = document.createElement("td");

    item_td4.innerText = text;

    tbody_item4.appendChild(item_td4);
}
);

let tfoot = document.createElement("tfoot");

tfoot.classList.add("tfoot");

table.appendChild(tfoot);

let tfoot_item = document.createElement("tr");

tfoot.appendChild(tfoot_item);

let tfoot_item_td = ["resultado", "390.2", "en si"];

tfoot_item_td.forEach((text) =>{

    let item_td5 = document.createElement("td");

    item_td5.innerText = text;

    tfoot_item.appendChild(item_td5);
}
);
};
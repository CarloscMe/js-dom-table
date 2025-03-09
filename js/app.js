const body = document.body; // indica el cuerpo de html //

const click = document.querySelector(".click");

click.addEventListener("click", table, { once: true });

function table() {

  const crearTabla = (datos) => {
    const table = document.createElement("table");
    table.classList.add("table");

    const cabecera = document.createElement("thead");
    cabecera.classList.add("thead");
    table.appendChild(cabecera);

    const filaCabecera = document.createElement("tr");
    cabecera.appendChild(filaCabecera);

    const cabeceraColumnas = ["Nombre", "Versión", "estado"];
    cabeceraColumnas.forEach((columna) => {
      const celdaCabecera = document.createElement("th");
      celdaCabecera.innerText = columna;
      filaCabecera.appendChild(celdaCabecera);
    });

    const cuerpo = document.createElement("tbody");
    cuerpo.classList.add("tbody");
    table.appendChild(cuerpo);

    datos.forEach((fila) => {
      const filaCuerpo = document.createElement("tr");
      cuerpo.appendChild(filaCuerpo);

      fila.forEach((celda) => {
        const celdaCuerpo = document.createElement("td");
        celdaCuerpo.innerText = celda;
        filaCuerpo.appendChild(celdaCuerpo);
      });
    });

    const pie = document.createElement("tfoot");
    pie.classList.add("tfoot");
    table.appendChild(pie);

    pieAbajo.forEach((fila) => {

      const filaPie = document.createElement("tr");
      pie.appendChild(filaPie);

      fila.forEach((celda) => {
        const celdaPie = document.createElement("td");
        celdaPie.innerText = celda;
        filaPie.appendChild(celdaPie);
      }
      );
    }
    );

    return table;
  };

  const datos = [
    ["Mario Bros", "1.02", "estable"],
    ["Sonic", "3.0", "estable"],
    ["halo", "10.29", "finalizado"],
    ["minecraft", "1.20", "compatible"],
    ["devil may cry", "4.0", "finalizado"],
    ["roblox", "389.01", "compatible"]
  ];

  const pieAbajo = [
    ["pokemon", "7.0", "compatible"],
    ["brawl stars", "30.5", "estable"]
  ];

  const table = crearTabla(datos);
  document.body.appendChild(table);
};
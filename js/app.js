const body = document.body; // indica el cuerpo de html //

const click = document.querySelector(".click");

click.addEventListener("click", table, { once: true } );

function table (){

    const crearTabla = (datos) => {
        const table = document.createElement("table");
        table.classList.add("table");
      
        const cabecera = document.createElement("thead");
        cabecera.classList.add("thead");
        table.appendChild(cabecera);
      
        const filaCabecera = document.createElement("tr");
        cabecera.appendChild(filaCabecera);
      
        const cabeceraColumnas = ["Nombre", "Versión", "Algo así"];
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
      
        const filaPie = document.createElement("tr");
        pie.appendChild(filaPie);

        const pieColumnas = ["Resultado", "390.2", "En sí"];
        pieColumnas.forEach((columna) => {
          const celdaPie = document.createElement("td");
          celdaPie.innerText = columna;
          filaPie.appendChild(celdaPie);
        });

        const filaPie2 = document.createElement("tr");
        pie.appendChild(filaPie2);
      

        const pieColumnas2 = ["ok", "bueno", "3.0"];
        pieColumnas2.forEach((columna) => {
          const celdaPie2 = document.createElement("td");
          celdaPie2.innerText = columna;
          filaPie2.appendChild(celdaPie2);
        });
      
        return table;
      };
      
      const datos = [
        ["Mario Bros", "1.02", "Sí"],
        ["Sonic", "3.0", "Más o menos"],
        ["Aña", "DD", "Ohhyeah"],
        ["Nos", "Dad", "Oahhyeah"]
      ];

      const table = crearTabla(datos);
      document.body.appendChild(table);
};

// mejorar este codigo para que sea mas facil la creacion de tr//
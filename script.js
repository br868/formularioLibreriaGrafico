
// Cargar datos JSON 
const url = 'data.json';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extraer etiquetas y valores  del JSON
    const year = data.map(item => item.Año);
    const cantEstudiantes = data.map(item => item.Estudiantes);
    crearTabla(data);


    // Configurar el grafico
    const ctx = document.getElementById('grafico').getContext('2d');
    new Chart(ctx, {
      type: 'bar', 
      data: {
        labels: year, // Ano 
        datasets: [{
          label: 'Estudiantes Matriculados en los ultimo 5 Años ',
          data: cantEstudiantes, //     cantidad de estudiantes          
          backgroundColor:
           [
            'rgba(10, 192, 7, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 99, 132, 0.6)'
            ],
          borderColor: 
          [
            'rgba(10, 192, 7, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 99, 132, 0.6)'

          ],
          borderWidth: 1,
           text: 'Chart.js Stacked Line/Bar Chart'
        }]
        
      },
      options: {
        scales: {
          y: {
            beginAtZero: true 
          }
        }
      }
    });
  })
  .catch(error => console.error('Error al cargar el JSON:', error));

    //creando tabla desde datos json
    function crearTabla(jsonDatos) {
        const tableContainer = document.getElementById("table-container");

        // Crear elemento de la tabla
        const table = document.createElement("table");

        // Crear encabezados
        const thead = document.createElement("thead");
        const headers = Object.keys(jsonDatos[0]);
        const headerColum = document.createElement("tr");
        headers.forEach(header => {
            const th = document.createElement("th");
            th.textContent = header;
            headerColum.appendChild(th);
        });
        thead.appendChild(headerColum);

        // Crear cuerpo de la tabla
        const tbody = document.createElement("tbody");
        jsonDatos.forEach(row => {
            const tr = document.createElement("tr");
            headers.forEach(header => {
                const td = document.createElement("td");
                td.textContent = row[header];
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

        // Combinar partes de la tabla
        table.appendChild(thead);
        table.appendChild(tbody);

        // Agregar la tabla al contenedor
        tableContainer.appendChild(table);
    }


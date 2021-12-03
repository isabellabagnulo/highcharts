document.addEventListener("DOMContentLoaded", function () {
  // define colors
  const grey = "rgb(72, 72, 72)"

  //opzioni
  // Highcharts.setOptions({
  //   chart: {
  //     style: {
  //       fontFamily: "Poppins",
  //       fontSize: 100,
  //     },
  //   },
  // })
  //nuovo chart
  const chart = Highcharts.chart("container", {
    chart: {
      type: "networkgraph", //tipo di chart
      backgroundColor: "rgb(45, 45, 54)",
      height: window.screen.height - 200,
      styleMode: true,
    },
    plotOptions: {
      networkgraph: {
        layoutAlgorithm: {
          enableSimulation: true,
        },
      },
      series: {
        cursor: "pointer",
        point: {
          // aggiungi url
          events: {
            click: function () {
              location.href =
                "https://en.wikipedia.org/wiki/" + this.options.key // url incompleto + key aggiunta nel nodes, oppure creare un if in cui se key esiste prendi url altrimenti non prenderlo e pallina non sarà cliccabile
            },
          },
        },
      },
    },
    title: {
      text: "Moholes Navigation", //titolo del chart
      style: {
        fontFamily: "Arial",
      },
    },
    series: [
      {
        link: {
          width: 2, // spessore lineetta
          color: "#ffffff",
        },
        dataLabels: {
          enabled: false, // testa sulla linea
        },

        nodes: [
          // definizione dei pallini
          {
            id: "Moholes", // testo del pallino
            labels: {
              style: {
                fontSize: "20px",
              },
            },
            key: "pippo", // continuazione dell url
            dataLabels: {
              enabled: true, // abilita testo dentro la pallina
            },
            // color: {
            //   pattern: {
            //     image: "./mohole_home.jpg",
            //   },
            // },
            marker: {
              // opzioni estetiche per pallina
              radius: 80,
              fillColor: grey,
              lineWidth: 2,
              lineColor: "#ffffff",
            },
          },
          {
            id: "Web",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 15,
              fillColor: "#000000",
            },
          },
          {
            id: "Grafica",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 15,
              fillColor: "#000000",
            },
          },
          {
            id: "Fumetto",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 15,
              fillColor: "#000000",
            },
          },
          // {
          //   from: "Moholes",
          //   to: "Web",
          // },
          // {
          //   from: "Moholes",
          //   to: "Fumetto",
          // },
        ],
        data: [
          // definizione dei collegamenti (genitori, figli)
          ["Moholes", "Web"],
          ["Moholes", "Grafica"],
          ["Web", "Grafica"],
          {
            from: "Moholes",
            to: "Fumetto",
            color: "#000000",
          },
        ],
      },
    ],
  })
})

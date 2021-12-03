document.addEventListener("DOMContentLoaded", function () {
  // define colors
  const bgGrey = "rgb(45, 45, 54)"
  const grey = "rgb(72, 72, 72)"
  const filmmaking = "#E00E7A"
  const acting = "#EC6608"
  const threed = "#BB66A5"
  const photography = "#F7A600"
  const comic = "#52AE32"
  const graphic = "#009FE3"
  const web = "#0069B4"
  const storytelling = "#31B7BC"
  const sound = "#951B81"
  const videogame = "#D20A11"

  //opzioni
  // Highcharts.setOptions({
  //   chart: {
  //     style: {

  //     },
  //   },
  // })

  // nuovo chart
  const chart = Highcharts.chart("container", {
    chart: {
      type: "networkgraph", //tipo di chart
      backgroundColor: bgGrey,
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
        dataLabels: {
          color: "#ffffff",
          style: {
            textOutline: "none",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "400",
          },
        },
        cursor: "pointer",
        point: {
          // aggiungi url
          events: {
            click: function () {
              location.href = "/" + this.options.key // url incompleto + key aggiunta nel nodes, oppure creare un if in cui se key esiste prendi url altrimenti non prenderlo e pallina non sarà cliccabile
            },
          },
        },
      },
    },
    title: {
      text: "Moholes Navigation", //titolo del chart
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

          // corsi
          {
            id: "Web Design",
            key: "web",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              fillColor: web,
            },
          },

          {
            id: "Niccolò Maffioli",
            key: "web-design/niccolo-maffioli",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              fillColor: web,
            },
          },
          {
            id: "Carolina Cristino",
            key: "web-design/carolina-cristino",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              fillColor: web,
            },
          },
          {
            id: "Isabella Bagnulo",
            key: "web-design/isabella-bagnulo",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              fillColor: web,
            },
          },
          {
            id: "Giovanna Monti",
            key: "web-design/giovanna-monti",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              fillColor: web,
            },
          },
          {
            id: "Victoria Ferrari",
            key: "web-design/victoria-ferrari",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              fillColor: web,
            },
          },
          {
            id: "Luca Ricci",
            key: "web-design/luca-ricci",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              fillColor: web,
            },
          },

          {
            id: "Lavoro 1",
            key: "web-design/niccolo-maffioli/lavoro-1",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 10,
              fillColor: web,
            },
          },
          {
            id: "Lavoro 2",
            key: "web-design/niccolo-maffioli/lavoro-1",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 10,
              fillColor: web,
            },
          },
          {
            id: "Lavoro 3",
            key: "web-design/niccolo-maffioli/lavoro-1",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 10,
              fillColor: web,
            },
          },
        ],
        data: [
          ["Web Design", "Niccolò Maffioli"],
          ["Web Design", "Carolina Cristino"],
          ["Web Design", "Isabella Bagnulo"],
          ["Web Design", "Giovanna Monti"],
          ["Web Design", "Victoria Ferrari"],
          ["Web Design", "Luca Ricci"],

          ["Niccolò Maffioli", "Lavoro 1"],
          ["Niccolò Maffioli", "Lavoro 2"],
          ["Niccolò Maffioli", "Lavoro 3"],

          ["Carolina Cristino", "Lavoro 3"],
          ["Isabella Bagnulo", "Lavoro 3"],
        ],
      },
    ],
  })
})

document.addEventListener("DOMContentLoaded", function () {
  // define colors
  const bgGrey = "rgb(45, 45, 54)"
  const grey = "#494949"
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
            fontFamily: "Encode Sans Semi Expanded",
            fontSize: "12px",
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
          color: grey,
        },
        dataLabels: {
          enabled: false, // testa sulla linea
        },
        marker: {
          fillColor: bgGrey,
          lineWidth: 2,
        },

        nodes: [
          // corsi
          {
            id: "Web Design",
            key: "web-design",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 80,
              lineColor: web,
            },
          },

          {
            id: "Web1A",
            key: "web-design/web1a",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: web,
            },
          },
          {
            id: "Web1B",
            key: "web-design/web1b",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: web,
            },
          },
          {
            id: "Web1C",
            key: "web-design/web1c",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: web,
            },
          },
          {
            id: "Web2A",
            key: "highcharts/web-design/web2a/index.html",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: web,
            },
          },
          {
            id: "Web2B",
            key: "web-design/web2b",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: web,
            },
          },
          {
            id: "Web2C",
            key: "web-design/web2c",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: web,
            },
          },
        ],
        data: [
          // definizione dei collegamenti (genitori, figli)
          ["Web Design", "Web1A"],
          ["Web Design", "Web1B"],
          ["Web Design", "Web1C"],
          ["Web Design", "Web2A"],
          ["Web Design", "Web2B"],
          ["Web Design", "Web2C"],
        ],
      },
    ],
  })
})

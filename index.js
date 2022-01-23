document.addEventListener("DOMContentLoaded", function () {
  // define colors
  const white = "#ffffff"
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
  const gradient =
    "linear-gradient(270deg, #ffb500 0, #ffa41e 8.33%, #ff9234 16.67%, #ff7d42 25%, #ff674d 33.33%, #ff5055 41.67%, #ff3858 50%, #e41f59 58.33%, #cc025b 66.67%, #b6005d 75%, #a3005f 83.33%, #910063 91.67%, #820067 100%);"

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
          // definizione dei pallini
          {
            id: "Moholes", // testo del pallino
            key: "", // continuazione dell url
            dataLabels: {
              enabled: true, // abilita testo dentro la pallina
              style: {
                fontSize: "16px",
              },
            },
            // color: {
            //   pattern: {
            //     image: "./mohole_home.jpg",
            //   },
            // },
            marker: {
              // opzioni estetiche per pallina
              lineColor: {
                linearGradient: { x1: 0, x2: 1, y1: 0, y2: 2 },
                stops: [
                  [0, web],
                  [1, graphic],
                  [2, filmmaking],
                  [3, acting],
                  [4, threed],
                  [5, comic],
                  [6, photography],
                  [7, storytelling],
                  [8, videogame],
                  [9, sound],
                ],
              },
              radius: 80,
              // lineColor: "#ffffff",
            },
          },

          // corsi
          {
            id: "Web Design",
            key: "web-design/index.html",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: web,
            },
          },
          {
            id: "Graphic Design",
            key: "grafica",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: graphic,
            },
          },
          {
            id: "Fumetto",
            key: "fumetto",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: comic,
            },
          },
          {
            id: "Film Making",
            key: "filmmaking",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: filmmaking,
            },
          },
          {
            id: "Recitazione",
            key: "recitazione",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: acting,
            },
          },
          {
            id: "3D Animation",
            key: "3d-animation",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: threed,
            },
          },
          {
            id: "Fotografia",
            key: "fotografia",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: photography,
            },
          },
          {
            id: "Storytelling",
            key: "storytelling",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: storytelling,
            },
          },
          {
            id: "Sound Design",
            key: "sound-design",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: sound,
            },
          },
          {
            id: "Videogame",
            key: "videogame",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 40,
              lineColor: videogame,
            },
          },
        ],
        data: [
          // definizione dei collegamenti (genitori, figli)
          ["Moholes", "Web Design"],
          ["Moholes", "Graphic Design"],
          ["Moholes", "Fumetto"],
          ["Moholes", "Film Making"],
          ["Moholes", "Recitazione"],
          ["Moholes", "3D Animation"],
          ["Moholes", "Fotografia"],
          ["Moholes", "Storytelling"],
          ["Moholes", "Sound Design"],
          ["Moholes", "Videogame"],
        ],
      },
    ],
  })
})

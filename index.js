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
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
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
            key: "web-design",
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

          {
            id: "Niccolò Maffioli",
            key: "web-design/niccolo-maffioli",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: web,
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
              lineColor: web,
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
              lineColor: web,
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
              lineColor: web,
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
              lineColor: web,
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
              lineColor: web,
            },
          },

          {
            id: "Studente Grafica 1",
            key: "grafica/stud-graf-1",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: graphic,
            },
          },
          {
            id: "Studente Grafica 2",
            key: "grafica/stud-graf-2",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: graphic,
            },
          },
          {
            id: "Studente Grafica 3",
            key: "grafica/stud-graf-3",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: graphic,
            },
          },
          {
            id: "Studente Grafica 4",
            key: "grafica/stud-graf-4",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: graphic,
            },
          },

          {
            id: "Studente Filmmaking 1",
            key: "filmmaking/stud-film-1",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: filmmaking,
            },
          },
          {
            id: "Studente Filmmaking 2",
            key: "filmmaking/stud-film-2",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: filmmaking,
            },
          },
          {
            id: "Studente Filmmaking 3",
            key: "filmmaking/stud-film-3",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: filmmaking,
            },
          },

          {
            id: "Studente Fotografia 1",
            key: "fotografia/stud-foto-1",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: photography,
            },
          },
          {
            id: "Studente Fotografia 2",
            key: "fotografia/stud-foto-2",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: photography,
            },
          },
          {
            id: "Studente Fotografia 3",
            key: "fotografia/stud-foto-3",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: photography,
            },
          },

          {
            id: "Studente Recitazione 1",
            key: "recitazione/stud-rec-1",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: acting,
            },
          },
          {
            id: "Studente Recitazione 2",
            key: "recitazione/stud-rec-2",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: acting,
            },
          },
          {
            id: "Studente Recitazione 3",
            key: "recitazione/stud-rec-3",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: acting,
            },
          },

          {
            id: "Studente Videogame 1",
            key: "videogame/stud-video-1",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: videogame,
            },
          },
          {
            id: "Studente Videogame 2",
            key: "videogame/stud-video-2",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: videogame,
            },
          },
          {
            id: "Studente Videogame 3",
            key: "videogame/stud-video-3",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: videogame,
            },
          },

          {
            id: "Studente 3D Animation 1",
            key: "3D-animation/stud-3d-1",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: threed,
            },
          },
          {
            id: "Studente 3D Animation 2",
            key: "3D-animation/stud-3d-2",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: threed,
            },
          },
          {
            id: "Studente 3D Animation 3",
            key: "3D-animation/stud-3d-3",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: threed,
            },
          },

          {
            id: "Studente Fumetto 1",
            key: "fumetto/stud-fum-1",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: comic,
            },
          },
          {
            id: "Studente Fumetto 2",
            key: "fumetto/stud-fum-2",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: comic,
            },
          },
          {
            id: "Studente Fumetto 3",
            key: "fumetto/stud-fum-3",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: comic,
            },
          },

          {
            id: "Studente Storytelling 1",
            key: "storytelling/stud-story-1",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: storytelling,
            },
          },
          {
            id: "Studente Storytelling 2",
            key: "storytelling/stud-story-2",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: storytelling,
            },
          },
          {
            id: "Studente Storytelling 3",
            key: "storytelling/stud-story-3",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: storytelling,
            },
          },

          {
            id: "Studente Sound Design 1",
            key: "sound-design/stud-sound-1",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: sound,
            },
          },
          {
            id: "Studente Sound Design 2",
            key: "sound-design/stud-sound-2",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: sound,
            },
          },
          {
            id: "Studente Sound Design 3",
            key: "sound-design/stud-sound-3",
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 20,
              lineColor: sound,
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
              lineColor: "transparent",
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
              lineColor: "transparent",
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
              lineColor: "transparent",
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

          ["Graphic Design", "Studente Grafica 1"],
          ["Graphic Design", "Studente Grafica 2"],
          ["Graphic Design", "Studente Grafica 3"],
          ["Graphic Design", "Studente Grafica 4"],

          ["Film Making", "Studente Filmmaking 1"],
          ["Film Making", "Studente Filmmaking 2"],
          ["Film Making", "Studente Filmmaking 3"],

          ["Fotografia", "Studente Fotografia 1"],
          ["Fotografia", "Studente Fotografia 2"],
          ["Fotografia", "Studente Fotografia 3"],

          ["Recitazione", "Studente Recitazione 1"],
          ["Recitazione", "Studente Recitazione 2"],
          ["Recitazione", "Studente Recitazione 3"],

          ["Videogame", "Studente Videogame 1"],
          ["Videogame", "Studente Videogame 2"],
          ["Videogame", "Studente Videogame 3"],

          ["3D Animation", "Studente 3D Animation 1"],
          ["3D Animation", "Studente 3D Animation 2"],
          ["3D Animation", "Studente 3D Animation 3"],

          ["Fumetto", "Studente Fumetto 1"],
          ["Fumetto", "Studente Fumetto 2"],
          ["Fumetto", "Studente Fumetto 3"],

          ["Storytelling", "Studente Storytelling 1"],
          ["Storytelling", "Studente Storytelling 2"],
          ["Storytelling", "Studente Storytelling 3"],

          ["Sound Design", "Studente Sound Design 1"],
          ["Sound Design", "Studente Sound Design 2"],
          ["Sound Design", "Studente Sound Design 3"],
          // {
          //   from: "Moholes",
          //   to: "Fumetto",
          //   // color: "#000000",
          // },
        ],
      },
    ],
  })
})

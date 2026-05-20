/* =========================
   REAL TIME CLOCK
========================= */

function updateClock(){

  const now = new Date();

  document.getElementById("currentTime")
  .innerText = now.toLocaleString();
}

setInterval(updateClock,1000);

updateClock();

/* =========================
   TEMPERATURE CHART
========================= */

const tempCtx =
document.getElementById("tempChart");

new Chart(tempCtx,{

  type:"line",

  data:{

    labels:[
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],

    datasets:[{

      label:"Temperature °C",

      data:[
        24,
        25,
        22,
        23,
        26,
        28,
        27
      ],

      borderColor:"#38bdf8",

      backgroundColor:"rgba(56,189,248,0.2)",

      fill:true,

      tension:0.4
    }]
  },

  options:{

    responsive:true,

    plugins:{
      legend:{
        labels:{
          color:"white"
        }
      }
    },

    scales:{

      x:{
        ticks:{
          color:"white"
        },

        grid:{
          color:"rgba(255,255,255,0.05)"
        }
      },

      y:{
        ticks:{
          color:"white"
        },

        grid:{
          color:"rgba(255,255,255,0.05)"
        }
      }
    }
  }
});

/* =========================
   HUMIDITY CHART
========================= */

const humidityCtx =
document.getElementById("humidityChart");

new Chart(humidityCtx,{

  type:"bar",

  data:{

    labels:[
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],

    datasets:[{

      label:"Humidity %",

      data:[
        65,
        70,
        75,
        72,
        68,
        71,
        69
      ],

      backgroundColor:[
        "#0ea5e9",
        "#38bdf8",
        "#7dd3fc",
        "#0284c7",
        "#0369a1",
        "#38bdf8",
        "#0ea5e9"
      ],

      borderRadius:8
    }]
  },

  options:{

    responsive:true,

    plugins:{
      legend:{
        labels:{
          color:"white"
        }
      }
    },

    scales:{

      x:{
        ticks:{
          color:"white"
        },

        grid:{
          color:"rgba(255,255,255,0.05)"
        }
      },

      y:{
        ticks:{
          color:"white"
        },

        grid:{
          color:"rgba(255,255,255,0.05)"
        }
      }
    }
  }
});

/* =========================
   WEATHER DISTRIBUTION
========================= */

const weatherCtx =
document.getElementById("weatherChart");

new Chart(weatherCtx,{

  type:"doughnut",

  data:{

    labels:[
      "Sunny",
      "Cloudy",
      "Rainy",
      "Storm"
    ],

    datasets:[{

      data:[
        45,
        30,
        20,
        5
      ],

      backgroundColor:[
        "#facc15",
        "#94a3b8",
        "#38bdf8",
        "#ef4444"
      ],

      borderWidth:0
    }]
  },

  options:{

    responsive:true,

    plugins:{
      legend:{
        labels:{
          color:"white"
        }
      }
    }
  }
});

/* =========================
   AI FORECAST LOGIC
========================= */

console.log(
  "Climate Analytics System Initialized"
);

console.log(
  "AI Forecast Engine Running..."
);
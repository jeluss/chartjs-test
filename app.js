const ctx = document.querySelector("#myChart").getContext("2d");

let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58,123,213,1");
gradient.addColorStop(1, "rgba(0,210,255,0.3");

let delayed;

const labels = [
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];

const data = {
  labels,
  datasets: [
    {
      data: [211, 326, 165, 350, 420, 370, 500, 375, 415],
      label: "sales",
      fill: true,
      //   backgroundColor: "green",
      backgroundColor: gradient,
      borderColor: "black",
      pointBackgroundColor: "red",
      //   tension: 0.2,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    radius: 5,
    hitRadius: 15,
    hoverRadius: 12,
    responsive: true,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return "$" + value + "m";
          },
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);

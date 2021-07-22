import React from "react";
import Graph from "./Graph";

export default {
  title: "Atomic/Graph",
  component: Graph,
};

const Template = (args) => <Graph {...args} />

export const Basic = Template.bind({});
Basic.args = {
  plotProp: {
    data: [
      {
        x: ["Test 1", "Test 2", "Test 3"],
        y: [5, 10, 15],
        type: "bar"
      }
    ],
    layout: {
      title: "Test Graph",
      font: {
        family: "Saira, 'Nunito Sans'"
      }
    }
  },
  style: {}
};

const normal = () => {
  let x = 0, y = 0, rds = 10, c;
  while (rds === 0 || rds > 1) {
    x = Math.random() * 2 - 1;
    y = Math.random() * 2 - 1;
    rds = x * x + y * y;
  }
  c = Math.sqrt(-2 * Math.log(rds) / rds);
  return x * c;
}

const N = 2000, step = 2.2 / 1999;
let t = new Array(N), x = new Array(N), y = new Array(N);

for(let i = 0; i < N; i++){
  t[i] = -1 + step * i;
  x[i] = (Math.pow(t[i], 3)) + (0.3 * normal());
  y[i] = (Math.pow(t[i], 6)) + (0.3 * normal());
}

export const DensityChart = Template.bind({});
DensityChart.args = {
  plotProp: {
    data: [
      {
        x: x,
        y: y,
        mode: "markers",
        name: "points",
        marker: {
          color: "rgb(0, 0, 0)",
          size: 1.5,
          opacity: 0.3
        },
        type: "scatter"
      },
      {
        x: x,
        y: y,
        name: "density",
        ncontours: 20,
        colorscale: "Blues",
        reversescale: true,
        showscale: false,
        type: "histogram2dcontour"
      }
    ],
    layout: {
      title: "Test Graph",
      font: {
        family: "Saira, 'Nunito Sans'"
      },
      showlegend: false,
      autosize: false,
      width: 600,
      height: 550,
      hovermode: "closest",
      bargap: 0,
      xaxis: {
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        showgrid: false,
        zeroline: false
      },
    }
  }
};

export const BoxPlotChart = Template.bind({});
BoxPlotChart.args = {
  plotProp: {
    data: [
      {
        x: ["RSS", "RSS", "RSS", "RSS", "RSS", "RSS", "MPA", "MPA", "MPA", "MPA", "MPA", "MPA"],
        y: [0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3],
        name: "Phase 1",
        marker: {color: "#3D9970"},
        type: "box",
      },
      {
        x: ["RSS", "RSS", "RSS", "RSS", "RSS", "RSS", "MPA", "MPA", "MPA", "MPA", "MPA", "MPA"],
        y: [0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2],
        name: "Phase 2",
        marker: {color: "#FF4136"},
        type: "box"
      },
      {
        x: ["RSS", "RSS", "RSS", "RSS", "RSS", "RSS", "MPA", "MPA", "MPA", "MPA", "MPA", "MPA"],
        y: [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5],
        name: "Phase 3",
        marker: {color: "#FF851B"},
        type: "box"
      }
    ],
    layout: {
      title: "Test Graph",
      font: {
        family: "Saira, 'Nunito Sans'"
      },
      boxmode: "group"
    }
  }
}

export const BubbleChart = Template.bind({});
BubbleChart.args = {
  plotProp: {
    data: [
      {
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        text: ["A<br>size: 40", "B<br>size: 60", "C<br>size: 80", "D<br>size: 100"],
        mode: "markers",
        marker: {
          color: ["rgb(93, 164, 214)", "rgb(255, 144, 14)",  "rgb(44, 160, 101)", "rgb(255, 65, 54)"],
          size: [40, 60, 80, 100]
        }
      }
    ],
    layout: {
      title: "Test Graph",
      font: {
        family: "Saira, 'Nunito Sans'"
      }
    }
  }
};

export const LineChart = Template.bind({});
LineChart.args = {
  plotProp: {
    data: [
      {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: "scatter",
        name: "RSS"
      },
      {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: "scatter",
        name: "MPA"
      }
    ],
    layout: {
      title: "Test Graph",
      font: {
        family: "Saira, 'Nunito Sans'"
      }
    }
  },
};
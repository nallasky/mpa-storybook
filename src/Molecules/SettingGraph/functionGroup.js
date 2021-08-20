import dayjs from "dayjs";

export const regexCheck = (regex, v) => {
  return !regex.test(v) || v.length === 0;
};

export const compareErrorCheck = (min, max) => {
  const parseMin =
    typeof min === 'number'
      ? min
      : min.indexOf('.') !== -1
      ? parseFloat(min)
      : parseInt(min);
  const parseMax =
    typeof max === 'number'
      ? max
      : max.indexOf('.') !== -1
      ? parseFloat(max)
      : parseInt(max);

  if (isNaN(parseMin)) {
    return true;
  } else {
    if (isNaN(parseMax)) {
      return true;
    } else {
      return max <= min;
    }
  }
};
export const createXvalue = (arr) => {
  const minValue = typeof arr[0] === "number" ? Math.min(...arr) : null;
  const maxValue = typeof arr[0] === "number" ? Math.max(...arr) : null;

  return {
    min: minValue,
    max: maxValue,
    date: minValue === null ? [dayjs(arr[0]), dayjs(arr[arr.length -1])] : [],
  };
};

export const createPropData = (obj, v, x, y, z, title) => {
  switch (v) {
    case "bar":
    default:
      if (x.length > 0 && y.length > 0) {
        if (Object.keys(obj).length === 0) {
          obj = {
            data: [
              {
                x: x,
                y: y,
                type: "bar"
              }
            ],
            layout: {
              title: title,
              font: {
                family: "Saira, 'Nunito Sans'"
              }
            }
          };
        } else {
          obj = {
            ...obj,
            data: [
              ...obj.data,
              {
                x: x,
                y: y,
                type: "bar"
              }
            ]
          };
        }
      }
      break;

    case "line":
      if (x.length > 0 && y.length > 0) {
        if (Object.keys(obj).length === 0) {
          obj = {
            data: [
              {
                x: x,
                y: y,
                type: "scatter",
                name: title
              }
            ],
            layout: {
              title: title,
              font: {
                family: "Saira, 'Nunito Sans'"
              }
            }
          };
        } else {
          obj = {
            ...obj,
            data: [
              ...obj.data,
              {
                x: x,
                y: y,
                type: "scatter",
                name: title
              }
            ]
          };
        }
      }
      break;

    case "box plot":
      if (y.length > 0) {
        if (Object.keys(obj).length === 0) {
          obj = {
            data: [
              {
                y: y,
                name: title,
                type: "box",
              }
            ],
            layout: {
              title: title,
              font: {
                family: "Saira, 'Nunito Sans'"
              }
            }
          };
        } else {
          obj = {
            data: [
              ...obj.data,
              {
                y: y,
                name: title,
                type: "box",
              }
            ]
          };
        }
      }
      break;

    case "density plot":
      if (x.length > 0 && y.length > 0) {
        if (Object.keys(obj).length === 0) {
          obj = {
            data: [
              {
                x: x,
                y: y,
                mode: "markers",
                name: "points",
                marker: {
                  color: "rgb(245,245,245)",
                  size: 1.5,
                  opacity: 0.7
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
              title: title,
              font: {
                family: "Saira, 'Nunito Sans'"
              },
              showlegend: false,
              hovermode: "closest",
              bargap: 0,
              xaxis: {
                showgrid: false,
                zeroline: false
              },
              yaxis: {
                showgrid: false,
                zeroline: false
              }
            }
          };
        } else {
          obj = {
            ...obj,
            data: [
              ...obj.data,
              {
                x: x,
                y: y,
                mode: "markers",
                name: "points",
                marker: {
                  color: "rgb(245,245,245)",
                  size: 1.5,
                  opacity: 0.7
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
              ...obj.layout,
              showlegend: false,
              hovermode: "closest",
              bargap: 0,
              xaxis: {
                showgrid: false,
                zeroline: false
              },
              yaxis: {
                showgrid: false,
                zeroline: false
              }
            }
          };
        }
      }
      break;

    case "bubble chart":
      if (x.length > 0 && y.length > 0 && z.length > 0) {
        if (Object.keys(obj).length === 0) {
          obj = {
            data: [
              {
                x: x,
                y: y,
                mode: "markers",
                marker: {
                  color: "rgb(93, 164, 214)",
                  size: z
                }
              }
            ],
            layout: {
              title: title,
              font: {
                family: "Saira, 'Nunito Sans'"
              }
            }
          };
        } else {
          obj = {
            ...obj,
            data: [
              ...obj.data,
              {
                x: x,
                y: y,
                mode: "markers",
                marker: {
                  color: "rgb(93, 164, 214)",
                  size: z
                }
              }
            ]
          };
        }
      }
      break;
  }

  return obj;
};

export const createGraphProp = (type, x, y, z, title) => {
  let tmpGraphProp = {};

  if (Array.isArray(type)) {
    type.map((v) => {
      tmpGraphProp = createPropData(tmpGraphProp, v, x, y, z, title);
    });
  } else {
    tmpGraphProp = createPropData(tmpGraphProp, type, x, y, z, title);
  }

  return tmpGraphProp;
};
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { Button, Input, DatePicker, Empty, Form } from "antd";
import { SettingFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import Graph from "@Graph/Graph";

const { RangePicker } = DatePicker;

const regex = /^[-]?(\d{0,20})(\.\d{0,7})?$/g;
//const dateRegex = /^(2[0-9][0-9][0-9])-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])\s(0\d|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/g;

const createXvalue = (arr) => {
  const minValue = typeof arr[0] === "number" ? Math.min(...arr) : null;
  const maxValue = typeof arr[0] === "number" ? Math.max(...arr) : null;

  return {
    min: minValue,
    max: maxValue,
    date: minValue === null ? [dayjs(arr[0]), dayjs(arr[arr.length -1])] : [],
  };
};

const SettingGraph = ({ graphType, x, y, z, title }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [dataX, setDataX] = useState(x);
  const [dataY, setDataY] = useState(y);
  const [axisY, setAxisY] = useState({
    min: Math.min(...y),
    max: Math.max(...y),
  });
  const [axisX, setAxisX] = useState(createXvalue(x));

  const createGraphProp = () => {
    let tmpGraphProp = {};

    graphType.map((v) => {
      switch (v) {
        case "bar":
        default:
          if (dataX.length > 0 && dataY.length > 0) {
            if (Object.keys(tmpGraphProp).length === 0) {
              tmpGraphProp = {
                data: [
                  {
                    x: dataX,
                    y: dataY,
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
              tmpGraphProp = {
                ...tmpGraphProp,
                data: [
                  ...tmpGraphProp.data,
                  {
                    x: dataX,
                    y: dataY,
                    type: "bar"
                  }
                ]
              };
            }
          }
          break;

        case "line":
          if (dataX.length > 0 && dataY.length > 0) {
            if (Object.keys(tmpGraphProp).length === 0) {
              tmpGraphProp = {
                data: [
                  {
                    x: dataX,
                    y: dataY,
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
              tmpGraphProp = {
                ...tmpGraphProp,
                data: [
                  ...tmpGraphProp.data,
                  {
                    x: dataX,
                    y: dataY,
                    type: "scatter",
                    name: title
                  }
                ]
              };
            }
          }
          break;

        case "box plot":
          if (dataY.length > 0) {
            if (Object.keys(tmpGraphProp).length === 0) {
              tmpGraphProp = {
                data: [
                  {
                    y: dataY,
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
              tmpGraphProp = {
                data: [
                  ...tmpGraphProp.data,
                  {
                    y: dataY,
                    name: title,
                    type: "box",
                  }
                ]
              };
            }
          }
          break;

        case "density plot":
          if (dataX.length > 0 && dataY.length > 0) {
            if (Object.keys(tmpGraphProp).length === 0) {
              tmpGraphProp = {
                data: [
                  {
                    x: dataX,
                    y: dataY,
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
                    x: dataX,
                    y: dataY,
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
              tmpGraphProp = {
                ...tmpGraphProp,
                data: [
                  ...tmpGraphProp.data,
                  {
                    x: dataX,
                    y: dataY,
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
                    x: dataX,
                    y: dataY,
                    name: "density",
                    ncontours: 20,
                    colorscale: "Blues",
                    reversescale: true,
                    showscale: false,
                    type: "histogram2dcontour"
                  }
                ],
                layout: {
                  ...tmpGraphProp.layout,
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
          if (dataX.length > 0 && dataY.length > 0 && z.length > 0) {
            if (Object.keys(tmpGraphProp).length === 0) {
              tmpGraphProp = {
                data: [
                  {
                    x: dataX,
                    y: dataY,
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
              tmpGraphProp = {
                ...tmpGraphProp,
                data: [
                  ...tmpGraphProp.data,
                  {
                    x: dataX,
                    y: dataY,
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
    });

    return tmpGraphProp;
  };

  const changeMinY = (value) => {
    if(regex.test(value) || value.length === 0) {
      setAxisY(prevState => {
        return {
          ...prevState,
          min: value,
        };
      });
    }
  };

  const changeMaxY = (value) => {
    if(regex.test(value) || value.length === 0) {
      setAxisY(prevState => {
        return {
          ...prevState,
          max: value,
        };
      });
    }
  };

  const changeMinX = (value) => {
    if(regex.test(value) || value.length === 0) {
      setAxisX(prevState => {
        return {
          ...prevState,
          min: value,
        };
      });
    }
  };

  const changeMaxX = (value) => {
    if(regex.test(value) || value.length === 0) {
      setAxisX(prevState => {
        return {
          ...prevState,
          max: value,
        };
      });
    }
  };

  const changeDateX = (value) => {
    setAxisX(prevState => {
      return {
        ...prevState,
        date: value,
      };
    });
  }

  const applySetting = () => {
    const tmpData = axisX.date.length > 0
      ? x.filter((v) => {
        return (dayjs(v.toString()).isAfter(dayjs(axisX.date[0])) || dayjs(v.toString()).isSame(dayjs(axisX.date[0])))
          && (dayjs(v.toString()).isBefore(dayjs(axisX.date[1])) || dayjs(v.toString()).isSame(dayjs(axisX.date[1])));
      })
      : x.filter((v) => v >= axisX.min && v <= axisX.max);

    setDataX(tmpData);
    setDataY(y.filter((v) => v >= axisY.min && v <= axisY.max));
    setShowPopup(false);
  };

  const checkApplyDisable = () => {
    if (axisX.date.length > 0) {
      return axisY.min.length === 0 || axisY.max.length === 0 || axisY.min >= axisY.max;
    } else {
      return !regex.test(axisX.min) || !regex.test(axisX.max) || !regex.test(axisY.min) || !regex.test(axisY.max)
        || axisX.min >= axisX.max || axisY.min >= axisY.max;
    }
  };

  useEffect(() => {
    setDataX(x);
    setAxisX(createXvalue(x));
  }, [x]);

  useEffect(() => {
    setDataY(y);
    setAxisY({
      min: Math.min(...y),
      max: Math.max(...y)
    });
  }, [y]);

  return (
    <>
      <div css={buttonWrapper}>
        <Button
          type="dashed"
          shape="round"
          icon={<SettingFilled />}
          onClick={() => setShowPopup(!showPopup)}
        >
          Range Setting
        </Button>
        <div css={[popupStyle, showPopup ? { display: "block" } : ""]}>
          <div>Range Setting</div>
          <div>
            <div>Axis (X)</div>
              {axisX.date.length > 0 ? (
                <div css={selectWrapper}>
                  <RangePicker
                    value={axisX.date}
                    showTime
                    onChange={changeDateX}
                    allowClear={false}
                  />
                </div>
              ) : (
                <div css={inputWrapper}>
                  <div>
                    <Form.Item
                      label="Min"
                      validateStatus={axisX.min.length === 0 || axisX.min >= axisX.max || axisX.min === "-" ? "error" : "success"}
                      help={axisX.min.length === 0 || axisX.min >= axisX.max || axisX.min === "-" ? "Invalid value." : ""}
                    >
                      <Input value={axisX.min} onChange={(e) => changeMinX(e.target.value)} />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      label="Max"
                      validateStatus={axisX.max.length === 0 || axisX.max <= axisX.min || axisX.max === "-" ? "error" : "success"}
                      help={axisX.max.length === 0 || axisX.max <= axisX.min || axisX.max === "-" ? "Invalid value." : ""}
                    >
                      <Input value={axisX.max} onChange={(e) => changeMaxX(e.target.value)} />
                    </Form.Item>
                  </div>
                </div>
              )}
          </div>
          <div>
            <div>Axis (Y)</div>
            <div css={inputWrapper}>
              <div>
                <Form.Item
                  label="Min"
                  validateStatus={axisY.min.length === 0 || axisY.min >= axisY.max || axisY.min === "-" ? "error" : "success"}
                  help={axisY.min.length === 0 || axisY.min >= axisY.max || axisY.min === "-" ? "Invalid value." : ""}
                >
                  <Input value={axisY.min} onChange={(e) => changeMinY(e.target.value)} />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  label="Max"
                  validateStatus={axisY.max.length === 0 || axisY.max <= axisY.min || axisY.max === "-" ? "error" : "success"}
                  help={axisY.max.length === 0 || axisY.max <= axisY.min || axisY.max === "-" ? "Invalid value." : ""}
                >
                  <Input value={axisY.max} onChange={(e) => changeMaxY(e.target.value)} />
                </Form.Item>
              </div>
            </div>
          </div>
          <div>
            <Button type="primary" onClick={applySetting} disabled={checkApplyDisable()}>Save</Button>
            <Button onClick={() => setShowPopup(false)}>Cancel</Button>
          </div>
        </div>
      </div>
      {((graphType.length === 1 && graphType[0] === "box plot") || dataX.length > 0) && dataY.length > 0 ? (
        <Graph plotProp={createGraphProp()} />
      ) : <Empty />}
    </>
  );
};

SettingGraph.propTypes = {
  graphType: PropTypes.array.isRequired,
  x: PropTypes.array,
  y: PropTypes.array.isRequired,
  z: PropTypes.array,
  title: PropTypes.string
}

const buttonWrapper = css`
  position: relative;
  font-family: saira;
`;

const popupStyle = css`
  position: absolute;
  display: none;
  left: 16px;
  top: 60px;
  z-index: 100;
  width: 400px;
  background: #f1f1f1;
  border-radius: 2px;
  box-shadow: 1px 2px 6px rgba(0,0,0,.37);
  font-family: saira;
  padding: 1rem;
  &::before {
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    top: -32px;
    left: 50px;
    content: "";
    border-width: 16px;
    border-color: transparent transparent #f1f1f1 transparent;
    border-style: solid;
  }
  & > div {
    &:first-of-type {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    &:nth-of-type(3) {
      margin: 1rem 0;
    }
    &:last-of-type {
      float: right;
      & > button + button {
        margin-left: 1rem;
      }
    }
  }
`;

const selectWrapper = css`
  display: flex;
  align-items: center;
  & > div + div {
    margin-left: .5rem;
  }
`;

const inputWrapper = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  & label {
    height: 0;
  }
  & .ant-form-item {
    margin-bottom: 0;
  }
  & .ant-form-item-explain {
    min-height: 0;
    display: none;
    &.ant-form-item-explain-error {
      display: block;
    }
  }
`;

export default SettingGraph;
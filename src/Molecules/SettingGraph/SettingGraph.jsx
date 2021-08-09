import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { Button, Input, Select, Checkbox } from "antd";
import { SettingFilled } from "@ant-design/icons";
import Graph from "@Graph/Graph";

const { Option } = Select;

const SettingGraph = ({ graphType, x, y, z, title }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [optionAll, setOptionAll] = useState(true);
  const [dataX, setDataX] = useState(x);
  const [dataY, setDataY] = useState(y)
  const [optionX, setOptionX] = useState(x);
  const [minY, setMinY] = useState(Math.min(...y));
  const [maxY, setMaxY] = useState(Math.max(...y));

  let graphProp = null;

  switch(graphType) {
    case "bar":
    default:
      graphProp = {
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
      break;

    case "line":
      graphProp = {
        data: [
          {
            x: dataX,
            y: dataY,
            type: "scatter",
            name: title
          },
        ],
        layout: {
          title: title,
          font: {
            family: "Saira, 'Nunito Sans'"
          }
        }
      };
      break;

    case "box plot":
      graphProp = {
        data: [
          {
            x: dataX,
            y: dataY,
            name: title,
            marker: {color: "#3D9970"},
            type: "box",
          }
        ],
        layout: {
          title: title,
          font: {
            family: "Saira, 'Nunito Sans'"
          },
          boxmode: "group"
        }
      };
      break;

    case "density plot":
      graphProp = {
        data: [
          {
            x: dataX,
            y: dataY,
            mode: "markers",
            name: "points",
            marker: {
              color: "rgb(0,0,0)",
              size: z,
              opacity: 0.3
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
          },
        }
      };
      break;

    case "bubble chart":
      graphProp = {
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
      break;
  }

  const changePopup = () => {
    setShowPopup(!showPopup)
  };

  const changeX = (value) => {
    setOptionX(value);
    value.length !== x.length ? setOptionAll(false) : setOptionAll(true);
  };

  const changeMinY = (value) => {
    const regex = /^[+-]?\d+(\.\d{0,7})?$/g;

    if ((regex.test(value) && value < maxY) || value.length === 0) {
      setMinY(value);
    }

    console.log(value.length);
  };

  const changeMaxY = (value) => {
    const regex = /^[+-]?\d+(\.\d{0,7})?$/g;

    if ((regex.test(value) && value > minY) || value.length === 0) {
      setMaxY(value);
    }
  };

  const changeAll = () => {
    setOptionAll(!optionAll);
    !optionAll ? setOptionX(x) : setOptionX([]);
  };

  const changeApply = () => {
    if (minY.length !== 0 && maxY !== 0) {
      const newDataY = y.filter((v) => v >= minY && v <= maxY);
      if (optionX.length !== 0 && newDataY.length !== 0) {
        setDataX(optionX);
        setDataY(newDataY);
        changePopup();
      }
    }
  };

  return (
    <>
      <div css={buttonWrapper}>
        <Button
          type="dashed"
          shape="round"
          icon={<SettingFilled />}
          onClick={changePopup}
        >
          Range Setting
        </Button>
        <div css={[popupStyle, !showPopup ? { display: "none"} : ""]}>
          <div>Range Setting</div>
          <div>
            <div>Axis (X)</div>
            <div css={selectWrapper}>
              <Select
                mode="multiple"
                maxTagCount="responsive"
                showArrow
                value={optionX}
                style={{ width: "100%" }}
                dropdownStyle={{ fontFamily: "Saira" }}
                onChange={changeX}
              >
                {x.map((v, i) => <Option value={v} key={i}>{v}</Option>)}
              </Select>
              <div>
                <Checkbox checked={optionAll} onClick={changeAll}>All</Checkbox>
              </div>
            </div>
          </div>
          <div>
            <div>Axis (Y)</div>
            <div css={inputWrapper}>
              <div>
                <span>Min:</span>
                <Input value={minY} onChange={(e) => changeMinY(e.target.value)} />
              </div>
              <div>
                <span>Max:</span>
                <Input value={maxY} onChange={(e) => changeMaxY(e.target.value)} />
              </div>
            </div>
          </div>
          <div>
            <Button type="primary" shape="round" onClick={changeApply}>Apply</Button>
            <Button shape="round" onClick={changePopup}>Cancel</Button>
          </div>
        </div>
      </div>
      <Graph plotProp={graphProp} />
    </>
  );
};

SettingGraph.propTypes = {
  graphType: PropTypes.string.isRequired,
  x: PropTypes.array.isRequired,
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
  left: 16px;
  top: 60px;
  z-index: 100;
  width: 400px;
  background: #d6d6d6;
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
    border-color: transparent transparent #d6d6d6 transparent;
    border-style: solid;
  }
  & > div:first-of-type {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  & > div:nth-of-type(3) {
    margin: 1rem 0;
  }
  & > div:last-of-type {
    float: right;
    & > button + button {
      margin-left: 1rem;
    }
  }
`;

const selectWrapper = css`
  display: flex;
  align-items: center;
  & > div + div {
    margin-left: 1rem;
  }
`;

const inputWrapper = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export default SettingGraph;
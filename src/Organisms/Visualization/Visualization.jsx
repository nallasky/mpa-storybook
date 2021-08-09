import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { Select, Checkbox, Empty } from "antd";
import SettingGraph from "@SettingGraph/SettingGraph";

const { Option } = Select;

const Visualization = ({ option, data }) => {
  const { disp_order, disp_graph_f, analysis } = data.data;

  const findFalse = [];
  Object.keys(disp_graph_f).map((k) => {
    if (disp_graph_f[k] === false) {
      findFalse.push(k);
    }
  });
  const initialYZ = disp_order.filter((v) => findFalse.findIndex((x) => x === v) === -1);

  const createDataX = (value) => {
    const tempX = [];

    Object.keys(analysis).map((key) => {
      tempX.push(analysis[key][value]);
    });

    return tempX.filter((v, i) => tempX.indexOf(v) === i);
  };

  const createDataZ = (value) => {
    const tempZ = [];

    Object.keys(analysis).map((key) => {
      tempZ.push(analysis[key][value]);
    });

    return tempZ.filter((v, i) => tempZ.indexOf(v) === i);
  };

  const [graphType, setGraphType] = useState(option[0].type);
  const [optionX, setOptionX] = useState(disp_order[1]);
  const [optionY, setOptionY] = useState(initialYZ);
  const [optionZ, setOptionZ] = useState(initialYZ[0]);
  const [enableZ, setEnableZ] = useState(option[0].z_axis);
  const [optionAll, setOptionAll] = useState(true);
  const [dataX, setDataX] = useState(createDataX(disp_order[1]));
  const [dataZ, setDataZ] = useState(createDataZ(initialYZ[0]));

  const changeType = (value) => {
    setGraphType(option[value].type);
    setEnableZ(option[value].z_axis);

    if (option[value].z_axis) {
      setDataZ(createDataZ(optionZ));
    }
  };

  const changeX = (value) => {
    setOptionX(value);
    setDataX(createDataX(value));
  }

  const changeY = (values) => {
    setOptionY(initialYZ.filter((v) => values.findIndex((x) => x === v) !== -1));
    values.length !== initialYZ.length ? setOptionAll(false) : setOptionAll(true);
  };

  const changeZ = (value) => {
    setOptionZ(value);
    setDataZ(createDataZ(value));
  };

  const changeAll = () => {
    setOptionAll(!optionAll);
    !optionAll ? setOptionY(initialYZ) : setOptionY([]);
  };

  return (
    <>
      <div>
        <p css={titleStyle}>Visualization Settings</p>
        <div css={settingStyle}>
          <div>
            <span css={spanStyle}>Graph Type:</span>
            <Select value={graphType} onChange={changeType} style={{ width: 140 }} dropdownStyle={{ fontFamily: "Saira" }}>
              {option.map((v, i) => <Option value={i} key={i}>{v.type}</Option>)}
            </Select>
          </div>
          <div>
            <span css={spanStyle}>Axis (X):</span>
            <Select value={optionX} style={{ width: 280 }} dropdownStyle={{ fontFamily: "Saira" }} onChange={changeX}>
              {disp_order.map((v, i) => <Option value={v} key={i}>{v}</Option>)}
            </Select>
          </div>
          <div>
            <span css={spanStyle}>Axis (Y):</span>
            <Select
              mode="multiple"
              maxTagCount="responsive"
              showArrow
              value={optionY}
              style={{ width: 400 }}
              dropdownStyle={{ fontFamily: "Saira" }}
              onChange={changeY}
            >
              {initialYZ.map((v, i) => <Option value={v} key={i}>{v}</Option>)}
            </Select>
            <Checkbox checked={optionAll} onChange={changeAll}>All</Checkbox>
          </div>
          <div>
            <span css={spanStyle}>Axis (Z):</span>
            <Select value={optionZ} style={{ width: 280 }} dropdownStyle={{ fontFamily: "Saira" }} disabled={!enableZ} onChange={changeZ}>
              {initialYZ.map((v, i) => <Option value={v} key={i}>{v}</Option>)}
            </Select>
          </div>
        </div>
      </div>
      <div css={previewStyle}>
        <div css={previewTitleStyle}>preview</div>
        <div css={optionY.length > 0 ? previewBodyStyle : emptyWrapper}>
          {optionY.length > 0 ? (
            optionY.map((v, i) => {
              const dataY = [];

              Object.keys(analysis).map((key) => {
                dataY.push(analysis[key][v]);
              });

              if (dataY.length > 0) {
                return <div key={i}><SettingGraph graphType={graphType} x={dataX} y={dataY} z={dataZ} title={v} /></div>;
              } else {
                return "";
              }
            })
          ) : <Empty />}
        </div>
      </div>
    </>
  );
};

Visualization.propTypes = {
  option: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};

export default Visualization;

const titleStyle = css`
  font-weight: 500;
  font-size: 14px;
  font-family: saira;
`;

const settingStyle = css`
  display: flex;
  justify-content: space-between;
  font-family: saira;
  & > div:nth-of-type(3) > div {
    margin-right: 1rem;
  }
`;

const spanStyle = css`
  margin-right: 1rem;
`;

const previewStyle = css`
  margin-top: 2rem;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  font-family: saira;
  width: 100%;
  & > div {
    padding: 1rem;
  }
`;

const previewTitleStyle = css`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  border-bottom: 1px solid #d0d0d0;
`;

const previewBodyStyle = css`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
`;

const emptyWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
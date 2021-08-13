import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { Select, Checkbox, Empty } from "antd";
import SettingGraph from "@SettingGraph/SettingGraph";

const { Option } = Select;

const Visualization = ({ option, data }) => {
  const { disp_order, disp_graph_f, row } = data.data;

  const findFalse = [];
  Object.keys(disp_graph_f).map((k) => {
    if (disp_graph_f[k] === false) {
      findFalse.push(k);
    }
  });
  const initialYZ = disp_order.filter((v) => findFalse.findIndex((x) => x === v) === -1);

  const createData = (x, y, z) => {
    const tmpX = [], tmpY= {}, tmpZ = [];

    Object.keys(row).map((key) => {
      tmpX.push(row[key][x]);
      tmpZ.push(row[key][z]);
    });

    y.map((v) => {
      const tmp = [];
      Object.keys(row).map((key) => {
        tmp.push(row[key][v]);
      });
      tmpY[v] = tmp;
    });

    return {
      x: tmpX.filter((v, i) => tmpX.indexOf(v) === i),
      y: tmpY,
      z: tmpZ.filter((v, i) => tmpZ.indexOf(v) === i),
    };
  };

  const createXZdata = (value) => {
    const tmpArray = [];

    Object.keys(row).map((key) => {
      tmpArray.push(row[key][value]);
    });

    return tmpArray.filter((v, i) => tmpArray.indexOf(v) === i);
  };

  const createYdata = (arr) => {
    const tmpObj = {};

    arr.map((v) => {
      const tmp = [];
      Object.keys(row).map((key) => {
        tmp.push(row[key][v]);
      });
      tmpObj[v] = tmp;
    });

    return tmpObj;
  };

  const [graphType, setGraphType] = useState([option[0].type]);
  const [dataInfo, setDataInfo] = useState(createData(disp_order[1], initialYZ, initialYZ[0]));
  const [optionInfo, setOptionInfo] = useState({
    x: disp_order[1],
    y: initialYZ,
    z: initialYZ[0]
  });
  const [enableZ, setEnableZ] = useState(option[0].z_axis);
  const [optionAll, setOptionAll] = useState(true);

  const changeType = (value) => {
    let isEnable = false, i = 0;

    while (i < value.length) {
      const idx = option.findIndex((v) => v.type === value[i]);

      if (option[idx].z_axis) {
        isEnable = true;
        break;
      }

      i++;
    }

    setGraphType(value);
    setEnableZ(isEnable);
  };

  const changeX = (value) => {
    setOptionInfo(prevState => {
      return {
        ...prevState,
        x: value
      };
    });
    setDataInfo(prevState => {
      return {
        ...prevState,
        x: createXZdata(value)
      };
    })
  }

  const changeY = (values) => {
    setOptionInfo(prevState => {
      return {
        ...prevState,
        y: initialYZ.filter((v) => values.findIndex((x) => x === v) !== -1)
      };
    });
    setDataInfo(prevState => {
      return {
        ...prevState,
        y: createYdata(initialYZ.filter((i) => values.findIndex((j) => i === j) !== -1))
      };
    });
    values.length !== initialYZ.length ? setOptionAll(false) : setOptionAll(true);
  };

  const changeZ = (value) => {
    setOptionInfo(prevState => {
      return {
        ...prevState,
        z: value
      };
    });
    setDataInfo(prevState => {
      return {
        ...prevState,
        z: createXZdata(value)
      };
    })
  };

  const changeAll = () => {
    setOptionAll(!optionAll);
    setOptionInfo(prevState => {
      return {
        ...prevState,
        y: !optionAll ? initialYZ : []
      };
    });
    setDataInfo(prevState => {
      return {
        ...prevState,
        y: optionAll ? createYdata(initialYZ) : {}
      };
    })
  };

  return (
    <div css={mainWrapper}>
      <div css={selectWrapper}>
        <span css={titleStyle}>Visualization Setting</span>
        <hr css={hrStyle} />
        <div css={settingStyle}>
          <div>
            <span css={spanStyle}>Graph Type:</span>
            <Select
              mode="multiple"
              maxTagCount="responsive"
              showArrow
              value={graphType}
              style={{ width: 160 }}
              dropdownStyle={{ fontFamily: "Saira" }}
              onChange={changeType}
            >
              {option.map((v, i) => <Option value={v.type} key={i}>{v.type}</Option>)}
            </Select>
          </div>
          <div>
            <span css={spanStyle}>Axis (X):</span>
            <Select value={optionInfo.x} style={{ width: 260 }} dropdownStyle={{ fontFamily: "Saira" }} onChange={changeX}>
              {disp_order.map((v, i) => <Option value={v} key={i}>{v}</Option>)}
            </Select>
          </div>
          <div>
            <span css={spanStyle}>Axis (Y):</span>
            <Select
              mode="multiple"
              maxTagCount="responsive"
              showArrow
              value={optionInfo.y}
              style={{ width: 380 }}
              dropdownStyle={{ fontFamily: "Saira" }}
              onChange={changeY}
            >
              {initialYZ.map((v, i) => <Option value={v} key={i}>{v}</Option>)}
            </Select>
            <Checkbox checked={optionAll} onChange={changeAll}>All</Checkbox>
          </div>
          <div>
            <span css={spanStyle}>Axis (Z):</span>
            <Select value={optionInfo.z} style={{ width: 260 }} dropdownStyle={{ fontFamily: "Saira" }} disabled={!enableZ} onChange={changeZ}>
              {initialYZ.map((v, i) => <Option value={v} key={i}>{v}</Option>)}
            </Select>
          </div>
        </div>
      </div>
      <div css={previewStyle}>
        <div css={previewTitleStyle}>preview</div>
        <div css={Object.keys(dataInfo.y).length > 0 && graphType.length > 0 ? previewBodyStyle : emptyWrapper}>
          {Object.keys(dataInfo.y).length > 0 && graphType.length > 0 ? (
            Object.keys(dataInfo.y).map((k, i) => {
              return (
                <div key={i}>
                  <SettingGraph
                    graphType={graphType}
                    x={dataInfo.x.sort()}
                    y={dataInfo.y[k]}
                    z={enableZ ? dataInfo.z : undefined}
                    title={k}
                  />
                </div>
              );
            })
          ) : <Empty />}
        </div>
      </div>
    </div>
  );
};

Visualization.propTypes = {
  option: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};

export default Visualization;

const mainWrapper = css`
  min-width: 1440px;
`;

const selectWrapper = css`
  position: relative;
`;

const titleStyle = css`
  position: absolute;
  top: -12px;
  left: 24px;
  background: white;
  font-weight: 500;
  font-size: 14px;
  font-family: saira;
`;

const hrStyle = css`
  border-color: #f1f1f1;
  border-style: solid;
  border-width: 1px 0 0 0;
  margin-bottom: 1.5rem;
`;

const settingStyle = css`
  display: flex;
  justify-content: space-between;
  font-family: saira;
  & > div:nth-of-type(3) > div {
    margin-right: .5rem;
  }
`;

const spanStyle = css`
  margin-right: .5rem;
`;

const previewStyle = css`
  margin-top: 2rem;
  border: 1px solid #f1f1f1;
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
  border-bottom: 1px solid #f1f1f1;
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
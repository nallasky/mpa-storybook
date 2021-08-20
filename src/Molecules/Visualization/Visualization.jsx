import React, { useState } from "react";
import PropTypes from "prop-types";
import { Select, Checkbox, Empty } from "antd";
import SettingGraph from "@SettingGraph/SettingGraph";
import * as fn from "./functionGroup";
import * as sg from "./styleGroup";

const { Option } = Select;

const Visualization = ({ option, data, preview }) => {
  const { disp_order, disp_graph_f, row } = data.data;
  const initialYZ = fn.createYZdata(disp_graph_f, disp_order);

  const [graphType, setGraphType] = useState(preview ? [option[0].type] : option[0].type);
  const [dataInfo, setDataInfo] = useState(fn.createData(disp_order[1], initialYZ, initialYZ[0], row));
  const [optionInfo, setOptionInfo] = useState({
    x: disp_order[1],
    y: initialYZ,
    z: initialYZ[0]
  });
  const [enableZ, setEnableZ] = useState(option[0].z_axis);
  const [optionAll, setOptionAll] = useState(true);

  const changeType = (value) => {
    let isEnable = false, i = 0;

    if (preview) {
      while (i < value.length) {
        if (option[option.findIndex((v) => v.type === value[i])].z_axis) {
          isEnable = true;
          break;
        }

        i++;
      }
    } else {
      if (option[option.findIndex((v) => v.type === value)].z_axis) {
        isEnable = true;
      }
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
        x: fn.createXZdata(value, row)
      };
    })
  }

  const changeY = (values) => {
    setOptionInfo(prevState => {
      return {
        ...prevState,
        y: initialYZ.filter((v) => values.findIndex((y) => v === y) !== -1)
      };
    });
    setDataInfo(prevState => {
      return {
        ...prevState,
        y: fn.createYdata(initialYZ.filter((v) => values.findIndex((y) => v === y) !== -1), row)
      };
    });
     setOptionAll(values.length === initialYZ.length);
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
        z: fn.createXZdata(value, row)
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
        y: optionAll ? fn.createYdata(initialYZ, row) : {}
      };
    })
  };

  return (
    <div css={sg.mainWrapper}>
      <div css={sg.settingWrapper}>
        {preview ? (
          <>
            <span css={sg.titleStyle}>Visualization Setting</span>
            <hr css={sg.hrStyle} />
          </>
        ) : ""}
        <div css={sg.settingStyle}>
          <div>
            <span css={sg.spanStyle}>Graph Type:</span>
            {preview ? (
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
            ) : (
              <Select value={graphType} style={{ width: 160 }} dropdownStyle={{ fontFamily: "Saira" }} onChange={changeType}>
                {option.map((v, i) => <Option value={v.type} key={i}>{v.type}</Option>)}
              </Select>
            )}
          </div>
          <div>
            <span css={sg.spanStyle}>Axis (X):</span>
            <Select value={optionInfo.x} style={{ width: 260 }} dropdownStyle={{ fontFamily: "Saira" }} onChange={changeX}>
              {disp_order.map((v, i) => <Option value={v} key={i}>{v}</Option>)}
            </Select>
          </div>
          <div>
            <span css={sg.spanStyle}>Axis (Y):</span>
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
            <span css={sg.spanStyle}>Axis (Z):</span>
            <Select value={optionInfo.z} style={{ width: 260 }} dropdownStyle={{ fontFamily: "Saira" }} disabled={!enableZ} onChange={changeZ}>
              {initialYZ.map((v, i) => <Option value={v} key={i}>{v}</Option>)}
            </Select>
          </div>
        </div>
      </div>
      <div css={[sg.graphWrapper, !preview && { border: "none" }]}>
        {preview ? <div css={sg.graphTitleStyle}>preview</div> : ""}
        <div css={Object.keys(dataInfo.y).length > 0 && graphType.length > 0 ? sg.graphBodyStyle : sg.emptyWrapper}>
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
  preview: PropTypes.bool,
};

Visualization.defaultProps = {
  preview: false
};

export default Visualization;
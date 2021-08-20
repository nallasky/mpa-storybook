import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Input, DatePicker, Empty, Form } from "antd";
import { SettingFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import Graph from "@Graph/Graph";
import * as fn from "./functionGroup";
import * as sg from "./styleGroup";

const { RangePicker } = DatePicker;
const regex = /^[-]?(\d{0,20})(\.\d{0,7})?$/;

const SettingGraph = ({ graphType, xy, z, title }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [errorInfo, setErrorInfo] = useState({
    minx: false,
    maxx: false,
    miny: false,
    maxy: false
  });
  const [axisY, setAxisY] = useState({
    min: Math.min(...xy.y),
    max: Math.max(...xy.y),
  });
  const [axisX, setAxisX] = useState(fn.createXvalue(xy.x));
  const [graphProp, setGraphProp] = useState(fn.createGraphProp(graphType, xy.x, xy.y, z, title));

  const changeMinY = (value) => {
    setAxisY(prevState => {
      return {
        ...prevState,
        min: value,
      };
    });
  };

  const changeMaxY = (value) => {
    setAxisY(prevState => {
      return {
        ...prevState,
        max: value,
      };
    });
  };

  const changeMinX = (value) => {
    setAxisX(prevState => {
      return {
        ...prevState,
        min: value,
      };
    });
  };

  const changeMaxX = (value) => {
    setAxisX(prevState => {
      return {
        ...prevState,
        max: value,
      };
    });
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
    const errorMinx =
      axisX.date.length > 0 ? false : fn.regexCheck(regex, axisX.min);
    const errorMaxx =
      axisX.date.length > 0
        ? false
        : fn.regexCheck(regex, axisX.max) ||
          fn.compareErrorCheck(axisX.min, axisX.max);
    const errorMiny = fn.regexCheck(regex, axisY.min);
    const errorMaxy =
      fn.regexCheck(regex, axisY.max) ||
      fn.compareErrorCheck(axisY.min, axisY.max);

    if (errorMinx || errorMaxx || errorMiny || errorMaxy) {
      setErrorInfo({
        minx: errorMinx,
        maxx: errorMaxx,
        miny: errorMiny,
        maxy: errorMaxy
      });
    } else {
      const tmpX = [],
        tmpY = [],
        tmpZ = [];

      xy.x.map((v, i) => {
        const checkX = axisX.date.length > 0 ?
          (dayjs(v.toString()).isAfter(dayjs(axisX.date[0])) || dayjs(v.toString()).isSame(dayjs(axisX.date[0])))
          && (dayjs(v.toString()).isBefore(dayjs(axisX.date[1])) || dayjs(v.toString()).isSame(dayjs(axisX.date[1]))) :
          v >= axisX.min && v <= axisX.max;
        const checkY = xy.y[i] >= axisY.min && xy.y[i] <= axisY.max;

        if (checkX && checkY) {
          tmpX.push(v);
          tmpY.push(xy.y[i]);
          if (z !== undefined && z.length > 0) {
            tmpZ.push(z[i]);
          }
        }
      });

      setGraphProp(fn.createGraphProp(graphType, tmpX, tmpY, tmpZ, title));
      setShowPopup(false);
      setErrorInfo({
        minx: false,
        maxx: false,
        miny: false,
        maxy: false
      })
    }
  };

  useEffect(() => {
    setAxisX(fn.createXvalue(xy.x));
    setAxisY({
      min: Math.min(...xy.y),
      max: Math.max(...xy.y)
    });
  }, [xy]);

  useEffect(() => {
    setGraphProp(fn.createGraphProp(graphType, xy.x, xy.y, z, title));
  }, [graphType, xy, z, title]);

  return (
    <>
      <div css={sg.buttonWrapper}>
        <Button
          type="dashed"
          shape="round"
          icon={<SettingFilled />}
          onClick={() => setShowPopup(!showPopup)}
        >
          Range Setting
        </Button>
        <div css={[sg.popupStyle, showPopup ? { display: "block" } : ""]}>
          <div>Range Setting</div>
          <div>
            <div>
              <div>Axis (X)</div>
                {axisX.date.length > 0 ? (
                  <div css={sg.selectWrapper}>
                    <RangePicker
                      value={axisX.date}
                      showTime
                      onChange={changeDateX}
                      allowClear={false}
                    />
                  </div>
                ) : (
                  <div css={sg.inputWrapper}>
                    <div>
                      <Form.Item
                        label="Min"
                        validateStatus={errorInfo.minx ? "error" : "success"}
                        help={errorInfo.minx ? "Invalid value." : ""}
                      >
                        <Input value={axisX.min} onChange={(e) => changeMinX(e.target.value)} />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        label="Max"
                        validateStatus={errorInfo.maxx ? "error" : "success"}
                        help={errorInfo.maxx ? "Invalid value." : ""}
                      >
                        <Input value={axisX.max} onChange={(e) => changeMaxX(e.target.value)} />
                      </Form.Item>
                    </div>
                  </div>
                )}
            </div>
            <div>
              <div>Axis (Y)</div>
              <div css={sg.inputWrapper}>
                <div>
                  <Form.Item
                    label="Min"
                    validateStatus={errorInfo.miny ? "error" : "success"}
                    help={errorInfo.miny ? "Invalid value." : ""}
                  >
                    <Input value={axisY.min} onChange={(e) => changeMinY(e.target.value)} />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label="Max"
                    validateStatus={errorInfo.maxy ? "error" : "success"}
                    help={errorInfo.maxy ? "Invalid value." : ""}
                  >
                    <Input value={axisY.max} onChange={(e) => changeMaxY(e.target.value)} />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button type="primary" onClick={applySetting}>Save</Button>
            <Button onClick={() => setShowPopup(false)}>Cancel</Button>
          </div>
        </div>
      </div>
      {Object.keys(graphProp).length > 0 ? (
        <Graph plotProp={graphProp} />
      ) : <Empty />}
    </>
  );
};

SettingGraph.propTypes = {
  graphType: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  xy: PropTypes.object.isRequired,
  z: PropTypes.array,
  title: PropTypes.string
}

export default SettingGraph;
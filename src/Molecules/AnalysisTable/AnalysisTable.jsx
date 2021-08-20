import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { Table, Button, DatePicker, Select, Checkbox, Input, Empty } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import * as fn from "./functionGroup";
import * as style from "./styleGroup";

const { RangePicker } = DatePicker;
const { Option } = Select;

const AnalysisTable = ({ period, filter, aggregation, tableOrder, tableData }) => {
  const [periodVal, setPeriodVal] = useState(period.selected);
  const [showPopup, setShowPopup] = useState(false);
  const [filterVal, setFilterVal] = useState(fn.initFilterValue(filter));
  const [aggregationVal, setAggregationVal] = useState({
    main: Object.keys(aggregation).length > 0 ? aggregation.selected : "",
    sub: Object.keys(aggregation).length > 0 ? aggregation.subItem[aggregation.selected].selected : ""
  });
  const [columnData, setColumnData] = useState(fn.createColumns(tableOrder).map((v) => ({
    ...v,
    onHeaderCell: c => ({ minWidth: c.width })
  })));
  const [rowData, setRowData] = useState(fn.filteringData(fn.createDataSource(tableData), fn.initFilterValue(filter)));
  const [selectedRow, setSelectedRow] = useState([]);

  const closePopup = () => {
    setShowPopup(false);
  };

  const changeFilter = (key, val) => {
    setFilterVal(prevState => {
      return {
        ...prevState,
        [key]: Array.isArray(val) && val.length > 0 ? val.sort() : val
      };
    });
  };

  const changeAggregation = (key, val) => {
    setAggregationVal(prevState => {
      if (key === "main" && val !== "All") {
        return {
          main: val,
          sub: aggregation.subItem[val].selected
        }
      } else {
        return {
          ...prevState,
          [key]: val
        }
      }
    });
  };

  const changeAll = (key, index) => {
    filterVal[key].length === filter[index].options.length ?
      changeFilter(key, []) :
      changeFilter(key, filter[index].options);
  };

  const changePeriod = (date) => {
    setPeriodVal(date);
  };

  const changePopup = () => {
    setShowPopup(!showPopup);
  };

  const applyFilter = () => {
    setRowData(fn.filteringData(fn.createDataSource(tableData), filterVal));
    closePopup();
  };

  useEffect(() => {
    setPeriodVal([
      period.start.length > 0 ? dayjs(period.start) : "",
      period.end.length > 0 ? dayjs(period.end) : ""
    ]);
  }, [period]);

  useEffect(() => {
    setFilterVal(fn.initFilterValue(filter));
  }, [filter]);

  useEffect(() => {
    setAggregationVal({
      main: Object.keys(aggregation).length > 0 ? aggregation.selected : "",
      sub: Object.keys(aggregation).length > 0 ? aggregation.subItem[aggregation.selected].selected : ""
    });
  }, [aggregation]);

  useEffect(() => {
    setColumnData(fn.createColumns(tableOrder).map((v) => ({
      ...v,
      onHeaderCell: c => ({ minWidth: c.width })
    })));
  }, [tableOrder]);

  useEffect(() => {
    setRowData(fn.filteringData(fn.createDataSource(tableData), filterVal));
  }, [tableData]);

  return (
    <div css={style.mainWrapper}>
      <div>
        <span>Period:</span>
        <RangePicker value={periodVal} showTime onOpenChange={closePopup} onChange={changePeriod} />
        <div>
          <Button type="dashed" shape="circle" icon={<SettingOutlined />} onClick={changePopup}/>
          <div>Filter Setting</div>
          <div css={[style.popupStyle, showPopup ? { display: "block" } : ""]}>
            <div>Filter Setting</div>
            <div>
              {filter.map((v, i) => {
                return (
                  <div key={i}>
                    <div>{v.title + ":"}</div>
                    <div css={style.selectWrapper}>
                      <Select
                        mode={v.mode === "plural" ? "multiple" : ""}
                        showArrow
                        maxTagCount="responsive"
                        value={filterVal[v.target]}
                        dropdownStyle={{ fontFamily: "Saira" }}
                        onChange={(val) => changeFilter(v.target, val)}
                        style={{ fontSize: "12px", width: "100%" }}
                      >
                        {v.options.map((v, j) => <Option value={v} key={j}>{v}</Option>)}
                      </Select>
                      {v.mode === "plural" ? (
                        <Checkbox
                          checked={filterVal[v.target].length === filter[i].options.length}
                          onChange={() => changeAll(v.target, i)}
                        >All</Checkbox>
                      ) : ""}
                    </div>
                  </div>
                );
              })}
              {Object.keys(aggregation).length > 0 ? (
                <div>
                  <div>{aggregation.title + ":"}</div>
                  <div css={style.aggregationWrapper}>
                    <Select
                      value={aggregationVal.main}
                      dropdownStyle={{ fontFamily: "Saira", fontSize: "12px" }}
                      style={{ fontSize: "12px", width: "100%" }}
                      onChange={(val) => changeAggregation("main", val)}
                    >
                      {aggregation.options.sort().map((v, i) => <Option value={v} key={i}>{v}</Option>)}
                    </Select>
                    {aggregationVal.main !== "All" ? aggregation.subItem[aggregationVal.main].type === "select" ? (
                      <Select
                        value={aggregationVal.sub}
                        dropdownStyle={{ fontFamily: "Saira", fontSize: "12px" }}
                        style={{ fontSize: "12px", width: "100%", marginLeft: "0.5rem" }}
                        onChange={(val) => changeAggregation("sub", val)}
                      >
                        {aggregation.subItem[aggregationVal.main].options.sort().map((v, i) =>
                          <Option value={v} key={i}>{v}</Option>
                        )}
                      </Select>
                    ) : (
                      <Input
                        value={aggregationVal.sub}
                        style={{ marginLeft: "0.5rem", fontSize: "12px" }}
                        onChange={(e) => changeAggregation("sub", e.target.value)}
                      />
                    ) : ""}
                  </div>
                </div>
              ) : ""}
            </div>
            <div>
              <Button type="primary" onClick={applyFilter}>Apply</Button>
              <Button onClick={closePopup}>Cancel</Button>
            </div>
          </div>
        </div>
      </div>
      {rowData.length > 0 && columnData.length > 0 ? (
        <Table
          pagination={false}
          scroll={{ x: "max-content", y: 300 }}
          dataSource={rowData}
          columns={columnData}
          rowSelection={{
            selectedRowKeys: selectedRow,
            getCheckboxProps: (v) => ({
              disabled: v.Date === ""
            }),
            onChange: (v) => setSelectedRow(v)
          }}
        />
      ) : (
        <div css={style.emptyWrapper}><Empty /></div>
      )}
    </div>
  );
};

AnalysisTable.propTypes = {
  period: PropTypes.object,
  filter: PropTypes.array.isRequired,
  aggregation: PropTypes.object,
  tableOrder: PropTypes.array.isRequired,
  tableData: PropTypes.object.isRequired
};

export default AnalysisTable;
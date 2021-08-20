import React, { useState } from "react";
import { Tabs, Empty, Modal, Input, Form } from "antd";
import Button from "@Button/Button";
import { SaveOutlined, SlidersFilled, CloudDownloadOutlined } from "@ant-design/icons";
import {faChartBar, faTable} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as sg from "./styleGroup";

const { TabPane } = Tabs;

const AnalysisMain = () => {
  const [historyOpen, setHistoryOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [checkTable, setCheckTable] = useState(false);
  const [checkGraph, setCheckGraph] = useState(false);

  return (
    <>
      <AnalysisModal
        title="Save History"
        open={historyOpen}
        ok={() => setHistoryOpen(false)}
        cancel={() => setHistoryOpen(false)}
        okText="Save"
      >
        <Form.Item label="Title" style={{ marginBottom: 0 }}>
          <Input />
        </Form.Item>
      </AnalysisModal>
      <AnalysisModal
        title="Export"
        open={exportOpen}
        ok={() => setExportOpen(false)}
        cancel={() => setExportOpen(false)}
        okText="Download"
        width={400}
      >
        <div css={sg.exportModalWrapper}>
          <input type="checkbox" id="table" checked={checkTable} onChange={() => setCheckTable(!checkTable)} />
          <label htmlFor="table">
            <svg viewBox="0 0 21 21">
              <polyline points="5 10.75 8.5 14.25 16 6" />
            </svg>
            <FontAwesomeIcon icon={faTable} size="2x"/>
            <span>Table</span>
          </label>
          <input type="checkbox" id="graph" checked={checkGraph} onChange={() => setCheckGraph(!checkGraph)} />
          <label htmlFor="graph">
            <svg viewBox="0 0 21 21">
              <polyline points="5 10.75 8.5 14.25 16 6" />
            </svg>
            <FontAwesomeIcon icon={faChartBar} size="2x" />
            <span>Graph</span>
          </label>
        </div>
      </AnalysisModal>
      <div css={sg.mainWrapper}>
        <div css={sg.buttonWrapper}>
          <Button theme="white" style={{ fontWeight: "normal" }} disabled>
            <SlidersFilled /> Show Data
          </Button>
          <Button theme="white" style={{ fontWeight: "normal" }} onClick={() => setHistoryOpen(true)}>
            <SaveOutlined /> Save History
          </Button>
          <Button theme="white" style={{ fontWeight: "normal" }} onClick={() => setExportOpen(true)}>
            <CloudDownloadOutlined /> Export
          </Button>
        </div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Analysis" key="1">
            <Empty />
          </TabPane>
          <TabPane tab="Data" key="2">
            Tab 2
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

const AnalysisModal = ({ title, okText, open, ok, cancel, width, children }) => {
  return (
    <Modal
      title={title}
      visible={open}
      onOk={ok}
      onCancel={cancel}
      okText={okText}
      style={{ fontFamily: "saira" }}
      width={width}
    >
      {children}
    </Modal>
  );
};

export default AnalysisMain;
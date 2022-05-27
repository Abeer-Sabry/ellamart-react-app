import React from "react";
// ----- COMPONENTS ----- //
import Description from "../Description/Description";
import CustomProduct from "../CustomProduct/CustomProduct";
import Shipping from "../Shipping/Shipping";
// ----- STYLED-COMPONENT ----- //
import { Wrapper } from "./ResponsiveTabStyle";
// ----- REACT-ICONS ----- //
import { FaClipboardList, FaTruck, FaCertificate } from "react-icons/fa";
// ----- ANT-DESIGN ----- //
import { Tabs } from "antd";
const { TabPane } = Tabs;
const ResponsiveTab = () => {
  return (
    <Wrapper>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Description" key="1" closeIcon={<FaClipboardList />}>
          <Description />
        </TabPane>
        <TabPane tab="Shipping & Returns " key="2">
          <Shipping />
        </TabPane>
        <TabPane tab="RETURNS POLICY" key="3">
          <CustomProduct />
        </TabPane>
      </Tabs>
    </Wrapper>
  );
};

export default ResponsiveTab;

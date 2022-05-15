import React from "react";
import { Select, Breadcrumb } from "antd";
import { SelectWrapper, BarWrapper } from "./TheMainBarStyle";
import { FaTh, FaThList } from "react-icons/fa";
const { Option } = Select;
const TheMainBar = () => {
  return (
    <BarWrapper>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>New In</Breadcrumb.Item>
      </Breadcrumb>

      <SelectWrapper>
        <div className="main">
          <span>Items per page </span>
          <Select labelInValue defaultValue={{ value: "24" }} style={{ width: 200 }}>
            <Option value="12">12</Option>
            <Option value="16">16</Option>
            <Option value="20">20</Option>
            <Option value="24">24</Option>
            <Option value="30">30</Option>
            <Option value="50">50</Option>
          </Select>
        </div>
        <div className="main">
          <span>Sort by</span>
          <Select labelInValue defaultValue={{ value: "Best selling" }} style={{ width: 200 }}>
            <Option value="Featured">Featured</Option>
            <Option value="Best selling">Best selling</Option>
            <Option value="Alphabetically, A-Z">Alphabetically, A-Z</Option>
            <Option value="Alphabetically, Z-A">Alphabetically, Z-A</Option>
            <Option value="Price, low to high">Price, low to high</Option>
            <Option value="Price, high to low">Price, high to low</Option>
            <Option value="Date, old to new">Date, old to new</Option>
            <Option value="Date, new to old">Date, new to old</Option>
          </Select>
        </div>
        <div className="icons">
          <span>
            <FaTh />
          </span>
          <span>
            <FaThList />
          </span>
        </div>
      </SelectWrapper>
    </BarWrapper>
  );
};

export default TheMainBar;

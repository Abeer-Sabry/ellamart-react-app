import React from "react";
// ----- AND-DESIGN ----- //
import { Select, Breadcrumb } from "antd";
// ----- STYLED-COMPONENT ----- //
import { SelectWrapper, BarWrapper, ResponsiveBreadCrumb } from "./TheMainBarStyle";
// ----- REACT-ICONS ----- //
import { FaTh, FaThList, FaSlidersH } from "react-icons/fa";
// ----- REDUX AND ACTIONS ----- //
import { gridViewAction, listViewAction } from "../../Redux/fetchProduct/fetchProductSlice";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

const TheMainBar = () => {
  const dispatch = useDispatch();
  const { productView } = useSelector(state => state.products);

  return (
    <>
      {/* ----- RESPONSIVE-BREAD-CRUMB ----- */}
      <ResponsiveBreadCrumb>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>New In</Breadcrumb.Item>
        </Breadcrumb>
      </ResponsiveBreadCrumb>

      <BarWrapper>
        <Breadcrumb className="breadCrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>New In</Breadcrumb.Item>
        </Breadcrumb>
        {/* -----  RESPONSIVE-SLIDER-ICON ----- */}
        <span className="sliderIcon">
          <FaSlidersH />
        </span>

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
            <span className="sort">Sort by</span>
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
            <span
              onClick={() => dispatch(gridViewAction())}
              style={{ color: `${productView ? "grey" : "black"}` }}
            >
              <FaTh />
            </span>
            <span
              onClick={() => dispatch(listViewAction())}
              style={{ color: `${!productView ? "grey" : "black"}` }}
            >
              <FaThList />
            </span>
          </div>
        </SelectWrapper>
      </BarWrapper>
    </>
  );
};

export default TheMainBar;

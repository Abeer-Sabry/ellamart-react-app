import React, { useState } from "react";
// ---- REACT-ROUTER-DOM ---- //
import { Link } from "react-router-dom";
// ---- STYLED-COMPONENTS ---- //
import {
  Wrapper,
  List,
  Section,
  ColorWrapper,
  PriceBox,
  CheckWrapper,
  FeaturedProduct,
  CustomBlock,
  AdContainer,
} from "./MainBarStyle";
// ---- REUSEABLE-COMPONENTS ---- //
import { DropLinks } from "../../../reusableComponents/SubLinks/SubLinks";
import { Box } from "../../../reusableComponents/BoxDiv/Box";
import { OptionButton } from "../../../reusableComponents/CustomButtons/CustomButtons";
import { CategoryDiv } from "../../../reusableComponents/CategoryDiv/CategoryDiv";
// ---- REACT-ICONS ---- //
import { BsCheck } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
// ---- ANT-DESIGN ---- //
// import "antd/dist/antd.css";
import { Checkbox } from "antd";

const colors = [
  {
    id: 1,
    hex: "#000000",
    name: "Black",
  },
  {
    id: 2,
    hex: "#F5F5DC",
    name: "Beige",
  },
  {
    id: 3,
    hex: "#708090",
    name: "slateGray",
  },
  {
    id: 4,
    hex: "#F4A460",
    name: "sandyBrown",
  },
  {
    id: 5,
    hex: "#FF8C00",
    name: "darkOrange",
  },
  {
    id: 6,
    hex: "#F08080",
    name: "lightCoral",
  },
  {
    id: 7,
    hex: "#808080",
    name: "grey",
  },
];

const MainFilterBar = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  // console.log("colorState", selectedColor);

  return (
    <Wrapper>
      <span className="closeIcon">
        <IoMdClose />
      </span>
      <Section>
        <h4>Categories</h4>
        <List>
          <CategoryDiv>Cosmopolis</CategoryDiv> <CategoryDiv>Suitó</CategoryDiv>
          <CategoryDiv>Milancélos</CategoryDiv>
          <CategoryDiv>Blazéro</CategoryDiv>
          <CategoryDiv>Glamos</CategoryDiv>
          <CategoryDiv>Metropolis</CategoryDiv>
          <CategoryDiv>Valkyrio</CategoryDiv>
          <CategoryDiv>Scarvéro</CategoryDiv>
          <CategoryDiv>Congué</CategoryDiv>
        </List>
      </Section>
      {/* ---- COLORS ---- */}
      <Section>
        <h4> - color</h4>
        <ColorWrapper>
          {colors.map(color => (
            <button
              key={color.id}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color)}
              className={`${selectedColor === color ? "active" : ""}`}
            >
              {selectedColor === color ? (
                <span>
                  <BsCheck />
                </span>
              ) : null}
            </button>
          ))}
        </ColorWrapper>
      </Section>
      {/* ---- SIZE ---- */}
      <Section>
        <h4> ـ size</h4>
        <Box>XS</Box>
        <Box>S</Box>
        <Box>M</Box>
        <Box>L</Box>
        <Box>XL</Box>
      </Section>
      {/* ---- PRICE ---- */}
      <Section>
        <h4> ـ price</h4>
        <PriceBox>
          <div>
            <span>$</span> <span>0</span>
          </div>
          <span> to</span>
          <div>
            <span>$</span> <span>399</span>
          </div>
        </PriceBox>
        <button className="applyButton">Apply</button>
      </Section>
      {/* ---- BRAND ---- */}
      <Section>
        <h4> -Brand</h4>
        <CheckWrapper>
          <Checkbox>Ella - Halothemes </Checkbox>
          <span>18</span>
        </CheckWrapper>
        <CheckWrapper>
          <Checkbox>Sodling</Checkbox>
          <span>4</span>
        </CheckWrapper>
      </Section>
      {/* ---- PRODUCT-TYPE ---- */}
      <Section>
        <h4> -Product type</h4>
        <CheckWrapper>
          <Checkbox>Dincidunteros</Checkbox>
          <span>4</span>
        </CheckWrapper>
      </Section>
      {/* ---- AVAILABILITY ---- */}
      <Section>
        <h4> -Availability</h4>
        <CheckWrapper>
          <Checkbox>In stock </Checkbox>
          <span>4</span>
        </CheckWrapper>
        <CheckWrapper>
          <Checkbox>Out of stock</Checkbox>
          <span>4</span>
        </CheckWrapper>
      </Section>

      <FeaturedProduct>
        <img
          src="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-3_ac1fbe5d-2af7-4cc3-9e7f-98dc1d235043.jpg?v=1616831444"
          alt=""
        />
        <p>Giother Laptop Nodels Coped Permi Unde Ona - Black</p>
        <span className="average">from</span>
        <span className="thePrice">$49.00</span>
        <OptionButton to="">select options</OptionButton>
      </FeaturedProduct>

      <AdContainer>
        <Link to="">
          <img
            src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/mega-menu-1_1024x1024_crop_center.jpg?v=1620101887"
            alt=""
          />
        </Link>
        <div className="overlay"></div>
      </AdContainer>
      <CustomBlock>
        <h4>Custom Block CMS</h4>
        <p className="paragraph1">
          Custom CMS block displayed at the left sidebar on the Catalog Page. Put your own content
          here: text, html, images, media... or whatever you like.
        </p>
        <p>
          There are many similar sample content placeholders across the store. All editable from
          Theme Editor.
        </p>
      </CustomBlock>
    </Wrapper>
  );
};

export default MainFilterBar;

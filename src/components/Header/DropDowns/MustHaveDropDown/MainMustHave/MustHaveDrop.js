import React from "react";
// ----- STYLED-COMPONENT ----- //
import { MustWrapper, LinksWrapper, List, ProductWrapper } from "./MustHaveStyle";
// ----- REUSABLE-COMPONENTs ----- //
import { DropDownTitle } from "../../../../../reusableComponents/CategoryDiv/CategoryDiv";
import { DropLinks } from "../../../../../reusableComponents/SubLinks/SubLinks";

const MustHaveDrop = () => {
  return (
    <MustWrapper>
      <LinksWrapper>
        <div>
          <DropDownTitle>What’s New</DropDownTitle>
          <DropDownTitle>Best Selling</DropDownTitle>
          <DropDownTitle>Top Rated</DropDownTitle>
          <DropDownTitle>Most Popular</DropDownTitle>
          <DropDownTitle>Editor’s Picks</DropDownTitle>
          <DropDownTitle>On Sale</DropDownTitle>
        </div>
        <List>
          <DropDownTitle>Harum Quidem</DropDownTitle>
          <li>
            <DropLinks to="">Cosmopolis</DropLinks>
          </li>
          <li>
            <DropLinks to="">Suitó</DropLinks>
          </li>
          <li>
            <DropLinks to="">Milancélos</DropLinks>
          </li>
          <li>
            <DropLinks to="">Blazéro</DropLinks>
          </li>
          <li>
            <DropLinks to="">Glamos</DropLinks>
          </li>
          <li>
            <DropLinks to="">Metropolis</DropLinks>
          </li>
        </List>
        <List>
          <DropDownTitle>Possimus</DropDownTitle>
          <li>
            <DropLinks to="">Cosmopolis</DropLinks>
          </li>
          <li>
            <DropLinks to="">Suitó</DropLinks>
          </li>
          <li>
            <DropLinks to="">Milancélos</DropLinks>
          </li>
          <li>
            <DropLinks to="">Blazéro</DropLinks>
          </li>
          <li>
            <DropLinks to="">Glamos</DropLinks>
          </li>
          <li>
            <DropLinks to="">Metropolis</DropLinks>
          </li>
        </List>
        <List>
          <DropDownTitle>Necessitatibus</DropDownTitle>
          <li>
            <DropLinks to="">Cosmopolis</DropLinks>
          </li>
          <li>
            <DropLinks to="">Suitó</DropLinks>
          </li>
          <li>
            <DropLinks to="">Milancélos</DropLinks>
          </li>
          <li>
            <DropLinks to="">Blazéro</DropLinks>
          </li>
          <li>
            <DropLinks to="">Glamos</DropLinks>
          </li>
          <li>
            <DropLinks to="">Metropolis</DropLinks>
          </li>
        </List>
        <List>
          <DropDownTitle>Molestias</DropDownTitle>
          <li>
            <DropLinks to="">Cosmopolis</DropLinks>
          </li>
          <li>
            <DropLinks to="">Suitó</DropLinks>
          </li>
          <li>
            <DropLinks to="">Milancélos</DropLinks>
          </li>
          <li>
            <DropLinks to="">Blazéro</DropLinks>
          </li>
          <li>
            <DropLinks to="">Glamos</DropLinks>
          </li>
          <li>
            <DropLinks to="">Metropolis</DropLinks>
          </li>
        </List>
        <List>
          <DropDownTitle> Ex Machina</DropDownTitle>
          <li>
            <DropLinks to="">Cosmopolis</DropLinks>
          </li>
          <li>
            <DropLinks to="">Suitó</DropLinks>
          </li>
          <li>
            <DropLinks to="">Milancélos</DropLinks>
          </li>
          <li>
            <DropLinks to="">Blazéro</DropLinks>
          </li>
          <li>
            <DropLinks to="">Glamos</DropLinks>
          </li>
          <li>
            <DropLinks to="">Metropolis</DropLinks>
          </li>
        </List>
      </LinksWrapper>
      <ProductWrapper>
        <img
          src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/mega-image-2.jpg?v=1617417603"
          alt=""
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/mega-image-3.jpg?v=1617417612"
          alt=""
        />
      </ProductWrapper>
    </MustWrapper>
  );
};

export default MustHaveDrop;

import React from "react";
// ----- STYLED-COMPONENT ----- //
import { LinksWrapper, List, NewInWrapper } from "./NewInStyle";
// ----- REUSABLE-COMPONENTs ----- //
import { DropDownTitle } from "../../../../../reusableComponents/CategoryDiv/CategoryDiv";
import { DropLinks } from "../../../../../reusableComponents/SubLinks/SubLinks";

const NewInDrop = () => {
  return (
    <NewInWrapper>
      <LinksWrapper>
        <div>
          <DropDownTitle>What’s New</DropDownTitle>
          <DropDownTitle>Best Selling</DropDownTitle>
          <DropDownTitle>Top Rated</DropDownTitle>
          <DropDownTitle>Most Popular</DropDownTitle>
          <DropDownTitle>Editor’s Picks</DropDownTitle>
          <DropDownTitle>On Sale</DropDownTitle>
        </div>
        <div>
          <DropDownTitle>Harum Quidem</DropDownTitle>
          <List>
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
        </div>
        <div>
          <DropDownTitle>Possimus</DropDownTitle>
          <List>
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
        </div>
        <div>
          <DropDownTitle>Necessitatibus</DropDownTitle>
          <List>
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
        </div>
        <div>
          <DropDownTitle>Molestias</DropDownTitle>
          <List>
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
        </div>
        <div>
          <DropDownTitle> Ex Machina</DropDownTitle>
          <List>
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
        </div>
      </LinksWrapper>
    </NewInWrapper>
  );
};

export default NewInDrop;

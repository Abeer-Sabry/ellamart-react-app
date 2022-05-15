import React from "react";
// ----- STYLED-COMPONENT ----- //
import { Wrapper } from "./CustomProductStyle";

const CustomProduct = () => {
  return (
    <Wrapper>
      <p className="description">
        Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor,
        elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
        pharetras loremos.Donec pretium egestas sapien et mollis. Pellentesque diam dolor cosmopolis etos lobortis.
      </p>
      <div>
        <span>Comodous:</span>
        <p>Comodous in tempor ullamcorper miaculis</p>
      </div>
      <div>
        <span>Mattis laoreet:</span>
        <p>Pellentesque vitae neque mollis urna mattis laoreet.</p>
      </div>
      <div>
        <span>Divamus de ametos:</span>
        <p>Divamus sit amet purus justo.</p>
      </div>
      <div>
        <span>Molestie:</span>
        <p>Proin molestie egestas orci ac suscipit risus posuere loremous</p>
      </div>
    </Wrapper>
  );
};

export default CustomProduct;

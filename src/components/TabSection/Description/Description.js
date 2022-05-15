import React from "react";
// ----- STYLED-COMPONENT ----- //
import { LaptopWrapper, ListWrapper, Wrapper } from "./DescriptionStyle";

const Description = () => {
  return (
    <Wrapper>
      <p className="description">
        {" "}
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati del cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
        expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
        quod maxime placeat facere possimus.
      </p>
      <LaptopWrapper>
        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/description-1.jpg?v=1617880116" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur delos adipiscing elit. Duis risus leo milance elementum in malesuada
          an darius ut augue. Cras sit amet lectus et justo feugiat euismod...
        </p>
      </LaptopWrapper>
      <ListWrapper>
        <div>
          <h4>Sample Unordered List</h4>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo milance elementum in malesuada an
            darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat nulla non felis id metus.
          </p>
          <ul>
            <li>
              <p>Comodous in tempor ullamcorper miaculis.</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit ameto.</p>
            </li>
            <li>
              <p>Duis risus leo elementum darius.</p>
            </li>
            <li>
              <p>Pellentesque vitae neque mollis urna mattis.</p>
            </li>
            <li>
              <p>Divamus sit amet purus justo.</p>
            </li>
          </ul>
        </div>
        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/description-2.jpg?v=1617880116" alt="" />
      </ListWrapper>
    </Wrapper>
  );
};

export default Description;

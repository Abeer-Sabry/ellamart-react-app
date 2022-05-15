import React, { useState } from "react";
// ----- COMPONENTS ----- //
import SingleProductLayout from "../../components/ProductLayout/ProductLayout";
// ----- STYLED-COMPONENTS ----- //
import { TabTitle } from "./SingleProductStyle";
// ----- CONSTANTS ----- //
import { CustomContainer } from "../../constants";
// ----- TABS ----- //
import tabs from "../../components/TabSection/Tabs";

const SingleProduct = () => {
  // ---TABS-STATE
  const [activeTab, setActiveTab] = useState("Description");
  return (
    <>
      <SingleProductLayout />
      {/* TABS-SECTION */}
      <TabTitle>
        <CustomContainer>
          {tabs.map(({ name, icon }, index) => (
            <div key={index} onClick={() => setActiveTab(name)} className={activeTab === name ? "active" : ""}>
              <span>{icon}</span>
              <p>{name}</p>
            </div>
          ))}
        </CustomContainer>
      </TabTitle>
      <CustomContainer>
        {tabs.map(({ name, component }, index) => activeTab === name && <div key={index}>{component}</div>)}
      </CustomContainer>
      {/* TABS-SECTION-END */}
    </>
  );
};

export default SingleProduct;

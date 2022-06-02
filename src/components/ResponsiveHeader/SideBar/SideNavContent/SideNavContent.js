import React, { useEffect, useState } from "react";
// ------ REDUX AND ACTIONS ------ //
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNavContentAsync } from "../../../../Redux/FetchNavContent/NavContentSlice";
import SideDropDown from "../SideDropDown/SideDropDown";
import SideNavRow from "../SideNavRow/SideNavRow";
// ------ STYLED-COMPONENT ------ //
import { ContentMainWrapper, NavContentWrapper } from "./SideContentStyle";

const SideNavContent = () => {
  // ---- State Responsible For Storing All Data In Navbar
  const { entryStore } = useSelector(state => state.navContent);
  const dispatch = useDispatch();
  console.log("stateEntry", entryStore.entries);
  // ---- State Responsible For Storing DropDown
  const [dropdownEntries, setDropdownEntries] = useState(null);

  useEffect(() => {
    dispatch(getNavContentAsync());
  }, [dispatch]);
  return (
    <ContentMainWrapper>
      {entryStore &&
        entryStore.map((entry, index) => {
          return (
            <>
              <NavContentWrapper key={index}>{entry.title}</NavContentWrapper>

              {entryStore &&
                entry.entries.map((subEntry, index) => {
                  if (subEntry.type) {
                    !dropdownEntries && setDropdownEntries(index);
                    return <SideDropDown entries={entry.entries.slice(index + 1)} />;
                  } else if (dropdownEntries && index < dropdownEntries) {
                    return !entry.type.rows ? (
                      <div className="anchor">{subEntry.title}</div>
                    ) : (
                      <SideNavRow text={subEntry.title} entries={subEntry.entries} />
                    );
                  }
                })}
            </>
          );
        })}
    </ContentMainWrapper>
  );
};

export default SideNavContent;

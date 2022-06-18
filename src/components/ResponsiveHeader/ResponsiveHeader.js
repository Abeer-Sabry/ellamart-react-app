import React, { useEffect, useState } from "react";
// ----- STYLED-COMPONENT ----- //
import { ResHeaderWrap, OverlayDiv, CloseNav } from "./ResponsiveHeaderStyle";
// ----- COMPONENTS ----- //
import SideBar from "./SideBar/SideBar";
// ----- REUSABLE-COMPONENT ----- //
import CartIcon from "../../reusableComponents/CartIcon/CartIcon";
// ----- CONSTANTS ----- //
import { CustomContainer } from "../../constants";
// ----- REACT-ICONS ----- //
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
// ---- REACT-TRANSITION-PLUGIN ----- //
import { Transition } from "react-transition-group";
// ---- REDUX AND ACTIONS ----- //
import { useDispatch, useSelector } from "react-redux";
import { getNavContentAsync } from "../../Redux/FetchNavContent/NavContentSlice";
import { Link } from "react-router-dom";

const ResponsiveHeader = () => {
  // --- Responsible for opening and Closing sideNav //
  const [openBar, setOpenBar] = useState(false);
  // --- Responsible for SideNavContent //
  const { entryStore } = useSelector(state => state.navContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNavContentAsync());
  }, [dispatch]);
  return (
    <CustomContainer>
      <ResHeaderWrap>
        <div>
          <span onClick={() => setOpenBar(true)}>
            <HiOutlineMenu />
          </span>
          <Link to="/">
            <div className="logoImg">
              <img
                src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/logo-footer.png?v=1615513680"
                alt=""
              />
            </div>
          </Link>
          <span className="cart">
            <CartIcon to="/cart" />
          </span>
        </div>
      </ResHeaderWrap>
      {/* ----- RESPONSIVE-SIDEBAR ----- */}

      <Transition in={openBar && entryStore} timeout={300} mountOnEnter unmountOnExit>
        {state => {
          return (
            <>
              <SideBar state={state} />
              <OverlayDiv onClick={() => setOpenBar(false)} />
              <CloseNav>
                <IoCloseSharp
                  style={
                    state === "entering"
                      ? { animation: "show 0.3s forwards" }
                      : state === "entered"
                      ? { opacity: "1" }
                      : { animation: "show 0.3s reverse forwards" }
                  }
                  onClick={() => setOpenBar(false)}
                />
              </CloseNav>
            </>
          );
        }}
      </Transition>
    </CustomContainer>
  );
};

export default ResponsiveHeader;

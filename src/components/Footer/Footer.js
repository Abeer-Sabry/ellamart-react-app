import React from "react";
import { Link } from "react-router-dom";
// ----- STYLED-COMPONENTS ----- //
import { Wrapper, Contact, SocialIcons, FooterAd, CopyRight } from "./FooterStyle";
// ----- REUSABLE-COMPONENTS ----- //
import { Input } from "../../reusableComponents/Input/CustomInputStyle";
import { CustomButton } from "../../reusableComponents/CustomButtons/CustomButtons";
import { FooterLinks } from "../../reusableComponents/SubLinks/SubLinks";
// ----- CONSTANTS ----- //
import { CustomContainer } from "../../constants";
// ----- REACT-ICONS ----- //
import { BsTelephoneFill, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { FaPinterestP, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <h2>Subscribe to our newsletter </h2>
        <p>Get the latest updates on new products and upcoming sales </p>
        <form action="">
          <Input placeholder="enter your email address" />
          <CustomButton>Subscribe</CustomButton>
        </form>
        <CustomContainer className="content">
          <div>
            <h3>Categories </h3>
            <FooterLinks to="">Appliances</FooterLinks>
            <FooterLinks to="">Computers & Laptops</FooterLinks>
            <FooterLinks to="">Cameras</FooterLinks>
            <FooterLinks to="">Mobile Phones & Tablets</FooterLinks>
            <FooterLinks to="">Televisions</FooterLinks>
            <FooterLinks to="">Video Games & Systems</FooterLinks>
            <FooterLinks to="">Weekly Deals</FooterLinks>
          </div>
          <div>
            <h3>Further Info.</h3>
            <FooterLinks to="">About us </FooterLinks>
            <FooterLinks to="">Gift Certificates </FooterLinks>
            <FooterLinks to="">Theme Styles </FooterLinks>
            <FooterLinks to="">Contact us </FooterLinks>
            <FooterLinks to="">Blog</FooterLinks>
            <FooterLinks to="">Brands</FooterLinks>
            <FooterLinks to="">Sitemap</FooterLinks>
          </div>
          <div>
            <h3>Customer Service</h3>
            <FooterLinks to="">Help & FAQs </FooterLinks>
            <FooterLinks to="">Terms of Conditions </FooterLinks>
            <FooterLinks to="">Privacy Policy </FooterLinks>
            <FooterLinks to="">Online Returns Policy </FooterLinks>
            <FooterLinks to="">Rewards Program</FooterLinks>
            <FooterLinks to="">Rebate Center</FooterLinks>
            <FooterLinks to="">Partners</FooterLinks>
          </div>
          <div>
            <Link to="">
              <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/logo-footer.png?v=1615513680" alt="" />
            </Link>
            <Contact>
              <span>
                {" "}
                <MdLocationPin />
              </span>
              <p> 685 Market Street San Francisco, CA 94105, US</p>
            </Contact>
            <Contact>
              <span>
                {" "}
                <BsTelephoneFill />
              </span>
              <p>Call us at (415) 555-5555 </p>
            </Contact>
            <Contact>
              <span>
                <MdEmail />
              </span>
              <p>
                Email: <Link to="">example@domain.com</Link>{" "}
              </p>
            </Contact>
            <SocialIcons>
              <Link to="">
                <ImFacebook />
              </Link>
              <Link to="">
                <BsTwitter />
              </Link>
              <Link to="">
                <BsInstagram />
              </Link>
              <Link to="">
                <FaPinterestP />
              </Link>
              <Link to="">
                <BsYoutube />
              </Link>
              <Link to="">
                <FaTiktok />
              </Link>
            </SocialIcons>
          </div>
        </CustomContainer>
        <FooterAd>
          <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/1_x37.png?v=1615514832" alt="" />
        </FooterAd>
      </Wrapper>
      <CustomContainer>
        <CopyRight>
          <p>© 2022 Ella Demo. All Rights Reserved. Powered by Abeer Sabry. </p>
        </CopyRight>
      </CustomContainer>
    </>
  );
};

export default Footer;

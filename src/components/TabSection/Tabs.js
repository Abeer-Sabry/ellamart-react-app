// ----- COMPONENTS ----- //
import Description from "./Description/Description";
import Shipping from "./Shipping/Shipping";
import CustomProduct from "./CustomProduct/CustomProduct";
// ----- ICONS ----- //
import { FaClipboardList, FaTruck, FaCertificate } from "react-icons/fa";

const tabs = [
  {
    name: "Description ",
    component: <Description />,
    icon: <FaClipboardList />,
  },
  {
    name: "Shipping & Returns",
    component: <Shipping />,
    icon: <FaTruck />,
  },
  {
    name: "Custom Product Tab",
    component: <CustomProduct />,
    icon: <FaCertificate />,
  },
];
export default tabs;

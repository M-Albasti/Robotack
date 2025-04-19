//* packages import
import React from "react";
import { AntDesign } from "@expo/vector-icons";

//* assets import
import Home from "@/assets/icons/svgs/Home";
import Joy from "@/assets/icons/svgs/Joy";
import MyCard from "@/assets/icons/svgs/MyCard";
import Transactions from "@/assets/icons/svgs/Transactions";

interface TabBarButtonProps {
  iconName: string;
  color: string;
}

const TabBarIcon = ({ iconName, color }: TabBarButtonProps) => {
  let IconComponent;
  switch (iconName) {
    case "Home":
      IconComponent = <Home color={color} />;
      break;
    case "JOY":
      IconComponent = <Joy color={color} />;
      break;
    case "Transactions":
      IconComponent = <Transactions color={color} />;
      break;
    case "MyCard":
      IconComponent = <AntDesign name="idcard" color={color} size={24} />;
      break;
    default:
      IconComponent = null;
  }

  return IconComponent;
};

export default TabBarIcon;

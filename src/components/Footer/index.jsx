import * as React from "react";
// import { NavigationLinks } from "./NavigationLinks";
// import { SocialLinks } from "./SocialLinks";
import { Input, InputNumber } from 'antd';

import './footer.scss';

const Footer = () => {
    const navigationItems = [
    { label: "Recipes", href: "/recipes" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "About us", href: "/about" }
  ];

  return (
    <footer>
    </footer>
  );
}


export default Footer;
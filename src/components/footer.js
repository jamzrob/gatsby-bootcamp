import React from 'react';
import { Link, graphql, useStaticQuery } from  'gatsby';

import footerStyles from './foot.module.scss'
const Footer = () => {

  return (
    <footer className={footerStyles.footer}>
      <p>Created By James Raubenheimer, © 2019</p>
    </footer>
  );
}

export default Footer;

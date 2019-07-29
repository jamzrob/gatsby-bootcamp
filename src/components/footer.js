import React from 'react';
import { Link, graphql, useStaticQuery } from  'gatsby';

import footerStyles from './foot.module.scss'
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
         }
      }
    } 
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>Created By {data.site.siteMetadata.author}, © 2019</p>
    </footer>
  );
}

export default Footer;

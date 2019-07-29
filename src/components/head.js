import React from 'react';
import { Helmet } from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';


const Head = ({title}) => {
  return (
    <Helmet title={`${title}`}/>
  );
};

export default Head;
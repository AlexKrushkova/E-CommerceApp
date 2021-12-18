import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from '../components/Product';
import { useState, useEffect } from "react";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Products = ({cat, filters, sort}) => {
    console.log(cat,filters, sort);
  return (
    <Container>
      {popularProducts.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );

}
export default Products;

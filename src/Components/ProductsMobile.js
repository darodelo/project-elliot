import '../Styles/Products.css';
import '../Styles/material-icons.css';
import { PRODUCTCARD } from "./ProductsCardsDB";



import React from 'react'

const Products = () => {
  return (
    <div className='background-products'>
      <h2 id='products' className='title-products'>Products</h2>
      <div className="products-mobile">
          {PRODUCTCARD.map((products) => (
            <div className="products-card" key={products.Id}>
              <p className="material-icons">{products.Img}</p>
              <h3 className="products-headline">{products.Headline}</h3>
              <p className="products-description-mobile">{products.Description}</p>
            </div>
          ))}
        </div> 
    </div>
  )
}

export default Products
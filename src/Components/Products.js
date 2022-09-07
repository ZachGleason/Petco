import React from 'react';
import '../Styles/Products.css';
import one from '../Assets/product_one.webp';
import two from '../Assets/product_two.webp';

export const Products = () => {
  return (
    <div className='products'>
        <div className='products_text'>
            <p>Best Selling Products</p>
        </div>
        <div className='product_items'>
            <div className='product_one_div'>
                <div>
                    <img 
                    src={one}
                    alt="product"
                    className='product_one'
                    />
                </div>
                <div className='product_one_text'>
                    <p>Halo Elevate Dog</p>
                    <p>Grain Free Salmon</p>
                    <h6>$77.25</h6>
                    <h5>Add to cart</h5>
                </div>
            </div>

            <div className='product_one_div'>
                <div>
                    <img 
                    src={two}
                    alt="product"
                    className='product_one'
                    />
                </div>
                <div className='product_one_text'>
                    <p>Okocat Low</p>
                    <p>Tracking Litter</p>
                    <h6>$14.99</h6>
                    <h5>Add to Cart</h5>
                </div>
            </div>

            <div className='product_one_div'>
                <div>
                    <img 
                    src={one}
                    alt="product"
                    className='product_one'
                    />
                </div>
                <div className='product_one_text'>
                    <p>Cat Kettle</p>
                    <p>Snack Food</p>
                    <h6>$10.99</h6>
                    <h5>Add to Cart</h5>
                </div>
            </div>

            <div className='product_one_div'>
                <div>
                    <img 
                    src={two}
                    alt="product"
                    className='product_one'
                    />
                </div>
                <div className='product_one_text'>
                    <p>Dog Treat</p>
                    <p>Snack Goods</p>
                    <h6>$10.99</h6>
                    <h5>Add to Cart</h5>
                </div>
            </div>

        </div>
    </div>
  )
}

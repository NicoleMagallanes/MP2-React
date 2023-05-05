import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import Commerce from '@chec/commerce.js';

function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const commerce = new Commerce('pk_51720ae47ded79d12b2ae163d6415b6ad1f2b40b8a004');

        commerce.products.list().then((response) => {
            setProducts(response.data);
            console.log(response.data)
        });

    }, []);
    return (
        <>
            <h2>Products</h2>
            <div className="products" id="products">
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    )
}


export default ProductsList;
/*
ProductsList.propTypes = {
    products: PropTypes.array,
};
*/
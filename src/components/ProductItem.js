import React, { useState } from "react";
import PropTypes from 'prop-types';
import { stripHtml } from 'string-strip-html';
import './Modal.css'
const ProductItem = ({ product, onAddToCart }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCartClick = () => {
    setIsModalVisible(true);
  };

  const handleConfirmClick = () => {
    onAddToCart(product.id, quantity);
    setIsModalVisible(false);
  };

  const { result } = stripHtml(product.description);

  return (
    <div className="product__card">
      <img className="product__image" src={product.image.url} alt={product.name} />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p className="product__description">{result}</p>
        <div className="product__details">
          <p className="product__price">{product.price.formatted_with_symbol}</p>
        </div>
        <div>
          <button className="buy-now" onClick={handleAddToCartClick}>
            Add to Cart
          </button>
          {isModalVisible && (
            <div className="modall">
              <div className="modal-content">
                <span className="close" onClick={() => setIsModalVisible(false)}>
                  &times;
                </span>
                <p>Add the product to the cart</p>
                <label>
                  {product.name} Quantity:
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min={1}
                  />
                </label>
                <button onClick={handleConfirmClick}>Confirm</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
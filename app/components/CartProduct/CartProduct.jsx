import React, { PropTypes } from 'react';
import Button from '../../../shared/abof-react-components/Button/Button';

const CartProduct = ({ price, quantity, title, onRemoveItem }) => (
  <div className="cart-summary">
    <div className="cart-item">{title}</div>
    <div className="cart-quantity">{quantity}</div>
    <div className="cart-item-total">{price * quantity}</div>
    <div className="cart-action">
      {onRemoveItem &&
        <Button
          title="Remove"
          element="button"
          onClick={onRemoveItem}
          size="tiny"
        />
      }
    </div>
  </div>
);

CartProduct.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  onRemoveItem: PropTypes.func.isRequired
};

export default CartProduct;

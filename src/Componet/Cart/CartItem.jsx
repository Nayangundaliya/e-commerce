import React from 'react'
import { FaTrash } from 'react-icons/fa'
import FormatPrice from '../Helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { useCartContext } from '../contex/cartContext'

const CartItem = ({ id, name, image, color, price, amount }) => {

  const { removeItem, setDecrease, setIncrease } = useCartContext();

  return (
    <div className='cart-heading grid grid-five-column'>
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}>
            </div>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="cart-hide">
        <p><FormatPrice price={price} /></p>
      </div>

      {/* QUANTITY */}
      <div>
        <CartAmountToggle
          amount={amount}
          setDecrease={() => setDecrease(id)}
          setIncrease={() => setIncrease(id)}
        />
      </div>

      {/* SUBTOTAL */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      {/* Remove */}

      <div>
        <FaTrash className='remove_icon' onClick={() => removeItem(id)} />
      </div>

    </div>
  )
}

export default CartItem

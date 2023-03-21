import React from 'react'

const CartItem = ({id, name, image, color, price, amount}) => {
  return (
    <div className='cart-heading grid grid-five-column'>
      <div className="cart-image--name">
        <div>
            <figure>
                <img src={image} alt={id} />
            </figure>
        </div>
      </div>
    </div>
  )
}

export default CartItem

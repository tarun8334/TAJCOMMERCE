import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import { FaTrash } from 'react-icons/fa';

function CartPage() {

  const { cartItems } = useSelector(state => state.cartReducer);
  const [ totalAmount, setTotalAmount ] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + cartItem.price;
    })
setTotalAmount(temp);
  }, [cartItems]);


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };


  return (
    <Layout>

      <table className='table mt-2'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>



          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => {
            return <tr>
              <td><img src={item.imageURL} height="80" width="80" /></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><FaTrash onClick={() => deleteFromCart(item)} /></td>
            </tr>

          })}
        </tbody>
      </table>

      <div className='d-flex justify-content-end'>
        <h1 className="total-amount">total Amount = {totalAmount}RS</h1>
      </div>

      <div className='d-flex justify-content-end mt-3'>
<button>Place Order</button>
      </div>

    </Layout>
  );
}

export default CartPage;

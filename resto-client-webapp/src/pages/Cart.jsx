import { useEffect, useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import config from '../config'
import { clear, updateQuantity } from '../features/cartSlice'
import { placeOrder } from '../services/order'

export function Cart() {
  const [total, setTotal] = useState(0)

  // use it for updating the cart slice
  const dispatch = useDispatch()

  // reading the current state
  const cart = useSelector((state) => state.cart)
  useEffect(() => {
    let totalAmount = 0
    for (const item of cart.items) {
      totalAmount += item['price'] * item['quantity']
    }
    setTotal(totalAmount)
  }, [cart.items])

  const onQuantityUpdate = (itemId, quantity) => {
    dispatch(updateQuantity({ itemId, quantity }))
  }

  const onPlaceOrder = async () => {
    const result = await placeOrder(cart.items, total)
    if (result['status'] == 'success') {
      dispatch(clear())
      toast.success('successfully placed an order')
    } else {
      toast.error(result['error'])
    }
  }

  return (
    <>
    <div className='cart-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Cart</h1>
                </div>
            </header>

            

  <div className='container my-5'>
    {/* <h1 className='title'>Cart</h1> */}
    {cart.items.length === 0 && (
      <div className="text-center">
        <h3>Nothing is in the Cart.</h3>
      </div>
    )}
    {cart.items.length > 0 && (
      <div>
        <table className='table table-striped'>
          <thead className="bg-success text-light">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    style={{ width: 50 }}
                    src={config.server + '/' + item.image}
                    alt=''
                  />
                </td>
                <td>{item['food_name']}</td>
                <td>{item['price']}</td>
                <td>{item['quantity']}</td>
                <td>{item['price'] * item['quantity']}</td>
                <td>
                
                  <button
                    onClick={() => {
                      onQuantityUpdate(item.id, item.quantity - 1);
                    }}
                    className='btn btn-success btn-sm'
                    disabled={item.quantity === 1}
                  >
-</button>

                  <button
                    onClick={() => {
                      onQuantityUpdate(item.id, item.quantity + 1);
                    }}
                    className='btn btn-success btn-sm me-1'
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan='5' className='text-end'>Total Amount</td>
              <td>{total}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>

        <div className="text-center">
          <button onClick={onPlaceOrder} className='btn btn-success btn-lg'>
            Place Order
          </button>
        </div>
      </div>
    )}
  </div>
</div>
</>
  )
}

export default Cart
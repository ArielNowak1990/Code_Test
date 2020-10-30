import React, { useState } from 'react';
import './App.css';
import IconEdit from'./images/edit-img.png'
import IconHeadphones from'./images/headphones.png'
import IconX from'./images/x-img.png'

function App() {
  const [counter, setCounter] = useState(0);
  const [sum, setSum] = useState(0)
  const [shipping, setShipping ] = useState(23.8)
  const [grandTotal, sumGrandTotal] = useState(23.8)

  const handleAddCounter = () => {
    setCounter(prevState => prevState + 1)
  }
  const handleRemoveCounter = () => {
    if (counter !== 0){setCounter(prevState => prevState - 1)}
  }
  const handleShowChange = () => {
    setSum(counter*11.90)
    let summary = counter*11.90
    if (summary >=100){
      setShipping(0);
      sumGrandTotal(summary)
    }
    if (summary <100){
      setShipping(23.80);
      sumGrandTotal(summary+23.8)
    }

  }
  const handleRemoveProduct = (event) => {
    console.log(event.target.parentElement.parentElement.style.display = "none")
    setSum(0);
    setCounter(0);
    setShipping(0);
    sumGrandTotal(0);
  }

  const handleBuyer = () => {
    document.getElementById("WhenBuying").style.display= "flex";
  }
   return (
      <>
      <header>
        <h2>Shopping Cart</h2>
        <button className="main_button" onClick={handleBuyer}>Proceed to checkout</button>
      </header>
  <main>
    <div className="container">
      <table>
        <thead>
        <tr>
          <th>Action</th>
          <th>Foto</th>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Qty</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><img src={IconX} alt="button_delete_position" onClick={handleRemoveProduct}/></td>
          <td><img src={IconHeadphones} alt="image_headphones"/></td>
          <td>Headphones</td>
          <td>$11.90</td>
          <td className="qty">
            <button className="button_qty" onClick={handleRemoveCounter}>-</button>
            <input type="text" className="input_qty" value={counter}/>
              <button className="button_qty" onClick={handleAddCounter}>+</button>
              <img src={IconEdit} alt="image_edit_position" className="icon_qty" onClick={handleShowChange}/>
          </td>
        </tr>
        </tbody>
      </table>
      <div className="container_button">
        <button className="main_button right" onClick={handleShowChange}>Update Shoping Cart</button>
      </div>

    </div>
    <nav>
      <div className="cost_shipping">
        <div>SHIPPING</div>
        <div>${shipping.toFixed(2)}</div>
      </div>
      <div className="cost_summary">
        <h3>CART TOTALS</h3>
        <div className="cost_elements">
          <div className="cost_elements_row">
            <div className="cost_elements_subtotal">Subtotal</div>
            <div className="cost_subtotal">${sum.toFixed(2)}</div>
          </div>
          <div className="cost_elements_row">
            <div className="cost_elements_grandTotal">Grand Total</div>
            <div className="cost_grandTotal">${grandTotal.toFixed(2)}</div>
          </div>
          <button className="main_button" onClick={handleBuyer}>Proceed to checkout</button>
        </div>
      </div>
    </nav>
  </main>
        <div id="WhenBuying">Your order has been submitted successfully</div>
        </>
  );
}

export default App;

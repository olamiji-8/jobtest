import React from 'react'
import './PaymentGateway.css';


const PaymentGateway = () => {
  return (
    <div className='whitebg'>
      <div className='logo'>
    <h2 className='logo_ist'>AceCoin</h2>
    <h2 className='logo_2nd'> pay</h2>
      </div>
      <div className='date'>
        <span className='date_border'>0</span>
        <span className='date_border'>1</span>
        <span className='date_dot'>:</span>
        <span className='date_border'>1</span>
        <span className='date_border'>9</span>
      </div>
      <div>
        <h2>Card Number</h2>
        <h2>Enter the 16 -digit card number on the card</h2>
      </div>
      <div>
        <input type='text' placeholder=''/>
      </div>
      <div>
        <h2 className='Cvv_no'>CVV Number</h2>
        <h2 className='Cvv_text'>Enter the expiration date of the card  </h2>
        <input type='text' placeholder=''/>
        <input type='text' placeholder='' />

      </div>
      <div>
        <h2 className='Pswd'>Password</h2>
        <h2 className='Pswd_input'>Enter your Dynamic Password</h2>
        <input type='password' placeholder=''/>
      </div>
      <div>
        <button className='Click_btn'>Pay Now</button>
      </div>
    </div>
  )
}

export default PaymentGateway
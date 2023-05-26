import React from 'react'
import './PaymentGateway.css';


const PaymentGateway = () => {
  return (
    <div className='whitebg'>
      <div className='nav_flex'>
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
      </div>
      <div >
        <h2 className='Card_no'>Card Number</h2>
        <h2 className='Card_num'>Enter the 16 -digit card number on the card</h2>
      </div>
      <div>
        <input type='text' placeholder=''className='Card_box'/>
      </div>
      <div className='Cvv'>
        <span className='Cvv_grid'>
        <h2 className='Cvv_no'>CVV Number</h2>
        <h2 className='Cvv_text'>Enter the 3 or 4 digit number on the card  </h2>
        </span>
        <span>
        <input type='text' placeholder='' className='Cvv_box'/>
        </span>

        

      </div>
      <div className='Expire_date'>
        <h2 className='Expire_text'>Expiry Date</h2>
        <h2 className='Expire_card'>Enter the expiration date of the card</h2>
        <input type='text' placeholder=''className='Expire_box' />
        <input type='text' placeholder=''className='Expire_box' />
      </div>
      <div className='Pswd_flex'>
        <span className='Pswd_grid'>
        <h2 className='Pswd'>Password</h2>
        <h2 className='Pswd_input'>Enter your Dynamic Password</h2>
        </span>
        <span className=''>
        <input type='password' placeholder='' className='Pswd_box'/>
        </span>
      </div>
      <div>
        <button className='Click_btn'>Pay Now</button>
      </div>
    </div>
  )
}

export default PaymentGateway
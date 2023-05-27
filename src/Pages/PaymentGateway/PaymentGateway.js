import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import AppsIcon from '@mui/icons-material/Apps';
import VerifiedIcon from '@mui/icons-material/Verified';
import Wifi from "../../assets/mc_symbol.svg"
import Card from "../../assets/credit-card.png"
import Payment from "../../assets/payment_card.jpg"
import './PaymentGateway.css';


const PaymentGateway = () => {
  return (
    <div className='whitebg'>
      
      <div className='nav_flex'>
      <div className='logo'>
        <img src={Card} alt='' width="40px" style={{backgroundColor:"blue", borderRadius:"50%"}}/>
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
      <div className='Card_flex'>
        <span>
        <h2 className='Card_no'>Card Number</h2>
        <h2 className='Card_num'>Enter the 16 -digit card number on the card</h2>
        </span>
        <span style={{color:"blue", fontSize:"10px", cursor:"pointer",marginTop:"48px" }}>
          <EditIcon fontSize ="small"/>
          <span>Edit</span>
        </span>
      </div>
      <div>
      <img src={Wifi} alt='' width="28px" style={{display:"flex", marginLeft:"8%", position:"absolute", marginTop:"4.8%"}}/>
        <input type='text' placeholder='2412     - 7512     - 3412     - 3456'className='Card_box'/>
        <VerifiedIcon fontSize ="small" style={{color:"blue",opacity:"0.4",marginLeft:"-5%",marginTop:"4%"}} />
      </div>
      <div className='Cvv'>
        <span className='Cvv_grid'>
        <h2 className='Cvv_no'>CVV Number</h2>
        <h2 className='Cvv_text'>Enter the 3 or 4 digit number on the card  </h2>
        </span>
        <span style={{display:"flex", color:"blue",opacity:"0.4",justifyContent:"center" }}>
        <input type='text' placeholder='' className='Cvv_box' />
        <AppsIcon fontSize ="small" style={{marginTop:"13%", marginLeft:"-12%"}} />
        </span>

        

      </div>
      <div className='Expire_date'>
        <h2 className='Expire_text'>Expiry Date</h2>
        <div className='Expire_grid'>
        <h2 className='Expire_card'>Enter the expiration date of the card</h2>
        <input type='text' placeholder=''className='Expire_box' />
        <span className='Expire_slash'>/</span>
        <input type='text' placeholder=''className='Expire_box' />
        </div>
        
      </div>
      <div className='Pswd_flex'>
        <span className='Pswd_grid'>
        <h2 className='Pswd'>Password</h2>
        <h2 className='Pswd_input'>Enter your Dynamic Password</h2>
        </span>
        <span style={{display:"flex", color:"blue",opacity:"0.4",justifyContent:"center" }}>
        <input type='password' placeholder='' className='Pswd_box'/>
        <AppsIcon fontSize ="small" style={{marginTop:"7%", marginLeft:"-12%"}}/>
        </span>
      </div>
      <div>
        <img src={Payment} alt='' width="20%" height="70%" style={{position:"absolute", display:"flex", marginLeft:"74%",marginTop:"-45%"}}/>
      </div>
      <div>
        <button className='Click_btn'>Pay Now</button>
      </div>
    </div>
  )
}

export default PaymentGateway
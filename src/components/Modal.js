import React from 'react'
import "./Model.css";
import coffee from "../data/coffee.json"
// import CoffeeProduct from '../components/CoffeeProduct';

function Modal({closeModal}) {
  return (
    //closemodal will close the modal
    <div className='modal-background'>
    <div className='modal-container'>
    <div className='titleClosedBtn'>
      <button onClick={() => {
      closeModal(false); }}>X
       </button>
    </div>
    <img className='coffe-modal-image' src={require('../assets/coffee1.png')} alt="coffee1"/> 
    <div className='title'>
    <h3>{coffee?.name}</h3>
    </div>

    <div className='body'>
   
      <p> {coffee?.type}</p>
      <p>Grind: Whole Bean</p>
    </div>    

      <button className='continue-button' onClick={() => {closeModal(false);
        }}>Contiune Shopping </button>
      <button className='view-button'> View/Edit Cart </button>
      <p>Subtotal</p>
      <h2>$14.95</h2>
      <p>Your Cart Contains 1 items</p>
      <button className='checkout-button'>Proceed To Checkout</button>
    </div>
    </div>
  );
}

export default Modal


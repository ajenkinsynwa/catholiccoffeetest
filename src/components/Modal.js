
import "./Modal.css";
// import coffee from "../data/coffee.json"

function Modal({closeModal, coffee}) {
  return (
    //closemodal will close the modal
    <div className='modal-background'>
    <div className='modal-container'>
    <div className='modal-container1'>
    <div className='titleClosedBtn'>
      <button className="titleClosedBtn" onClick={() => {
      closeModal(false); }}>X
       </button>
    </div>
    <div className='title-header'>
      
      <h1>{coffee?.name}Our Lady of Guadalupe Mexican Mocha</h1>
      <p2>Medium Roast {coffee?.type}</p2>
      <br></br>
      <p2>Grind:Whole Bean</p2>
    </div>
     <div>
    <img className='coffee-modal-image' src={require('../assets/coffee1.png')} alt="coffee1"/> 
    </div>

      
    <div>
      <button className='continue-button' onClick={() => {closeModal(false);
        }}>Contiune Shopping </button>
      <button className='view-button'> View/Edit Cart </button>
      <p>Subtotal</p>
      <h2>$14.95</h2>
      <p>Your Cart Contains 1 items</p>
      <button className='checkout-button'>Proceed To Checkout</button>

      </div>
      </div>
    </div>
    </div>
  );
}

export default Modal


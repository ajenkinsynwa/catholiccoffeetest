import "./Modal.css";


//this is the function that will be called to show the modal\\ 
//{coffee?.name} ect. is passing in the JSON Data from coffee.json\\
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
      
      <h1>{coffee?.name}</h1>
      <p2>{coffee?.type}</p2>
      <br></br>
      <p2>Grind: Whole Bean</p2>
    </div>
  
      
<div className="price-container">

    <img className='coffee-modal-image' src={require(`../assets/${coffee.imagePath}`)} alt="coffee1"/> 
<div className="price-container2">
      <button className='continue-button' onClick={() => {closeModal(false);
        }}>Contiune Shopping </button>
      <button className='view-button'> View/Edit Cart </button>
      <p2 className='Subtotal-text'>Subtotal</p2>
      <h1>$14.95</h1>
      <p className='Cart-Contains-Text'>Your Cart Contains 1 items</p>
      
      <button className='checkout-button'>Proceed To Checkout</button>
</div>
      </div>
      </div>
</div>
    </div>
  );
}

export default Modal



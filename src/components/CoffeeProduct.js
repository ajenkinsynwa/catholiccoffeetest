import stars from '../assets/stars.png';
import Modal from '../components/Modal';
import { useState } from "react";

function CoffeeProduct({coffee}) {

  const [openModal, setModalOpen] = useState(false);

	return (
		<div className='coffee-product'>
			<img src={require('../assets/coffee1.png')} alt="coffee1"/> 
			<h3>{coffee?.name}</h3>
			<p>{coffee?.type}</p>
			<h2>{coffee?.price}</h2>
			<div className="coffee-product-inner-container">
				<img src={stars} alt="stars" className="stars" />
				<button className="button4 openModalBtn"onClick={() => {
          setModalOpen(true);
        }}
            //if openmodel is equal to true then reder model component 
      >
        
      BUY NOW</button>
       {openModal && <Modal closeModal={setModalOpen} /> }
			</div>
	</div>
	)
}

export default CoffeeProduct;
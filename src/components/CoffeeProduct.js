import stars from '../assets/stars.png';
import Modal from '../components/Modal';
import { useState } from "react";

// This is a React component called CoffeeProduct which is responsible for rendering a single coffee product on a webpage. It takes a prop called coffee which contains information about the coffee product to be displayed.

function CoffeeProduct({coffee}) {

  const [openModal, setModalOpen] = useState(false);

	return (
		<div className='coffee-product'>
			<img src={require(`../assets/${coffee.imagePath}`)} alt={coffee.name} />
			<h3 className='coffee-name'>{coffee?.name}</h3>
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
       {openModal && <Modal closeModal={setModalOpen} coffee={coffee} /> }
			</div>
	</div>
	)
}

export default CoffeeProduct;
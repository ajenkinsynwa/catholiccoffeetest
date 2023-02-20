import stars from '../assets/stars.png';
function CoffeeProduct({coffee}) {
	return (
		<div className='coffee-product'>
			<img src={require('../assets/coffee1.png')} alt="coffee1"/> 
			<h3>{coffee?.name}</h3>
			<p>{coffee?.type}</p>
			<h2>{coffee?.price}</h2>
			<div className="coffee-product-inner-container">
				<img src={stars} alt="stars" className="stars" />
				<button className="button4 modalBtn">BUY NOW</button>
			</div>
		</div>
	)
}

export default CoffeeProduct;
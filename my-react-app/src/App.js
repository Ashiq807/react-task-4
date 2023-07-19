import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [product, setProduct] = useState({
  title: "Nike Shoes",
  price: "AED 100",
  sku: 4578215,
  isWishlist: true
});
const wishlistIcon = product.isWishlist ? "../photos/image3.png" : "../photos/image2.png"
function handle(){
  setProduct(function(prevobj){
    return {...prevobj,isWishlist: !prevobj.isWishlist}
  });
}
  return (
    <>
      <div className="wrapper">
      <div className="card" style={{width: "18rem",border: "3px solid red"}}>
          <img src="photos/image1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <img src={wishlistIcon} alt="photo" style={{width: "30px"}} onClick={handle} />
            <h3 className>{product.title}</h3>
            <p className="card-text">{product.price}</p>
            <p className='card-text'>{product.sku}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

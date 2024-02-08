//Shop.jsx
import './shopStyle.css';
import ListProductsNaruto from './Products-shop/Products-Naruto';


const Shop =()=>{
   
 return(
  <>
  <header>
  <h1 className='text-slay-50 text-center text-xl'>Welcom for shoping</h1>
  </header>
  <section className='Naruto-section'>
   
    <ListProductsNaruto />

  
    
  </section>
  </>
 )
}
export default Shop;
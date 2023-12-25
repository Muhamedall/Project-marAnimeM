import './shopStyle.css';
import ListProductsNaruto from './ListProductsNaruto';


const Shop =({dataProductsNaruto})=>{
   
 return(
  <>
  <header>
  <h1 className='text-slay-50 text-center text-xl'>Welcom for shoping</h1>
  </header>
  <section className='Naruto-section'>
   
    <ListProductsNaruto dataProductsNaruto={dataProductsNaruto}/>

  
    
  </section>
  </>
 )
}
export default Shop;
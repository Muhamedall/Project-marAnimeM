import './shopStyle.css';
import ListProductsNaruto from './ListProductsNaruto';
import { useState ,useEffect} from 'react';
import axios from "axios";

const Shop =()=>{
    const [dataProductsNaruto ,setdataProductNaruto]=useState({ListPrNaruto:[]});
    useEffect (()=>{
        axios.get('http://localhost:1337/api/products-narutos?populate=*')
        .then((response)=>{
            setdataProductNaruto({ListPrNaruto:response.data.data});

        })
        .catch((error)=>{
            console.error("Error fetching data !",error);

        })
    },[])

 return(
  <>
  <header>
  <h1 className='text-slay-50 text-center text-xl'>Welcom for shoping</h1>
  </header>
  <section className='Naruto-section'>
   <div className='Categorie-Naruto'>
    <h1>🥷 NARUTO 🥷</h1>
    <ListProductsNaruto dataProductsNaruto={dataProductsNaruto}/>

   </div>
    
  </section>
  </>
 )
}
export default Shop;
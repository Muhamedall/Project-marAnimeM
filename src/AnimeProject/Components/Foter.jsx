import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Foter =()=>{
    return(
        <>
        
        <div style={{height:'270%'}} className="bg-slate-950  h-10  text-center   ">
            <div style={{marginLeft:'43%'}} className='Sosial flex flex-wrap gap-5  '>
            <div>
        <a href="https://discord.com/login" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} className='text-slate-50  ' /></a>

     </div>
      <div>
      <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className='text-slate-50'/></a>
      </div>
      <div>
      <a href="https://www.instagram.com/accounts/login/?next=%2Fyour-instagram-page%2F&source=desktop_nav" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className='text-slate-50'/></a>
      </div>
      <div> 
      <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className='text-slate-50' /></a> 
      </div>
      
      </div>
      <p className="text-gray-200 m text-sm font-serif">Contact us</p>
      <p className="text-gray-200 m text-sm font-serif">About us</p>
      <div style={{marginTop:'4px'}}>
        <p className="text-gray-200 m text-sm font-serif">© 2024, marAnime®. All rights reserved.</p>
        </div>
        </div>
        </>
    )


}
export default Foter;
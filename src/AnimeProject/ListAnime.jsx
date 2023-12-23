import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function ListAnime({ dataAnime }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleMouseEnter = (idx) => {
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
  };
   const handelMouse=(e)=>{
    e.preventDefault();
    console.log("hy is work !")

   }
  return (

    <div className="container">
      
      <div className="fetchin-dataAnime ">
       
        {dataAnime.listanime.map((data, idx) => (
          <div key={idx} className="anime-container transition duration-500 ease-in-out  hover:transform hover:-translate-y-1 hover:scale-110 "
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            
            <div className="image-container mb-4  ">
              <img className=''
                
                src={`http://localhost:1337${data.attributes.image.data.attributes.url}`}
                alt={data.attributes.Title}
                style={{ maxWidth: "70%" }}
              />
              <p className=" text-center font-mono ">{data.attributes.Title}</p>
              {hoveredIdx === idx && (
                <div className="overlay text-center p-3  ">
                  <p >{data.attributes.description}</p>
                  <div className='btn-watche-save'>
                  
                  <FontAwesomeIcon className='icon' type='submit' onClick={handelMouse}icon={faPlay}/>  
                 <FontAwesomeIcon className='icon' type='submit' onClick={handelMouse} icon={faBookmark}/>
                  
                 </div>
                 
                </div>
                
              )}
              
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
}

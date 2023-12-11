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
      <div className="fetchin-dataAnime">
        {dataAnime.listanime.map((data, idx) => (
          <div key={idx} className="anime-container"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <p className="title-anime">{data.attributes.Title}</p>
            <div className="image-container">
              <img
                
                src={`http://localhost:1337${data.attributes.image.data.attributes.url}`}
                alt={data.attributes.Title}
                style={{ maxWidth: "70%" }}
              />
              {hoveredIdx === idx && (
                <div className="overlay">
                  <p>{data.attributes.description}</p>
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

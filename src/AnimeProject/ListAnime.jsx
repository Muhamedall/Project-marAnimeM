import React, { useContext, useState } from 'react';


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


import { DataApi } from './ContextApi/DataApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';

const  ListAnime=({searchTerm})=>
 {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  
  const handleMouseEnter = (idx) => {
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
  };

  const handelWatch = (e) => {
    e.preventDefault();
    console.log("Watch clicked!");
  };

  const handelSave = (e) => {
    e.preventDefault();
    console.log("Save clicked!");
  };

  const contextData = useContext(DataApi);

  
  if (!contextData || !contextData.dataAnime) {
   
    return <div>Loading...</div>; 
  }

  const { dataAnime } = contextData;

 
  const listAnimeData = dataAnime.listanime || [];

 
  const filteredList = listAnimeData.filter(
    (data) =>
      data.attributes.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.attributes.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-bar mb-4">
        
      </div>
      <div className="fetchin-dataAnime">
        
        {filteredList.map((data, idx) => (
          <div
            key={idx}
            className="anime-container transition duration-500 ease-in-out hover:transform hover:-translate-y-1 hover:scale-110"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-container mb-4">
              <img
                src={`http://localhost:1337${data.attributes.image.data.attributes.url}`}
                alt={data.attributes.Title}
                style={{ maxWidth: "85%" }}
              />
              <p className="text-center font-mono">{data.attributes.Title}</p>

              {hoveredIdx === idx && (
                <div className="overlay text-center p-3">
                  <p>{data.attributes.description}</p>
                  <div className="btn-watche-save">
                    <FontAwesomeIcon
                      className="mt-3 text-yellow-100 h-8 hover:text-yellow-300 "
                      type="submit"
                      onClick={handelWatch}
                      icon={faPlay}
                    />
                    <FontAwesomeIcon
                      className="mt-3 text-yellow-100 h-8 hover:text-yellow-300"
                      type="submit"
                      onClick={handelSave}
                      icon={faBookmark}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="Title_Anime">More Anime</p> 
      <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    </div>
  );
  
}

export default ListAnime;
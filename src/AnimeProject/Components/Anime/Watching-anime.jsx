import React, { useContext } from 'react';
import { DataApi } from '../ContextApi/Data-context-Api';
import { useParams } from 'react-router-dom';
import gon from '../Picturs/b3f14021898fe1cd8a54bb048830b900-removebg-preview.png';

const Watching = () => {
    const contextData = useContext(DataApi);
    const { dataAnimeTwo, dataAnime } = useContext(DataApi);

    const { animeName } = useParams();


 
    const filteredAnime = dataAnime.listanime.filter(data =>
        data.attributes.Title.trim().toLowerCase() === animeName.trim().toLowerCase()
    );
    const filteredAnimeTwo = dataAnimeTwo.listAnimeTwo.filter(data =>
        data.attributes.Title.trim().toLowerCase() === animeName.trim().toLowerCase()
    );
    
    

    if (!contextData || !contextData.Animefull ) {
        return <div>Loading...</div>;
    }

    const { Animefull } = contextData;
    const listitemFull = Animefull.listAnimeFull || [];
   
    console.log("Data Anime:", dataAnime);
console.log("Data Anime Two:", dataAnimeTwo);
console.log("Anime Name:", animeName);
console.log("Filtered Anime:", filteredAnime);

    return (
        <>
        {filteredAnime && filteredAnimeTwo?.map((anime, keys) => (
                <div key={keys} style={{ height:'5%'}} >
                     <h1 className='font-serif text-6xl mb-2 text-center'>{anime.attributes.Title}</h1>
                         <p style={{width:'50%',marginLeft:'30%' ,marginTop:'5px'} } className='font-serif' >{anime.attributes.description}</p>
                         <div style={{marginLeft:'35%' }} className='flex flex-row gap-5 text-center '>
                         <div><h2 style={{}} className='text-center text-4xl '>Enjoy watching </h2></div>
                         <div><img style={{width:'13%'  }} src={gon} alt=''/></div>
                        
                         </div>
                        
                     <div>
                   
                    

                  
                 
                    <img style={{marginLeft:'80%' ,width:'10%'}} className=' anime-container transition duration-700 ease-in-out hover:transform hover:-translate-y-1 hover:scale-110 mb-5 ' src={`http://localhost:1337${anime.attributes.image.data.attributes.url}`} alt=''  />
                    
                    </div>
                </div>
            ))}
        <div  className='  container  '>
            
            <div style={{  padding: '20px', marginTop: "0"  ,justifyContent:'center'}}>
            {listitemFull.slice().reverse().map((item, i) => ( 
                        <div key={i} style={{ display: 'inline-block', gap:'3px', marginRight: '20px' }} className='bg-gray-100 '>
                            
                            <p className='text-center font-serif text-xl' >{`Episode ${i + 1}`}</p>                          
                              <iframe style={{ width: '80%', height: '30%', marginLeft: '5%', borderRadius: '15px', marginBottom: '5px' }}
                                title={`${item.titles[0].title} Trailer`}
                                width="560"
                                height="315"
                                src={item.trailer.embed_url}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
            </div>
        </div>
        </>
    );
}

export default Watching;

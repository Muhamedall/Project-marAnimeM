import { useContext } from "react";
import {DataApi } from '../ContextApi/Data-context-Api';


const Manga =()=>{
    const Manga=useContext(DataApi);
    const { Mangas } = Manga;

    const listMangaData = Mangas.listManga || [];
    //console.log("This is data for manga:"+ JSON.stringify(Manga.Mangas))
    return(
        <>

      
        {listMangaData.map((item ,key)=>
        <div key={key} className="mt-5 flex flex-wrap gap-2">
            <div>
                <header className="flex flex-row gap-5">
                <span> Ranking :{item.rank}</span>
            <span>Members : {item.members}</span>
            <span>Favorite :{item.favorites}</span>
            <span>Genres:</span>
                        <ul>
                            {item.genres.map((genre, index) => (
                                <li key={index}>{genre.name}</li>
                            ))}
                        </ul>
                        <span>Authors:</span>
                        <ul>
                            {item.authors.map((author, index) => (
                                <li key={index}>{author.name}</li>
                            ))}
                        </ul>

                
                </header>

            
          
            </div>
            <section className="ml-40 flex flex-row gap-8">
                <div style={{width:'30%'}}>
                <h1 className="text-center">{item.title}</h1>
                <img style={{width:'65%', marginLeft:'20%' ,border:'solid black 2px'} } src={item.images.jpg.large_image_url} alt={item.title}></img>
                </div>
                <div style={{width:'80%'}}>
                <p style={{width:'90%' ,marginTop:'30px'}}>Abaout  :{item.synopsis}</p><br></br>
                </div>
            </section>

            <div>
            
            </div>
          
           
        </div>)}
       
        </>
    )

}
export default Manga;
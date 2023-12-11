import Rate from './Rate';
import React from 'react';
export default function Mylist({data}){
    return(
        <>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#Id</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Categorie</th>
      <th scope="col">Image</th>
      <th scope="col">Rating</th>
    </tr>
  </thead>
  <tbody>
  {data.map((item, idx) => {
            return (
              <tr key={idx}>
                  <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description.slice(0, 54)}</td>
              
                <td><span className="badge badge-pill bg-dark">{item.category}</span></td>
                <td><img width={250} src={item.image} alt={item.title}></img></td>
                <td><Rate rate={item.rating.rate} count={item.rating.count} /> </td>
              
              </tr>
            );
          })}
    <tr>
      

    </tr>
  </tbody>
</table>
        
        
        </>
    )


}
import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";

export default function Card(props) {
  const [data, setdata] = useState([]);

  let query = props.query
  useEffect(() => {
    async function fetchMyAPI() {
      let url = `https://api.tvmaze.com/search/shows?q=${query}`
      let response = await fetch(url);
      response = await response.json();
     
      setdata(response);

    }
    fetchMyAPI();
  });
  return (
    
    <div className="container my-4">
      <p className="text-center">Saple Routers for Project..</p>
      <h2 className="text-center">TVMAZE MOVIES</h2>
      <div className="row">
      {data.map((Element) => {
      
        return<div className="col-md-6" key={Element.show.id}>
            <Carditems
              name={Element.show.name}
              url={Element.show.url} 
              type={Element.show.type}
              language={Element.show.language}
              genres={Element.show.genres}
              status={Element.show.status}
              Summary={Element.show.summary}
            />
          </div>
        
      })}
      </div>
    </div>
  );
}

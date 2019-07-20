import React ,{useEffect,useState} from 'react';
import axios from 'axios';
export default function AppHooks(){

    const [results,setResults] =useState([])

    useEffect(()=>{
      
       getResults()
    },[])

    const getResults = async () =>{
       const response = await  axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
       
           setResults(response.data.hits);
    }
     return(
        <div>
            {
                results && results.map ((item)=>{
                    return(
                        <div>
                        <li key={item.objectId}>
                        <a href={item.url}> {item.title} </a>
                        </li>
                        </div>
                    );

                })
            }
        </div>
    );
}
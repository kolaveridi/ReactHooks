import React ,{useEffect,useState ,useRef} from 'react';
import axios from 'axios';
export default function AppHooks(){

    const [results,setResults] =useState([]);
    const [query,setQuery] = useState('reacthooks');
    const [loading,setLoading] = useState(false);
    const searchInputRef = useRef();

    useEffect(()=>{
      
       getResults()
    },[])

    const getResults = async () =>{
        setLoading(true);
       const response = await  axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
       
           setResults(response.data.hits);
           setLoading(false);
    }
    const handleClearSearch =() =>{
        setQuery(" ");
        searchInputRef.current.focus();
    }
     return(
        <div>
             <input value ={query} type="text"   ref={searchInputRef} onChange ={event => setQuery(event.target.value)}></input>
             <button type="button" onClick={getResults}>Search </button>
             <button type="button" onClick={handleClearSearch}> Clear</button>

            { loading ? (
                <div>Loading Results </div>
            ) :(
                results && results.map ((item)=>{
                    return(
                        <div>
                        <li key={item.objectId}>
                        <a href={item.url}> {item.title} </a>
                        </li>
                        </div>
                    );

                })
            )
            }
            
                
        </div>
    );
}
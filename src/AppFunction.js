import React ,{useState ,useEffect} from 'react';


const App =() =>{

    const [count,setCount] = useState(0);
    const [isOn,setIsOn] = useState(false);
    const [mousePosition,setMousePosition] = useState({x:null,y:null});
    const [status, setStatus] = useState(navigator.onLine);
    
    let mounted = true;

    const  incrementCount =()=>{
         setCount(prevCount => prevCount+1);
    }

    const toggleLight =() =>{
        setIsOn(prevIsOn => !prevIsOn)
    }
    useEffect(()=>{
       document.title =`You have clicked ${count} times` ; 
       window.addEventListener('mousemove',handleMouseMove)
       return ()=>{
        window.removeEventListener('mousemove',handleMouseMove);
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        
        mounted = false;
    }
       } ,[ count])

    const handleMouseMove = event =>{
        setMousePosition({
            x:event.pageX,
            y:event.pageY
        })
    }
    const handleOnline = () => {
        setStatus(true);
      };
    
      const handleOffline = () => {
        setStatus(false);
      };
      
        

    return (
        <div>
        <button  onClick={incrementCount}>
             {count}

            </button>
            <div>
            {mousePosition.x}
            <br></br>
            {mousePosition.y}
            </div>

      <h2>Network Status</h2>
      <p>
        You are <strong>{status ? "online" : "offline"}</strong>
      </p>

            </div>
    );
}

export default App;
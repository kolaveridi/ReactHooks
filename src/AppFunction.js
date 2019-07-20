import React ,{useState ,useEffect} from 'react';

const App =() =>{

    const [count,setCount] = useState(0);
    const [isOn,setIsOn] = useState(false);
    const [mousePosition,setMousePosition] = useState({x:null,y:null});

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
        window.removeEventListener('mousemove',handleMouseMove)
    }
       } ,[ ])

    const handleMouseMove = event =>{
        setMousePosition({
            x:event.pageX,
            y:event.pageY
        })
    }
        

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

            </div>
    );
}

export default App;
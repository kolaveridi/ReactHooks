import React ,{useState} from 'react';

const App =() =>{

    const [count,setCount] = useState(0);
    const [isOn,setIsOn] = useState(false);

    const  incrementCount =()=>{
         setCount(prevCount => prevCount+1);
    }

    const toggleLight =() =>{
        setIsOn(prevIsOn => !prevIsOn)
    }

    return (
        <button  onClick={incrementCount}>
             {count}
            </button>
    );
}

export default App;
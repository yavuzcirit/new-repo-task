import {useState} from 'react'
  
const useGenerateRandomColor = () => {
    const [color,setColor] = useState<string|number>("")
    const generateColor = () =>{
        setColor(Math.random().toString(16).substr(-6));
    };
    return {color,generateColor};
      
};
export default useGenerateRandomColor;
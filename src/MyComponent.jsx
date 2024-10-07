import React, {useState, useEffect} from "react";

function MyComponent(){

    const [width,setWidth]= useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight)

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("Event listener added")

        return ()=> {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed")
        }
    },{});

    useEffect(()=>{
        document.title= `size: ${height} ${width}`
    },[width,height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>Window height: {height}</p>
        <p>Window width: {width}</p>
    </>);

}

export default MyComponent;
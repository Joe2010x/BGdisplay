import React, { useState } from "react";

const Squares = ({inputArray,size,onClick}) => {
    const [markers,setMarkers] = useState([]);
    console.log(inputArray,`square--${size}`);
    //inputArray.map(item => console.log(item));

    const handleMD = (event) =>{
        event.preventDefault();
        console.log('screen x is : ',event.screenX);
        let clientX = event.clientX;
        let clientY = event.clientY;
        console.log();
        setMarkers([...markers,[clientX,clientY]]);
        console.log(markers);
        onClick(event);
    }

    return (
        <div className={`square--${size}`} >
            {
                (size === 5 && inputArray.map(item => 
                <span className={`grid-item${size} ${item}`} 
                key={item}>{item}</span>))}
            {
                (size === 25 && inputArray.map(item => 
                <span className={`grid-item${size} ${item}`} 
                    onClick={(e)=>onClick(e)} 
                    key={item} 
                    placeholder={item}
                    onMouseDown={e=>{handleMD(e)}}>{item}</span>) )
            }
            { markers && 
            markers.map((coordinate, index) =><img key={'img'+index} className={"img--"+size}
                // style={{top:`${(coordinate[1]-50-20)}px`,left:`${coordinate[0]-20}px`,rotate:`${(coordinate[0]+coordinate[1])%360-180}deg`}}
                style={{top:`${(coordinate[1]-50-20)}px`,left:`${coordinate[0]-20}px`,transform: `rotate(${((coordinate[0]+coordinate[1])%360-180)}deg)`}}
                src={require("./happy.png")}/>)}
        </div>
    )
}

export default Squares
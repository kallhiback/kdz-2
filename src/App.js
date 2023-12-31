import React, {useState} from 'react';

const App = () => {
    const [color1, setColor1] = useState("red")
    const [color2 , setColor2] = useState("blue")
    function swapColors () {
        setColor1(color2)
        setColor2(color1)
    }
    return (
        <div>
            <div style={{
                width: "150px",
                height: "150px",
                backgroundColor:color1
            }} onClick={swapColors}></div>
            <div style={{
                width: "150px",
                height: "150px",
                backgroundColor:color2}} onClick={swapColors}></div>
        </div>
    );
};

export default App;
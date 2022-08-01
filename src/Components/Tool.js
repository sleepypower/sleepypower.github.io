import React, { useState, useEffect } from 'react';
import './Tool.css';


const Tool = ({ icon, title, hoverColor }) => {
    console.log(hoverColor);

    /**
     * useState makes the variable 'currentColor' stateful, we can update its 
     * value and the component will react to it
     */
    const [currentColor, setcurrentColor] = useState('#C2C2C2');

    /**
     * useEffect will perform the function given when the variable given 
     * changes
     */
    return (
        <div className='tool-container font-open-sans'
            onMouseOver={() => setcurrentColor(hoverColor)}
            onMouseOut={() => setcurrentColor('#C2C2C2')}
            onClick={() => { }}>
            <div className='tool-icon' style={{ color: currentColor }}>
                {icon}
            </div>

            <div className='tool-title' style={{ color: currentColor }}>
                {title}
            </div>


        </div>
    )
}

Tool.defaultProps = {
    hoverColor: '#75AADB'
}


export default Tool
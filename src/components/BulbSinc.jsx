import '../App.css';
import React from 'react';


var BulbSinc = ({ title, item1,isOn,toggleIsOn}) => {


    return (
        <div className="card">
            <h3>{title}</h3>
            <h3>{item1}</h3>
        <div className="bulb" style={{backgroundColor: isOn ? "yellow":"grey"}}>
            </div>
        <button onClick={toggleIsOn} style={{marginLeft: "41%", marginTop: "5%"}}>{isOn ? 'On': 'Off'}</button>
        </div>
    )
}
export default BulbSinc;

// {/* <div className="bulb" style={{backgroundColor: isOn ? `${backgroundOn}`:`${backgroundOff}`}}> */}
import React from 'react';

const Weather = ({result}) => {
    //get data
    const { name, main } = result;

    if(!name) return null;

    //substract kelvin
    const kelvin = 273.15;

    return ( 
       <div className="card-panel white col s12">
           <div className="black-text">
               <h2>Weather of {name} is:</h2>
               <p className="temperature">
                    {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
               </p>
               <p>Max temperature : {parseInt(main.temp_max - kelvin, 10)} &#x2103; </p>
               <p>Min temperature : {parseInt(main.temp_max - kelvin, 10)} &#x2103; </p>
           </div>
       </div> 
    );
}
    
export default Weather;
;
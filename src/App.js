import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';

function App() {

  const [ city, setCity ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ error, setError ] = useState(false);
  const [ result, setResult ] = useState({});

  useEffect(() => {
    //prevent execution
    if(city === '') return;

    const queryAPI = async () => {
      const appID = '780407dd7f2513ce772a91be3c4a74f0';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`;
  
      // consult API 
      const response = await fetch(url);
      const result = await response.json();
  
      setResult(result);
      
    }

    queryAPI();
  }, [ city, country ]);
  

  const dataQuery = data => {
    //check that both fields are filled
    if(data.city === '' || data.country === '') {
      //error
      setError(true);
      return;
    }

    //city and country exis, add them to state
    setCity(data.city);
    setCountry(data.country);
    setError(false);
  }

  
  
  //conditional loading of component
  let component;
  if(error){
    //there is an error, show it
    component = <Error message='Both fields are mandatory!' />

  }else if (result.cod === "404"){
    component = <Error message="This city does not exist in our resgistry." />

  }  else {
    //show Weather
    component = <Weather 
                  result={result}
                />;
  }

  return (
    <div className="App">
      <Header 
        title="React Weather App"
      />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form 
                dataQuery={dataQuery}
              />
            </div>

            <div className="col s12 m6">
              {component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

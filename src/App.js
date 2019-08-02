import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [ city, setCity ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ error, setError ] = useState(false);
  

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
  

  return (
    <div className="App">
      <Header 
        title="React Wheather App"
      />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col sm12 m6">
              <Form 
                dataQuery={dataQuery}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

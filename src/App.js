import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header 
        title="React Wheather App"
      />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col sm12 m6">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React,{useState} from 'react';
import './App.css';
import CovidInfo from './CovidInfo';
import CountriesDropDown from './CountriesDropDown';

function App() {

  const [country,setCountry] = useState("")

  const countrySelected = (childData) => {
    console.log(childData)
    setCountry(childData)
  }

  return (
    <div className="App">
      <h1>
        COVID 19 Tracker App in React
      </h1>
      
      <CountriesDropDown selectedCountry = {countrySelected}></CountriesDropDown>
      <CovidInfo country={country}></CovidInfo>
    </div>
  );
}

export default App;

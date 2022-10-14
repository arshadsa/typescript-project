import React from 'react';
import './App.css';
import {Person, Country} from './Person';

function App() {

  const getAge = (name: string): number =>{
    return 99;
  }

  return (
    <div className="App">
      <Person
        name="Arshad"
        email="arshad@gmail.com"
        age={23}
        isMarried={true}
        friends={['Jake', 'Jessica', 'Jerry']}
        country = {Country.France}
      />
    </div>
  );
}

export default App;

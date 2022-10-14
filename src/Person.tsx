import React, { useState } from 'react';

interface Props{
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country{
  Brazil = "Brazil",
  Canada = "Canada",
  France = "France"
}


export const Person = (props: Props) => {
  const [name, setName] = useState<string>("");
  return (
    <div>
      <h1>Name: {}</h1>
      <h1>Email: {}</h1>
      <h1>Age: {}</h1>
      <h1>This person {props.isMarried} ? 'is': 'is not' MARRIED</h1>
      {props.friends.map(((friend)=> (
        <h1>{friend}</h1>
      )))}
      <h1>Country: {props.country}</h1>

    </div>
  );
};
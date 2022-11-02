import './App.css';
import React, {useState} from 'react';

export default function App() {
    const [name , setName] = useState("tewabe");
     const [age , setAge] = useState(30);
    
  return (
    <main>
      <div className="center">
          <p> Name:{}
              <input type = "text" value = {name}
                onChange = { e => setName(e.target.value)} />
          </p>
          <p> Age : { age } </p>
          <button onClick = {() =>  setAge(age + 1 )}>Increment Age</button>
          <p> state = Age: {age}, Name: {name}</p>
      </div>
    </main>
  )
}

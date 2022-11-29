import * as React from 'react';
import './style.css';

const newArray = ['shubham', 123, 'vig', 'balle_balle'];

export default function App() {
  const [emptyArray, setemptystate] = React.useState(['abc', 'def', 4565]);
  const [newArray1, setnewArraystate] = React.useState([]);
  const joiningArray = () => {
    for (var i = 0; i < newArray.length; i++) {
      emptyArray.push(newArray[i]);
      console.log(emptyArray);
    }
  };

  return (
    <div>
      <button onClick={joiningArray}>Join array</button>
    </div>
  );
}

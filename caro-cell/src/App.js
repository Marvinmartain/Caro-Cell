// import logo from './logo.svg';
import './App.css';
// bring in useState hook
import {useState} from 'react';

// bring in our data
import cardImages from './models/cardImgs';
import symbols from './models/symbols';

// bring in our components
import Card from './components/Card';
import Button from './components/Button';



function App() {
// what make caro-cell work 
// count 
const [count, setCount] = useState(0);
// currentPic
const [currentPic, setCurrentPic] = useState(cardImages[count])
// established state
const changeCount = () => {
  setCount(count + 1);
  console.log("Count is Currently:",count)
  
  setCurrentPic(cardImages[count]);
  console.log("Pic is Currently:",currentPic)
};

const reverseCount = () => {
  setCount(count - 1);
  console.log("Count is Currently:",count)

  setCurrentPic(cardImages[count]);
  console.log("Pic is Currently:",currentPic)
};

  return (
<div className="App">
  <Card currentCount={count} images={cardImages[count]}/>
  <div>
    <Button togglePic={reverseCount} icons={symbols.left}/>  
    <Button togglePic={changeCount} icons={symbols.right}/> 

  </div>
</div>
  );
}

export default App;

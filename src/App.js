import React, { useState} from 'react';
import { LeftArrow, RightArrow } from './components/Arrows.js';
import { Weather } from './features/weather/Weather.js';
import { Carousel } from './features/carousel/Carousel.js';
import { Quote } from './features/quote/Quote.js';
import { TodoForm } from './components/TodoForm.js';
import { TodoList } from './features/todo/todoList.js';
import './App.css';


function App() {
  const [changeImage, setChangeImage] = useState(false);


  const handleClick = () => { setChangeImage((old) => { return !old }) }




  return (
    <div className='app'>
      <div className='app-background'><Carousel change={changeImage} /></div>
      <div className='app-content'>
        <div className='weather'><Weather /></div>
        <button onClick={handleClick} className='arrow' id='left-arrow'>{<LeftArrow />}</button>
        <main className='todo-app'>
          <TodoForm />
          <div className='todo-container container'><TodoList/></div>
        </main>
        <button onClick={handleClick} className='arrow' id='right-arrow'>{<RightArrow />}</button>
        <footer className='quote'>
          <Quote />
        </footer>
      </div>
    </div>
  );
}

export default App;

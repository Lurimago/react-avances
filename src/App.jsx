import './App.css'
import { useState } from 'react';
import AboutMe from './components/AboutMe';
import Hobbies from './components/Hobbies';
import FreeTime from './components/FreeTime';
import FavFood from './components/FavFood';
import MyStack from './components/MyStack';
import Card from './components/Card';
import Contador from './components/Contador';
import MostrarPass from './components/MostrarPass';
import Bulb from './components/Bulb';
import BulbSinc from './components/BulbSinc';
import Users from './components/Users';
import CounterWeek2 from './components/CounterWeek2';


function App() {
  const [isOn, setIsOn] = useState(false)
  const toggleIsOn = () => { setIsOn(!isOn) }


  return (
    <div className="App">
      <CounterWeek2/>
      <Users />
      <BulbSinc
        title="Tarea Moral Bombillas"
        item1="Bombilla 1 Sincronizada"
        isOn={isOn}
        toggleIsOn={toggleIsOn}
      />
      <BulbSinc
        title="Tarea Moral Bombillas"
        item1="Bombilla 2 Sincronizada"
        isOn={isOn}
        toggleIsOn={toggleIsOn}
      />
      <BulbSinc
        title="Tarea Moral Bombillas"
        item1="Bombilla 3 Sincronizada"
        isOn={isOn}
        toggleIsOn={toggleIsOn}
      />
      <Bulb />
      <MostrarPass />
      <Contador />
      <Card
        title="Sobre mí"
        item1="Lurimago"
        item2="Mi Serie Favorita: Suits"
        item3="Música Favorita: Andrés Calamaro"
        background="bg-green"
      />
      <Card
        title="Mis Hobbies"
        item1="Pasear"
        item2="Gym"
        item3="Jugar Futbol"
        background="bg-redsuave"
      />
      <Card
        title="En mi tiempo libre me gusta"
        item1="No tengo :p"
        item2="Jugar Futbol"
        item3="Comer"
        background="bg-bluesuave"
      />
      <Card
        title="Mi comida favorita"
        item1="Ceviche"
        item2="Arroz con Pato"
        item3="Arroz Chaufa"
        background="bg-orangesuave"
      />
      <Card
        title="My Stack"
        item1="HTML"
        item2="CSS"
        item3="JavaScript"
        background="bg-yellow"
      />
      <AboutMe />
      <Hobbies />
      <FreeTime />
      <FavFood />
      <MyStack />
    </div>
  )
}
export default App

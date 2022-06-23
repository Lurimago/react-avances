import './App.css'
import AboutMe from './components/AboutMe';
import Hobbies from './components/Hobbies';
import FreeTime from './components/FreeTime';
import FavFood from './components/FavFood';
import MyStack from './components/MyStack';
import Card from './components/Card';
import Contador from './components/Contador';
import MostrarPass from './components/MostrarPass';
import Bulb from './components/Bulb';
//import BulbSinc from './components/BulbSinc';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Users/>

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

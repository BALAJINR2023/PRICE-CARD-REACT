import './App.css'
import { Task1 } from './components/Task1'

function App() {
const FREE={
  typed:"FREE",
  price:0,
  user:{
    value:"SINGLE",
    style:"able",
    mark:<span>&#10003;</span>
  },
  storage:{
    value:50,
    style:"able",
    mark:<span>&#10003;</span>
  },
  ulpu:{
    style:"able",
    mark:<span>&#10003;</span>
  },
  com:{
    style:"able",
    mark:<span>&#10003;</span>
  },
  ulpr:{
    style:"disable",
    mark:<span>&#10539;</span>
  },
  ded:{
    style:"disable",
    mark:<span>&#10539;</span>
  },
  free:{
    style:"disable",
    mark:<span>&#10539;</span>
  },
  month:{
    style:"disable",
    mark:<span>&#10539;</span>
  },
}
const PLUS={
  typed:"PLUS",
  price:9,
  user:{
    value:"FIVE",
    style:"able",
    mark:<span>&#10003;</span>
  },
  storage:{
    value:50,
    style:"able",
    mark:<span>&#10003;</span>
  },
  ulpu:{
    style:"able",
    mark:<span>&#10003;</span>
  },
  com:{
    style:"able",
    mark:<span>&#10003;</span>
  },
  ulpr:{
    style:"able",
    mark:<span>&#10003;</span>
  },
  ded:{
    style:"able",
    mark:<span>&#10003;</span>
  },
  free:{
    style:"able",
    mark:<span>&#10003;</span>
  },
  month:{
    style:"disable",
    mark:<span>&#10539;</span>
  },
  
}
const PRO={
  typed:"PRO",
  price:49,
  user:{
    value:"UNLIMITED",
    style:"able",
    mark:<span>&#10003;</span>
  },
  storage:{
    value:50,
    style:"able",
    mark:<span>&#10003;</span>
  },
  ulpu:{
    style:"able",
    mark:<span>&#10003;</span>
  },
  com:{
    style:"able",
    mark:<span>&#10003;</span>
  },
  ulpr:{
    style:"able",
    mark:<span>&#10003;</span>
  },
  ded:{
    style:"able",
    mark:<span>&#10003;</span>
  },
  free:{
    style:"able",
    mark:<span>&#10003;</span>
  },
  month:{
    style:"able",
    mark:<span>&#10003;</span>
  },
}
return (
    <>
    <div className='heading'>REACT PRICE CARD</div>
      <div className='com'>
      <div className='pricetag'>
      <Task1 type={FREE}/>
      <Task1 type={PLUS}/>
      <Task1 type={PRO}/>
      </div>
      </div>
    </>
  )
}
export default App

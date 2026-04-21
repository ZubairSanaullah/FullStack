import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import { Counter } from './components/Counter.tsx'
import { ChaiList } from './components/ChaiList.tsx'

import type { Chai } from './types/types.ts'
import { OrderForm } from './components/OrderForm.tsx'

const chaiList: Chai[] = [
  {id: 1, name: "Masala Chai", price: 70, isSpecial: true},
  {id: 2, name: "Ginger Chai", price: 60, isSpecial: false},
  {id: 3, name: "Cardamom Chai", price: 65, isSpecial: true},
  {id: 4, name: "Lemon Tea", price: 50, isSpecial: false},
]

function App() {

  return (
    <>
    <div>
      <h1>Hello World</h1>
      <ChaiCard name="Masala Chai" price={70} isSpecial={true} />
     </div>
     <div>
      <Counter />
     </div>
     <div>
      <ChaiList items={chaiList} />
     </div>

     <div>
      <OrderForm 
        onSubmit={(order) => {
          console.log("Placed", order.name, order.cups)
        }} 
      />
     </div>
    </>
  )
}

export default App

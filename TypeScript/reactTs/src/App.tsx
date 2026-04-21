import { ChaiCard } from './components/ChaiCard.tsx'
import './App.css'

function App() {

  return (
    <>
    <div>
      <h1>Hello World</h1>
      <ChaiCard name="Masala Chai" price={70} isSpecial={true} />
     </div>
    </>
  )
}

export default App

import './App.css'
import AnimatedBox from './Components/animatedBox'
import LeftToRight from './Components/LeftToRight'
import RightToLeft from './Components/RightToLeft'

function App() {
  

  return (
    <>
      <div className="App">
      <h1>Framer Motion Example</h1>
      <AnimatedBox />
      <LeftToRight/>
      <RightToLeft/>
    </div>
    </>
  )
}

export default App

import './App.css'
import AnimatedBox from './Components/direction/animatedBox'
import BottomToTopFade from './Components/direction/BottomToTop'
import LeftToRight from './Components/direction/LeftToRight'
import RightToLeft from './Components/direction/RightToLeft'
import TopToBottomFade from './Components/direction/TopToBottom'
import InteractiveButton from './Components/Gesture/InteractiveButton'
import FramerMotionExamples from './Components/transition/Example1'
import VariantsShowcase from './Components/Variant/Variant'
import GestureShowcase from './Components/Gesture/InteractiveButton'

function App() {
  

  return (
    <>
      <div className="App">
      <h1>Framer Motion Example</h1>
      {/* <AnimatedBox />
      <LeftToRight/>
      <RightToLeft/>
      <TopToBottomFade/>
      <BottomToTopFade/> */}
      {/* <FramerMotionExamples/> */}
      {/* <VariantsShowcase/> */}
      <GestureShowcase/>
      
      
    </div>
    </>
  )
}

export default App

import { useState, memo } from 'react'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)


  const logSomething = useCallback(() => {
    console.log("hey there"); // now it'll not re render as it's wrapped under useCallback, will only re render if something in the dependency array changes
    
  }, [])

return <div>
  <Child inputFunction={logSomething} />
  <button onClick={() => {
    setCount(count + 1)
  }}>click me {count} </button>
</div>
}

const Child = memo(({ inputFunction }) => {
  console.log("child render");
  return <div>
    <button onClick={inputFunction}>Button Clicked</button>
  </div>
})

export default App

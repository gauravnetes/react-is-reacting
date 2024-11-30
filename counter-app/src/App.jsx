// hook
import { set } from "mongoose"
import { useState } from "react"
import React from "react"


// sadly, you can't define state variable like this in react 
// cause React doesn't take every variable as a state variable
// const state = {
//   count: 0
// }

// you have to define the state in a certain way to make it considered by React

function App() {
  // state
  const [count, setCount] = useState(0) // defining state var || 0 will go the count variable

  // function onclickFunc() {
  //   // count = count + 1 // not the right way to set state variables
  //   setCount(count + 1) // correct way to set the state variables
  //   console.log(count + 1);
    
  // }
  return (

      <div>
        <CustomBtn count={count} setCount={setCount}></CustomBtn> {/* Now it's a reusable component */}
        <CustomBtn count={count - 1} setCount={setCount}></CustomBtn> {/* Now it's a reusable component */}
        <CustomBtn count={count * 10} setCount={setCount}></CustomBtn> {/* Now it's a reusable component */}
      </div>
  )

  // To make it more cleaner with reusable components
  function CustomBtn(props) {

    function onclickFunc() {
      props.setCount(props.count + 1)
    }

    return <button onClick={onclickFunc}>
      Counter {props.count}
    </button>
  }
}

export default App

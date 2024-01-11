import { useState } from 'react'
import './App.css'

function App() {

  const [visibility, setVisibility] = useState(true);

  function changeVisibility() {
    if (visibility) {
      setVisibility(false)
    } else {
      setVisibility(true)
    }
  }

  function Text() {
    if (visibility) {
      return <p>Welcome to react challenges</p>
    }
    else {
      return <></>;
    }
  }
  
  return (
    <>
      <button onClick={changeVisibility}>Show/Hide Text</button>
      <Text></Text>
    </>
  )
}

export default App

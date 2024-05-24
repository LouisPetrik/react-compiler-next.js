'use client'
import { useState } from 'react'

function OtherComponent() {
  console.log('OtherComponent renders')
  return <p>Hello!</p>
}

export default function MyComponent() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>

      <OtherComponent />
    </div>
  )
}

import React, { FC, useState, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'

interface Props {
  count?: number
}

const App: FC<Props> = ({ count }) => {
  const [counter, setCounter] = useState<number>(count);
  const [evenCounter, setEvenCounter] = useState<number>(count);

  const clickHandler = () => {
    console.log('click to the document')
  }

  useEffect(() => {
    document.title = `Count: ${counter}`;

    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [counter])

  useMemo(() => {
    let i = 0;
    while (i < Math.pow(10, 5)) {
      console.log('i: ', i);
      i++;
    }
  }, [evenCounter])

  return <div>
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
    </div>
    <div>
      <h2>Event counter</h2>
      <button onClick={() => setEvenCounter(evenCounter - 2)}>-</button>
      <button onClick={() => setEvenCounter(evenCounter + 2)}>+</button>
      {evenCounter}
    </div>
  </div>
}

App.defaultProps = {
  count: 10
}

ReactDOM.render(<App count={100} />,
  document.getElementById("root"))

console.log("Hello world!")
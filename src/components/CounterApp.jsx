import { useState } from 'react'
import PropTypes from 'prop-types'
import './CounterApp.css'

function CounterApp({value}) {

  const [contador, setContador] = useState(value)

  const incrementHandle = () => {
    setContador(contador + 1)
  }

  const decrementHandle = () => {
    if ( contador > 0 ){
      setContador(contador - 1)
    }
  }

  const resetHandle = () => {
    setContador(value)
  }

  return (
    <div className='app-container'>
      <h1>Simple contador en React</h1>
      <h2 aria-label='contador'>{ contador }</h2>
      <div>
        <button data-testid='btnincrement' onClick={ incrementHandle }>+</button>
        <button data-testid='btndecrement' onClick={ decrementHandle }>-</button>
        <button data-testid='btnreset' onClick={ resetHandle }>Reset</button>
      </div>
    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 10
}

export default CounterApp
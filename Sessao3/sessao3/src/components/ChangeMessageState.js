import React from 'react'

export const ChangeMessageState = ({biscoito}) => {
  
  const messages = ["oi", "ola", "tchau", "tudo bem?"]
  
    return (
    <div> 
        <button onClick={() => biscoito(messages[0])}> 1  </button>
        <button onClick={() => biscoito(messages[1])}> 2  </button>
        <button onClick={() => biscoito(messages[2])}> 3  </button>
    </div>
  )
}

export default ChangeMessageState;
import colorNames from 'colornames'
import React from 'react'

const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText, randomColor}) => {

  return (
    <form onSubmit={(e)=> e.preventDefault()}>
      <label htmlFor="Add Color Name">Add Color Name:</label>
      <input type="text" onfocus="this.value=''" placeholder='Add color name' required 
        value={colorValue} 
        onChange={(e)=> {
          setColorValue(e.target.value)
          setHexValue(colorNames(e.target.value))
        }
      } />
      <button type='button' onClick={()=> setIsDarkText(!isDarkText)} className='btn'>Change Text Color</button>
      <button type='button' onClick={()=> randomColor()} className='btn'>Random Color</button>
    </form>
  )
}

export default Input
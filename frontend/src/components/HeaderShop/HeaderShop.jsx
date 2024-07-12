import React, { useState } from 'react'



const headerShop = () => {
  const [image, setImage] = useState([1, 2, 3])
  let [count, setCount] = useState(0)

  return (
    <>
      <div id='carousel'>
        <div>
          {
            <img src={``} alt={`${image[count]}`} />
          }
        </div>
        {count < image.length - 1 && <button id='buttonRightShop' onClick={() => {
          setCount(count += 1)
        }}>{'>'}</button>}
        {count > 0 && <button id='buttonLeftShop' onClick={() => {
          setCount(count -= 1)
        }}>{'<'}</button>}
      </div>
    </>
  )
}

export default headerShop
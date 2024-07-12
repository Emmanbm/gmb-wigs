import React, { useState } from 'react'
import HeaderShop from '../components/HeaderShop/HeaderShop'
import logo from "../assets/logo.png";

const Shop = () => {
  const [image, setImage] = useState([1, 2, 3])

  return (
    <div className='page'>
      <HeaderShop />
      <div id='imgShop'>
        {image.map((img, i) => {
          return (
            <>
              <div>
                <img src={`${logo}`} alt={`wig ${img}`} />
                <div className='description'>
                  <p>name</p>
                  <p>price</p>
                  <button id='buttonDetail'>Détails</button>
                </div>
              </div>
            </>

          )
        })}
      </div>
    </div>
  )
}

export default Shop
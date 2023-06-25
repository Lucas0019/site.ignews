import React, { useEffect, useState } from 'react'

export const AsyncButton = () => {

  const [ isButtonVisible, setIsButtonVisible ] = useState(false)
  const [ isButtonInvisible, setIsButtonInvisible ] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true)
    }, 2000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsButtonInvisible(true)
    }, 2000)
  }, [])

  return (
    <div>
      <div>Lista de Posts</div>
      { isButtonVisible && <button>Carregar mais posts</button>}

      { !isButtonInvisible && <button>Carregar mais posts</button>}
    </div>
  )
}

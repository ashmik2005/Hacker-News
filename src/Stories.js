import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => { 

  const {isLoading} = useGlobalContext()  
  console.log(isLoading)

  if (isLoading) { 
    return <div class="loading"></div>
  }

  return <h2>stories component</h2>
}

export default Stories

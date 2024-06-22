import React, { useState } from 'react'
//import NewsBlock from '../../comp/NewsBlock/NewsBlock'
import Fetch from '../../fetchData';


function Home() {
  return (
    <div className='home'>
        <Fetch/>
    </div>
  )
}

export default Home;
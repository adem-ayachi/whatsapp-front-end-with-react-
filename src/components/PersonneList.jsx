import React from 'react'
import {dataList} from './Data/dataPersonne'
import Personne from './Personne'
export default function PersonneList() {
  return (
    <div id='conversations_list' className='conversations_list'>
      {
        dataList.map((dataPersonne, i)=><Personne key={i} abdalla={dataPersonne} />)
      }
    </div>
  )
}
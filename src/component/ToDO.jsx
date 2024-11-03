import React, { useState } from 'react'

function ToDO() {
  const[showtext,setShowtext]=useState(true);
  const mybtn=()=>{
    setShowtext(!showtext)
  }
  const mydiv={
    display:showtext?'':'none'
  }
  return (
    <>
    <div>
      <button onClick={mybtn}>{showtext?'show':'hide'}</button>
      <div style={mydiv}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, iusto impedit, dicta ducimus, incidunt illum consequatur repudiandae reiciendis provident cumque eaque illo saepe ex aliquam minus ipsa dolores voluptatem expedita maiores quae ipsum eum nulla similique fugiat! Incidunt blanditiis numquam similique saepe et.
      </div>
          </div>
    </>

  )
}
export default ToDO

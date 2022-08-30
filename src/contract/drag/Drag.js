import React, {useState, useEffect, useRef} from 'react'
const mugu ={
  transform: 'scale(0.2)'
}
export default function Drag() {

  const [pos, setPos] = useState({x: 0, y: 0});
  const [pre, setPre] = useState(false)
  const ref = useRef(null);

    const onMouseMove = (e)=>{
      if (pre) {
        setPos({

          x: pos.x + e.movementX,
          y: pos.y + e.movementY
        })
      }
    }


  useEffect(() => {
    if (ref.current) {
        ref.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      }
  }, [pos])
  

  return (
    <div>
      <img ref={ref} onMouseMove={onMouseMove} onMouseDown={()=> setPre(true)} onMouseUp={()=> setPre(false)} style={mugu} src="../../../a8.png" className='w-25' alt="" />
    </div>
  )
}

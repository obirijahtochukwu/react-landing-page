import React, {useState, useEffect, useRef} from 'react'

export default function Drag() {

  const [position, setPos] = useState({x: 0, y: 0});
  const [pressed, setPressed] = useState(false)
  const [mugu, setMugu] = useState('');
  const ref = useRef(null);

    const onMouseMove = (e)=>{
      if (pressed) {
        setPos({

          x: position.x + e.movementX,
          y: position.y + e.movementY
        })
      }
    }


  useEffect(() => {
    if (ref.current) {
      setMugu(()=>  `translate(${position.x}px, ${position.y}px)`)
        console.log(mugu)
      }
  }, [position, mugu])
  

  return (
    <div>
      <img ref={ref} onMouseMove={onMouseMove} onMouseDown={()=> setPressed(true)} onMouseUp={()=> setPressed(false)} style={{transform: mugu}} src="../../../a8.png" className='w-25' alt="" />
    </div>
  )
}

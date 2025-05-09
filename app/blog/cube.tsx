'use client'

import React, { useState, useEffect, useRef } from 'react'
import { getTouchPositions } from './utils'

export const cubeWidth = 50
export const faceArray = ['front', 'back', 'top', 'bottom', 'left', 'right']
export const facePosition = {
  left: [-cubeWidth, 0, 0],
  right: [cubeWidth, 0, 0],
  front: [0, 0, cubeWidth],
  back: [0, 0, -cubeWidth],
  top: [0, -cubeWidth, 0],
  bottom: [0, cubeWidth, 0],
}

const Cube = ({ faceRotationInit, translate, orientation }) => {
  const elem = useRef(null)
  const [touchStarted, setTouchStarted] = useState(false)
  const [faceColors, setFaceColors] = useState(() => {
    const initialFaceColors = {}
    initialFaceColors.top = translate[1] === -cubeWidth ? '#ffffff' : ''
    initialFaceColors.bottom = translate[1] === cubeWidth ? '#FDCC09' : ''
    initialFaceColors.left = translate[0] === -cubeWidth ? '#DC422F' : ''
    initialFaceColors.right = translate[0] === cubeWidth ? '#FF6C00' : ''
    initialFaceColors.front = translate[2] === cubeWidth ? '#009D54' : ''
    initialFaceColors.back = translate[2] === -cubeWidth ? '#3D81F6' : ''
    return initialFaceColors
  })

  const disableFaceRotation =
    Math.abs(translate[0]) + Math.abs(translate[1]) + Math.abs(translate[2]) === cubeWidth

  useEffect(() => {
    const currentElem = elem.current
    const handleTouchEnd = () => {
      setTouchStarted(false)
    }

    if (currentElem) {
      currentElem.addEventListener('mouseup', handleTouchEnd)
      currentElem.addEventListener('touchend', handleTouchEnd)
      currentElem.addEventListener('touchcancel', handleTouchEnd)
    }

    return () => {
      if (currentElem) {
        currentElem.removeEventListener('mouseup', handleTouchEnd)
        currentElem.removeEventListener('touchend', handleTouchEnd)
        currentElem.removeEventListener('touchcancel', handleTouchEnd)
      }
    }
  }, [])

  const cubePosition = () => {
    return translate
      ? {
          transform: `translate3d(${translate[0]}px,${translate[1]}px,${translate[2]}px)
         rotate3d(${orientation[0]},${orientation[1]},${orientation[2]},${orientation[3]}deg)`,
        }
      : {}
  }

  console.log({ orientation })

  const logoPosition = () => {
    return translate
      ? {
          transform: `translate3d(0px,0px,0px)
         rotate3d(0px,0px,0px,0deg)`,
        }
      : {}
  }

  const onTouchStart = (eve, face, index) => {
    if (disableFaceRotation) return true
    eve.stopPropagation()
    faceRotationInit({ x: getTouchPositions(eve).clientX, y: getTouchPositions(eve).clientY }, face)
  }

  return (
    <div ref={elem} className='cube' style={cubePosition()}>
      {faceArray.map((face, index) => (
        <div
          key={index}
          onMouseDown={(evt) => onTouchStart(evt, face, index)}
          onTouchStart={(evt) => onTouchStart(evt, face, index)}
          className={`face ${face}`}
          style={{ backgroundColor: faceColors[face] }}
        ></div>
      ))}
    </div>
  )
}

export default Cube

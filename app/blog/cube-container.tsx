'use client'

import React, { useState, useEffect, useRef } from 'react'
import '@/css/cube.css'
import Cube, { cubeWidth, facePosition } from './cube'
import {
  calcPosition,
  calculateResultantAngle,
  getCubePositionDiffrence,
  getTouchPositions,
} from './utils'

const CubeContainer = () => {
  const [positions, setPositions] = useState([
    [0, 0, 0],
    [-50, 0, 0],
    [50, 0, 0],
    [0, -50, 0],
    [0, 50, 0],
    [-50, -50, 0],
    [-50, 50, 0],
    [50, -50, 0],
    [50, 50, 0],

    [0, 0, -50],
    [-50, 0, -50],
    [50, 0, -50],
    [0, -50, -50],
    [0, 50, -50],
    [-50, -50, -50],
    [-50, 50, -50],
    [50, -50, -50],
    [50, 50, -50],

    [0, 0, 50],
    [-50, 0, 50],
    [50, 0, 50],
    [0, -50, 50],
    [0, 50, 50],
    [-50, -50, 50],
    [-50, 50, 50],
    [50, -50, 50],
    [50, 50, 50],
  ])
  const [angleOfRotation, setAngleOfRotation] = useState(Array(27).fill(0))
  const [rotationVector, setRotationVector] = useState(Array(27).fill([1, 0, 0]))
  const [faceRotationAngle, setFaceRotationAngle] = useState(0)
  const [touchStarted, setTouchStarted] = useState(false)
  const [mousePoint, setMousePoint] = useState({})
  const [touchedFace, setTouchedFace] = useState(undefined)
  const [facePositionIndex, setFacePositionIndex] = useState(null)
  const [autoRotation, setAutoRotation] = useState(undefined)
  const [currentMove, setCurrentMove] = useState(0)
  const [reverseAngle, setReverseAngle] = useState(false)
  const [faceRotationIndex, setFaceRotationIndex] = useState(null)

  const elem = useRef(null)

  useEffect(() => {
    const currentElem = elem.current
    const handleTouchEnd = () => {
      setTouchStarted(false)
      setMousePoint({})
      setTouchedFace(undefined)
      if (faceRotationIndex) {
        reArrangeCubes()
      }
    }

    currentElem.addEventListener('mouseup', handleTouchEnd)
    currentElem.addEventListener('touchend', handleTouchEnd)
    currentElem.addEventListener('touchcancel', handleTouchEnd)

    rotateCubeSpace(120, 0)

    return () => {
      currentElem.removeEventListener('mouseup', handleTouchEnd)
      currentElem.removeEventListener('touchend', handleTouchEnd)
      currentElem.removeEventListener('touchcancel', handleTouchEnd)
    }
  }, [])

  const getOrientation = (index) => {
    return [
      rotationVector[index][0],
      rotationVector[index][1],
      rotationVector[index][2],
      angleOfRotation[index],
    ]
  }

  const onTouchStart = (eve) => {
    setTouchStarted(true)
    setMousePoint({
      x: getTouchPositions(eve).clientX,
      y: getTouchPositions(eve).clientY,
    })
  }

  const rotateCubeSpace = (diffX, diffY) => {
    const arr = positions.slice()
    const angleOfRotationArr = []
    const rotationVectorArr = []
    for (let i = 0; i < arr.length; i++) {
      arr[i] =
        Math.abs(diffY) > Math.abs(diffX)
          ? calcPosition(positions[i], [1, 0, 0], -diffY)
          : calcPosition(positions[i], [0, 1, 0], diffX)
      const rotationResult =
        Math.abs(diffY) > Math.abs(diffX)
          ? calculateResultantAngle(-diffY, [1, 0, 0], rotationVector[i], angleOfRotation[i])
          : calculateResultantAngle(diffX, [0, 1, 0], rotationVector[i], angleOfRotation[i])
      angleOfRotationArr[i] = rotationResult.gama
      rotationVectorArr[i] = rotationResult.rotationVector
    }

    setPositions(arr)
    setAngleOfRotation(angleOfRotationArr)
    setRotationVector(rotationVectorArr)
  }

  const onTouchMove = (eve) => {
    if (touchStarted) {
      const diffY = getTouchPositions(eve).clientY - mousePoint.y
      const diffX = getTouchPositions(eve).clientX - mousePoint.x
      setMousePoint({
        x: getTouchPositions(eve).clientX,
        y: getTouchPositions(eve).clientY,
      })
      rotateCubeSpace(diffX, diffY)
    } else if (touchedFace) {
      // let diffY = getTouchPositions(eve).clientY - mousePoint.y;
      // let diffX = getTouchPositions(eve).clientX - mousePoint.x;
      // setMousePoint({
      //   x: getTouchPositions(eve).clientX,
      //   y: getTouchPositions(eve).clientY,
      // });
      // rotateCube(
      //   diffX / 2,
      //   diffY / 2,
      //   positions[facePositionIndex],
      //   touchedFace,
      //   getOrientation(facePositionIndex)
      // );
    }
  }

  const reArrangeCubes = () => {
    if (faceRotationAngle % 90 === 0) {
      setFaceRotationAngle(0)
      setFaceRotationIndex(null)
      setAutoRotation(undefined)
      return
    }
    const move =
      Math.abs(faceRotationAngle % 90) < 80 && Math.abs(faceRotationAngle % 90) > 10 ? 3 : 1

    setAutoRotation(true)
    setCurrentMove(move)
    setReverseAngle(
      !autoRotation && Math.abs(faceRotationAngle % 90) < 30 ? !reverseAngle : reverseAngle
    )

    setTimeout(() => {
      rotateCube(Math.sqrt(0.5), Math.sqrt(0.5), null)
      reArrangeCubes()
    }, 0.001)
  }

  const rotateCube = (xAxisMove, yAxisMove, cubePosition, touchedFace, cubeOrientation) => {
    if (autoRotation && touchedFace) return
    if (xAxisMove === 0 && yAxisMove === 0) return

    const move = touchedFace
      ? Math.round(Math.sqrt(xAxisMove * xAxisMove + yAxisMove * yAxisMove))
      : currentMove

    const rotVector = rotationVector.slice()
    const angOfRotation = angleOfRotation
    const arr = positions.slice()

    const sixFaceAxis = [
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0],
      [1, 0, 0],
      [-1, 0, 0],
    ]

    sixFaceAxis.forEach((faceAxis, f) => {
      sixFaceAxis[f] = calcPosition(faceAxis, rotVector[0], angOfRotation[0])
    })

    let index = 0
    let revAngle = false
    if (touchedFace) {
      let movedPosition
      let diff = 1000

      if (faceRotationAngle) {
        index = faceRotationIndex
        movedPosition = calcPosition(cubePosition.slice(), sixFaceAxis[index].slice(), move)
        if (diff > getCubePositionDiffrence(movedPosition, cubePosition, xAxisMove, yAxisMove)) {
          diff = getCubePositionDiffrence(movedPosition, cubePosition, xAxisMove, yAxisMove)
          revAngle = false
        }

        movedPosition = calcPosition(cubePosition.slice(), sixFaceAxis[index].slice(), -move)
        if (diff > getCubePositionDiffrence(movedPosition, cubePosition, xAxisMove, yAxisMove)) {
          diff = getCubePositionDiffrence(movedPosition, cubePosition, xAxisMove, yAxisMove)
          revAngle = true
        }
      } else {
        const faceVector = calcPosition(
          facePosition[touchedFace],
          [cubeOrientation[0], cubeOrientation[1], cubeOrientation[2]],
          cubeOrientation[3]
        )
        for (const i in sixFaceAxis) {
          if (
            Math.abs(
              cubePosition[0] * sixFaceAxis[i][0] +
                cubePosition[1] * sixFaceAxis[i][1] +
                cubePosition[2] * sixFaceAxis[i][2] -
                50
            ) < 0.1 &&
            Math.abs(
              faceVector[0] * sixFaceAxis[i][0] +
                faceVector[1] * sixFaceAxis[i][1] +
                faceVector[2] * sixFaceAxis[i][2] -
                50
            ) > 0.1
          ) {
            movedPosition = calcPosition(cubePosition.slice(), sixFaceAxis[i].slice(), move)
            if (
              diff > getCubePositionDiffrence(movedPosition, cubePosition, xAxisMove, yAxisMove)
            ) {
              diff = getCubePositionDiffrence(movedPosition, cubePosition, xAxisMove, yAxisMove)
              index = i
              revAngle = false
            }

            movedPosition = calcPosition(cubePosition.slice(), sixFaceAxis[i].slice(), -move)
            if (
              diff > getCubePositionDiffrence(movedPosition, cubePosition, xAxisMove, yAxisMove)
            ) {
              diff = getCubePositionDiffrence(movedPosition, cubePosition, xAxisMove, yAxisMove)
              index = i
              revAngle = true
            }
          }
        }
      }

      setFaceRotationIndex(index)
      setReverseAngle(revAngle)
    } else {
      revAngle = reverseAngle
      index = faceRotationIndex
    }

    for (let j = 0; j < arr.length; j++) {
      const lineSum1 = arr[j][0] * sixFaceAxis[index][0]
      const lineSum2 = arr[j][1] * sixFaceAxis[index][1]
      const lineSum3 = arr[j][2] * sixFaceAxis[index][2]

      if (Math.abs(lineSum1 + lineSum2 + lineSum3 - 50) < 0.1) {
        arr[j] = calcPosition(positions[j], sixFaceAxis[index], revAngle ? -move : move)
        const rotationResult = calculateResultantAngle(
          revAngle ? -move : move,
          sixFaceAxis[index],
          rotVector[j].slice(),
          angOfRotation[j]
        )
        rotVector[j] = rotationResult.rotationVector
        angOfRotation[j] = rotationResult.gama
      }
    }

    setPositions(arr)
    setAngleOfRotation(angOfRotation)
    setRotationVector(rotVector)
    setFaceRotationAngle(faceRotationAngle + (revAngle ? -move : move))
  }

  const faceRotationInit = (mousePoint, face, index) => {
    setTouchedFace(face)
    setMousePoint(mousePoint)
    setFacePositionIndex(index)
  }

  return (
    <div
      ref={elem}
      className='cube-container'
      onMouseDown={onTouchStart}
      onTouchStart={onTouchStart}
      onMouseMove={onTouchMove}
      onTouchMove={onTouchMove}
    >
      {positions.map((val, index) => (
        <Cube
          key={index}
          faceRotationInit={(mousePoint, face) => {
            faceRotationInit(mousePoint, face, index)
          }}
          translate={positions[index]}
          orientation={getOrientation(index)}
        />
      ))}
    </div>
  )
}

export default CubeContainer

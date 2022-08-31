

import React from 'react'
import { Link } from 'react-router-dom'
import Board from './Board'
import styled from 'styled-components'
import Start from './Start'

export default function BreakOutMenu() {
  return (
    <>
        <Link to="/breakout_start">
            <Start />
        </Link>
    </>
        
  )
}



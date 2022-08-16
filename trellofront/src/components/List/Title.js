import { InputBase, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Title({ veri }) {
  const [open, setOpen] = useState(true)
  return (
    <div>
      {open ? (
        <div>
          
          <InputBase value="title" />
        </div>
      ) : (
        <div>
          
          <Typography onClick={() => setOpen(!open)} >title</Typography>
        </div>
      )}
    </div>
  )
}

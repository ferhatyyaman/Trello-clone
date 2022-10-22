import { InputBase, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Title({ veriTitle, titleId}) {
  const [open, setOpen] = useState(true)
  const [newTitle, setNewTitle] = useState(veriTitle);


  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };
 

  return (
    <div>
      {open ? (
        <div>
          
          <InputBase autoFocus fullWidth value={newTitle} onChange={handleOnChange} />
        </div>
      ) : (
        <div>
          
          <Typography onClick={() => setOpen(!open)} >{veriTitle}</Typography>
        </div>
      )}
    </div>
  )
}

import React from 'react'
import styles from "../../styles/TrelloContent.module.css"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function TrelloContent({ veri }) {
  return (
    <div>
      <Card className={styles.container}>
        <Typography>
          {veri.name}
        </Typography>

      </Card>
    </div>
    
  )
}

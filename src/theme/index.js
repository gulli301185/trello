import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material'
import { MuiButton } from './Button'

const Theme = ({children}) => {
    const theme=createTheme({
      components:{
        MuiButton,
        MuiInputBase:{
          styleOverrides:{
            root:{
              border:'1px solid',
              padding:'0.5rem',
              borderRadius:'3px',
              '& .Mui-error':{
                border:'1px solid red'
              }
            }
          }
        }
      }
    })
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default Theme
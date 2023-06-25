import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material'

const Theme = ({children}) => {
    const theme=createTheme({})
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default Theme
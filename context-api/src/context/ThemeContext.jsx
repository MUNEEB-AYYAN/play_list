import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'


export const ThemeDataContext = createContext();

const ThemeContext = ({children}) => {

    const [theme, setTheme] = useState('Light');

  return (
    <div>
        <ThemeDataContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeDataContext.Provider>
            
    </div>
  )
}

export default ThemeContext
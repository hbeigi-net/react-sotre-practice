import React , {createContext , useContext ,useState } from "react"


const ThemeContext = createContext()
export default function ThemeProviderMe({children})
{
    const [themeMode, setThemeMode] = useState("light")
    return <>
        <ThemeContext.Provider value={{themeMode , setThemeMode}}>
            {
                children
            }
        </ThemeContext.Provider>
    </>
}

export const useThemeMe =()=>
{
    return useContext(ThemeContext); 
}
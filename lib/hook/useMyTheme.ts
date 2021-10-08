import { useContext } from "react";
import { Context } from "../provider/MyThemeProvider";



const useMyTheme = () => {
    const {themeMode, setThemeMode} = useContext(Context);

    return {themeMode, setThemeMode};
}

export default useMyTheme;
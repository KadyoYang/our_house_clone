import styled from "styled-components";
import useMyTheme from "../../lib/hook/useMyTheme";


const ThemeTestBlock = styled.div`
background-color: ${props => props.theme.colors.bgColor};
color: ${props => props.theme.colors.textColor};
`

const TestA = () => {

    const {themeMode, setThemeMode} = useMyTheme();

    return (
    <div>
        <span>{"현재 theme : " + themeMode}</span>
        <button onClick={()=>{setThemeMode("dark");}}>다크모드</button>
        <button onClick={()=>{setThemeMode("white")}}>화이트모드</button>
        <ThemeTestBlock>
            <h1>우우우우</h1>
        </ThemeTestBlock>
    </div>

    )
}

export default TestA;
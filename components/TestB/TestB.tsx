import styled from "styled-components";

const ThemeTestBlock = styled.div`
background-color: ${props => props.theme.colors.bgColor};
color: ${props => props.theme.colors.textColor};
`

const TestB = () => {
    return (
    <ThemeTestBlock> 
        <h1>이야아아</h1>
    </ThemeTestBlock>
    )
}

export default TestB;
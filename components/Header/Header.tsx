import styled from "styled-components";
import Logo from "./component/Logo";


const HeaderBlock = styled.div`
box-sizing: border-box;
border-bottom: 1px solid #ebeded;
height:81px;
`

const UpperHeader = styled.div`
width: 1256px;
padding: 10px 60px;
margin: 0 auto;
box-sizing: border-box;

display:flex;
align-items: flex-start;
`

const NavigationLeft = styled.div`
flex: 0 0 auto;
align-self:center;
& + a {
    margin:6px 10px 0;
    padding:14px 6px; 
    font-size:18px; 
    font-weight: 700; cursor:pointer; 
    line-height: 26px; 
    letter-spacing: -0.4px;
}

& + a:hover{
    color:#35c5f0;
}
`

const NavigationRight = styled.div`

`

const LowerHeader = styled.div`


`


const Header = () => {


    return (
        <HeaderBlock>
            <UpperHeader>
                <Logo />
                <NavigationLeft>
                    <a>커뮤니티</a>
                    <a>스토어</a>
                    <a>인테리어시공</a>
                    
                </NavigationLeft>

                <NavigationRight>

                </NavigationRight>

            </UpperHeader>
        </HeaderBlock>
    )
}

export default Header;
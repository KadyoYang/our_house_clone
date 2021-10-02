import styled from "styled-components";
import Header from "../components/Header";



const IndexBlock = styled.div`
flex-direction: row;
align-content: center;
`


const index = () => {

    return (
    <IndexBlock>
        <Header />
    </IndexBlock>)
}

export default index;
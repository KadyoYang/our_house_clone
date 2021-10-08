import styled from "styled-components";
import Header from "../components/Header";
import MainAd from "../components/MainAd";



const IndexBlock = styled.div`
flex-direction: row;
align-content: center;
height:1200px;
`


const index = () => {

    return (
    <IndexBlock>
        <Header />
        <MainAd />
    </IndexBlock>)
}

export default index;
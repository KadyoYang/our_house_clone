import styled from "styled-components";
import Header from "../components/Header";
import MainAd from "../components/MainAd";
import TestA from "../components/TestA/TestA";
import TestB from "../components/TestB/TestB";



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
        <TestA />
        <TestB />
    </IndexBlock>)
}

export default index;
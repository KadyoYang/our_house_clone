import styled from "styled-components";
import useBoolean from "../../lib/hook/useBoolean";





const AdBarBlock = styled.div`
width: 100%;
padding: 0px;
margin: 0px;
background-color: rgb(0, 199, 245);

.wrapper{
    color: blue;
    .children{
        color: yellow;
    }
}

.anotherone{
    color: red;
}
`

const Test = styled.div`
.anotherone{
    color: orange;
}
`

const AdBar = () => {

    const isOpen = useBoolean(true);

        return (
            <AdBarBlock>
            {isOpen.value === true ? (
                <>
                <h1>asdasd</h1>
                <h2 onClick={()=>{isOpen.toggle()}}>닫기</h2>
                </>
                
            ):(
                <></>
            )}
            <div className="wrapper">
                <h1>요오오 파란거</h1>
                <div className="children"> 
                    <h1>노란거</h1>
                </div>
            </div>
            <div className="children"> 
                <h1>과연 노랄까?</h1>
            </div>
            <div className="anotherone"> 
                <h1>어나더원</h1>
            </div>


            <div>
                <div className="anotherone"> 
                    <h1>어나더원</h1>
                </div>
            </div>
            
            <div className="wrapper">
                <div className="anotherone"> 
                    <h1>어나더원</h1>
                </div>
            </div>
            
            <Test>
                <div className="anotherone"> 
                    <h1>어나더원</h1>
                </div>
            </Test>

            </AdBarBlock>
        )

}


export default AdBar;
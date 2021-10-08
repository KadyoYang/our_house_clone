import styled from "styled-components";
import Slider from "./component/Slider";



const MainAdBlock = styled.section`
box-sizing: border-box;

.image_section{
    display: flex; 
    padding: 30px 0 0; 
    margin:0 auto; 
    width: 1136px; 
    height: 564px;
    

    box-sizing: border-box;
    .left{
        flex: 0 0 75%; 
        max-width: 75%; 
        padding-left:10px; 
        padding-right: 10px; 
        position:relative; 
        overflow: hidden; 
        border-radius: 6px;
        img{
            display: block; 
            margin:auto; 
            width: 100%; 
            min-height: 100%;

            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
            transition-duration: 0.2s;
        }
        &:hover{
            img{
                width:110%;
                min-height:110%;
                transition-duration: 0.2s;
            }

        }
        .content{
            position:absolute; 
            left: 0; 
            right: 0; 
            top:0; 
            bottom:0; 
            padding: 40px;

            display:flex;
            align-items: flex-end;
        }
    }

    .right{
        
        flex: 0 0 25%; 
        max-width: 25%; 
        margin-left:10px; 
        margin-right:10px; 
    }

    
}

`




const MainAd = () => {

    return (
        <MainAdBlock>
        <div className="image_section">
            
            <div className="left">
               <div id="이미지랩">
                    <img src="http://placehold.it/400x400/efa/aae&text=placehold.it" alt=""/>
               </div>
               <div id="컨텐트랩" className="content">
                <h1>무엇을 하이었다</h1>
               </div>
            </div>

            <div className="right">
                <Slider slides={[{imgUrl:"http://placehold.it/400x400/efa/aae&text=placehold.it", desc:"1"}, {imgUrl:"http://placehold.it/400x400/efa/aae&text=placehold.it", desc:"2"}, {imgUrl:"http://placehold.it/400x400/efa/aae&text=placehold.it", desc:"3"}, {imgUrl:"http://placehold.it/400x400/efa/aae&text=placehold.it", desc:"4"}, {imgUrl:"http://placehold.it/400x400/efa/aae&text=placehold.it", desc:"5"}]}/>
            </div>
        </div>

    </MainAdBlock>
    );
}


export default MainAd;
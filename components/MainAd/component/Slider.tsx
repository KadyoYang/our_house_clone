import styled from "styled-components";
import {useState, useEffect} from 'react';
import useInterval from "../../../lib/hook/useInterval";


export type SlideItemType = {
    imgUrl: string,
    desc: string
}


const SliderBlock = styled.div<{slideSize:number, pos:number}>`
    height: 100%;

    position:relative;
    overflow: hidden;
    
    border: 1px solid #efefef;
    
    * {
        margin: 0;
        padding: 0;
    }
    & > ul{
        height: 100%;
        position:absolute;

        width : ${props => props.slideSize * 100}% ;
        display:flex;
        
        list-style:none;
        
        margin-left : ${props => -props.pos * 100}%;
        transition: 1s;
        z-index:1;


        
        li{
            width : ${props => 100 / props.slideSize}%;
            height: 100%;
            position:relative;
            overflow:hidden;
            img{
                height:100%;
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50%, -50%);
                z-index:3;
                transition-duration: 0.2s;
            }

            &:hover{
                img{height:110%;}
            }
            
            .back_cover{
                position:relative;
                width:100%;
                height:100%;
                z-index: 4;
            }

            h1{
                z-index:5;
                top:0;
                left:50%;
                position:absolute;
            }

            :nth-child(2n){
            .back_cover{
                background-color: rgba(255, 0, 0, 0.342);;
                
                z-index: 4;
            }
            
        }

        }
    }


    .bullet{
        position:absolute;
        bottom:0;
        z-index:2;

        width:100%;
        height:10%;
        padding:10px;
        box-sizing: border-box;

        display:flex;
        align-items:center;
        justify-content:center;
        div{
            border-radius:100%;
            transition: background-color .2s;
            padding:5px;
            width:35px;
            height:35px;
            margin: 0 2px;

            position:relative;
            cursor:pointer;
            :hover{
                background-color: #35c5f0;
            }
            svg {
                position:absolute;
                top:50%;left:50%;
                transform: translate(-50%, -50%);
            }

            svg.first_svg{
                transform: translate(-50%, -50%) rotate(180deg);
            }
        }

        >ul{
            list-style:none;
            display:flex;
            li{
                background-color: white;
                width:7px;
                height:7px;
                margin: 0 3px;
                padding: 3px 3px;
                border-radius:100%;
                cursor:pointer;
                :hover{
                    background-color: #35c5f0;
                }
                :nth-child(${props => props.pos+1}){
                    background-color: #35c5f0;
                }
            }
        }

    }

`

type SliderProps = {
    slides: SlideItemType[]
}

const Slider:React.FC<SliderProps> = ({
    slides,

}) => {


    const [pos, setPos] = useState<number>(0);

    useInterval(()=>{setPos((pos+1) % slides.length);}, 5000);
    
    useEffect(()=>{
        console.log("지금 pos" + pos);
    }, [pos]);


    return (
        <SliderBlock 
        slideSize={slides.length} 
        pos={pos}
        >
            <ul>
                {
                    slides.map((i) => (
                        <li key={i.desc}>
                            <img style={{zIndex:1}} src={i.imgUrl} />
                            <div className="back_cover"></div>
                            <h1>{i.desc}</h1>
                        </li>
                    ))
                }
            </ul>

            <div id="bullet" className="bullet">
                <div onClick={()=>{let tpos = pos; if(--tpos < 0) tpos=0; setPos(tpos);}}><svg className="first_svg" width="20" height="20" viewBox="0 0 10 18" preserveAspectRatio="xMidYMid meet"><path fill="#FFF" fillRule="evenodd" d="M9.89 9l.137-.137L1.343.18l-1.37 1.37L7.424 9l-7.451 7.451 1.37 1.37 8.684-8.684L9.89 9z"></path></svg></div>
                
                <ul>
                { 
                    slides.map((i, idx) => (
                        <li key={idx} onClick={()=>{setPos(idx);}}></li>
                    ))
                }
                </ul>
                
                <div onClick={()=>{setPos((pos+1)%slides.length);}}><svg width="10" height="18" viewBox="0 0 10 18" preserveAspectRatio="xMidYMid meet"><path fill="#FFF" fillRule="evenodd" d="M9.89 9l.137-.137L1.343.18l-1.37 1.37L7.424 9l-7.451 7.451 1.37 1.37 8.684-8.684L9.89 9z"></path></svg></div>
            </div>
        </SliderBlock>
    )
}

export default Slider;
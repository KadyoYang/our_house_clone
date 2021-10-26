import { useEffect, useState } from "react";
import styled from "styled-components";
import media from "../../lib/style/metia";


const ResponsiveTestBlock = styled.div`
width:900px;
font-size: 50px;

${media.xxlarge}{
    font-size: 30px;
}

${media.small}{
    font-size: 10px;
}

`
const ResponsiveTest = () => {
    
    const [width, setWidth] = useState<number>(0);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        setWidth(window.innerWidth);
        window.addEventListener("resize", updateWidth);

        return () => {window.removeEventListener, updateWidth}
    }, [])

    return (
        <ResponsiveTestBlock>
            <h3>{"현재 width : " + width}</h3>
            <div>테스트 글자</div>

        </ResponsiveTestBlock>
    )
}



export default ResponsiveTest;
import { useState, useEffect, useRef, useCallback} from "react";
import styled from "styled-components";
import Logo from "./component/Logo";

const FixedBlock = styled.div`
position: fixed;
width: 100%;
box-sizing: border-box;

&:hover{
    .lower_header{
        top: 100%;
        transition-duration: 0.12s;
    }

}

.open_lower_header{
    top: 100%;
    transition-duration: 0.12s;
}
.close_lower_header{
    top:0;
    transition-duration: 0.12s;
}




.lower_header{
    position: absolute;
    width:100%;
    z-index:0;
    
    height:50px;
    border-bottom: 1px solid #ededed;

    .sub_nav{
        width: 1256px;
        height:100%;
        margin: 0 auto;
        display:flex;
        padding: 0 50px;
        
        a{
        line-height: 23px; 
        margin : 8px 4px; 
        padding:6px 8px 4px; 
        border:none; 
        vertical-align:bottom; 
        letter-spacing:-0.4px; 
        font-weight:700; 
        font-size:15px;
        }   

        .interior3d_button{
            
            font-size: 15px; 
            font-weight: 700; 
            line-height: 21px; 
            display: inline-block; 
            display:flex; 
            align-items: center;
            margin-left:auto;
            margin-right:12px;
           
        }
    }

}

`

const HeaderBlock = styled.div`
box-sizing: border-box;
border-bottom: 1px solid #ebeded;
height:80px;
width: 100%;
position:relative;

z-index:10;
    background-color: white;


.upper_header{
    width: 1256px;
    height:100%;
    padding: 10px 60px;
    margin: 0 auto;
    box-sizing: border-box;

    display:flex;
    align-items: flex-start;

    
}









.navigation_left{
    flex: 0 0 auto;
    align-self:center;
    z-index:1;
    background-color: white;
    a {
        margin:6px 10px 0;
        padding:14px 6px; 
        font-size:18px; 
        font-weight: 700; cursor:pointer; 
        line-height: 26px; 
        letter-spacing: -0.4px;
    }

    a:hover{
        color:#35c5f0;
    }
}

.navigation_right{
    display:flex;
    flex:1 0 auto;
    align-self:center;
    align-items: center;
    justify-content: flex-end;
    
    .search_bar{
        width:266px; position: relative; margin-right: 10px;
        .glass_icon{
            position: absolute; top:10px;left:10px;width:20px;height:20px;
        }
        .camera_icon{
            position: absolute; top: 50%; height:24px; right:6px; margin:-12px 0 0;
        }
        .search_box{
            width:100%; box-sizing: border-box; font-size: 15px; border:1px solid #dbdbdb; padding: 8px 9px 10px 39px; border-radius:4px;
        }
    }

    .bucket_button_icon{
        margin-right: 10px
    }

    .login_bar{
        display: flex;
        div{
            margin-right: 10px; letter-spacing: -0.4px;
        }
        div:not(:first-child)::before{
            content: "| "
        }
        
    }

    .write_article_button{
        margin:14px 0 0 20px;
        button{
            background-color: #09addb; 
            width:100px; 
            padding: 8px 0 10px; 
            font-size: 16px; 
            line-height: 22px; 
            border-radius: 4px; 
            border:none; 
            font-weight: 700; 
            color:#fff;
            svg{
                top:0px
            }
        }
    }
}
`

// 아래로 내려가는 서브 네비게이션 문제 
// 그 스크롤 이벤트 전체에다 setState 그부분을 하지말고
// 그.. 100으로 쳐놓고 100이나 0이 되면 setState무시하도록 해야 성능상의 문제가 없을거같다 

const Header = () => {

    const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    // const lowerHeader = useRef();
    const [subNavItems, setSubNavItems] = useState<string[]>([]);


    const scrollUpDownListener = useCallback((e) => {
        console.log(e.deltaY);
        if(lastScrollY < window.scrollY){
            setIsScrollDown(true);
            console.log(lastScrollY +"<"+ window.scrollY + " 내려간다");
        }else{
            setIsScrollDown(false);
            console.log(lastScrollY +">"+ window.scrollY + " 올라간다");
        }
        setLastScrollY(window.scrollY); 
    }, [lastScrollY]);

    useEffect(()=>{
        window.addEventListener('scroll', scrollUpDownListener);
        return () => {
            window.removeEventListener('scroll', scrollUpDownListener);
        }
    }, [scrollUpDownListener])

    useEffect(()=>{
        setSubNavItems(defaultNavItems);
    }, []);

    const navDat = {
        "community": [
            "홈", "팔로잉", "사진", "집들이", "노하우", "전문가집들이", "셀프가이드", "질문과답변", "이벤트"
        ],
        "store":[
            "스토어홈", "카테고리", "베스트", "오늘의딜", "트렌드패브릭", "지정일배송", "프리미엄", "기획전"
        ],
        "interior":[
            "시공업체 찾기", "간편상담신청", "견적계산", "설치/수리대행"
        ]
    }

    const defaultNavItems = navDat.community;

    return (
        <FixedBlock >
        <HeaderBlock>
            <div className="upper_header">
                <Logo />
                <nav className="navigation_left">
                    <a onMouseOver={()=>{setSubNavItems(navDat.community)}} >커뮤니티</a>
                    <a onMouseOver={()=>{setSubNavItems(navDat.store)}}>스토어</a>
                    <a onMouseOver={()=>{setSubNavItems(navDat.interior)}}>인테리어시공</a>

                </nav>

                <div className="navigation_right">
                    <div className="search_bar">
                        <input className="search_box" placeholder="오늘의집 통합검색" />
                        <svg className="glass_icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" preserveAspectRatio="xMidYMid meet"><path d="M22 22l-5-5"></path><circle cx="11" cy="11" r="8"></circle></svg>
                        <svg className="camera_icon" width="24" height="1em" fill="none" viewBox="-1 -1 24 24" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" fillRule="evenodd" d="M7.62.83c-.37 0-.7.22-.84.55l-.96 2.2H1.83C.83 3.58 0 4.4 0 5.42v12.83c0 1.01.82 1.83 1.83 1.83h18.34c1 0 1.83-.82 1.83-1.83V5.42c0-1.02-.82-1.84-1.83-1.84h-4l-.95-2.2a.92.92 0 00-.84-.55H7.62zm7.96 11a4.58 4.58 0 11-9.16 0 4.58 4.58 0 019.16 0z" clipRule="evenodd"></path></svg>
                    </div>

                    <div id="장바구니" className="bucket_button_icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinejoin="round" strokeWidth="2" preserveAspectRatio="xMidYMid meet"><path strokeLinecap="round" d="M4 5h18l-2.6 10.5a2 2 0 0 1-2 1.5H8.6a2 2 0 0 1-2-1.5L4 5zm4 15.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0zm7 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0z"></path><path d="M1 2h3v3"></path></svg>
                    </div>

                    <div id="로그인바" className="login_bar">
                        <div>로그인</div>
                        <div>회원가입</div>
                        <div>고객센터</div>
                    </div>

                    <div id="글쓰기버튼" className="write_article_button">
                        <button>
                            글쓰기
                            <svg width="1em" height="1em" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" fillRule="evenodd" d="M2.87 4L1.33 5.5 8 12l6.67-6.5L13.13 4 8 9z"></path></svg>
                        </button>
                    </div>
                </div>

            </div>


        {/* 
        # todo : 
        https://stackoverflow.com/questions/50273232/how-to-add-dynamic-css-in-react-js
        className은 동적으로 그거 되는것같은데 
        한번 테스트 해보고 안되면 위에 링크 봐서 css 동적으로 주입
        */}
        </HeaderBlock>
        <div className={`lower_header ${isScrollDown ? 'close_lower_header':'open_lower_header'}`}>
            <div className="sub_nav">
                {/* <a>홈</a>
                <a>팔로잉</a>
                <a>사진</a>
                <a>집들이</a>
                <a>노하우</a>
                <a>전문가집들이</a>
                <a>셀프가이드</a>
                <a>질문과답변</a>
                <a>이벤트</a> */}
                {
                    <>
                        {
                            subNavItems.map((i) => (
                                <a key={i}>{i}</a>
                            ))
                        }
                    </>
                }

                    <div className="interior3d_button">
                        <svg width="30" height="20"
                            viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet">
                            <g fill="none" fillRule="evenodd">
                                <path fill="#35C5F0"
                                    d="M16.41 0H3.59A3.59 3.59 0 0 0 0 3.59v12.82A3.59 3.59 0 0 0 3.59 20h12.82A3.59 3.59 0 0 0 20 16.41V3.59A3.59 3.59 0 0 0 16.41 0">
                                </path>
                                <path fill="#FFF"
                                    d="M14.75 10.34c-.74 0-1.33-.6-1.33-1.34 0-.74.6-1.34 1.33-1.34s1.32.6 1.32 1.34c0 .74-.59 1.34-1.32 1.34zm-1 3.53H6.12V8.75l3.82-2.7 2.2 1.55a3.01 3.01 0 0 0-.35 1.4 3 3 0 0 0 1.98 2.83v2.04zm1-7.87c-.34 0-.66.06-.97.17l-3.17-2.24a1.18 1.18 0 0 0-1.35 0L4.5 7.28a1.2 1.2 0 0 0-.51.98v6.54c0 .66.53 1.2 1.19 1.2h9.5a1.2 1.2 0 0 0 1.18-1.2v-3.02A3 3 0 0 0 17.7 9c0-1.65-1.32-3-2.96-3z">
                                </path>
                            </g>
                        </svg>
                        3D인테리어
                        <svg width="30" height="14" preserveAspectRatio="xMidYMid meet">
                            <g fill="none" fillRule="evenodd">
                                <rect width="30" height="14" fill="#757575" rx="7"></rect>
                                <path fill="#FFF" fillRule="nonzero"
                                    d="M7.1 10.59c1.52 0 2.24-.82 2.24-1.96 0-1-.53-1.48-1.33-1.64v-.03c.76-.26 1.05-.78 1.05-1.5 0-1.09-.64-1.73-2.12-1.73H4.69v6.86h2.4zm-.37-3.94h-.9V4.64h.95c.74 0 1.13.25 1.13.99 0 .78-.5 1.02-1.18 1.02zm.2 3.02h-1.1v-2.2h1.04c.82 0 1.26.3 1.26 1.09 0 .75-.42 1.11-1.2 1.11zm7.65.92v-.97h-2.92V7.54h2.22v-.96h-2.22V4.7h2.86v-.97h-4.01v6.86h4.07zm3.8 0V4.7h1.83v-.97h-4.83v.97h1.85v5.89h1.15zm2.92 0l.58-1.74h2.39l.58 1.74h1.2l-2.3-6.86h-1.18l-2.34 6.86h1.07zm2.68-2.66h-1.83l.9-2.74h.03l.9 2.74z">
                                </path>
                            </g>
                        </svg>
                    </div>
            </div>
        </div>
        </FixedBlock>
    )
}

export default Header;
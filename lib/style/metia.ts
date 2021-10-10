/**
 * 벨로퍼트님 벨로그 프론트 코드 보고 사용,,
 * 감사합니다.. 
 */
export const mediaQuery = (maxWidth: number)=>`
    @media (max-width: ${maxWidth}px)
`;

/**
 * xxlarge : max-width 1920
 * xlarge : max-width 1440
 * large : max-width 1200
 * medium : max-width 1024
 * small : max-width 768
 * xsmall : max-width 375
 */
const media = {
    xxlarge: mediaQuery(1920),
    xlarge: mediaQuery(1440),
    large: mediaQuery(1200),
    medium: mediaQuery(1024),
    small: mediaQuery(768),
    xsmall: mediaQuery(375),
    custom: mediaQuery,
};

export default media;

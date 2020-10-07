import styled from 'styled-components'


export const PageBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* width: 360px; */
    width: 100%;
    /* height: 640px; */
`

export const Header = styled.header`
    box-sizing: border-box;
    /* width: 360px; */
    width: 100%;
    /* height: 44px; */
    height: 64px;
    /* display: flex;
    justify-content: center;
    align-items: stretch; */
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    padding: 20px 0 0 0;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: #ffffff;
    /* background-color: lightgreen; */
    margin-bottom: 8px;

    display: grid;
    grid-template-columns: 30px 1fr 30px;
`

export const BackButton = styled.span`
    /* background-color: lightblue; */
    width: 100%;
    font-weight: bold;
    font-size: 16px;
    display: grid;
    place-items: center;
    cursor: pointer;
    :hover{background-color: rgb(245,245,245);}
`

export const Title = styled.div`
    /* background-color: lightcoral; */
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
`

export const TitleIn = styled.span`
    box-sizing: border-box;
    width: 74px;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
`

export const SearchBox = styled.div`
    box-sizing: border-box;
    width: 328px;
    height: 56px;
    border-radius: 4px;
    border: solid 1px #b8b8b8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 17px;
    margin-bottom: 8px;
`

export const SearchInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 99%;
    border-radius: 2px;
    border: none;
    /* align-self: stretch; */
    padding: 0 0 0 15px;
    /* background-color: blue; */
`

export const SearchIcon = styled.div`
    box-sizing: border-box;
    z-index:10;
    width: 24px;
    height: 24px;
`

export const SearchImg = styled.img`
    width:100%;
    height: 100%;
`

export const FilterBar = styled.div`
    box-sizing: border-box;
    width: 360px;
    /* height: 42px; */
    /* border: 1px solid black; */
    padding: 12px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    -webkit-scrollbar{display: none;}
    -ms-overflow-style: none;
    scrollbar-width: none;
`

export const FilterButton = styled.button`
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    /* width: 87px; */
    /* height: 18px; */
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    /* color: #000000; */
    color: ${props=>props.active ? '#5cb646' : '#000000'} ;
    /* :active{color: #5cb646;} */
    /* border: 1px solid black; */

    display: grid;
    place-items: center;
    margin: 0 4px;

    cursor: pointer;
    :active{background-color: rgb(240,240,240);}
`

export const MsgBar = styled.div`
    box-sizing: border-box;
    width: 360px;
    padding: 12px;
    display: grid;
    place-items: center;
`

export const RestRow = styled.div`
    box-sizing: border-box;
    width: 360px;
    /* height: 196px; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* border: 1px solid black; */
    margin-top: 8px;
`

export const RestCard = styled.div`
    width: 328px;
    /* height: 188px; */
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    text-align: left;
    cursor: pointer;
    transition: 0.2s;
    :hover{box-shadow: -1px 2px 3px rgb(200,200,200);}
`

export const RestCardImg = styled.img`
    width: 328px;
    /* height: 120px; */
    border-radius: 8px 8px 0 0;
`

export const RestCardBottom = styled.div`
    padding: 12px 16px 16px 16px;
`

export const RestCardName = styled.p`
    margin: 0 0 4px 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
`

export const RestCardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LineSpan = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`


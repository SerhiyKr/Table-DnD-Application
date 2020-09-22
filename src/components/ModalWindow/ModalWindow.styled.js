import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background: rgba(0,0,0,0.5);
    z-index:100;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const Modal = styled.div`
    width:35%;
    background-color: #989ca0;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-radius: 35px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
`;

export const Section = styled.section`
    width: 45%;
    border: 1px solid #000;
    border-radius: 15px;
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 10px;
`;

export const Button = styled.button`
    background-color: #fff;
    border: 2px solid #0078D7;
    border-radius: 15px;
    padding: 10px 20px;
    margin-top: 10px;
    margin-right: 10px;
    color: #0078D7;
    cursor: pointer;
    
    &:hover {
    background-color: #0078D7;
    color: #fff;
`;

export const Line = styled.div`
    border-left: 1px solid #000;
`;

export const SearchInput = styled.input`
    border: 2px solid #0078D7;
    border-radius: 15px;
    outline: none;
    padding: 5px 10px;
    margin-bottom: 10px;
`;
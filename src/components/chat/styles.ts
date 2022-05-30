import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #808080;
    overflow-y: scroll;
    height: 600px;
`;

export const Content = styled.div`
    background-color: white;
    padding: 5px;
    border-radius: 10px;
    margin: 10px;
`;

export const Customer = styled.p`
    color: black;
    text-align: left;
`;

export const Operator = styled.p`
    color: blue;
    text-align: right;
`;

export const TextArea = styled.textarea`
    min-height: 60px;
`;

export const SafeArea = styled.div`
    display: flex;
    flex-direction: column;
`;
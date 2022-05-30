import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: gray;
    width: 400px;
`;

export const Content = styled.div`
    padding: 5px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    background-color: blueviolet;
    border-radius: 8px;
`;

export const ProfileName = styled.label`
    color: white;
`;

export const LastMessage = styled.label`
    color: white;
`;
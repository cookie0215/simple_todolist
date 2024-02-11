import styled from 'styled-components';

export const TodoCardWarp = styled.div`
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const CompleteBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const TodoContents = styled.p`
  font-size: 1.8rem;
  margin: 0 10px;
`;

export const DeleteBtn = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`; 
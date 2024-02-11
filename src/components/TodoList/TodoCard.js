import React from 'react';
import * as S from '../../styles/TodoCardStyle';
import { BsTrash3Fill } from "react-icons/bs";

const TodoCard = ({ text }) => {
  return (
    <S.TodoCardWarp>
      <S.CompleteBtn>완료</S.CompleteBtn>
      <p>{text}</p>
      <S.DeleteBtn>
        <BsTrash3Fill />
      </S.DeleteBtn>
    </S.TodoCardWarp>
  );
};

export default TodoCard;
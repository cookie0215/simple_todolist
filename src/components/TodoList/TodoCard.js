import React from 'react';
import * as S from '../../styles/TodoCardStyle';
import { BsTrash3Fill } from "react-icons/bs";

const TodoCard = ({ text }) => {
  return (
    <S.TodoCardWarp>
      <S.CompleteBtn></S.CompleteBtn>
      <S.TodoContents>{text}</S.TodoContents>
      <S.DeleteBtn>
        <BsTrash3Fill />
      </S.DeleteBtn>
    </S.TodoCardWarp>
  );
};

export default TodoCard;
import React from 'react';
import TodayDate from './TodayDate';
import TodoCard from './TodoCard';

const TodoList = ({ listItems }) => {
  return (
    <>
      <TodayDate />
      {listItems.map((item) => {
        return (
          <TodoCard
            key={item.id}
            text={item.text}
          />
        )
      })}
    </>
  );
};

export default TodoList;
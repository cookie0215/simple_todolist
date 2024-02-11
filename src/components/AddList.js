import React, { useState } from 'react';
import * as S from '../styles/AddListStyle';

const AddList = () => {
  const [value, setValue] = useState('');

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
    console.log(value);
  }


  return (
    <S.Form>
      <div>
        <label htmlFor='todo'>
          <S.Input
            type='text'
            value={value}
            placeholder='오늘의 할 일을 적어주세요'
            onChange={inputChangeHandler} />
        </label>
      </div>
      <S.submitBtn>등록</S.submitBtn>
    </S.Form>
  );
};

export default AddList; <label htmlFor='todo'>
  <input /></label>
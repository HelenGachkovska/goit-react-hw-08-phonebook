import React from 'react';
import { Input } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { filtred } from 'redux/contactSlice';
import { stateSelectorFilters } from 'redux/selector';

function ContactFilter() {
  const filter = useSelector(stateSelectorFilters);
  const dispatch = useDispatch();

  const handlerFilterInput = e => {
    dispatch(filtred(e.target.value));
  };
  return (
    <label>
      <Input type="text" value={filter} onChange={handlerFilterInput} />
    </label>
  );
}

export default ContactFilter;

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item, Text } from './styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/thunks';

const ContactItem = ({ id, name, number }) => {
const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button onClick={onDelete}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

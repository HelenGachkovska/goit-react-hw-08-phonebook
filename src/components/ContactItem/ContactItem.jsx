import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item, Text } from './styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/thunks';

const ContactItem = ({ id, name, phone }) => {
const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <Item>
      <Text>
        {name}: {phone}
      </Text>
      <Button onClick={onDelete}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;

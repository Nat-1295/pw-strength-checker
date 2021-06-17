import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const { Password } = Input;

const TextField = (props) => {
  const { setPassword } = props;

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Password
      style={{ border: 'solid 1px' }}
      onChange={handleChange}
      placeholder="Type a password"
      iconRender={visible => (visible ? 'Hide' : 'Show')}
    />
  );
};

TextField.propTypes = {
  setPassword: PropTypes.func.isRequired,
};

export default TextField;

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Space } from 'antd';

const MessageField = (props) => {
  const { guessTimeString, suggestions, warning, score } = props;

  const generateMessage = (guessString, warn) => {
    const guess = guessString && `It will take less than ${guessString} to guess your password.`;
    return [guess, warn];
  };

  return (
    <Row align="center">
      <Space direction="vertical">
        {score === 0 && <Col style={{ fontSize: '18px', marginTop: '20px' }}><b>Your password is too weak!</b></Col>}
        <Col xs={24} style={{ fontSize: '13px' }}>
          {generateMessage(guessTimeString, warning).join(' ')}
        </Col>
        <Col xs={24}>
          <b>{suggestions.join(' ')}</b>
        </Col>
      </Space>
    </Row>
  );
};

MessageField.propTypes = {
  guessTimeString: PropTypes.string,
  suggestions: PropTypes.arrayOf(Array),
  warning: PropTypes.string,
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MessageField.defaultProps = {
  guessTimeString: '',
  suggestions: [],
  warning: '',
  score: null,
};

export default MessageField;

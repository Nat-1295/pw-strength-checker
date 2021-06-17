import React from 'react';
import PropTypes from 'prop-types';
import { scoreBarColor } from "../../constant/constant";

const ScoreBar = (props) => {
  const { score, id, password } = props;
  const color = password && id <= score ? scoreBarColor[score] : scoreBarColor.default;
  return (
    <div className="scorebar" style={{ background: color }} />
  );
};

ScoreBar.propTypes = {
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.number.isRequired,
  password: PropTypes.string.isRequired,
};

ScoreBar.defaultProps = {
  score: 'default',
};
export default ScoreBar;

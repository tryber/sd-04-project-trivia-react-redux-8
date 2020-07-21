import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Perguntas = (props) => {
  const { data, index } = props;
  return (
    <div>
      <p data-testid="question-category">{data.results[index].category}</p>
      <p data-testid="question-text">{data.results[index].question}</p>
    </div>
  );
};

Perguntas.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.shape({
      category: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

export default connect(mapStateToProps)(Perguntas);

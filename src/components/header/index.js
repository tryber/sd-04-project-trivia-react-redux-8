import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
  const { imageSrc, Id, score } = props;
  return (
    <div>
      <h3 data-testid="header-player-name">Jogador: {Id}</h3>
      <p data-testid="header-score">{score}</p>
      <img data-testid="header-profile-picture" src={imageSrc} alt="Profile" />
    </div>
  );
};

Header.propTypes = {
  Id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

export default connect(mapStateToProps)(Header);

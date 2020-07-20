import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
  const { imageSrc, Id } = props;
  return (
    <div>
      <h3 data-testid="header-player-name">Jogador: {Id}</h3>
      <p data-testid="header-score">Score</p>
      <img data-testid="header-profile-picture" src={imageSrc} alt="Profile" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

export default connect(mapStateToProps)(Header);

import React from 'react';

const Header = () => (
  <div>
    <h3 data-testid="header-player-name">Nome</h3>
    <p data-testid="header-score">Score</p>
    <img
      data-testid="header-profile-picture"
      src="https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3"
      alt="Profile"
      /* um dia será a imagem que está no state, obtida via API */
    />
  </div>
);

export default Header;

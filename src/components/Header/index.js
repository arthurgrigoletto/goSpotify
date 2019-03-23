import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars0.githubusercontent.com/u/27973216?v=4" alt="Avatar" />
      Arthur Grigoletto
    </User>
  </Container>
);

export default Header;

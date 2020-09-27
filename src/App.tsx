import React, { useEffect, useState } from 'react';
import { Search } from './components';
import { Container } from '@material-ui/core';

import styles from './App.module.css';
import BreweryRequest from './api/OpenBreweryDB/interfaces/BreweryRequest';

const App = () => {
  const [searchData, setSearchData] = useState<BreweryRequest>({});

  const handleSearchParams = (searchRequest: BreweryRequest) => {
    console.log(searchRequest);
  }

  return (
    <Container maxWidth="lg">
      <h1>Brewery Search</h1>
      <Search handleSearchParams={handleSearchParams}/>
    </Container>
  );
}

export default App;

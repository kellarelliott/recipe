import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ match }) => {

  const [searchValue, setSearchValue] = useState(match.params.otherthing);

  return (
    <div className='ErrorPage'>
      <h1> Could not find a recipe for {searchValue}</h1>
    </div>

  )

};

export default ErrorPage;

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as style from './SearchBar.styles';

const SearchBar = (props) => {
  const [searchClearBtn, setSearchClearBtn] = useState(false)

  const alertNow = (text) => {
    refSearch.current.value = ''
    setSearchClearBtn(false)
  }

  const handleSearch = () => {
    if(refSearch.current.value != ""){
      setSearchClearBtn(true)
    } else {
      setSearchClearBtn(false)
    }
  }

  const refSearch = useRef();

  return(
    <style.SearchBarContainer action="">
    <style.SearchBar onChange={() => handleSearch()} ref={refSearch} type="text" placeholder={props.placeholder} />
    {searchClearBtn && (
      <style.SearchClearBtn onClick={() => alertNow(refSearch)}>X</style.SearchClearBtn>
    )}
  </style.SearchBarContainer>
  )
  };

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: 'Search...',
  SearchBarClear: true,
};

export default SearchBar;

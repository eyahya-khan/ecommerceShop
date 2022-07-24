import React from 'react';
import './searchForm.css'
import { Button } from '../product.styled';

const SearchForm = () => (
  <div className='search-container'>
    <input className='input-search' type="text" />
    <Button className='btn-search' type="submit"> <i className="fas fa-search search"></i></Button>
  </div>
);

export default SearchForm;
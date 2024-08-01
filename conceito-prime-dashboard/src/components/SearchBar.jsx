import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <form
        className='search-form d-flex align-items-center'
        action="#"
        method='POST'
        >
            <input
            type="text"
            placeholder='Search'
            title='Enter search Keyword'
            name="query" id=""
            />
            <button type='submit' title='Search'>
                <i className='bi bi-search'></i>
            </button>
        </form>
    </div>
  )
}

export default SearchBar
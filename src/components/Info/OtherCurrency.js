import React, { useEffect, useState } from 'react';
import cl from './OtherCurrency.module.scss';
import currency from '../../store/currency';

const OtherCurrency = () => {
  const [searchValue, setSearchValue] = useState('');

  currency.searchCurrency(searchValue);

  return (
    <div className={cl.wrapper}>
      <div>
        <input
          className={cl.input}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type='text'
          placeholder='Search....'
        />
      </div>
      {currency.searchResult.length > 0 ? (
        <div className={cl.container}>
          {currency.searchResult.map((currency) => (
            <div className={cl.item} key={currency.cc}>
              <span className={cl.cc}> {currency.cc} </span>
              <span className={cl.rate}> {currency.rate}</span>
            </div>
          ))}
        </div>
      ) : (
        <h1 className={cl.not__found}> Currency not found</h1>
      )}
    </div>
  );
};

export default OtherCurrency;

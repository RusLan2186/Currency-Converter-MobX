import { observer } from 'mobx-react-lite';
import currency from '../../store/currency';
import React from 'react';
import { fetchCurrency1 } from '../../store/currnencyLoad';
import { useEffect } from 'react';
import cl from './Info.module.scss';
import Loader from '../Loader/Loader';

console.log(currency.error);

const Info = () => {
  useEffect(() => {
    fetchCurrency1();
  }, []);

  return (
    <div>
      {currency.isLoading && (
        <div className={cl.loader}>
          <Loader />
        </div>
      )}
      {/* {currency.error && <h1 className={cl.error}> You have an error ${error} </h1>} */}
      {currency.currencyList
        .filter((item) => item.txt === 'Долар США' || item.txt === 'Євро' || item.txt === 'Злотий')
        .map((currency) => (
          <div className={cl.item} key={currency.cc}>
            <span className={cl.cc}> {currency.cc}</span>
            <span className={cl.rate}> {currency.rate}</span>
          </div>
        ))}
    </div>
  );
};

export default observer(Info);

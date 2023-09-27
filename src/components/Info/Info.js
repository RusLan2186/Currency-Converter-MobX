import { observer } from 'mobx-react-lite';
import currency from '../../store/currency';
import React from 'react';
import { useEffect } from 'react';
import cl from './Info.module.scss';

const Info = () => {
  useEffect(() => {
    currency.fetchCurrency();
  }, []);

  return (
    <div>
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

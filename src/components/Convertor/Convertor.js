import React, { useState } from 'react';
import currency from '../../store/currency';
import cl from './Convertor.module.scss';

const Convertor = ({ value, onChangeValue, currency, onChangeCurrency, defaultCorrency }) => {
  return (
    <div className={cl.wrapper}>
      <ul className={cl.list}>
        {defaultCorrency.map((cur, i) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? cl.itemActive : cl.itemLi}
            key={cur}
          >
            {cur}
          </li>
        ))}
      </ul>
      <input
        className={cl.input}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        type='number'
        placeholder='Enter number'
      />
    </div>
  );
};

export default Convertor;

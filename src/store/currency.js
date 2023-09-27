import { observable } from 'mobx';

const currency = observable({
  currencyList: [],
  error: '',
  isLoading: false,
  fetchCurrency() {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then((response) => response.json())
      .then((json) => {
        this.currencyList = [...this.currencyList, ...json];
      });
  },
});

export default currency;

import { observable } from 'mobx';

const currency = observable({
  currencyList: [],
  error: '',
  isLoading: false,
  currencyFetching() {
    this.isLoading = true;
  },
  currencyFetchingSuccess(json) {
    this.currencyList = json;
    this.isLoading = false;
    this.error = '';
  },
  currencyFetchingError(error) {
    this.isLoading = false;
    this.error = error;
  },
  //   fetchCurrency() {
  //     this.isLoading = true;
  //     fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  //       .then((response) => response.json())
  //       .then((json) => {
  //         //   this.currencyList = [...this.currencyList, ...json];
  //         this.currencyList = json;
  //         this.isLoading = false;
  //       });
  //   },
});

export default currency;

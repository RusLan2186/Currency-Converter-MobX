import { observable } from 'mobx';

const currency = observable({
  currencyList: [],
  errorMessage: '',
  isLoading: false,
  currencyFetching() {
    this.isLoading = true;
  },
  currencyFetchingSuccess(json) {
    this.currencyList = json;
    this.isLoading = false;
    this.errorMessage = '';
  },
  currencyFetchingError(e) {
    this.isLoading = false;
    this.errorMessage = e;
    //  console.log(e);
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

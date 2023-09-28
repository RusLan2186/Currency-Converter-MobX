import { observable } from 'mobx';

const currency = observable({
  currencyList: [],
  errorMessage: '',
  isLoading: false,
  searchResult: [],
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
  },
  searchCurrency(searchValue) {
    this.searchResult = this.currencyList.filter(
      (item) => item.cc.toLowerCase().includes(searchValue.toLowerCase()),
      console.log(searchValue),
    );
  },
});

export default currency;

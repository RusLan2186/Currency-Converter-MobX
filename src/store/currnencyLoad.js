import currency from './currency';

export const fetchCurrency = () => {
  currency.currencyFetching();
  fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then((response) => response.json().then((json) => currency.currencyFetchingSuccess(json)))
    .catch((e) => currency.currencyFetchingError(e.message));
};

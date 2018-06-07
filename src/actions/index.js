import {
  FETCHING_COIN_SUCCESS,
  SEARCH_COIN,
  FETCHING_COIN_FAILURE,
  FETCHING_COIN,
  FETCHING_ALL_COIN_SUCCESS
} from "../constans";

export function fetchAllCoinData() {
  return dispatch => {
    dispatch(getCoin());
    fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
      .then(res => {
        return JSON.parse(res._bodyText);
      })
      .then(json => dispatch(getCoinSuccess(json)))
      .catch(err => dispatch(getCoinFailure(err)));
  };
}

export default function searchAllcoins(searchInput) {
  return dispatch => {
    dispatch(searchCoin(searchInput));
    fetch(`https://api.coinmarketcap.com/v1/ticker/${searchInput}/`)
      .then(res => {
        return JSON.parse(res._bodyText);
      })
      .then(json => dispatch(getSearchCoinSuccess(json)))
      .catch(err => dispatch(getSearchCoinFailure(err)));
  };
}

function getCoin() {
  return {
    type: FETCHING_COIN
  };
}

function getCoinSuccess(data) {
  return {
    type: FETCHING_COIN_SUCCESS,
    data: data
  };
}

function getCoinFailure() {
  return {
    type: FETCHING_COIN_FAILURE
  };
}

function getSearchCoinSuccess(data) {
  return {
    type: FETCHING_ALL_COIN_SUCCESS,
    data: data
  };
}

function getSearchCoinFailure() {
  return {
    type: FETCHING_ALL_COIN_FAILURE
  };
}

function searchCoin() {
  return {
    type: SEARCH_COIN
  };
}

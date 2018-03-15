import {FETCHING_COIN_SUCCESS, FETCHING_COIN_FAILURE, FETCHING_COIN, FETCHING_ALL_COIN_SUCCESS, FETCHING_ALL_COIN_FAILURE} from '../constans'

const initialState = {
    coinData: [],
    isFetching: false,
    error: false,
    allCoins: []

  };

  export default function coinReducer (state = initialState, action) {
    switch(action.type) {
      case FETCHING_COIN:
        return {
          ...state,
          isFetching: true,
          coinData: [],
          allCoins: []
        }
      case FETCHING_COIN_SUCCESS:
        return {
          ...state,
          isFetching: false,
          coinData: action.data
        }
      case FETCHING_ALL_COIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allCoins: action.data
      }
      case FETCHING_COIN_FAILURE:
       return {
           ...state,
           isFetching: false,
           error: true
       }
      default:
        return state;
    }
  }

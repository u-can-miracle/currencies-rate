import { put, takeEvery } from 'redux-saga/effects'

import { IAction } from '../../interfaces/reducer'
import request from '../../services/request'
import {
	CURRENCY_RATE_REQUEST,
	currencyRateUpdate
} from './actions'
import { getCurrenciesRatesFromResponse } from './utils'
import {
	API,
	API_KEY,
} from '../../constants'

export function* currencyRateRequestSaga(action: IAction){
	try{
		// base currency api restriction
		const { data: { rates } } = yield request(
			// `${API}?access_key=${API_KEY}&symbols=${AVAILABLE_CURRENCIES.join(',')}&base=${CURRENCY_BASE}`,
			`${API}?access_key=${API_KEY}`,
			null,
			'GET'
		)
		const currenciesRates = getCurrenciesRatesFromResponse(rates)
		yield put(currencyRateUpdate(currenciesRates))
	} catch (err) {
		// tslint:disable-next-line
		console.log('currencyRateRequestSaga err', err)
	}
}
export function* watchCurrencyRateRequest(){
	yield takeEvery(CURRENCY_RATE_REQUEST, currencyRateRequestSaga)
}

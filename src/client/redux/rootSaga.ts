import { all } from 'redux-saga/effects'

import {
	watchCurrencyRateRequest,
} from './currency/saga'

export default function* rootSaga(){
	yield all([
		watchCurrencyRateRequest()
	])
}

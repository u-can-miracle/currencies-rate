import {
	AVAILABLE_CURRENCIES,
	CURRENCY_BASE,
	VISIBLE_CURRENCIES
} from '../../constants'
import { makeCurrenciesObj } from './utils'
import { CURRENCY_SELECT, CURRENCY_RATE_UPDATE } from './actions'

interface ICurrecyToCompareItem {
	[key: string]: {
		rate: number
		isVisible: boolean
	}
}

interface ICurrencyState {
	currecyToCompare: ICurrecyToCompareItem
	currencyDefault: string
	isCurrenciesRateAvailable: boolean
}

const initialState: ICurrencyState = {
	currecyToCompare: makeCurrenciesObj(
		AVAILABLE_CURRENCIES, VISIBLE_CURRENCIES
	),
	currencyDefault: CURRENCY_BASE,
	isCurrenciesRateAvailable: false
}

function toggleCurrencyVisibility(
	updatedCurrencyCodes: string,
	currecyToCompare: ICurrecyToCompareItem
){
	return {
		[updatedCurrencyCodes]: {
			...currecyToCompare[updatedCurrencyCodes],
			isVisible: !currecyToCompare[updatedCurrencyCodes].isVisible
		}
	}
}

export default function currencyReducer(
	state = initialState,
	action
): ICurrencyState {
	switch (action.type) {
		case CURRENCY_SELECT:
			return {
				...state,
				currecyToCompare: {
					...state.currecyToCompare,
					...toggleCurrencyVisibility(
						action.payload.currencyCodes,
						state.currecyToCompare
					)
				}
			}

		case CURRENCY_RATE_UPDATE:
			const currecyToCompare = action.payload.currenciesRates
				.reduce((acc, currencyRate) => {
					return {
						...acc,
						[currencyRate.name]: {
							...state.currecyToCompare[currencyRate.name],
							rate: currencyRate.rate
						}
					}
				}, {})

			return {
				...state,
				isCurrenciesRateAvailable: true,
				currecyToCompare
			}

		default:
			return state
	}
}

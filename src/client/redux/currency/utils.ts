import {
	AVAILABLE_CURRENCIES,
} from '../../constants'

export const makeCurrenciesObj = (
	baseCurrenciesList: string[],
	visibleCurrencies: string[]
) => {
	return baseCurrenciesList
		.reduce((acc, currency: string) => ({
			 ...acc,
			 [currency]: {
				 rate: 0,
			 	isVisible: visibleCurrencies.includes(currency)
			 }
		}), {})
}

interface IRates {
	[key: string]: number
}
export const getCurrenciesRatesFromResponse = (rates: IRates) =>
	AVAILABLE_CURRENCIES
		.map(symbol => ({ name: symbol, rate: rates[symbol] }))

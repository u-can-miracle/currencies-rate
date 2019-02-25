export const CURRENCY_SELECT = 'CURRENCY_SELECT'
export const selectCurrency = (currencyCodes: string[]) => ({
	type: CURRENCY_SELECT,
	payload: {
		currencyCodes
	}
})

export const CURRENCY_RATE_REQUEST = 'CURRENCY_RATE_REQUEST'
export const currencyRateRequest = () => ({
	type: CURRENCY_RATE_REQUEST
})

interface ICurrenciesRates {
	name: string
	rate: number
}
export const CURRENCY_RATE_UPDATE = 'CURRENCY_RATE_UPDATE'
export const currencyRateUpdate = (currenciesRates: ICurrenciesRates[]) => ({
	type: CURRENCY_RATE_UPDATE,
	payload: {
		currenciesRates
	}
})

import { createSelector } from 'reselect'

import { REQUEST_TIME_INTERVAL } from '../../constants'

export const currenciesArraySelector = state =>
	Object.keys(state.currency.currecyToCompare)
		.map(key => ({
			name: key,
			...state.currency.currecyToCompare[key]
		}))

export const isCurrenciesRateAvailableSelector = state =>
	state.currency.isCurrenciesRateAvailable

export const allCurrenciesSelector = createSelector(
	currenciesArraySelector,
	allCurrencies => allCurrencies
)

export const visibleCurrenciesSelector = createSelector(
	allCurrenciesSelector,
	allCurrencies => allCurrencies.filter(
		({ isVisible }) => isVisible
	)
)

export const visibleCurrenciesNamesSelector = createSelector(
	visibleCurrenciesSelector,
	visibleCurrencies => visibleCurrencies.map(({ name }) => name)
)

export const currencyDefaultSelector = state => state.currency.currencyDefault

export const visibleCurrenciesCommaListSelector = createSelector(
	visibleCurrenciesSelector,
	visibleCurrencies => visibleCurrencies.map(({ name }) => name).join(', ')
)

export const isAnyCurrenciesVisible = createSelector(
	visibleCurrenciesSelector,
	allVisibleCurrencies => !!allVisibleCurrencies.length
)

export const requestIntervalSelector = () => REQUEST_TIME_INTERVAL

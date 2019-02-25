import { connect } from 'react-redux'

import CurrencyList from './CurrencyList'
import {
	visibleCurrenciesSelector,
	currencyDefaultSelector,
	requestIntervalSelector,
	isAnyCurrenciesVisible,
	isCurrenciesRateAvailableSelector
} from '../../redux/currency/selector'
import {
	currencyRateRequest
} from '../../redux/currency/actions'

const mapStateToProps = (state, props) => ({
	visibleCurrencies: visibleCurrenciesSelector(state),
	currencyDefault: currencyDefaultSelector(state),
	requestInterval: requestIntervalSelector(),
	isCurrenciesVisible: isAnyCurrenciesVisible(state)
		&&
		isCurrenciesRateAvailableSelector(state)
})

const mapDispatchToProps = (dispatch, props) => ({
	requestRates: () => dispatch(currencyRateRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList)

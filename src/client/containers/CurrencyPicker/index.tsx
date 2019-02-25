import { connect } from 'react-redux'

import {
	allCurrenciesSelector,
	visibleCurrenciesNamesSelector,
	visibleCurrenciesCommaListSelector
} from '../../redux/currency/selector'
import { selectCurrency } from '../../redux/currency/actions'
import CurrencyPicker from './CurrencyPicker'

const mapStateToProps = (state, props) => ({
	allCurrencies: allCurrenciesSelector(state),
	visibleCurrenciesNames: visibleCurrenciesNamesSelector(state),
	visibleCurrenciesCommaList: visibleCurrenciesCommaListSelector(state)
})

const mapDispatchToProps = (dispatch, props) => ({
	selectCurrency: (currencyCodes: string[]) => dispatch(selectCurrency(currencyCodes))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPicker)

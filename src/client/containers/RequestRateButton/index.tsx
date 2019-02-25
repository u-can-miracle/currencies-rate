import { connect } from 'react-redux'

import {
	currencyRateRequest
} from '../../redux/currency/actions'

import RequestRateButton from './RequestRateButton'

const mapDispatchToProps = (dispatch, props) => ({
	currencyRateRequest: () => dispatch(currencyRateRequest())
})

export default connect(null, mapDispatchToProps)(RequestRateButton)

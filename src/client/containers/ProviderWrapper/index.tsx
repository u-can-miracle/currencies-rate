import * as React from 'react'
import { Provider } from 'react-redux'

import CurrencyPicker from '../../containers/CurrencyPicker'
import CurrencyList from '../../containers/CurrencyList'
import RequestRateButton from '../../containers/RequestRateButton'
import getSingletoneStore from '../../redux/store/get-singletone-store'
import sagaMiddleware from '../../redux/middlewares/sagaMiddleware'
import rootSaga from '../../redux/rootSaga'

const store = getSingletoneStore()

sagaMiddleware.run(rootSaga)

const ProviderWrapper = () => (
	<Provider store={store} >
		<div className="currency-container">
			<div className="currency-controls">
				<CurrencyPicker />
				<RequestRateButton />
			</div>
			<CurrencyList />
		</div>
	</Provider>
)

export default ProviderWrapper

import * as React from 'react'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import DeleteForeverSharpIcon from '@material-ui/icons/Done'

const CurrencyPicker = ({
	allCurrencies,
	visibleCurrenciesNames,
	visibleCurrenciesCommaList,
	selectCurrency
}) =>
	(
		<FormControl className="currency-picker">
			<InputLabel
				className="currency-picker--title"
			>
				Choose currency
			</InputLabel>
			<Select
				value={visibleCurrenciesNames}
				onChange={event => {
					selectCurrency(event.target.value)
				}}
				name="name"
				renderValue={() => visibleCurrenciesCommaList}
			>
			{allCurrencies.map(({ name, isVisible }) =>
				<MenuItem
					key={name}
					value={name}
				>
					{isVisible && <DeleteForeverSharpIcon />}
					{name}
				</MenuItem>
			)}
			</Select>
		</FormControl>
	)

export default CurrencyPicker

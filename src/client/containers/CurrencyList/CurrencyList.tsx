import * as React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

interface ICurrencyObj {
	name: string
	rate: number
	isVisible: boolean
}
interface IProps {
	requestInterval: number
	visibleCurrencies: ICurrencyObj[]
	currencyDefault: string,
	isCurrenciesVisible: boolean
	requestRates: () => void
}

class CurrencyList extends React.Component<IProps, any> {
	constructor(props: IProps){
		super(props)
	}

	componentDidMount(){
		const {
			requestRates,
			requestInterval
		} = this.props

		setInterval(() => {
			requestRates()
		}, requestInterval)
	}

	render(){
		const {
			visibleCurrencies,
			currencyDefault,
			isCurrenciesVisible
		} = this.props

		return isCurrenciesVisible && (
			<Table className="currency-list">
				<TableHead>
					<TableRow>
						<TableCell>Currency rate to </TableCell>
						<TableCell align="right">{currencyDefault}</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{visibleCurrencies.map(({ name, rate }) => (
						<TableRow key={name}>
							<TableCell component="th" scope="row">
								{name}
							</TableCell>
							<TableCell align="right">{rate}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		)
	}
}

export default CurrencyList

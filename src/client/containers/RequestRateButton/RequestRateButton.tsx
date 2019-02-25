import * as React from 'react'
import Button from '@material-ui/core/Button'

const RequestRateButton = ({
	currencyRateRequest
}) =>
	(
		<div>
			<Button
				variant="contained"
				onClick={currencyRateRequest}
			>
				Request rates
			</Button>
		</div>
	)

export default RequestRateButton

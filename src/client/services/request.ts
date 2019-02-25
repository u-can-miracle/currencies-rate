export default async function request(url: string, payload, method = 'POST'){
	const isGet = method === 'GET'
	const body = isGet ? {} : { body: JSON.stringify(payload) }
	const headers = isGet ? {} : { 'Content-Type': 'application/json'}

	const fetchResponse = await fetch(url, {
		method,
		mode: 'cors',
		...headers,
		...body
	})

	const { ok, statusText } = fetchResponse
	const data = await fetchResponse.json()

	return {
		data,
		ok,
		statusText
	}
}

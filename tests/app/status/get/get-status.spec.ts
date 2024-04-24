import test, { APIRequestContext, expect } from '@playwright/test'

import { baseApiRoute } from '../../../../src/app/shared/routes/load-api-endpoints'
import { getContext } from '../../shared/api/api-test'

let api: APIRequestContext

test.beforeEach(async () => {
	api = await getContext()
})

test('get api status', async () => {
	const res = await api.get(baseApiRoute)
	expect(res.status()).toBe(200)
})

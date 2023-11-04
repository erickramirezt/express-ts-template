import { API_BASE_URL } from '../../../../src/constants/api-routes'
import { api } from '../../../helpers/api-test'
import { StatusCodes } from 'http-status-codes'

test('get api status', async () => {
  await api.get(API_BASE_URL).expect(StatusCodes.OK)
})

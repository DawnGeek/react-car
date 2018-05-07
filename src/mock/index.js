import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import { provinceArr } from '../assets/data/provinceCity'
import * as citys from '../assets/data/provinceCity'
import carData from '../assets/data/carClass'

const mock = new AxiosMockAdapter(axios)

const Data = () => {
	mock.onGet('/api/dataCity').reply((config) => {
		return new Promise((resolve, reject) => {
			resolve([200, provinceArr])
		})
	})
	mock.onGet('/api/dataCar').reply((config) => {
		return new Promise((resolve, reject) => {
			resolve([200, citys])
		})
	})
	mock.onGet('/api/dataChe').reply((config) => {
		return new Promise((resolve, reject) => {
			resolve([200, carData])
		})
	})
}

export default Data
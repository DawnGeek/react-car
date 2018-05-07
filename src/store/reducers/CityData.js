const initalsState = {
	dataList: [],
	addList: []
}

const CityData = (state = initalsState, action) => {
	switch (action.type) {
		case 'GET_DATA':
			state.dataList = action.data
      return JSON.parse(JSON.stringify(state))
			break;
		case 'ADD_DATA':
			state.addList = action.data
      return JSON.parse(JSON.stringify(state))
			break;
		default:
			return state
	}
}


export default CityData
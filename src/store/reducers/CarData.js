const initalsState = {
	dataList: []
}

const CarData = (state = initalsState, action) => {
	switch(action.type) {
		case "CAR_DATA":
			state.dataList = action.data
      return JSON.parse(JSON.stringify(state))
		break;
		default:
			return state
	}
}


export default CarData
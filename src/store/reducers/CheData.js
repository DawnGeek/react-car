const initalsState = {
	dataList: [],
	brandList: [],
	List: []
}

const CheData = (state = initalsState, action) => {
	switch(action.type) {
		case "CHE_DATA":
		state.List = action.data;
		var arr = [];
		var BrandArr = [];
			action.data.forEach((item, index) => {
				item.forEach((itm, ind) => {
					BrandArr.push(itm.carClass)
					itm.carList.forEach((area, idx) => {
						if(area.price) {
							arr.push(area)
						}
					})
				})
			})
      state.dataList = arr;
      state.brandList = BrandArr;
      return JSON.parse(JSON.stringify(state))
		break;
		case "CHE_LITRE":
			function compare(property){
			    return function(a,b){
			        var value1 = parseInt(a.price.slice(0,2));
			        var value2 = parseInt(b.price.slice(0,2));
			        return value2 - value1;
			    }
			}
			state.dataList = state.dataList.sort(compare('price'))
      return JSON.parse(JSON.stringify(state))
		break;
		case "CHE_DROP":
			function compare(property){
			    return function(a,b){
			        var value1 = parseInt(a.price.slice(0,2));
			        var value2 = parseInt(b.price.slice(0,2));
			        return value1 - value2;
			    }
			}
			state.dataList = state.dataList.sort(compare('price'))
      return JSON.parse(JSON.stringify(state))
		break;
		case "CHE_BRACK":
			var arr = [];
			state.List.forEach((item, index) => {
				item.forEach((itm, ind) => {
					if(itm.carClass === action.text) {
						itm.carList.forEach((area, idx) => {
						if(area.price) {
							arr.push(area)
						}
					})
					}
				})
			})
			state.dataList = arr

      return JSON.parse(JSON.stringify(state))
		break;
		default:
			return state
	}
}


export default CheData
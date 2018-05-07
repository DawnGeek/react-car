import { combineReducers } from 'redux';

import CityData from './CityData';
import CarData from './CarData';
import CheData from './CheData';

const rootReducers = combineReducers({
    CityData,
    CarData,
    CheData
});

export default rootReducers
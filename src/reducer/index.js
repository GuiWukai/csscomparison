import { combineReducers } from 'redux';
import BootstrapReducers from './bootstrapReducers';
import MaterializeReducers from './materializeReducers';
import FoundationReducers from './foundationReducers';


export default combineReducers({
    BootstrapReducers,
    MaterializeReducers,
    FoundationReducers,
});

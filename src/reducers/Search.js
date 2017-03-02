/**
 * Created by digvijayupadhyay on 02/03/17.
 */
import ActionTypes from './../actions/ActionTypes';


const SearchReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.LOCATION_CHANGE: {
            return {};
        }

        case ActionTypes.DATE_RANGE_CHANGE:
            return {};

        case ActionTypes.GUEST_COUNT_CHANGE:
            return {};

        default:
            return state
    }
};

export default SearchReducer;
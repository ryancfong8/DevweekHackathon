import { combineReducers } from "redux";
import ErrorsReducer from "./errors_reducer";
import GifReducer from "./gif_reducer";
import TripsReducer from "./trips_reducer";

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  trips: TripsReducer,
  gif: GifReducer
});

export default RootReducer;

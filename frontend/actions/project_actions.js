import * as APIUtil from "../util/project_api_util";
export const RECEIVE_TRIPS = "RECEIVE_TRIPS";

export const getTrips = () => dispatch =>
  APIUtil.getTrips()
    .then(trips => dispatch(receiveTrips(trips)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const receiveTrips = trips => ({
  type: RECEIVE_TRIPS,
  trips
});

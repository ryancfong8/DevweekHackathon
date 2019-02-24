import $ from "@rtorr/ajax-only";

export const getTrips = id => {
  return $.ajax({
    method: "GET",
    url: `/trips/{id}`
  });
};

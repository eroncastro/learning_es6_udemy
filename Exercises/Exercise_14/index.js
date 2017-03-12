var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(distance, trip) {
  return distance + trip.distance;
}, 0)

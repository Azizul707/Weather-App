const data = [
  {
    location: "New York City",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location: "Los Angeles",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  {
    location: "Toronto",
    latitude: 43.65107,
    longitude: -79.347015,
  },
  {
    location: "Mexico City",
    latitude: 19.4326,
    longitude: -99.1332,
  },
  {
    location: "Chicago",
    latitude: 41.8781,
    longitude: -87.6298,
  },
  {
    location: "São Paulo",
    latitude: -23.5505,
    longitude: -46.6333,
  },
  {
    location: "Buenos Aires",
    latitude: -34.6037,
    longitude: -58.3816,
  },
  {
    location: "Rio de Janeiro",
    latitude: -22.9068,
    longitude: -43.1729,
  },
  {
    location: "Lima",
    latitude: -12.0464,
    longitude: -77.0428,
  },
  {
    location: "Bogotá",
    latitude: 4.7109,
    longitude: -74.0721,
  },
  {
    location: "London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    location: "Berlin",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    location: "Madrid",
    latitude: 40.4168,
    longitude: -3.7038,
  },
  {
    location: "Rome",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    location: "Cairo",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    location: "Lagos",
    latitude: 6.5244,
    longitude: 3.3792,
  },
  {
    location: "Kinshasa",
    latitude: -4.4419,
    longitude: 15.2663,
  },
  {
    location: "Johannesburg",
    latitude: -26.2041,
    longitude: 28.0473,
  },
  {
    location: "Nairobi",
    latitude: -1.2864,
    longitude: 36.8172,
  },
  {
    location: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    location: "Shanghai",
    latitude: 31.2304,
    longitude: 121.4737,
  },
  {
    location: "Seoul",
    latitude: 37.5665,
    longitude: 126.978,
  },
  {
    location: "Delhi",
    latitude: 28.7041,
    longitude: 77.1025,
  },
  {
    location: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    location: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: "Melbourne",
    latitude: -37.8136,
    longitude: 144.9631,
  },
  {
    location: "Auckland",
    latitude: -36.8485,
    longitude: 174.7633,
  },
  {
    location: "Brisbane",
    latitude: -27.4698,
    longitude: 153.0251,
  },
  {
    location: "Perth",
    latitude: -31.9505,
    longitude: 115.8605,
  },
];

const getLocation = () => {
  return data;
};

const getLocationByName = (location) => {
  if (!location) return null;
  const filteredLocation = data.filter(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  if (filteredLocation.length > 0) {
    return filteredLocation[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
};

export { getLocation, getLocationByName };

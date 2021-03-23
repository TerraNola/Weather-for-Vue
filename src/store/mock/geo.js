/* eslint-disable prettier/prettier */
async function geoFindMe() {
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  return {
    lon: pos.coords.longitude.toFixed(4),
    lat: pos.coords.latitude.toFixed(4)
  };
}

export default geoFindMe;
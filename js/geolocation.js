function geolocationSupport() {
  return "geolocation" in navigator;
}

const defaultOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximunAge: 100000,
};

export function getCurrentPosition(options = defaultOptions) {
  if (!geolocationSupport())
    throw new Error("No hay soporte de geolocalizacion en tu navegador");

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      () => {
        reject("no hemos podido obtener tu ubicacion");
      },
      options
    );
  });
}

export async function getLatLon(options = defaultOptions) {
  try {
    const {
      coords: { latitude: lat, longitude: lon },
    } = await getCurrentPosition(options);
    return { lat, lon, isError: false };
  } catch {
    return { isError: true, lat: null, lon: null };
  }
}

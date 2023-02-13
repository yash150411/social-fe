interface LocationType {
  formattedAddress: string;
  addressLine_1: string;
  addressLine_2: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  neighbourhood: string;
}
declare var google: any;
export const getLocationByPlaceId = (placeId: string) => {
  return new Promise(function (resolve, reject) {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -33.866, lng: 151.196 },
      zoom: 15
    });
    const request = {
      placeId,
      fields: ['name', 'address_components', 'geometry']
    };
    const service = new google.maps.places.PlacesService(map);
    service.getDetails(request, (place: any, status: any) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        resolve(place);
      }
    });
  });
};
export const setAddressComps = (param: string, array: any) => {
  const comp = array.find((add: any) => {
    if (add.types.includes(param)) return add;
  });
  if (comp && comp.long_name) return comp.long_name;
  return '';
};
export const getAddressComps = (info: any): LocationType => {
  const locationObj: LocationType = {
    formattedAddress: info.name,
    addressLine_1: setAddressComps('sublocality_level_2', info.address_components),
    addressLine_2: setAddressComps('subpremise', info.address_components),
    city:
      setAddressComps('locality', info.address_components) ||
      setAddressComps('administrative_area_level_2', info.address_components),
    state: setAddressComps('administrative_area_level_1', info.address_components),
    country: setAddressComps('country', info.address_components),
    postalCode: setAddressComps('postal_code', info.address_components),
    neighbourhood: setAddressComps('route', info.address_components) || ''
  };
  return locationObj;
};
// formattedAddress: setAddressComps('street_number', info.address_components) + " " + setAddressComps('route', info.address_components),

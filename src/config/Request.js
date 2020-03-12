const DATA_URL =
  'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/' +
  'query?f=json&where=(Confirmed%20%3E%200)%20AND%20(Recovered%3C%3E0)%20AND%20(Country_Region%3D%27Romania%27)' +
  '&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Recovered%20desc%2CCountry_Region%20asc%2C' +
  'Province_State%20asc&outSR=102100&resultOffset=0&resultRecordCount=250&cacheHint=true';

export const dataReq = () => fetch(DATA_URL);

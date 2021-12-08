const DATA_URL =
  'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/' +
  'query?f=json&where=(Confirmed%20%3E%200)%20AND%20(Recovered%3C%3E0)%20AND%20(Country_Region%3D%27Romania%27)' +
  '&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Recovered%20desc%2CCountry_Region%20asc%2C' +
  'Province_State%20asc&outSR=102100&resultOffset=0&resultRecordCount=250&cacheHint=true';

const LAST_UPDATE_URL =
  'https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/1?f=json';

const TOTAL_CASES_URL =
  'https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/1/query?f=json&cacheHint=true&outFields=*&outStatistics=%5B%7B%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22value%22%2C%22statisticType%22%3A%22sum%22%7D%5D&resultType=standard&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=Country_Region%3D%27Romania%27';

const TOTAL_DEATHS_URL =
  'https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/2/query?f=json&cacheHint=true&outFields=*&outStatistics=%5B%7B%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22value%22%2C%22statisticType%22%3A%22sum%22%7D%5D&resultType=standard&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=OBJECTID%3D144';

const TOTAL_VACCINE_URL =
  'https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2VaCYFoAEOFCG5JSI6/FeatureServer/0/query?f=json&cacheHint=true&outFields=*&outStatistics=%5B%7B%22onStatisticField%22%3A%22Doses_Admin%22%2C%22outStatisticFieldName%22%3A%22value%22%2C%22statisticType%22%3A%22sum%22%7D%5D&resultType=standard&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(Province_State%20IS%20NULL)%20AND%20(Country_Region%3D%27Romania%27)';

const DAY_28_CASES_URL =
  'https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/4/query?f=json&cacheHint=true&outFields=*&outStatistics=%5B%7B%22onStatisticField%22%3A%22Delta_Confirmed%22%2C%22outStatisticFieldName%22%3A%22value%22%2C%22statisticType%22%3A%22sum%22%7D%5D&resultType=standard&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(UID%20%3C%3E%20840)%20AND%20(Country_Region%3D%27Romania%27)';

const DAY_28_DEATHS_URL =
  'https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/4/query?f=json&cacheHint=true&outFields=*&outStatistics=%5B%7B%22onStatisticField%22%3A%22Delta_Deaths%22%2C%22outStatisticFieldName%22%3A%22value%22%2C%22statisticType%22%3A%22sum%22%7D%5D&resultType=standard&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(UID%20%3C%3E%20840)%20AND%20(Country_Region%3D%27Romania%27)';

const DAY_28_VACCINE_ADMINISTERED_URL =
  'https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/4/query?f=json&cacheHint=true&outFields=*&outStatistics=%5B%7B%22onStatisticField%22%3A%22Delta_Doses_Admin%22%2C%22outStatisticFieldName%22%3A%22value%22%2C%22statisticType%22%3A%22sum%22%7D%5D&resultType=standard&returnGeometry=false&spatialRel=esriSpatialRelIntersects&where=(UID%20%3C%3E%20840)%20AND%20(Country_Region%3D%27Romania%27)';

export const dataReq = () =>
  Promise.all([
    fetch(TOTAL_CASES_URL),
    fetch(TOTAL_DEATHS_URL),
    fetch(TOTAL_VACCINE_URL),
    fetch(DAY_28_CASES_URL),
    fetch(DAY_28_DEATHS_URL),
    fetch(DAY_28_VACCINE_ADMINISTERED_URL),
    fetch(LAST_UPDATE_URL),
  ]);

import _ from 'lodash';

export const getUrlAllParams = (fullUrl: string): any => {
  const url = decodeURI(fullUrl);
  const res = {};
  const url_data = _.split(url, '?').length > 1 ? _.split(url, '?')[1] : null;
  if (!url_data) {
    return null;
  }
  const params_arr = _.split(url_data, '&');
  _.forEach(params_arr, function (item) {
    const key = _.split(item, '=')[0];
    const value = _.split(item, '=')[1];
    res[key] = value;
  });
  return res;
};

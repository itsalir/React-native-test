export const createURL = (url: string, params: any = {}): any => {
  Object.keys(params).map(item => {
    url = url.replace(`{${item}}`, params[item]);
  });
  return url;
};

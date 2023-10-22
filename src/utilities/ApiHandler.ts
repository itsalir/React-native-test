import axios from 'axios';
import {ApiUrl} from '../config/apiConfig';
type options = {
  method: string;
  url: string;
  params?: any;
  data?: any;
  headers?: any;
};

const callApi = async (options: options) => {
  const response = await axios({
    url: ApiUrl + options.url,
    method: options.method || 'get',
    data: options.data,
    params: options.params,
    headers: options.headers,
  });

  return response.data;
};

export default callApi;

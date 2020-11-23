import Axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { get as _get } from 'lodash';

abstract class AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Protected Properties
  // --------------------------------------------------------------------------------------------

  /**
   * The HTTP Client
   * Use this to init all HTTP functionality
   */
  protected readonly http: AxiosInstance;
  protected readonly baseURL: string = 'https://api.eliteprospects.com/v1';
  private readonly apiKey: string = '';
  private readonly path: string = '';

  // --------------------------------------------------------------------------------------------
  // Private Properties
  // --------------------------------------------------------------------------------------------

  public constructor(apiKey: string, path: string) {
    const options: AxiosRequestConfig = {
      baseURL: this.baseURL
    };
    this.apiKey = apiKey;
    this.path = path;

    this.http = Axios.create(options);
  }

  protected execute(requestParams: any): AxiosPromise {
    return this.http.get(this.path, {
      params: {
        apiKey: this.apiKey,
        ...requestParams
      },
      transformResponse: (data: string): any => _get(JSON.parse(data), 'data', {})
    });
  }
}

export default AbstractApi;

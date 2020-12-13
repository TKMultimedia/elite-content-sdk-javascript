import { AxiosPromise } from 'axios';
import IEliteFlagUrl from '../Model/IEliteFlagUrl';
import { flagUrlResponseTransformer } from '../Utils/Transformer/FlagResponseTransformer';
import AbstractApi from './AbstractApi';

class CountryApi extends AbstractApi {
  public constructor(apiKey: string) {
    super(apiKey, 'countries');
  }

  public getCountryFlagUrl(countrySlug: string): AxiosPromise<IEliteFlagUrl> {
    return this.execute({}, `${countrySlug}`, flagUrlResponseTransformer);
  }
}

export default CountryApi;

import { AxiosPromise } from 'axios';
import IElitePlayerCompact from '../Model/IElitePlayer';
import AbstractApi from './AbstractApi';

class SearchApi extends AbstractApi {
  public constructor(apiKey: string) {
    super(apiKey, 'search');
  }

  public searchForPlayerName(playerName: string): AxiosPromise<IElitePlayerCompact[]> {
    return this.execute({
      fields: 'player',
      q: playerName
    });
  }
}

export default SearchApi;

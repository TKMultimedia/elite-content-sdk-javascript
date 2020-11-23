import { AxiosPromise } from 'axios';
import IElitePlayer from '../Model/IElitePlayer';
import AbstractApi from './AbstractApi';

class SearchApi extends AbstractApi {
  public constructor(apiKey: string) {
    super(apiKey, 'search');
  }

  public searchForPlayerName(playerName: string): AxiosPromise<{ player: IElitePlayer[] }> {
    return this.execute({
      fields: 'player',
      q: playerName
    });
  }

  public getPlayerInfoById(playerId: number): AxiosPromise<IElitePlayer> {
    return this.execute({}, `${playerId}`);
  }
}

export default SearchApi;

import { AxiosPromise } from 'axios';
import IElitePlayer from '../Model/IElitePlayer';
import AbstractApi from './AbstractApi';

class PlayerApi extends AbstractApi {
  public constructor(apiKey: string) {
    super(apiKey, 'players');
  }

  public getPlayerInfoById(playerId: number): AxiosPromise<IElitePlayer> {
    return this.execute({}, `${playerId}`);
  }
}

export default PlayerApi;

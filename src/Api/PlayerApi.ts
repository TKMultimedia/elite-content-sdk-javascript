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

  public listPlayers(offset?: number, limit?: number): AxiosPromise<IElitePlayer[]> {
    const processOffset: number = typeof offset !== 'undefined' ? offset : 0;
    const processLimit: number = typeof limit !== 'undefined' ? limit : 100;

    return this.execute({
      offset: processOffset,
      limit: processLimit
    });
  }
}

export default PlayerApi;

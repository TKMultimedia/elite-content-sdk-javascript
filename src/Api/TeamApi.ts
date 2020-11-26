import { AxiosPromise } from 'axios';
import IElitePlayer from '../Model/IElitePlayer';
import { teamRostersResponseTransformer } from '../Utils/Transformer/TeamResponseTransformer';
import AbstractApi from './AbstractApi';

class TeamApi extends AbstractApi {
  public constructor(apiKey: string) {
    super(apiKey, 'teams');
  }

  public getTeamPlayers(teamId: number, offset?: number, limit?: number): AxiosPromise<IElitePlayer[]> {
    const processOffset: number = typeof offset !== 'undefined' ? offset : 0;
    const processLimit: number = typeof limit !== 'undefined' ? limit : 100;

    return this.execute(
      {
        offset: processOffset,
        limit: processLimit
      },
      `${teamId}/roster`,
      teamRostersResponseTransformer
    );
  }
}

export default TeamApi;

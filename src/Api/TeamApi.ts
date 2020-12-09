import { AxiosPromise } from 'axios';
import IElitePlayer from '../Model/IElitePlayer';
import IEliteTeam from '../Model/IEliteTeam';
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

  public listTeams(offset?: number, limit?: number): AxiosPromise<IEliteTeam[]> {
    const processOffset: number = typeof offset !== 'undefined' ? offset : 0;
    const processLimit: number = typeof limit !== 'undefined' ? limit : 100;

    return this.execute({
      offset: processOffset,
      limit: processLimit,
      status: 'active',
      fields: 'id,name,logoUrl,fullName,city,league,teamType,teamClass,country'
    });
  }

  public getTeamById(teamId: number): AxiosPromise<IEliteTeam> {
    return this.execute({}, `${teamId}`);
  }
}

export default TeamApi;

import { AxiosPromise } from 'axios';
import IElitePlayer from '../Model/IElitePlayer';
import IEliteTeam from '../Model/IEliteTeam';
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

  public searchForTeamName(teamName: string): AxiosPromise<{ team: IEliteTeam[] }> {
    return this.execute({
      fields: 'team',
      q: teamName
    });
  }
}

export default SearchApi;

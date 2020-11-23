import IEliteCoaches from './IEliteCoaches';
import IEliteSeason from './IEliteSeason';
import IEliteStats from './IEliteStats';

export default interface IEliteLatestStats {
  id: number;
  season: IEliteSeason;
  status: string;
  teamName: string;
  teamLogoUrl: string;
  leagueName: string;
  leagueFullName: string;
  leagueType: string;
  jerseyNumber: number;
  playerRole: string;
  contractType: string;
  regularStats: IEliteStats;
  postseasonType: string;
  postseasonName: string;
  postseasonStats: IEliteStats;
  totalStats: IEliteStats;
  coaches: IEliteCoaches;
  updatedAt: string;
}

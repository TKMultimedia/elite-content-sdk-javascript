import {
  map as _map
} from 'lodash';
import { transformFunction } from '../../Api/AbstractApi';
import IElitePlayer from '../../Model/IElitePlayer';
import IEliteSeason from '../../Model/IEliteSeason';
import IEliteStaff from '../../Model/IEliteStaff';
import IEliteStats from '../../Model/IEliteStats';

interface IRosterItem {
  player: IElitePlayer;
  jerseyNumber: number;
  playerRole: string;
  contractType: string;
  updatedAt: string;
}

interface IStaffItem {
  id: string;
  staff: IEliteStaff;
  session: IEliteSeason;
  role: string;
}

interface IRoasterResponseItem {
  id: string;
  player: IElitePlayer;
  season: IEliteSeason;
  status: string;
  teamName: string;
  regularStats: IEliteStats;
  jerseyNumber: number;
}

export const teamRostersResponseTransformer: transformFunction = (data: string): IElitePlayer[] => {
  const response: { data: IRosterItem[] } = JSON.parse(data);

  return _map(response.data, (item: IRosterItem): IElitePlayer => item.player);
};

export const teamStaffResponseTransformer: transformFunction = (data: string): IEliteStaff[] => {
  const response: { data: IStaffItem[] } = JSON.parse(data);

  return _map(response.data, (item: IStaffItem): IEliteStaff => (
    {
      ...item.staff,
      session: item.session,
      role: item.role
    }
  ));
};

export const playerStatSeasonTransformer: transformFunction = (data: string): IEliteSeason[] => {
  interface IResponse {
    data: IEliteSeason[];
  };

  const response: IResponse = JSON.parse(data);

  return response.data;
};

export const roasterTransformer: transformFunction = (data: string): IElitePlayer[] => {
  const response: { data: IRoasterResponseItem[] } = JSON.parse(data);

  return _map(response.data, (item: IRoasterResponseItem): IElitePlayer => (
    {
      ...item.player,
      latestStats: {
        ...item.player.latestStats,
        regularStats: item.regularStats,
        teamName: item.teamName,
        jerseyNumber: item.jerseyNumber
      }
    }
  ));
}
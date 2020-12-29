import {
  map as _map
} from 'lodash';
import { transformFunction } from '../../Api/AbstractApi';
import IElitePlayer from '../../Model/IElitePlayer';
import IEliteSeason from '../../Model/IEliteSeason';
import IEliteStaff from '../../Model/IEliteStaff';

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

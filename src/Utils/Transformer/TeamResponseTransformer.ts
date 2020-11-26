import {
  map as _map
} from 'lodash';
import { transformFunction } from '../../Api/AbstractApi';
import IElitePlayer from '../../Model/IElitePlayer';

interface IRosterItem {
  player: IElitePlayer;
  jerseyNumber: number;
  playerRole: string;
  contractType: string;
  updatedAt: string;
}

export const teamRostersResponseTransformer: transformFunction = (data: string): IElitePlayer[] => {
  const response: { data: IRosterItem[] } = JSON.parse(data);

  return _map(response.data, (item: IRosterItem): IElitePlayer => item.player);
};

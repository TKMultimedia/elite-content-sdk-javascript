import IEliteTeam from './IEliteTeam';

export default interface IEliteNhlRights {
  id: number;
  rights: string;
  position: string;
  team: IEliteTeam;
  updatedAt: string;
}

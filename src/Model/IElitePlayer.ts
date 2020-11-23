import IEliteNationality from './IEliteNationality';

export default interface IElitePlayerCompact {
  id: number;
  dateOfBirth: string;
  gender: string;
  lastName: string;
  name: string;
  position: string;
  status: string;
  _links: string[];
  nationality: IEliteNationality;
}

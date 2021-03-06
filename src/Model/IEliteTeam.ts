import IEliteLinks from './IEliteLinks';

export default interface IEliteTeam {
  id: number;
  name: string;
  extraName: string;
  fullName: string;
  logoUrl: string;
  founded: number;
  city: string;
  colors: string;
  status: string;
  teamType: string;
  teamClass: string;
  continent: string;
  capHit: string;
  views: number;
  links: IEliteLinks;
  notes: string;
  updatedAt: string;
  _links: string[];
}

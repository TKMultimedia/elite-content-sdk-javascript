import IEliteLinks from './IEliteLinks';

export default interface IEliteAgenciesItem {
  id: number;
  name: string;
  logoUrl: string;
  location: string;
  email: string;
  info: string;
  numberOfClients: number;
  agents: string[];
  links: IEliteLinks;
  updatedAt: string;
  _links: string[];
}

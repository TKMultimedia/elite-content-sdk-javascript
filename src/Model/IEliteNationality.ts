import IEliteFlagUrl from './IEliteFlagUrl';

export default interface IEliteNationality {
  slug: string;
  name: string;
  flagUrl: IEliteFlagUrl;
  updatedAt: string;
  _links: string[];
}

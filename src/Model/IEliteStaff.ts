import IEliteLinks from './IEliteLinks';
import IEliteSeason from './IEliteSeason';

export default interface IEliteStaff {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  alternativeName: string;
  imageUrl: string;
  imageCopyright: string;
  status: string;
  dateOfBirth: string;
  placeOfBirth: string;
  views: number;
  biography: string;
  links: IEliteLinks;
  updatedAt: string;
  _links: string[];
  session?: IEliteSeason;
  role?: string;
}

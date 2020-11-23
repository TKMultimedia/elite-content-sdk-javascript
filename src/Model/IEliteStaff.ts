import IEliteLinks from './IEliteLinks';

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
}

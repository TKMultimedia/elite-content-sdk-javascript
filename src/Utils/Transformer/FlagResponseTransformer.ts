import { transformFunction } from '../../Api/AbstractApi';
import IEliteFlagUrl from '../../Model/IEliteFlagUrl';
import IEliteNationality from '../../Model/IEliteNationality';

interface IResponse {
  data: IEliteNationality;
}

export const flagUrlResponseTransformer: transformFunction = (data: string): IEliteFlagUrl => {
  const response: IResponse = JSON.parse(data);

  return response.data.flagUrl;
};

import { AxiosPromise } from 'axios';
import IElitePlayer from '../Model/IElitePlayer';
import AbstractApi from './AbstractApi';

class StaffApi extends AbstractApi {
  public constructor(apiKey: string) {
    super(apiKey, 'staff');
  }

  public getStaffInfoById(staffId: number): AxiosPromise<IElitePlayer> {
    return this.execute({}, `${staffId}`);
  }
}

export default StaffApi;

import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { IUserProfile } from '../../api/github';
import { AsyncState } from '../../lib/reducerUtils';
import { AxiosError } from 'axios';

export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
  userProfile: AsyncState<IUserProfile, AxiosError>;
};

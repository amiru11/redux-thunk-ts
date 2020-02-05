import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { IUserProfile } from '../../api/github';

export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: IUserProfile | null;
  };
};

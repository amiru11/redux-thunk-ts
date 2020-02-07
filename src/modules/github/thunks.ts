// import { ThunkAction } from 'redux-thunk';
// import { RootState } from '..';
// import { GithubAction } from './types';
import { getUserProfile } from '../../api/github';
import { getUserProfileAsync } from './actions';
import createAsyncThunk from '../../lib/createAsyncThunk';

/**
 * ThunkAction
 * <TReturnType, Tstate, TExtraThunkArg, TBasicAction>
 * 1.TReturnType: thunk함수에서 반환하는 값의 타입
 * 2.TState: 스토어의 상태에 대한 타입 설정
 * 3.TExtraThunkArg: redux-thunk 미들웨어의 Extra Argument
 * 4.TBasicAction: dispatch 할 수 있는 액션들의 타입
 */
// export function getUserProfileThunk(username: string): ThunkAction<Promise<void>, RootState, null, GithubAction> {
//   return async dispatch => {
//     const { request, success, failure } = getUserProfileAsync;
//     dispatch(request());
//     try {
//       const userProfile = await getUserProfile(username);
//       console.log('userProfile', userProfile);
//       dispatch(success(userProfile));
//     } catch (err) {
//       console.log('err', err);
//       dispatch(failure(err));
//     }
//   };
// }

export const getUserProfileThunk = createAsyncThunk(getUserProfileAsync, getUserProfile);

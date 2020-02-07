import { Dispatch } from 'redux';
import { AsyncActionCreatorBuilder } from 'typesafe-actions';

// AnyAction: 아무 형태의 액션 객체를 만들어낼 수 있다는 것
// ...params: any[] 어떤 파라미터든 받아올 수 있도록 하는 것
// type AnyAsyncActionCreatorBuilder = {
//   request: (...params: any[]) => AnyAction;
//   success: (...params: any[]) => AnyAction;
//   failure: (...params: any[]) => AnyAction;
//   cancel: (...params: any[]) => AnyAction;
// };

type AnyAsyncActionCreatorBuilder = AsyncActionCreatorBuilder<any, any, any>;

export default function createAsyncThunk<A extends AnyAsyncActionCreatorBuilder, F extends (...params: any[]) => Promise<any>>(
  asyncActionCreatorBuilder: A,
  promiseCreator: F,
) {
  // 함수의 파라미터 타입을 추론 F 함수의 파라미터와 Thunk함수의 파라미터가 동일하게끔 받아지도록 하는 역할
  type Params = Parameters<F>;
  return function thunk(...params: Params) {
    return async (dispatch: Dispatch) => {
      const { request, success, failure } = asyncActionCreatorBuilder;
      dispatch(request(undefined));
      try {
        const result = await promiseCreator(...params);
        dispatch(success(result));
      } catch (e) {
        dispatch(failure(e));
      }
    };
  };
}

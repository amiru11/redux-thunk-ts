import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getUserProfileThunk } from '../modules/github/thunks';

import Form from '../components/Form';
import Profile from '../components/Profile';

function ProfileContainer(): JSX.Element {
  const { loading, error, data } = useSelector(
    (state: RootState) => state?.github?.userProfile
  );
  const dispatch = useDispatch();

  function onSumbit(username: string): void {
    dispatch(getUserProfileThunk(username));
  }
  return (
    <>
      <Form onSubmit={onSumbit} />
      {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
      {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
      {data && (
        <Profile
          name={data.name}
          bio={data.bio}
          thumbnail={data.avatar_url}
          blog={data.blog}
        />
      )}
    </>
  );
}

export default ProfileContainer;

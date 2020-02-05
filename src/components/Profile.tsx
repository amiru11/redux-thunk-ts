import React from 'react';

interface IProfileInfoProps {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
}

function Profile({
  name,
  thumbnail,
  bio,
  blog,
}: IProfileInfoProps): JSX.Element {
  return (
    <div>
      <div>
        <img src={thumbnail} alt='user thumbnail' />
        <p>{name}</p>
      </div>
      <p>{bio}</p>
      {blog && (
        <div>
          <a href={blog}>블로그</a>
        </div>
      )}
    </div>
  );
}

export default Profile;

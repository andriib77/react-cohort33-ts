import { ProfileAvatar, ProfileCardContainer, AvatarControl } from "./styles";

import { ProfileCardProps } from "./types";

// import normalizeFirstLastName, { profile } from "./data";

// Что такое props - это обьект, через котроый вы можете передавать данные от родителя - ребенку

function ProfileCard({ profileData, imgSrc, children }: ProfileCardProps) {
  // console.log(profileData);
  // К нам пришли данные с сервера

  // JSX: Передача html кода переменной
  // const cardName = <h1>User info</h1>;

  const normalizeFirstLastName = () => {
    return `${profileData.firstName} ${profileData.lastName}`;
  };

  return (
    <ProfileCardContainer>
      {children}
      <AvatarControl>
        <ProfileAvatar alt="Profile Avatar" src={imgSrc} />
      </AvatarControl>
      <h2>{normalizeFirstLastName()}</h2>
      <p>Career: {profileData.career}</p>
      <p>Hair Color: {profileData.hairColor}</p>
      <p>Hobby: {profileData.hobby}</p>
    </ProfileCardContainer>
  );
}

// 3 cпособ экспорта - как default
export default ProfileCard;

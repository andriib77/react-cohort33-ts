import { ReactNode } from "react";

interface ProfileData {
  firstName: string;
  lastName: string;
  career: string;
  hairColor?: string;
  hobby?: string;
  age: string;
}

export interface ProfileCardProps {
  profileData: ProfileData;
  imgSrc?: string;
  children?: ReactNode;
}

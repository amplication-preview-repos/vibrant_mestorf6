import { InputJsonValue } from "../../types";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bannerPicture?: InputJsonValue;
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicture?: InputJsonValue;
  roles: InputJsonValue;
  username: string;
};

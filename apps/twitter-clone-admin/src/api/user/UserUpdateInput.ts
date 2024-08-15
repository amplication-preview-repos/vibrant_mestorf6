import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bannerPicture?: InputJsonValue;
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
};

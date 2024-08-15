import { JsonValue } from "type-fest";
import { Like } from "../like/Like";

export type User = {
  bannerPicture: JsonValue;
  bio: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  profilePicture: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

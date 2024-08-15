import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { InputJsonValue } from "../../types";

export type TweetUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutTweetsInput;
  content?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  media?: InputJsonValue;
};

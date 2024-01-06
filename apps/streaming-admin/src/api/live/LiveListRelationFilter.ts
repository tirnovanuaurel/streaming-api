import { LiveWhereInput } from "./LiveWhereInput";

export type LiveListRelationFilter = {
  every?: LiveWhereInput;
  some?: LiveWhereInput;
  none?: LiveWhereInput;
};

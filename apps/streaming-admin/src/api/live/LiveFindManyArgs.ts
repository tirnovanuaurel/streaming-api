import { LiveWhereInput } from "./LiveWhereInput";
import { LiveOrderByInput } from "./LiveOrderByInput";

export type LiveFindManyArgs = {
  where?: LiveWhereInput;
  orderBy?: Array<LiveOrderByInput>;
  skip?: number;
  take?: number;
};

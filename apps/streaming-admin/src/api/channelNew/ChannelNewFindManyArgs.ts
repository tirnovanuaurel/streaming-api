import { ChannelNewWhereInput } from "./ChannelNewWhereInput";
import { ChannelNewOrderByInput } from "./ChannelNewOrderByInput";

export type ChannelNewFindManyArgs = {
  where?: ChannelNewWhereInput;
  orderBy?: Array<ChannelNewOrderByInput>;
  skip?: number;
  take?: number;
};

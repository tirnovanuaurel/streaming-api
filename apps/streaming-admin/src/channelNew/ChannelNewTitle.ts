import { ChannelNew as TChannelNew } from "../api/channelNew/ChannelNew";

export const CHANNELNEW_TITLE_FIELD = "title";

export const ChannelNewTitle = (record: TChannelNew): string => {
  return record.title?.toString() || String(record.id);
};

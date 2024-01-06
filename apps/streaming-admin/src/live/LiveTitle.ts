import { Live as TLive } from "../api/live/Live";

export const LIVE_TITLE_FIELD = "awayTeam";

export const LiveTitle = (record: TLive): string => {
  return record.awayTeam?.toString() || String(record.id);
};

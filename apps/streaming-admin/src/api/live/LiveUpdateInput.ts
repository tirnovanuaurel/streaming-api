import { InputJsonValue } from "../../types";

export type LiveUpdateInput = {
  awayGoals?: InputJsonValue;
  awayScore?: number;
  awayTeam?: string;
  awayTeamBadge?: string | null;
  homeGoals?: InputJsonValue;
  homeScore?: number;
  homeTeam?: string;
  homeTeamBadge?: string | null;
};

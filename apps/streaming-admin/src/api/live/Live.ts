import { JsonValue } from "type-fest";

export type Live = {
  awayGoals: JsonValue;
  awayScore: number;
  awayTeam: string;
  awayTeamBadge: string | null;
  createdAt: Date;
  homeGoals: JsonValue;
  homeScore: number;
  homeTeam: string;
  homeTeamBadge: string | null;
  id: string;
  updatedAt: Date;
};

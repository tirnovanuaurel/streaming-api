import { Competition } from "../competition/Competition";
import { Team } from "../team/Team";

export type Table = {
  competition?: Competition | null;
  createdAt: Date;
  drawn: number | null;
  goalsConceded: number | null;
  goalsDifference: number | null;
  goalsScored: number | null;
  id: string;
  lost: number | null;
  played: number | null;
  points: number | null;
  team?: Team | null;
  updatedAt: Date;
  won: number | null;
};

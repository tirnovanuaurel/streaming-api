import { Competition } from "../competition/Competition";
import { Team } from "../team/Team";

export type Table = {
  competition?: Competition | null;
  createdAt: Date;
  drawn: number;
  goalsConceded: number;
  goalsDifference: number;
  goalsScored: number;
  id: string;
  lost: number;
  played: number;
  points: number;
  team?: Array<Team>;
  updatedAt: Date;
  won: number;
};

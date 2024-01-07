import { CompetitionWhereUniqueInput } from "../competition/CompetitionWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TableUpdateInput = {
  competition?: CompetitionWhereUniqueInput | null;
  drawn?: number;
  goalsConceded?: number;
  goalsDifference?: number;
  goalsScored?: number;
  lost?: number;
  played?: number;
  points?: number;
  team?: TeamWhereUniqueInput;
  won?: number;
};

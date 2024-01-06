import { CompetitionWhereUniqueInput } from "../competition/CompetitionWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TableUpdateInput = {
  competition?: CompetitionWhereUniqueInput | null;
  drawn?: number | null;
  goalsConceded?: number | null;
  goalsDifference?: number | null;
  goalsScored?: number | null;
  lost?: number | null;
  played?: number | null;
  points?: number | null;
  team?: TeamWhereUniqueInput | null;
  won?: number | null;
};

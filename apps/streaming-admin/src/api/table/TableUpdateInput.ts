import { CompetitionWhereUniqueInput } from "../competition/CompetitionWhereUniqueInput";
import { TeamUpdateManyWithoutTablesInput } from "./TeamUpdateManyWithoutTablesInput";

export type TableUpdateInput = {
  competition?: CompetitionWhereUniqueInput | null;
  drawn?: number;
  goalsConceded?: number;
  goalsDifference?: number;
  goalsScored?: number;
  lost?: number;
  played?: number;
  points?: number;
  team?: TeamUpdateManyWithoutTablesInput;
  won?: number;
};

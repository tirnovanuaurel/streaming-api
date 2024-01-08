import { CompetitionWhereUniqueInput } from "../competition/CompetitionWhereUniqueInput";
import { TeamCreateNestedManyWithoutTablesInput } from "./TeamCreateNestedManyWithoutTablesInput";

export type TableCreateInput = {
  competition?: CompetitionWhereUniqueInput | null;
  drawn: number;
  goalsConceded: number;
  goalsDifference: number;
  goalsScored: number;
  lost: number;
  played: number;
  points: number;
  team?: TeamCreateNestedManyWithoutTablesInput;
  won: number;
};

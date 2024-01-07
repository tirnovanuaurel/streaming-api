import { CompetitionWhereUniqueInput } from "../competition/CompetitionWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TableWhereInput = {
  competition?: CompetitionWhereUniqueInput;
  drawn?: IntFilter;
  goalsConceded?: IntFilter;
  goalsDifference?: IntFilter;
  goalsScored?: IntFilter;
  id?: StringFilter;
  lost?: IntFilter;
  played?: IntFilter;
  points?: IntFilter;
  team?: TeamWhereUniqueInput;
  won?: IntFilter;
};

import { CompetitionWhereUniqueInput } from "../competition/CompetitionWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TableWhereInput = {
  competition?: CompetitionWhereUniqueInput;
  drawn?: IntNullableFilter;
  goalsConceded?: IntNullableFilter;
  goalsDifference?: IntNullableFilter;
  goalsScored?: IntNullableFilter;
  id?: StringFilter;
  lost?: IntNullableFilter;
  played?: IntNullableFilter;
  points?: IntNullableFilter;
  team?: TeamWhereUniqueInput;
  won?: IntNullableFilter;
};

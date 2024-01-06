import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LiveWhereInput = {
  awayScore?: IntNullableFilter;
  awayTeam?: StringNullableFilter;
  homeScore?: IntNullableFilter;
  homeTeam?: StringNullableFilter;
  id?: StringFilter;
};

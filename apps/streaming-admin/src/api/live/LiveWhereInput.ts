import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LiveWhereInput = {
  awayScore?: IntFilter;
  awayTeam?: StringFilter;
  awayTeamBadge?: StringNullableFilter;
  homeScore?: IntFilter;
  homeTeam?: StringFilter;
  homeTeamBadge?: StringNullableFilter;
  id?: StringFilter;
};

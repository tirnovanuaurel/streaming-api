import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LiveWhereInput = {
  awayGoals?: JsonFilter;
  awayScore?: IntFilter;
  awayTeam?: StringFilter;
  awayTeamBadge?: StringNullableFilter;
  homeGoals?: JsonFilter;
  homeScore?: IntFilter;
  homeTeam?: StringFilter;
  homeTeamBadge?: StringNullableFilter;
  id?: StringFilter;
};

import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type LiveWhereInput = {
  awayScore?: IntFilter;
  awayTeam?: StringFilter;
  homeScore?: IntFilter;
  homeTeam?: StringFilter;
  id?: StringFilter;
};

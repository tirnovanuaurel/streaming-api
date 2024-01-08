import { SortOrder } from "../../util/SortOrder";

export type LiveOrderByInput = {
  awayGoals?: SortOrder;
  awayScore?: SortOrder;
  awayTeam?: SortOrder;
  awayTeamBadge?: SortOrder;
  createdAt?: SortOrder;
  homeGoals?: SortOrder;
  homeScore?: SortOrder;
  homeTeam?: SortOrder;
  homeTeamBadge?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

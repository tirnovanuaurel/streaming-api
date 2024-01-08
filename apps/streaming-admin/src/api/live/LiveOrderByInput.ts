import { SortOrder } from "../../util/SortOrder";

export type LiveOrderByInput = {
  awayScore?: SortOrder;
  awayTeam?: SortOrder;
  awayTeamBadge?: SortOrder;
  createdAt?: SortOrder;
  homeScore?: SortOrder;
  homeTeam?: SortOrder;
  homeTeamBadge?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

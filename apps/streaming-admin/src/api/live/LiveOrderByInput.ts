import { SortOrder } from "../../util/SortOrder";

export type LiveOrderByInput = {
  awayScore?: SortOrder;
  awayTeam?: SortOrder;
  createdAt?: SortOrder;
  homeScore?: SortOrder;
  homeTeam?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

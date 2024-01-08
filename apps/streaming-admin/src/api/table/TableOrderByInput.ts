import { SortOrder } from "../../util/SortOrder";

export type TableOrderByInput = {
  competitionId?: SortOrder;
  createdAt?: SortOrder;
  drawn?: SortOrder;
  goalsConceded?: SortOrder;
  goalsDifference?: SortOrder;
  goalsScored?: SortOrder;
  id?: SortOrder;
  lost?: SortOrder;
  played?: SortOrder;
  points?: SortOrder;
  updatedAt?: SortOrder;
  won?: SortOrder;
};

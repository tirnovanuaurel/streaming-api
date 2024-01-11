import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  competition?: SortOrder;
  createdAt?: SortOrder;
  drawn?: SortOrder;
  goalsConceded?: SortOrder;
  goalsDifference?: SortOrder;
  goalsScored?: SortOrder;
  id?: SortOrder;
  logo?: SortOrder;
  lost?: SortOrder;
  name?: SortOrder;
  played?: SortOrder;
  points?: SortOrder;
  updatedAt?: SortOrder;
  won?: SortOrder;
};

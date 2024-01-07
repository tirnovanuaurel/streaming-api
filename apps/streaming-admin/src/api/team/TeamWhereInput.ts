import { StringFilter } from "../../util/StringFilter";
import { TableListRelationFilter } from "../table/TableListRelationFilter";

export type TeamWhereInput = {
  id?: StringFilter;
  logo?: StringFilter;
  name?: StringFilter;
  tables?: TableListRelationFilter;
};

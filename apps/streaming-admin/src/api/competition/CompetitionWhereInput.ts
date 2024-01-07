import { StringFilter } from "../../util/StringFilter";
import { TableListRelationFilter } from "../table/TableListRelationFilter";

export type CompetitionWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  tables?: TableListRelationFilter;
};

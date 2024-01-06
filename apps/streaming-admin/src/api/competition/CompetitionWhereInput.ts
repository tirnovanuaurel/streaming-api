import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TableListRelationFilter } from "../table/TableListRelationFilter";

export type CompetitionWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  tables?: TableListRelationFilter;
};

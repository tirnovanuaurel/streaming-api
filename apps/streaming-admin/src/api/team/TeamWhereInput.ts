import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TableListRelationFilter } from "../table/TableListRelationFilter";

export type TeamWhereInput = {
  id?: StringFilter;
  logo?: StringNullableFilter;
  name?: StringNullableFilter;
  tables?: TableListRelationFilter;
};

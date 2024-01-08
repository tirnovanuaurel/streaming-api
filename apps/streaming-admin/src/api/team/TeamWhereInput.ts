import { StringFilter } from "../../util/StringFilter";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type TeamWhereInput = {
  id?: StringFilter;
  logo?: StringFilter;
  name?: StringFilter;
  tables?: TableWhereUniqueInput;
};

import { StringFilter } from "../../util/StringFilter";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type CompetitionWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  tables?: TableWhereUniqueInput;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ChannelNewWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SettingWhereInput = {
  channelLogo?: StringNullableFilter;
  channelName?: StringFilter;
  facebook?: StringNullableFilter;
  id?: StringFilter;
  instagram?: StringNullableFilter;
  twiiter?: StringNullableFilter;
};

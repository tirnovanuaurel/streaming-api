import { TableUpdateManyWithoutTeamsInput } from "./TableUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  logo?: string;
  name?: string;
  tables?: TableUpdateManyWithoutTeamsInput;
};

import { TableUpdateManyWithoutTeamsInput } from "./TableUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  logo?: string | null;
  name?: string | null;
  tables?: TableUpdateManyWithoutTeamsInput;
};

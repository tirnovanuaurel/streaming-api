import { TableCreateNestedManyWithoutTeamsInput } from "./TableCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  logo?: string | null;
  name?: string | null;
  tables?: TableCreateNestedManyWithoutTeamsInput;
};

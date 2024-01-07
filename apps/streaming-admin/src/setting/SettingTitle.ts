import { Setting as TSetting } from "../api/setting/Setting";

export const SETTING_TITLE_FIELD = "channelName";

export const SettingTitle = (record: TSetting): string => {
  return record.channelName?.toString() || String(record.id);
};

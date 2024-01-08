import { AppSetting as TAppSetting } from "../api/appSetting/AppSetting";

export const APPSETTING_TITLE_FIELD = "channelName";

export const AppSettingTitle = (record: TAppSetting): string => {
  return record.channelName?.toString() || String(record.id);
};

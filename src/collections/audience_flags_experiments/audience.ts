import { Status } from '../sitles_locales/site';

export interface Audience {
  id: string;
  key: string;
  name: string;
  rule_json: object; // JSONLogic
  preview_token?: string | null;
  priority: number; // -100..100
  status: Status;
}

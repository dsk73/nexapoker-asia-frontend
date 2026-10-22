export type LuckySpinOutcomeType = "prize" | "no_prize";

export type LuckySpinPrizeStatus =
  | "not_applicable"
  | "pending_verification"
  | "approved"
  | "rejected"
  | "credited";

export interface LuckySpinSegment {
  id?: number;
  documentId?: string;
  Label: string;
  OutcomeType: LuckySpinOutcomeType;
  RewardDescription?: string | null;
  RewardValue?: string | null;
  WinProbability: number;
  DisplayOrder?: number;
  Icon?: unknown;
}

export interface LuckySpinSettings {
  id?: number;
  documentId?: string;

  Active: boolean;
  StartDate?: string | null;
  EndDate?: string | null;

  Segments: LuckySpinSegment[];

  TermsAndConditions?: string | null;
  WinnersMessage?: string | null;
  NoPrizeMessage?: string | null;
  AdminContact?: string | null;
}

export interface LuckySpinSettingsResponse {
  data: LuckySpinSettings | null;
  message?: string;
}

export interface LuckySpinEntryPayload {
  UID: string;
  Username: string;
  TermsAccepted: true;
}

export interface LuckySpinResult {
  Label?: string;
  ResultLabel?: string;
  OutcomeType: LuckySpinOutcomeType;
  DisplayOrder?: number | null;
  RewardValue?: string | null;
  RewardDescription?: string | null;
  PrizeStatus?: LuckySpinPrizeStatus;
}

export interface LuckySpinSpinResponse {
  result: LuckySpinResult;
  message?: string;
}

export interface LuckySpinApiResponse<T> {
  data: T | null;
  message?: string;
}

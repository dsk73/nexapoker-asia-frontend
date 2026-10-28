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

  RewardValue?: string | null;
  RewardDescription?: string | null;

  WinProbability: number;
  DisplayOrder?: number;

  /**
   * Internal allocation fields are not exposed by the public settings API.
   * Keep these optional for internal/admin data only.
   */
  PrizeKey?: string | null;
  MaxAwards?: number | null;

  Icon?: unknown;
}

export interface LuckySpinSettings {
  id?: number;
  documentId?: string;

  CampaignNumber?: string;
  Active: boolean;
  StartDate?: string | null;
  EndDate?: string | null;

  Segments: LuckySpinSegment[];

  CommunityTelegramURL?: string | null;
  PromotionPageURL?: string | null;

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

export interface LuckySpinFeedbackPayload {
  UID: string;
  Username: string;
  Message: string;
}

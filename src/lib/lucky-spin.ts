import type {
  LuckySpinApiResponse,
  LuckySpinEntryPayload,
  LuckySpinResult,
  LuckySpinSettings,
  LuckySpinSettingsResponse,
} from "@/types/lucky-spin";

const API_BASE_URL = (
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
).replace(/\/+$/, "");

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}/api${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    cache: "no-store",
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      result?.error?.message ||
        result?.message ||
        `Request failed with status ${response.status}`,
    );
  }

  return result as T;
}

export async function getLuckySpinSettings(): Promise<LuckySpinSettings> {
  const response = await request<LuckySpinSettingsResponse>(
    "/lucky-spin/settings",
  );

  if (!response.data) {
    throw new Error(response.message || "Lucky Spin settings are unavailable.");
  }

  return response.data;
}

export async function submitLuckySpin(
  payload: LuckySpinEntryPayload,
): Promise<LuckySpinApiResponse<LuckySpinResult>> {
  return request<LuckySpinApiResponse<LuckySpinResult>>("/lucky-spin/spin", {
    method: "POST",
    body: JSON.stringify({
      UID: payload.UID.trim(),
      Username: payload.Username.trim(),
      TermsAccepted: payload.TermsAccepted,
    }),
  });
}

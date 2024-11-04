import api from "./api-client";

interface GetProfileResponse {
  id: string;
  email: string;
}

export async function getProfile() {
  const result = await api.get("users/tokens/info").json<GetProfileResponse>();

  return result;
}

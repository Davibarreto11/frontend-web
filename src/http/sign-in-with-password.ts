import api from "./api-client";

interface SignInWithPasswordRequest {
  email: string;
  password: string;
}

interface SignInWithPasswordResponse {
  token: string;
}

export async function signInWithPassword({
  email,
  password,
}: SignInWithPasswordRequest) {
  const result = await api
    .post("users/tokens/sign_in", {
      json: {
        email,
        password,
      },
    })
    .json<SignInWithPasswordResponse>();

  return result;
}

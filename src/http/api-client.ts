import ky from "ky";
import { getCookie as getCookieClient } from "cookies-next";

const api = ky.create({
  prefixUrl: "http://localhost:3000/api/v1",
  hooks: {
    beforeRequest: [
      async (request) => {
        let token;

        if (typeof window === "undefined") {
          const { cookies } = await import("next/headers");
          token = cookies().get("token")?.value;
        } else {
          token = getCookieClient("token");
        }

        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
});

export default api;

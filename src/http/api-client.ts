import ky from "ky";
import { getCookie as getCookieClient } from "cookies-next";

const api = ky.create({
  prefixUrl: "https://assisttech-web.onrender.com/",
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

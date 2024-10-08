import ky from "ky";
import cookiesNext from "cookies-next";
import type { CookiesFn } from "cookies-next/lib/types";

const api = ky.create({
  prefixUrl: "",
  hooks: {
    beforeRequest: [
      async (request) => {
        let cookieStore: CookiesFn | undefined;

        if (typeof window === "undefined") {
          const { cookies: serverCookies } = await import("next/headers");
          cookieStore = serverCookies;
        }

        const token = cookiesNext.getCookie("token", { cookies: cookieStore });

        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
});

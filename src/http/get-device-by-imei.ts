import api from "./api-client";

interface GetDeviceByIMEIResponse {
  id: string;

  createdAt: string;
  updatedAt: string;
}

export async function getDeviceByIMEI(imei: string) {
  const result = await api
    .get(`search_mobile_devices`, {
      searchParams: { q_imei_cont: imei },
    })
    .json<GetDeviceByIMEIResponse[]>();

  return result;
}

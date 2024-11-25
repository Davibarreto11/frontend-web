import api from "./api-client";

interface GetDeviceByIMEIResponse {
  id: string;

  createdAt: string;
  updatedAt: string;
}

export async function getDeviceByIMEI(imei: string) {
  const result = await api
    .get(`search_device`, {
      searchParams: { q_cpf_cont: imei },
    })
    .json<GetDeviceByIMEIResponse[]>();

  return result;
}

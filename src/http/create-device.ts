import api from "./api-client";

interface CreateDeviceRequest {
  mobile_device: {
    imei: string;
    serie: string;
    nome: string;
    cpf: string;
    aparelho: string;
    marca: string;
    modelo: string;
  };
}

export async function createDevice({ mobile_device }: CreateDeviceRequest) {
  const result = await api.post("mobile_devices", {
    json: {
      mobile_device,
    },
  });
  return result;
}

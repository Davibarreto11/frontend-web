/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/v1/:path*", // Aplica as regras de CORS para todas as rotas de API
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3001", // Permite requisições da origem do frontend
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS", // Métodos permitidos
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Authorization",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true", // Necessário se você estiver enviando cookies ou credenciais
          },
        ],
      },
    ];
  },
};

export default nextConfig;

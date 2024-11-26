// Função para buscar os dados do endpoint
export default async function fetchImages() {
  try {
    // Use process.env.API_URL diretamente
    const response = await fetch(process.env.API_URL);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error; // Repassa o erro para o chamador, se necessário
  }
}

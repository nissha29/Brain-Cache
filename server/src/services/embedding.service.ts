import axios from 'axios';

const HF_API_TOKEN = process.env.HF_API_TOKEN;

export async function generateEmbedding(text: string) {
  try {

    const response = await axios.post(
      'https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-mpnet-base-v2',
      {
        inputs: text,
      },
      {
        headers: {
          Authorization: `Bearer ${HF_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const embedding = response.data;
    return Array.isArray(embedding[0]) ? embedding[0] : embedding;

  } catch (err: any) {
    console.error('Error while generating embeddings:', err.response?.data || err.message);
    return null;
  }
}

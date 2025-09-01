import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

// Load from env, fallback to default
const MODEL = process.env.GENKIT_MODEL || 'googleai/gemini-2.0-flash';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_API_KEY,
    }),
  ],
  model: MODEL,
});

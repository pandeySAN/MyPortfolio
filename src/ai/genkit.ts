import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

// Default model fallback
const MODEL = process.env.GENKIT_MODEL ?? 'googleai/gemini-2.0-flash';

// ✅ Ensure environment variables are loaded (only if not already handled elsewhere)
if (!process.env.GOOGLE_API_KEY) {
  console.warn('⚠️ Warning: GOOGLE_API_KEY is not set. AI features may not work properly.');
}

// ✅ Initialize Genkit AI instance
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_API_KEY ?? '',
    }),
  ],
  defaultModel: MODEL, // ✅ Use correct property name
});

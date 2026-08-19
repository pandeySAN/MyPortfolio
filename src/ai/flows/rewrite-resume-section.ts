// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview
 * AI agent that rewrites resume sections based on specified parameters.
 *
 * Exports:
 * - rewriteResumeSection - Function that rewrites a section of a resume.
 * - RewriteResumeSectionInput - Input type.
 * - RewriteResumeSectionOutput - Output type.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// ----------------------
// SCHEMAS
// ----------------------

const RewriteResumeSectionInputSchema = z.object({
  sectionContent: z
    .string()
    .describe('The content of the resume section to be rewritten.'),
  tone: z
    .string()
    .describe('The desired tone for the rewritten content (e.g., formal, persuasive, confident).'),
  persona: z
    .string()
    .describe('The persona to adopt (e.g., software engineer, project manager, data analyst).'),
  keywords: z
    .string()
    .optional()
    .describe('Comma-separated keywords to include in the rewritten content.'),
});
export type RewriteResumeSectionInput = z.infer<typeof RewriteResumeSectionInputSchema>;

const RewriteResumeSectionOutputSchema = z.object({
  rewrittenContent: z
    .string()
    .describe('The rewritten content of the resume section.'),
});
export type RewriteResumeSectionOutput = z.infer<typeof RewriteResumeSectionOutputSchema>;

// ----------------------
// PROMPT DEFINITION
// ----------------------

const rewriteResumeSectionPrompt = ai.definePrompt({
  name: 'rewriteResumeSectionPrompt',
  input: { schema: RewriteResumeSectionInputSchema },
  output: { schema: RewriteResumeSectionOutputSchema },
  prompt: `
You are an expert resume writer. Rewrite the following resume section according to the specified tone and persona. 
Incorporate the given keywords naturally where appropriate to make the content more impactful and job-specific.

---
**Section Content:** {{{sectionContent}}}
**Tone:** {{{tone}}}
**Persona:** {{{persona}}}
**Keywords:** {{{keywords}}}
---
Return only the rewritten content clearly and concisely.`,
});

// ----------------------
// FLOW DEFINITION
// ----------------------

const rewriteResumeSectionFlow = ai.defineFlow(
  {
    name: 'rewriteResumeSectionFlow',
    inputSchema: RewriteResumeSectionInputSchema,
    outputSchema: RewriteResumeSectionOutputSchema,
  },
  async (input) => {
    const result = await rewriteResumeSectionPrompt(input);
    return {
      rewrittenContent: result.output?.rewrittenContent ?? '',
    };
  }
);

// ----------------------
// EXPORTED FUNCTION
// ----------------------

export async function rewriteResumeSection(
  input: RewriteResumeSectionInput
): Promise<RewriteResumeSectionOutput> {
  return await rewriteResumeSectionFlow(input);
}

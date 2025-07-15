// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview AI agent that rewrites resume sections based on specified parameters.
 *
 * - rewriteResumeSection - A function that rewrites a section of a resume.
 * - RewriteResumeSectionInput - The input type for the rewriteResumeSection function.
 * - RewriteResumeSectionOutput - The return type for the rewriteResumeSection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteResumeSectionInputSchema = z.object({
  sectionContent: z
    .string()
    .describe('The content of the resume section to be rewritten.'),
  tone: z
    .string()
    .describe(
      'The desired tone for the rewritten content (e.g., formal, casual, persuasive).' // removed example values
    ),
  persona: z
    .string()
    .describe(
      'The persona to adopt when rewriting the content (e.g., software engineer, project manager).' // removed example values
    ),
  keywords: z
    .string()
    .optional()
    .describe('Comma-separated keywords to include in the rewritten content.'),
});
export type RewriteResumeSectionInput = z.infer<
  typeof RewriteResumeSectionInputSchema
>;

const RewriteResumeSectionOutputSchema = z.object({
  rewrittenContent: z
    .string()
    .describe('The rewritten content of the resume section.'),
});
export type RewriteResumeSectionOutput = z.infer<
  typeof RewriteResumeSectionOutputSchema
>;

export async function rewriteResumeSection(
  input: RewriteResumeSectionInput
): Promise<RewriteResumeSectionOutput> {
  return rewriteResumeSectionFlow(input);
}

const rewriteResumeSectionPrompt = ai.definePrompt({
  name: 'rewriteResumeSectionPrompt',
  input: {schema: RewriteResumeSectionInputSchema},
  output: {schema: RewriteResumeSectionOutputSchema},
  prompt: `You are an expert resume writer. Please rewrite the following resume section content according to the specified tone and persona. Incorporate the given keywords where appropriate to tailor the content for specific job applications.

Section Content: {{{sectionContent}}}
Tone: {{{tone}}}
Persona: {{{persona}}}
Keywords: {{{keywords}}}`, // backticks replaced with single quotes to use Handlebars templating
});

const rewriteResumeSectionFlow = ai.defineFlow(
  {
    name: 'rewriteResumeSectionFlow',
    inputSchema: RewriteResumeSectionInputSchema,
    outputSchema: RewriteResumeSectionOutputSchema,
  },
  async input => {
    const {output} = await rewriteResumeSectionPrompt(input);
    return output!;
  }
);

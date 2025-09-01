'use server';

import {
  rewriteResumeSection,
} from '@/ai/flows/rewrite-resume-section';
import { z } from 'zod';

// Define schema
const RewriteResumeSectionInputSchema = z.object({
  sectionContent: z
    .string()
    .min(10, "Please provide more content for better results."),
  tone: z.string(),
  persona: z.string(),
  keywords: z.string().optional(),
});

// Infer type from schema (avoids duplication)
export type RewriteResumeSectionInput = z.infer<
  typeof RewriteResumeSectionInputSchema
>;

type RewriteResult = {
  success: boolean;
  data?: { rewrittenContent: string };
  error?: string;
};

export async function rewriteSectionAction(
  data: RewriteResumeSectionInput
): Promise<RewriteResult> {
  try {
    // Validate
    const validatedData = RewriteResumeSectionInputSchema.parse(data);

    // Call AI service
    const result = await rewriteResumeSection(validatedData);

    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Collect error messages cleanly
      const message = error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join('; ');
      return { success: false, error: message };
    }

    console.error('Error in rewriteSectionAction:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}

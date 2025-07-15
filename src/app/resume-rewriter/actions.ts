'use server';

import {
  rewriteResumeSection,
  type RewriteResumeSectionInput,
} from '@/ai/flows/rewrite-resume-section';
import { z } from 'zod';

const RewriteResumeSectionInputSchema = z.object({
  sectionContent: z.string().min(10, "Please provide more content for better results."),
  tone: z.string(),
  persona: z.string(),
  keywords: z.string().optional(),
});

export async function rewriteSectionAction(data: RewriteResumeSectionInput) {
  try {
    const validatedData = RewriteResumeSectionInputSchema.parse(data);
    const result = await rewriteResumeSection(validatedData);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors.map(e => e.message).join(', ') };
    }
    console.error('Error in rewriteSectionAction:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}

'use server';

/**
 * @fileOverview A flow to provide personalized designer recommendations to clients.
 *
 * - getPersonalizedDesignerRecommendations - A function that returns a list of designer recommendations for a client.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedDesignerRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedDesignerRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  projectRequirements: z.string().describe('Detailed description of the project requirements.'),
  stylePreferences: z.string().describe('The client\'s preferred design styles (e.g., Minimal, Bold, Luxurious).'),
  pastCollaborations: z.string().optional().describe('Information about the client\'s past successful collaborations with designers, if any.'),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.array(
  z.object({
    designerName: z.string().describe('The name of the recommended designer.'),
    designerProfileUrl: z.string().describe('URL of the designer profile page.'),
    matchReason: z.string().describe('Explanation of why this designer is a good match for the client.'),
  })
);
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedDesignerRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedDesignerRecommendationsFlow(input);
}

const personalizedDesignerRecommendationsPrompt = ai.definePrompt({
  name: 'personalizedDesignerRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an expert designer recommendation engine. Given the following client information, provide a list of designers that would be a good fit for their project.\n\nProject Requirements: {{{projectRequirements}}}\nStyle Preferences: {{{stylePreferences}}}\nPast Collaborations: {{{pastCollaborations}}}\n\nBased on this information, recommend designers, providing their name, profile URL, and a brief explanation of why they are a good match.`, 
});

const personalizedDesignerRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedDesignerRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await personalizedDesignerRecommendationsPrompt(input);
    return output!;
  }
);

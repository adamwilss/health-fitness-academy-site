import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Please enter your name').max(120),
  email: z.string().email('Please enter a valid email').max(254),
  phone: z.string().max(40).optional().or(z.literal('')),
  interest: z.string().max(160).optional().or(z.literal('')),
  message: z.string().min(1, 'Please enter a message').max(4000),
  company: z.string().max(0).optional().or(z.literal('')), // honeypot
});

export type ContactInput = z.infer<typeof contactSchema>;

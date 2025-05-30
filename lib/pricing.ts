import { z } from "zod";

export const pricingFormSchema = z.object({
  businessType: z.enum(["insurance", "fleet", "owner-operator"]),
  policyHolderCount: z
    .string()
    .optional()
    .transform( async (val: any) => (val ? Number(val) : undefined))
    .refine( async (n: any) => n === undefined || n >= 0, "Invalid policy holder count"),
  costPerPolicy: z
    .string()
    .optional()
    .transform (async (val) => (val ? Number(val) : undefined))
    .refine (async (n) => n === undefined || n >= 0, "Invalid cost per policy"),
  vehicleCount: z
    .string()
    .optional()
    .transform( async (val: any) => (val ? Number(val) : undefined))
    .refine( async (n: any) => n === undefined || n >= 0, "Invalid vehicle count"),
  requestCount: z
    .string()
    .optional()
    .transform( async (val) => (val ? Number(val) : undefined))
    .refine( async (n) => n === undefined || n >= 0, "Invalid request count"),
  selectedServices: z
    .array(
      z.object({
        title: z.string(),
        basePrice: z.number(),
      })
    )
    .min(1, "At least one service must be selected"),
  estimatedPrice: z.union([z.number(), z.literal("Enterprise")]),
  contact: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
  }),
});

export type PricingFormData = z.infer<typeof pricingFormSchema>;
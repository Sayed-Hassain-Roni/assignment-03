const { z } = require("zod");

export const facilitiesValidationSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  pricePerHour: z.number(),
  location: z.string(),
  isDeleted: z.boolean().default(false),
});

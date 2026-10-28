import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const probeTool = createTool({
  id: 'probe-tool',
  description: 'Echo a probe value',
  inputSchema: z.object({ value: z.string() }),
  outputSchema: z.object({ value: z.string() }),
  execute: async ({ context }) => ({ value: context.value }),
});

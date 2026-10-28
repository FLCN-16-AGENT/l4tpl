import { Agent } from '@mastra/core/agent';
import { openai } from '@ai-sdk/openai';

export const probeAgent = new Agent({
  id: 'probe-agent',
  name: 'Probe Agent',
  instructions: 'You echo values.',
  model: openai('gpt-4o-mini'),
});

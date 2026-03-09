import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

export class AITestAgent {
  private llm: ChatGroq;

  constructor(apiKey: string) {
    this.llm = new ChatGroq({
      model: "llama-3.3-70b-versatile",
      apiKey: apiKey,
    });
  }

  async generateTest(diff: string, fileName: string): Promise<string> {
    const prompt = `
You are a senior automated QA engineer. Your task is to write Playwright E2E tests in TypeScript based on the provided code diff.

### MISSION:
Analyze the diff for the file "${fileName}". Identify new UI components, interactive elements (buttons, inputs), or updated logic that requires testing.
Write a concise but comprehensive Playwright test script.

### GUIDELINES:
1. Use Playwright with "@playwright/test".
2. Follow professional standards: use clear test descriptions, locators like getByRole/getByLabel, and meaningful assertions.
3. Assume the app is reachable at a base URL (e.g., http://localhost:3000).
4. Do NOT include Markdown block indicators (e.g., \`\`\`typescript) in your final response. Provide ONLY the code.
5. If the code is not UI-related (e.g., a backend change or logic only), write a basic unit-style test if appropriate, or suggest what to test.

### CODE DIFF:
${diff}

Return the complete TypeScript code for a Playwright test file.
    `;

    const response = await this.llm.invoke([
        new SystemMessage("You generate production-ready Playwright tests in TypeScript."),
        new HumanMessage(prompt)
    ]);

    return response.content as string;
  }
}

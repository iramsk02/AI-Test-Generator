# Implementation Plan: AI Test Generator

## 🎯 Project Goal
Automate the generation of End-to-End (E2E) test scripts using AI agents and Playwright. The tool will scan new UI features in the Mifos Web App and draft test cases.

---

## 🛠️ Phases & Roadmap

### Phase 1: Test Framework initialization (Weeks 1-2)
- **Environment Setup**: Initialize Playwright with TypeScript.
- **Mifos Web App Local Setup**: Research how to run the Mifos Angular app locally for testing.
- **Agent Frameworks**: Research Playwright MCP and `AgentExecutor` patterns.

### Phase 2: Visual & DOM Analysis (Weeks 3-6)
- **DOM Parsing**: Create a tool that extracts the DOM tree and identifies interactive elements (buttons, inputs).
- **Screenshot Integration**: Use Vision LLMs (GPT-4o/Claude 3.5 Sonnet) to understand layout and state.
- **Selector Strategy**: AI-driven generation of robust "Auto-healing" selectors.

### Phase 3: Test Scenario Generation (Weeks 7-9)
- **Scenario Drafts**: Based on a Jira requirement, generate a step-by-step test plan.
- **Scripting**: Convert the plan into runnable Playwright code.
- **Assertion Logic**: AI-generated assertions (e.g., "Verify that the success toast appears after saving").

### Phase 4: Execution & Feedback (Weeks 10-12)
- **Self-Healing**: If a test fails due to a changed selector, use AI to find the new element and update the script.
- **Reporting**: Generate visual reports of test coverage.

### Phase 5: Deployment & Docs (Weeks 13-14)
- **CI/CD Integration**: Run the test generator as part of the build pipeline.
- **User Guide**: Documentation for developers on how to trigger test generation for new components.

---

## 📚 Areas for Research & Learning

### 1. Playwright Automation
- Mastering Playwright's `Locators` and `Trace Viewer`.
- Handling complex Mifos UI states (e.g., multi-step loan wizards).

### 2. AI Agents for Web
- Multi-agent systems where one agent plans and another executes/fixes.
- Vision-language models for UI testing.

### 3. Mifos Web Architecture
- Understanding the Angular components and API mocks used in existing tests.

---

## 📝 Next Steps
- [ ] Install Playwright and run a "Hello World" test on the Mifos demo site.
- [ ] Research "Playwright MCP" for direct browser control by LLMs.
- [ ] Prototype a prompt that converts a Jira description into a list of `await page.click()` steps.

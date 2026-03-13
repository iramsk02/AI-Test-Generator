# AI Test Generator

## 📋 About the Project
An AI-driven testing agent that automatically generates **Playwright E2E test scripts** for the Mifos Web App. It interprets UI features and user requirements to ensure high test coverage with minimal manual effort.

Part of the **AI for Developer Productivity** GSoC 2026 track.

---

## 📂 Project Navigation
- **[Implementation Plan](implementation_plan.md):** 14-week roadmap for building an E2E test agent.
- **[Research Log](research_log.md):** Findings on agentic web browsing and Playwright automation.

---

## 🚀 Key Features
1.  **Requirement to Script**: Converts Jira stories or plain text into runnable TypeScript tests.
2.  **Visual Verification**: Uses Vision LLMs to check UI consistency.
3.  **Self-Healing**: Automatically detects broken selectors and proposes fixes.

---

## 🛠️ Installation
1.  Install Playwright: `npx playwright install`.
2.  Run the generator: `npm run generate-tests`.
3.  View results in the Playwright HTML report.

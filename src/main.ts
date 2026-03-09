import * as core from "@actions/core";
import * as github from "@actions/github";
import { GitHubService } from "./github_utils.js";
import { AITestAgent } from "./ai_agent.js";

async function run() {
    try {
        const groqApiKey = core.getInput("GROQ_API_KEY", { required: true });
        const githubToken = core.getInput("GITHUB_TOKEN", { required: true });

        const context = github.context;
        if (!context.payload.pull_request) {
            core.info("No PR found in payload. Skipping...");
            return;
        }

        const prNumber = context.payload.pull_request.number;
        const repoName = context.repo.repo;

        core.info(`Generating tests for PR #${prNumber} in ${repoName}...`);

        const githubService = new GitHubService(githubToken);
        const aiAgent = new AITestAgent(groqApiKey);

        // 1. Fetch the diff
        const diff = await githubService.getPRDiff(prNumber);

        // 2. Generate the test code
        core.info("Generating Playwright tests via AI Agent...");
        const testCode = await aiAgent.generateTest(diff, `pr-${prNumber}`);

        // 3. Create a fresh PR with the tests
        const branchName = `ai-test/pr-${prNumber}`;
        const testFileName = `pr-${prNumber}`;

        core.info(`Creating branch ${branchName} and pushing generated tests...`);
        await githubService.createPRWithTest(branchName, testFileName, testCode, prNumber);

        core.info("Successfully finished AI Test Generation!");

    } catch (error: any) {
        core.setFailed(`AI Test Generator FAILED: ${error.message}`);
    }
}

run();

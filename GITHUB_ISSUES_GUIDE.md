# GitHub Issues Guide for AI Agents

## Objective
This project relies strictly on GitHub Issues and Milestones to track all development work, feature implementations, bug fixes, and project progress. As an AI Development Agent working on this repository, you are required to maintain strict discipline regarding project tracking. Every action, codebase change, or new chat session must be properly documented and linked to the corresponding GitHub Issues.

## Mandatory AI Agent Workflow

Every time you begin a new conversation or receive a new task, you **MUST** follow this workflow before proceeding with extensive coding:

### 1. Context Synchronization
- At the start of a session, use your available GitHub tools (e.g., `mcp_github-mcp-server_search_issues` or `mcp_github-mcp-server_list_issues`) to review currently open issues and active milestones.
- Identify if the user's request corresponds to an existing open issue.

### 2. Issue Creation (If No Issue Exists)
- If the assigned task or requested feature does not have an existing issue, **CREATE ONE** immediately using the `mcp_github-mcp-server_issue_write` tool.
- Ensure the issue has:
  - A clear and descriptive title.
  - A detailed body/description outlining the requirements, acceptance criteria, and technical plan.
  - Appropriate labels (e.g., `enhancement`, `bug`, `documentation`).
  - Assignment to the relevant active Milestone (if applicable).

### 3. Work Initialization
- If an issue already exists, add a comment (`mcp_github-mcp-server_add_issue_comment`) stating that you are beginning work on this issue.
- If you need to create a new branch, use a naming convention that explicitly references the issue number, such as `feature/issue-<number>-<short-description>`.

### 4. Continuous Progress Tracking
- As you complete specific parts of an implementation or hit mini-milestones during a chat, update the relevant issue with a comment summarizing what was achieved.
- If the user approves an Implementation Plan, summarize the approved plan in a comment on the GitHub issue.

### 5. Pull Requests and Issue Resolution
- When opening a Pull Request (`mcp_github-mcp-server_create_pull_request`), you must include closing keywords in the PR body (e.g., `Closes #<issue_number>`, `Resolves #<issue_number>`, or `Fixes #<issue_number>`) so the issue is automatically closed upon merge.
- If you are instructing the user to make a commit, or if you create a commit directly, ensure the commit message contains a reference to the issue (e.g., `feat: implement dark mode (#12)`).
- If an issue is fully resolved without a PR, transition the issue to a closed state with a closing comment.

## Milestone Management
- Ensure that every issue you work on is associated with a Milestone to keep release tracking accurate.
- If the user requests a new major feature that doesn't fit the current milestone, prompt the user to establish a new milestone or adjust expectations.

## Strict Enforcement
**Do not proceed** with writing significant code or making structural changes until you have verified the GitHub issue tracking status for your current context. Keeping the remote tracking up-to-date is a primary constraint for this repository.

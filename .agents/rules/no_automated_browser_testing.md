---
description: Prohibits launching browser subagents or automated browser testing tools on localhost.
---

# No Automated Browser Testing on Localhost

1. **Do Not Test in Browser**: Never invoke browser subagents or launch automated browser tools to test or inspect the website on localhost / local development servers.
2. **User Performs Manual Testing**: The user verifies visual changes, UI transitions, and layout responsiveness manually in their own browser.
3. **Validation Strategy**: Use build checks (npm run build / linting) to ensure code correctness, then inform the user that changes are ready for manual testing.

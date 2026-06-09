# Contributing to ADECEC Museum Website

Thanks for your interest in contributing to the ADECEC museum website project.  
This repository is maintained internally by ADECEC staff.

## Who can contribute

- Contributions are limited to **ADECEC staff members**.
- External pull requests will generally not be accepted.

If you are not part of the ADECEC team but notice an issue, please contact the ADECEC through the official channels (e-mail, phone number, etc) instead of opening a PR.

## Access and deployment

The project is deployed using **Vercel**.  
To get access to the Vercel dashboard and related project settings, you must:

1. Be a member of the ADECEC staff.
2. Contact **@Borislehachoir** (who's the OG museum project maintainer) or **@JacPaoli** (who's the OG ADECEC gigachad website main project maintainer) to:
   - Get added to the Vercel project.
   - Receive any necessary environment variables and credentials.
   - Clarify the deployment workflow (preview deployments, production deploys, etc.).

Do **not** create your own separate Vercel project for this repository.

## How to contribute (for staff)

1. **Use the main branch (or create a new branch if you're doing stuff but you're unsure of what the doodlebeedoo you're doing)**
   - Use a clear, descriptive name, for example:  
     - `feature/homepage-layout`  
     - `fix/trans-lg-co-header`  
     - `chore/update-deps`

2. **Follow project conventions**  
   - Use the existing technical stack and libraries.
   - Keep code style consistent (linting, formatting, file structure).
   - Respect accessibility and multilingual guidelines already in place.
  > [!NOTE]
> PLEASE FORMAT YOUR FILES, EVEN MORE SO IF YOU'RE USING ARTIFICIAL INTELLIGENCE. IT IS ATROCIOUS WHEN WE DON'T KNOW WHERE THE HELL THE DIV STARTS OR WHY THERE IS A SCRIPT LINE ON THE SAME LINE AS A PARAGRAPH;

3. **Write clear commits**  
   - Commit messages should be short and descriptive.
   - Group related changes in the same commit when possible.

4. **Open a Pull Request (PR)**  
   - Target the main development branch (check the repo README if unsure).
   - Provide:
     - A short summary of the change.
     - Screenshots or notes for UI changes, if relevant.
     - Any impact on translations, accessibility, or deployment.

5. **Review process**  
   - At least one other ADECEC staff member should review your PR before merging.
   - Address review comments via additional commits.

## Issues and bug reports

- Staff members can open issues directly in GitHub.
- When opening an issue, please include:
  - A short description of the problem.
  - Steps to reproduce.
  - Expected vs actual behavior.
  - Screenshots if useful.
  - Any information related to language (FR/CO/EN) or accessibility if relevant.

## Security and credentials

- Never commit **API keys, passwords, environment variables (.env)** or other sensitive data.
- Store secrets only in:
  - Vercel environment variables.
  - The secure channels defined by ADECEC.
- If you suspect a leak of credentials, contact **@Borislehachoir** or **@JacPaoli** immediately. 

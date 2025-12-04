# Generate PRP from Feature Request

Read the feature request file provided and generate a comprehensive Product Requirements Prompt (PRP).

## Process

### 1. Analyze the Request
- Read the feature request file completely
- Identify all requirements, constraints, and success criteria
- Note any referenced examples or documentation

### 2. Research the Codebase
- Check `/examples/` for relevant patterns
- Review existing code in `/src/` for conventions
- Read `/docs/` for established patterns
- Examine `CLAUDE.md` for project rules

### 3. Generate the PRP
Create a new file in `PRPs/` named after the feature.

The PRP must include:

#### Context Section
- Project overview (from CLAUDE.md)
- Relevant existing patterns
- External documentation summaries
- Constraints (--tw- namespace, RGB colors, minimal comments, mobile-first)

#### Implementation Section
- Files to create/modify
- Step-by-step tasks with clear deliverables
- Validation gates after each step

#### Success Criteria
- Specific, testable criteria
- Test commands where applicable

### 4. Confidence Check
Rate confidence (1-10) that all context is included. If < 8, note what's missing.

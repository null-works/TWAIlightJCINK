# Execute PRP to Implement Feature

Read the PRP file and implement the feature according to its specifications.

## Process

### 1. Load Context
- Read the entire PRP file
- Understand all requirements and constraints
- Note the success criteria and validation gates

### 2. Create Implementation Plan
- Break down into discrete steps
- Identify dependencies between steps
- Note which validation gates apply

### 3. Execute Implementation

For each step:
- Implement following CLAUDE.md conventions
- Use `--tw-` namespace for all CSS variables
- Store RGB colors as `R, G, B` format
- Validate before moving on

### 4. Run Success Criteria
- Go through each criterion
- Fix any failures
- Re-verify

### 5. Update Documentation
- Create/update docs in `/docs/`
- Document customization points

## TWAILIGHT-Specific Checks

- All CSS variables use --tw- prefix
- RGB colors stored as R, G, B
- No excessive comments
- Mobile responsive at 320px
- Focus states present
- Semantic HTML

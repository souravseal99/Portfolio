# Milestone 2 Requirements: Aesthetic Developer Portfolio

**Status:** Draft / Planning  
**Target:** Transform the current portfolio into a high-fidelity, developer-centric experience.

## Theme & Aesthetic
- [ ] **THEM-01**: **Fullstack Dev Aesthetic** - Pivot from "Network/System" to "Development Lifecycle" (Git, Node, IDE vibes).
- [ ] **THEM-02**: **Figma-Inspired Visuals** - Retain deep purives and neon accents but with sharper "editor" constraints.
- [ ] **THEM-03**: **Oh My Zsh Themes** - Update Terminal prompt to mimic themes like `amuse`, `aussiegeek`, or `duellj`.

## Developer Terminology (Content Refactor)
- [ ] **TERM-01**: Replace headings with Fullstack/Filesystem equivalents:
    - About -> `bio.md`
    - Experience -> `career.log`
    - Projects -> `apps.json`
    - Skills -> `arsenal.txt`
    - Contact -> `connect.sh`
- [ ] **TERM-02**: Refactor Status Bar:
    - Replace "Network Kernal" with `node --version`, `git branch`, or `npm run`.
- [ ] **TERM-03**: Remove redundant "network guy" terms.

## Interactive Terminal
- [ ] **TERM-04**: **Filesystem Simulation** - Map content to files (e.g., `skills.txt`).
- [ ] **TERM-05**: **Command Support**:
    - `cat <file>`: View file content.
    - `ls`: List available files.
    - `help`: Guides user through commands (first interaction).
- [ ] **TERM-06**: **Zsh Prompt UI** - Use colorful, multi-segment prompts (User -> Path -> Git).

## Content Source of Truth
- [ ] **CONT-01**: **Resume Sync** - Update all content using `SouravSeal_Resume.tex` (Experience, Education, Certifications).
- [ ] **CONT-02**: **GitHub Sync** - Feature `RoomMate`, `FunwithPhysics`, and others with real GitHub stats/links.

## Technical Requirements
- [ ] **TECH-01**: Mobile-first responsiveness for the terminal (adaptive interface).
- [ ] **TECH-02**: Animation on "boot" (simulated system initialization).
- [ ] **TECH-03**: WCAG AA contrast compliance with neon colors.

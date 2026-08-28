# Honours Project Website

Public hosting for milestone artefacts via GitHub Pages.

Live site: `https://jcheney20.github.io/Hons_2026_Website/`

## Purpose

- publish official deliverables per submission milestone;
- provide stable public access to paper, slides, and recordings;
- mirror approved outputs from this workspace;
- present the study's findings, results, and method for readers who arrive
  without the paper.

Figures and figures-in-prose on `index.html` are mirrored from
`Submmisions/data/results/*.csv` and `Submmisions/figures/results/`. When those
regenerate, re-check the Results section against them.

## Current Published Artefacts

Published in `Project_Website/downloads/`:

**Submission 1 — April 2026**

- `4323819_Submission1.pdf`
- `4323819_Submission1_Presentation.pdf`
- `4323819_Submission1_Recording.mp4`

**Submission 2 — May 2026**

- `4323819_Submission2.pdf`
- `4323819_Submission2_Presentation.pdf`
- `4323819_Submission2_Recording.mp4`
- `4323819_Submission2_Demo.mp4`

**Submission 3 — August 2026**

- `4323819_Submission3.pdf` — mirrored from `Submmisions/4323819_Paper.pdf`

Slides, recording, and demo are still to be uploaded.

**Final submission — September 2026**

- `4323819_FinalPaper.pdf` — mirrored from `Submmisions/4323819_Paper.pdf`

Slides, recording, and the usage wiki are still to be uploaded. Both Submission 3
and the final submission currently mirror the same paper; replace either file in
place when its final version is ready, and the page needs no edit.

## Structure

```
Project_Website/
├── index.html
├── css/
├── js/
├── images/
├── downloads/
└── README.md
```

## Release Checklist (Per Milestone)

1. Copy finalized artefacts into `downloads/`.
2. Use consistent naming with student number and milestone.
3. Update website `index.html` links and labels.
4. Update this README with new published files.
5. Verify downloadable links on the live site.
6. Record release date and scope in commit message.

## Provenance Rule

Website files are publication mirrors, not authoring sources.

- authoring source for paper: `Submmisions/`
- authoring source for slides: `Presentation/`
- implementation source: `github_repos/herasched/`

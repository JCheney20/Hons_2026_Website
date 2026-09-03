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
`Submmisions/IEEE-ACM/data/results/*.csv` and `Submmisions/IEEE-ACM/figures/results/`.
When those regenerate, re-check the Results section against them.

## Current Published Artefacts

Published in `Project_Website/downloads/`:

**Submission 1 — April 2026**

- `4323819_Submission1.pdf`
- `4323819_Submission1_Presentation.pdf` — the deck the recording shows
- `4323819_Submission1_Presentation_Updated.pdf` — the same content, restyled
- `4323819_Submission1_Recording.mp4`

**Submission 2 — May 2026**

- `4323819_Submission2.pdf`
- `4323819_Submission2_Presentation.pdf` — the deck the recording shows
- `4323819_Submission2_Presentation_Updated.pdf` — the same content, restyled
- `4323819_Submission2_Recording.mp4`
- `4323819_Submission2_Demo.mp4`

**Submission 3 — August 2026**

- `4323819_Submission3.pdf` — mirrored from `Submmisions/IEEE-ACM/4323819_Paper.pdf`
- `4323819_Submission3_Presentation.pdf` — built from `Presentation/sub3_web/`
- `4323819_Submission3_Recording.mp4`
- `4323819_Submission3_Demo.mp4`

**Final submission — September 2026**

- `4323819_FinalPaper.pdf` — mirrored from `Submmisions/4323819_Paper.pdf`

Slides, recording, and the usage wiki are still to be uploaded. Both Submission 3
and the final submission currently mirror the same paper; replace either file in
place when its final version is ready, and the page needs no edit.

### Original and restyled slides

Submissions 1 and 2 each publish two decks, and both stay linked. The original is the
deck its recording actually shows, so a visitor watching a recording needs it. The
`_Updated` deck is the same content rebuilt in the shared deck system used from
Submission 3 onward.

Restyled is not revised. Each `_Updated` deck carries a dated line on its title slide
naming the submission it reflects, because Submission 1's open question about PPO and
Submission 2's future-tense next steps are the record of where the work stood at the
time. Neither was rewritten to know the answer.

Decks are authored in `Presentation/<deck>_web/` against the shared kit in
`Presentation/deck_kit/`, and exported with that deck's `src/export_pdf.sh`. Copy the
export into `downloads/` under the name listed above.

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

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

**Final submission — November 2026**

- `4323819_FinalPaper.pdf` — current expanded Paper 1 manuscript.
- `4323819_FinalPresentation.pdf` — eleven-page static slide PDF with all points revealed.
- `4323819_FinalRecording.mp4` — main recording, 4:59.883, including the demo handoff card.
- `4323819_FinalDemo.mp4` — separate workflow walkthrough, 3:28.

Pause the main recording at its handoff, watch the demo, then return to the main
recording for the results. Videos use the existing modal/player and download link.
The rehearsed script revisions are not a new recording; these are the approved
files packaged for Submission 4. Historical submissions remain unchanged.

### Final-submission mirrors

Source paths below are relative to `01-paper-1/` in the research workspace:

| Public file in `downloads/` | Authoring/export source |
|---|---|
| `4323819_FinalPaper.pdf` | `manuscript/submissions/IEEE-ACM/drl-hpc-scheduling.pdf` |
| `4323819_FinalPresentation.pdf` | `presentation/honours/sub4_web/Submission4_Deck.pdf` |
| `4323819_FinalRecording.mp4` | `presentation/honours/recordings/sub4/Submission4_Presentation_1.15x.mp4` |
| `4323819_FinalDemo.mp4` | `presentation/honours/recordings/sub4/Submission4_Demo.mp4` |

The expanded manuscript's directory name does not certify IEEE/ACM formatting;
the website labels it simply “Paper (PDF)”. Its authoring README records that venue
formatting is deferred. The final paper mirror differs from the historical
Submission 3 paper, which is preserved.

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

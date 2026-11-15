# Legal and privacy validation — publication remains partially blocked

This is a substantive draft, not a legal opinion, guarantee or certification of compliance. The pages deliberately expose unresolved facts in **one shared structured callout per page**. Do not remove that notice until the underlying evidence is supplied. No human confirmation of the missing facts has been received.

## Evidence and editorial decisions

- Original pages recovered in full from `https://pk-bordeaux-design.base44.app/mentions-legales` and `/politique-de-confidentialite`, captured on 2026-11-15 in `/opt/data/output/pk-content/source/mentions-legales.json`, `politique-de-confidentialite.json`, and `legal-availability.json`. Originals themselves contain placeholders. They are wording/layout evidence, not proof of compliance or deployed data handling.
- User-provided screenshots `/opt/data/cache/images/img_6a330ea0308f.jpg` and `img_120e04348617.jpg` were inspected: preserve breadcrumb, eyebrow, serif title, short introduction, constrained column, spacious sections and separators using existing React/Tailwind tokens. The common validation callout is an intentional addition. No browser visual verification of the clone is claimed.
- Corporate source: `/opt/data/output/pk-content/registry.json`, official API result.[1] Published only PK AGENCEMENT, form SARL (registry legal-form code 5499), SIREN 990752131, siège SIRET 99075213100013, VAT FR59990752131, and registered office **Bâtiment G, 190 rue Achard, 33300 Bordeaux**. The displayed **44 Rue du Faubourg des Arts** is identified separately as the atelier presented on the site, not silently substituted globally. No directors' birth data is copied. Registry managers are not used to guess a named publication director.
- The original IP section's statements of customer consent and review-author permission were not verified. The draft does not assert them. It explains that illustrative imagery is not necessarily a delivered project, and that the original presents Google-derived reformulations, not exact quotations or a live review feed. Provenance, accuracy, licences and any necessary author/customer permissions remain to be checked.
- Company and host identification requirements are supported by Service-Public's company-website guide.[2] Consumer mediation requires a real designated competent provider; no provider is fabricated. Service-Public describes the prior written complaint, eligibility conditions and consumer-free mediation.[3]
- Rights are conditional on the processing and legal basis. CNIL resources support access, correction, erasure, restriction, objection and portability; the ordinary response period is one month with statutory extensions.[4][5] A direct CNIL complaint link is provided.[6]
- Third-party cookie requirements need a real deployment assessment, not a claim of no tracking.[7] Google describes IP/browser information and international processing in its own policy; the page links that policy without asserting every possible Google processing occurs on every visit.[8]

## Actual clone dataflows inspected

Scope: application source under `app`, `components`, and `lib`; evidence inventory and matched lines saved in `/opt/data/output/pk-content/legal/dataflow-audit.json`. This is not an audit of production infrastructure, server logs, third-party cookie behaviour or all browser network traffic.

| Boundary | Observed behaviour | Consequence for wording |
| --- | --- | --- |
| `components/ContactForm.tsx` | Client form `onSubmit` calls `preventDefault()` only. No submission transport, API handler or storage integration found. | Explicitly says requests are not received through the form; do not promise a response to it. |
| Native `input type="file"` | Local selection; no upload implementation. | No private-storage guarantee and no invented upload retention period. |
| Form fields | Name, phone, email, type, room, budget, deadline, project narrative, files, checkbox. | Describes displayed categories, not already-collected server records. |
| `components/ContactSection.tsx` and `lib/site.ts` | Google Maps iframe, lazy-loaded, plus Google directions/review links. | Explains external requests/IP/browser information; no blanket no-third-party claim. |
| Layout and application scripts | No application analytics/ad integration or browser-storage calls identified in inspected code. Fonts imported locally via packages. | Narrow code observation only; not a zero-cookies/zero-trackers certification. |
| Deployment/hosting | Provider, access logs, region, recipients and retention unverified. | Explicit uncertainty, not a guessed host or fictitious log duration. |
| Phone/postal contact | Published phone 07 66 46 83 45 and registry postal office. | Rights can be requested by phone/post; no fabricated email. Legal pages use a valid phone URI based on the published number; global site settings are untouched. |

**Existing out-of-scope inconsistencies:** at inspection, `ContactSection.tsx` still claimed private storage of photos/plans and `ContactForm.tsx` said no third-party transmission; the site-wide `phoneHref` contained a masked URI. These files belong to another worker and were not edited. The parent must reconcile adjacent claims before release; the legal policy must not be weakened to match unsupported copy.

## Required owner validation — not optional filler

1. **Professional contact email**, also a usable electronic channel for data-rights requests. Verify it is operated by the company.
2. **Host of the actual deployed clone**: legal name, postal address and phone, not merely the original demo platform. Also establish controller/processor roles, contracts, recipients, region, transfers, security and log-retention facts.
3. **Share capital** from a current company document; verify exact RCS/RNE registration wording and any applicable professional registration requirements.
4. **Named publication director** confirmed by the company; do not choose between registry managers without validation.
5. **Professional insurance**: current insurer, contact details, relevant guarantees and geographical coverage supported by the actual certificate; no invented policy or guarantee.
6. **Consumer mediator**: actual competent designated provider, membership/convention evidence, postal address and website for referral. A generic information link is not a substitute.
7. **Offline processing**: actual phone/postal enquiry workflow, data necessary for a quote, lawful bases, recipients, security and documented retention by purpose. Proposed precontractual purposes are distinguished from an already activated web service.
8. **Image and review reuse**: provenance, accurate attribution, licences, permissions where needed, illustrative-image labelling, current review metrics. Original claims alone are insufficient evidence.
9. **Google Maps and deployment audit**: check third-party requests/cookies and any required prior consent. No consent banner, tracker or backend has been installed in this task; publishing this text does not solve any consent issue.

Before activating the form, replace the descriptive inactive-form policy with the verified actual collection notice, processor/hosting details, legal bases, retention and security controls. The current text intentionally does not repeat the original's unsupported 12-month, no-tracking or private-upload-storage promises.

## Verification and limits

Run `node --test tests/legal-pages.test.cjs`. The harness transpiles actual route/component TSX using Next's installed SWC and uses real React server rendering. It checks exported metadata, rendered corporate identity, distinct addresses, one callout, substantive sections, actual inactive-form disclosures, rights and source links, and absence of unsupported promises. It does not mock the legal components or merely grep source. TypeScript 7 here exposes only version information through `require('typescript')`, so the initial harness was corrected to use Next SWC before recording a genuine assertion RED.

Strict vertical RED → GREEN evidence is in `/opt/data/output/pk-content/legal/`:

- `01-identity-red.log` → `01-identity-green.log`: missing verified identity → rendered identity.
- `02-disclosures-red.log` → `02-disclosures-green.log`: missing callout → one callout and legal sections.
- `03-privacy-red.log` → `03-privacy-green.log`: missing privacy content → actual-flow disclosures. `03-privacy-first-attempt.log` preserves an intermediate assertion failure before the final wording correction.
- `typecheck.log`: `tsc --noEmit --incremental false`, exit 0, no diagnostics.

No full build was run, per parallel-worker instructions. Parent owns full build/regression gates and browser visual verification. No form activation, consent banner, tracking/backend changes, staging, commit or push performed.

## Retrieval provenance

Official pages researched on 2026-11-15. Service-Public company guide and Google policy fetched successfully via direct HTTPS, full HTML/text saved as `source-1.*` and `source-5.*`. Direct CNIL extraction returned 403; available primary-domain search-index text supported the limited rights/complaints claims. `research-search.json` records retrieved primary-domain results for mediation, rights and cookies; `sources.json` records direct-fetch successes/failures. CNIL sources are **indexed evidence**, not claimed successful live-page extraction. The complaints URL was returned directly by the CNIL indexed result.

## Sources

[1] https://recherche-entreprises.api.gouv.fr/search?q=990752131&per_page=1
[2] https://entreprendre.service-public.gouv.fr/vosdroits/F37351
[3] https://entreprendre.service-public.gouv.fr/vosdroits/F33338
[4] https://www.cnil.fr/fr/les-droits-pour-maitriser-vos-donnees-personnelles
[5] https://www.cnil.fr/fr/passer-laction/les-droits-des-personnes-sur-leurs-donnees
[6] https://www.cnil.fr/fr/plaintes
[7] https://www.cnil.fr/fr/cookies-et-autres-traceurs
[8] https://policies.google.com/privacy?hl=fr

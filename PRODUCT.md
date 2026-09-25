# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is people evaluating Jaden Yin's software work, including recruiters who need a direct one-page summary and visitors who want to explore the more expressive portfolio experience. The Travels archive serves visitors interested in the places and photography behind the work.

## Product Purpose

This is Jaden Yin's personal developer portfolio. It presents projects, work experience, contact information, and travel material while giving recruiters a simplified mode without decorative media or interactions.

## Positioning

The portfolio pairs a photographic Japanese editorial travel language with a deliberately plain recruiter view. Expressive interactions may frame the content, but they must never hide or replace the work itself.

## Operating Context

Visitors move between Home, Projects, Experience, Travels, Contact, and Recruiter routes. The site supports a day presentation and a cyberpunk night presentation, ambient audio controls, responsive layouts, and route-level transitions.

## Capabilities and Constraints

- Preserve the existing routes and useful portfolio content.
- Real photography is the primary visual language; abstract CSS decoration is supporting material only.
- Day and night modes may use different real photographs.
- Recruiter mode remains direct, image-free, and easy to scan.
- Travels may use immersive interaction, but it must provide reduced-motion, keyboard, touch, and non-WebGL paths.
- Do not fabricate employers, project outcomes, travel records, testimonials, or personal claims.

## Brand Commitments

The portfolio belongs to Jaden Yin, with the Chinese name 尹泽华 used as an alternate name treatment. Its established character is photographic, editorial, travel-informed, and restrained. The visual system uses warm natural materials by day and city-night photography after dark.

## Evidence on Hand

Project and experience content live in `src/data/`. Real project screenshots live in `public/images/projects-real/`. The current editorial and travel photographs live in `public/images/editorial/`. Placeholder travel chapters are explicitly marked as future content and must not be presented as completed trips.

## Product Principles

- Make the work legible before making the interface impressive.
- Use real imagery and honest content.
- Keep expressive motion purposeful and escapable.
- Preserve a fast, plain route for recruiter review.
- Treat accessibility and responsive behavior as part of the experience.

## Accessibility & Inclusion

Interactive experiences support keyboard and touch input, visible focus, reduced-motion behavior, and a functional fallback when optional media or WebGL is unavailable.

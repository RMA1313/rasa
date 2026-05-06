# Rasa Landing QA Checklist

Use this checklist after changing the landing page:

1. Load `/` and confirm the Rasa marketing page renders in Persian and RTL by default.
2. Click the primary CTA in the navbar or hero and confirm it navigates to `/meet`.
3. Click the secondary CTA in the hero or CTA card and confirm it jumps to `#deployment`.
4. Click each navbar item and confirm it lands on the matching section:
   - محصول -> `#product`
   - قابلیت‌ها -> `#capabilities`
   - امنیت -> `#security`
   - استقرار -> `#deployment`
   - قیمت -> `#pricing`
   - منابع -> `#resources`
5. Toggle language and confirm direction switches to LTR and copy changes to English.
6. Verify keyboard navigation reaches the CTAs, language toggle, and footer links.
7. Verify focus-visible styling is visible on interactive elements.
8. Verify the page scrolls naturally and has no horizontal overflow on mobile and desktop.
9. Verify reduced-motion mode keeps the page usable with animations minimized.

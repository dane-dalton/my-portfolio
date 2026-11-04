// Page animations: the landing sequence, the Big Dipper lighting up, and
// scroll reveals. Runs only when BaseLayout's inline script has added the
// "motion" class, which it skips for prefers-reduced-motion.
// `motion/mini` animates with the browser's Web Animations API: a few KB
// instead of the full engine, and it covers opacity and transform.
import { inView, stagger } from "motion";
import { animate } from "motion/mini";

const root = document.documentElement;
const ease = [0.22, 1, 0.36, 1] as const;

if (root.classList.contains("motion")) {
  // Tell the inline failsafe that animations are running.
  root.dataset.motionReady = "";

  // Landing section: each line rises into place in reading order.
  const intro = [...document.querySelectorAll<HTMLElement>("[data-intro]")];
  const introStep = 0.09;
  animate(
    intro,
    { opacity: [0, 1], transform: ["translateY(14px)", "none"] },
    { duration: 0.7, delay: stagger(introStep), ease },
  );

  // Big Dipper: stars light up from the end of the handle to the bowl,
  // then the constellation lines fade in.
  const dipper = document.querySelector<SVGElement>("[data-dipper-intro]");
  if (dipper) {
    const stars = [
      ...dipper.querySelectorAll<SVGElement>("[data-dipper-star]"),
    ].sort(
      (a, b) => Number(a.dataset.dipperStar) - Number(b.dataset.dipperStar),
    );
    const starStep = 0.14;
    const start = 0.3 + intro.length * introStep;
    animate(
      stars,
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(starStep, { startDelay: start }) },
    );
    animate(
      [...dipper.querySelectorAll<SVGElement>("[data-dipper-part]")],
      { opacity: [0, 1] },
      { duration: 1.2, delay: start + stars.length * starStep },
    );
  }

  // Everything else fades up once, the first time it scrolls into view.
  for (const element of document.querySelectorAll<HTMLElement>(
    "[data-reveal]",
  )) {
    const stop = inView(
      element,
      () => {
        animate(
          element,
          { opacity: [0, 1], transform: ["translateY(18px)", "none"] },
          { duration: 0.6, ease },
        );
        stop();
      },
      { amount: 0.15 },
    );
  }
}

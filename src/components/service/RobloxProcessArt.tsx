import Image from "next/image";

/*
  The Roblox service page's process artwork: the voxel scene from the owner's
  mockup — ruins, a lit archway, and the "lm" mark glowing on stone at dusk.

  SHIPPED AS A PICTURE, UNLIKE EVERY OTHER DRAWING IN THIS FOLDER (owner call,
  2026-08-23). What stood here before was DOM — an arch, two blob trees and a
  glow, built from tokens for the reason the sibling components still give: a
  photoreal render is not reproducible in CSS, and faking one badly costs more
  than dropping it. That reasoning holds right up until the owner supplies the
  render itself, which is what happened here. There is nothing left to
  approximate, so the approximation goes.

  This does NOT reopen the question for AutomationHeroArt, AutomationProcessArt
  or RobloxHeroArt. Those three are still DOM because no render exists for
  them, not because DOM was preferred on principle.

  WHAT IT COSTS (§12). The source was a 1672x941 PNG at 1.76 MB. Resampled to
  1280x720 and encoded WebP q80 it is 67 KB — the widest this ever renders is
  about 304px (the lg process column), so 1280 covers a 2x display with room
  spare and anything larger would be bytes no screen can show. The PNG is not
  referenced by anything; it is kept in the repo only as the editable source.

  BELOW THE FOLD, so no `priority` and no preload: next/image lazy-loads by
  default and that is correct here. The LCP element on this page is the hero
  heading, which is text.

  DECORATIVE, hence alt="". The "My Process" heading and the three steps
  beside it carry the meaning; a screen reader announcing "voxel ruins at
  dusk" would be reading out set dressing.
*/

export default function RobloxProcessArt({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      /*
        16/9, the render's own ratio, so the image is never cropped. The DOM
        version this replaced was aspect-[4/3] — a shape chosen to give the
        drawn arch room rather than measured off anything, and the mockup's own
        art region is nearer 1.9:1 than 1.33:1, so this moves toward the mockup
        rather than away from it.

        No border. Every other panel on the page is a card and wears the
        hairline; this is artwork, and the mockup lets it sit on the background
        with soft corners and no stroke. The warm ambient below is what seats
        it instead — §9.4's "depth from contrast and glow, not drop shadows",
        with the one black shadow kept tight enough to read as contact.
      */
      className={`relative aspect-[16/9] w-full overflow-hidden rounded-2xl ${className}`}
      style={{
        boxShadow: [
          "0 2px 10px rgba(0,0,0,0.5)",
          "0 0 40px color-mix(in srgb, var(--color-accent) 10%, transparent)",
        ].join(", "),
      }}
    >
      <Image
        src="/services/roblox/my-process.webp"
        alt=""
        fill
        /*
          Matches the process row's own columns (see ServiceDetailPage): a
          17rem track at xl, roughly half the row at lg where the grid drops to
          two columns, and the full container width once it stacks.
        */
        sizes="(min-width: 1280px) 17rem, (min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

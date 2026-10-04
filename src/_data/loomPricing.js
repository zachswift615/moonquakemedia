// LOOM's price, stated once for every page that names it: the landing page's price line, its
// SoftwareApplication structured data, and the FAQ.
//
// ⛔ THIS IS NOT WHAT THE CUSTOMER IS CHARGED. Polar charges whatever the checkout link in
// src/loom-buy.njk carries. This file only says what the site CLAIMS, and the two must agree:
// when the launch window closes, revert the link in loom-buy.njk on purpose (its own comment
// says how). This file flips by itself on the first build after `launchEnds`.
//
// ⭐ "THE FIRST BUILD AFTER" IS WHY deploy.yml HAS A DAILY SCHEDULE. A static site only changes
// when it is built, so without one the page would advertise the launch price until somebody
// happened to push.
const launch = { price: '99.00', ends: '2026-12-31' };
const list = { price: '149.99' };

module.exports = function loomPricing() {
  // The window is open through the END of `ends`, in US Central time where the owner lives.
  const closes = new Date(`${launch.ends}T23:59:59-05:00`);
  const onLaunch = Date.now() <= closes.getTime();
  return {
    currency: 'USD',
    listPrice: list.price,
    price: onLaunch ? launch.price : list.price,
    onLaunch,
    launchEnds: launch.ends,
    launchEndsReadable: new Date(`${launch.ends}T12:00:00Z`).toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', timeZone: 'UTC',
    }),
    // Structured data's `priceValidUntil`: the launch price is valid until the window closes;
    // the list price has no end date, so it is given a year out, which is what Google asks for.
    priceValidUntil: onLaunch
      ? launch.ends
      : new Date(Date.now() + 365 * 864e5).toISOString().slice(0, 10),
  };
};

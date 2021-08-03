export async function initAnalytics() {
  const { default: splitbee } = await import("@splitbee/web");
  splitbee.init();
}

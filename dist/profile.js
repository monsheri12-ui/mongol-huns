(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.GroceryProfile = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const CATALOG_VERSION = 'supermarket-1';
  function upgrade(input = {}) {
    const oldCampaign = input.version === 2 && !input.catalogVersion;
    const rename = object => Object.fromEntries(Object.entries(object && typeof object === 'object' && !Array.isArray(object) ? object : {}).map(([key, value]) => [oldCampaign ? key.replace(/^campaign:/, 'classic:') : key, value]));
    const activeByMode = { ...(input.activeByMode || {}) };
    if (oldCampaign && 'campaign' in activeByMode) {
      activeByMode.classic = activeByMode.campaign;
      delete activeByMode.campaign;
    }
    return {
      ...input,
      catalogVersion: CATALOG_VERSION,
      scaleHints: input.scaleHints !== false,
      mode: oldCampaign && input.mode !== 'legacy' ? 'classic' : input.mode,
      classicAvailable: oldCampaign || input.classicAvailable === true,
      bestById: rename(input.bestById), drafts: rename(input.drafts), activeByMode,
      migrated: oldCampaign
    };
  }
  return { CATALOG_VERSION, upgrade };
});

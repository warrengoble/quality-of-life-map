import { flow, toPairs, map, fromPairs } from "lodash/fp";

export default () =>
  function () {
    return {
      loading: false,
      results: [],
      filters: {},
      showMapBackground: false,
      mapZoom: 1,
      mapPosition: [0, 0],
      clearFilters(name) {
        this.filters[name].filterValues = flow(
          toPairs,
          map(([k, v]) => [k, false]),
          fromPairs
        )(this.filters[name].filterValues);
      },
      selectAllFilters(name) {
        this.filters[name].filterValues = flow(
          toPairs,
          map(([k, v]) => [k, true]),
          fromPairs
        )(this.filters[name].filterValues);
      },
    };
  };

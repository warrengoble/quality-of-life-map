const feathers = require("@feathersjs/feathers");

// TODO Clean this up. Hack for demo
const filters = require("./data/filters").default;
const countiesIds = require("./data/counties").default;

const app = feathers();

// FIXME Try and use an existing database adapter.
app.use("/feathers", {
  async find({ query: { filters: queryFilters } = {} }) {
    // Generate random data for now

    return queryFilters
      ? filters
      : countiesIds.map(v => ({ id: Number(v), value: Math.random() * 0.5 }));
  }
  // Not used at moment for demo
  // async get(id, params) {
  //   return {};
  // },
  // async create(data, params) {},
  // async update(id, data, params) {},
  // async patch(id, data, params) {},
  // async remove(id, params) {},
  // setup(app, path) {
  //   // TODO
  // }
});

export default app.service("feathers");

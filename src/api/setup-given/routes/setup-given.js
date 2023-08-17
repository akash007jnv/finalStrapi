'use strict';

/**
 * setup-given router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::setup-given.setup-given');

'use strict';

/**
 * setup-given controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::setup-given.setup-given');

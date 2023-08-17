'use strict';

/**
 * setup-given service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::setup-given.setup-given');

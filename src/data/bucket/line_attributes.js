// @flow
const {createLayout} = require('../../util/struct_array');
const lineLayoutAttributes = createLayout([
    {name: 'a_pos_normal', components: 4, type: 'Int16'},
    {name: 'a_data', components: 4, type: 'Uint8'}
], 4);

// these attributes are only needed if using data-driven line-pattern
// todo: pack these attributes tighter
const dynamicLineAttributes = createLayout([
    // [tl.x, tl.y, br.x, br.y]
    {name: 'a_image_a',  components: 4, type: 'Uint16'},
    {name: 'a_image_b',  components: 4, type: 'Uint16'},
    // [image_a.h, image_a.w, image_b.h, image_b.w]
    {name: 'a_image_sizes', components: 4, type: 'Uint16'}
]);

module.exports = {lineLayoutAttributes, dynamicLineAttributes};

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
    {name: 'a_pattern_a',  components: 4, type: 'Uint16'},
    {name: 'a_pattern_b',  components: 4, type: 'Uint16'},
    // [pattern_a.h, pattern_a.w, pattern_b.h, pattern_b.w]
    {name: 'a_pattern_size', components: 4, type: 'Uint16'}
]);

module.exports = {lineLayoutAttributes, dynamicLineAttributes};

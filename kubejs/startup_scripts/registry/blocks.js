StartupEvents.registry('block', event => {
    event.create('desh_lamp') // Create a new block
        .displayName('Desh Lamp') // Set a custom name
        .soundType('metal') // Set a material (affects the sounds and some properties)
        .hardness(1) // Set hardness (affects mining time)
        .resistance(10) // Set resistance (to explosions, etc)
        .requiresTool(true) // Requires a tool or it won't drop (see tags below)
        .tagBlock('my_namespace:my_other_tag') // Tag the block with `#my_namespace:my_other_tag`
        .tagBlock('minecraft:mineable/wrench') // or a pickaxe
})
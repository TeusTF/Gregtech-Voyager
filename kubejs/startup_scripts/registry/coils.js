
StartupEvents.registry('block', event => {

    event.create('desh_coil_block', 'gtceu:coil')
        .temperature(4500)
        .level(8)
        .energyDiscount(12)
        .tier(4)
        .coilMaterial(() => GTMaterials.get('desh'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true);
});
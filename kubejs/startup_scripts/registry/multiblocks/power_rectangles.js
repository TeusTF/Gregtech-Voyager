GTCEuStartupEvents.registry("gtceu:recipe_type", event => {

    event.create("helper_calorie_conversion")
        .category("multiblock")
        .setEUIO("out")
        .setMaxIOSize(4, 1, 2, 1)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setSound(GTSoundEntries.CHEMICAL);

});


GTCEuStartupEvents.registry("gtceu:machine", event => {


    function powerRectangle(type, casing, recipe) 
    {

        event.create(`power_rectangle_${type}`, 'multiblock')
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeType(recipe)
            .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.BATCH_MODE])
            .appearanceBlock(() => Block.getBlock(`kubejs:${casing}_casing`))
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('CCC', 'CDC', 'CCC')
                .aisle('CCC', 'CBC', 'CCC')
                .aisle('CCC', 'CBC', 'CCC')
                .aisle('CCC', 'C@C', 'CCC')
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where('C', Predicates.blocks(`kubejs:${casing}_casing`).setMinGlobalLimited(5)
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.blocks('gtceu:maintenance_hatch').setExactLimit(1)))
                .where('B', Predicates.blocks('gtceu:titanium_gearbox'))
                .where('D', Predicates.abilities(PartAbility.OUTPUT_ENERGY))
                .build())
            .workableCasingModel(`kubejs:block/casing/${casing}_casing`,
            `kubejs:block/multiblock/${type}`);

    }

    powerRectangle('helper_calorie_converter', 'radiation_proof_lead', 'helper_calorie_conversion')

});
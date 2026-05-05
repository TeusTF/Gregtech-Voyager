ServerEvents.recipes(event => {
 

    event.shaped(
        Item.of('gtceu:power_rectangle_helper_calorie_converter', 1), // arg 1: output
        [
            'DCD',
            'BAB', // arg 2: the shape (array of strings)
            'DCD'
        ],
        {
            A: 'gtceu:hv_helper_Wheel',
            B: 'gtceu:refined_fluxed_electrum_frame',  //arg 3: the mapping object
            C: '#gtceu:circuits/iv',
            D: 'kubejs:radiation_proof_lead_casing'
        }
    )


    event.recipes.gtceu.helper_calorie_conversion("kubejs:radioactive_cookies")
        .notConsumable("minecraft:sugar_cane")
        .notConsumable(Item.of("kubejs:hungry_helper", '{conversionRate:1.5}'))
        .itemOutputs('minecraft:sugar_cane')
        .inputFluids("minecraft:water 1000")
        .duration(100)
        .EUt(-2)
})
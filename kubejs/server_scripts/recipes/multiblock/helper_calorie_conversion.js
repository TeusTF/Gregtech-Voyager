ServerEvents.recipes(event => {
 

    event.shaped(
        Item.of('gtceu:micro_farm', 1), // arg 1: output
        [
            'DCD',
            'BAB', // arg 2: the shape (array of strings)
            'DCD'
        ],
        {
            A: 'gtceu:steel_machine_casing',
            B: 'gtceu:treated_wood_frame',  //arg 3: the mapping object
            C: '#gtceu:circuits/lv',
            D: 'gtceu:tempered_glass'
        }
    )


    event.recipes.gtceu.micro_farm("kubejs:radioactive_cookies")
        .notConsumable("minecraft:sugar_cane")
        .notConsumable("kubejs:farmer_helper")
        .itemOutputs('minecraft:sugar_cane')
        .circuit(2)
        .chancedOutput('2x minecraft:sugar_cane', 9000, 1000)
        .chancedOutput('4x minecraft:sugar_cane', 8000, 500)
        .inputFluids("minecraft:water 1000")
        .duration(100)
        .EUt(2)
})
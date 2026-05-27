ServerEvents.recipes(event => {

    // event.remove({ output: "gtceu:nano_processor" }) // these didn't remove anything...?
    // event.remove({ output: "gtceu:nano_processor_assembly" })
    // event.remove({ output: "gtceu:nano_processor_computer" })
    // event.remove({ output: "gtceu:nano_processor_mainframe" })
    // event.remove({ output: "gtceu:micro_processor_mainframe" })

    // event.remove({ type: "gtceu:circuit_assembler" })

    const tiers = ['ulv', 'lv','mv','hv','ev','iv','luv','zpm','uv','uhv','uev','uiv','max'];

    function venus_assembly_research(output, namespace, inputs, fluidInputs, eut, time, scanItem)
    {
        event.recipes.gtceu.assembly_line(`gtceu:${output}`)
            .itemInputs(inputs)
            .inputFluids(fluidInputs)
            .itemOutputs(`${namespace}:${output}`)
            ["scannerResearch(java.util.function.UnaryOperator)"](
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(scanItem))
                    .duration(time * 20 * 2)
                    .EUt(eut/2)
                )
            .duration(time * 20)
            .EUt(eut);
    }





});
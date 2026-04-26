ServerEvents.recipes(event => {
	const logtype = ['fir','redwood','mahogany','jacaranda','palm','willow','dead','magic','umbran','hellbark']
	const cuttingfluid = [['lubricant','gtceu:lubricant 1',10],['distilled','gtceu:distilled_water 3',15],['water','minecraft:water 4',20]]

	//event.remove({ output: [/biomesoplenty:.*_planks/]})


	logtype.forEach(logtype => {

		event.remove({type: 'minecraft:crafting_shapeless', output: `biomesoplenty:${logtype}_planks`})

		event.shapeless(
			`2x biomesoplenty:${logtype}_planks`,[`#biomesoplenty:${logtype}_logs`]
		)

		cuttingfluid.forEach(cuttingfluid => {
			event.recipes.gtceu.cutter(`kubejs:${logtype}_cutting_with_${cuttingfluid[0]}`)
				.itemInputs(`#biomesoplenty:${logtype}_logs`)
				.inputFluids(cuttingfluid[1])
				.itemOutputs(`6x biomesoplenty:${logtype}_planks`)
				.EUt(7)
				.duration(cuttingfluid[2])
		})
	})
})
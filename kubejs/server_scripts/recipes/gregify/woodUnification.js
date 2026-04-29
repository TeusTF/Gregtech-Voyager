const cuttingfluid = [['lubricant','gtceu:lubricant','1',10],['distilled','gtceu:distilled_water','3',15],['water','minecraft:water','4',20]]

ServerEvents.tags('item', event => {

	//I hate it when mods don't tag things properly
	event.add('minecraft:oak_logs',['vinery:apple_log','vinery:apple_wood'])
	event.add('vinery:dark_cherry_logs',['vinery:dark_cherry_log','vinery:dark_cherry_wood','vinery:stripped_dark_cherry_log','vinery:stripped_dark_cherry_wood'])
	
})



ServerEvents.recipes(event => {

	const sawShaped = (output,input,mod,itemName)=>{
		let pref = ''
		if (mod != 'minecraft') pref = mod+'_'
		event.recipes.gtceu.shaped((Item.of(output, 4)),
			[
				'A',
				'B'
			],
			{
				A: '#forge:tools/saws',
				B: input
			}
		).id(`gtceu:shaped/${pref+itemName}_saw`)
	}

	const cuttingMachine = (output,input,custom,mod) => {
		cuttingfluid.forEach(cuttingfluid => {
			event.recipes.gtceu.cutter(`gtceu:cutter/${mod}_${custom}_${cuttingfluid[0]}`)
				.itemInputs(input)
				.inputFluids(cuttingfluid[1]+' '+cuttingfluid[2])
				.itemOutputs(Item.of(output, 6))
				.itemOutputs(Item.of('gtceu:wood_dust',2))
				.EUt(7)
				.duration(cuttingfluid[3]*20)
			})
	}

	event.remove({type:'minecraft:crafting_shapeless',output:'minecraft:oak_planks',mod:'vinery'}) //Nuclear Option, This wouldn't work correctly the other ways I tried
	event.remove({type:'minecraft:crafting_shapeless',output:'vinery:dark_cherry_planks'})

	event.shapeless('2x vinery:dark_cherry_planks', '#vinery:dark_cherry_logs').id('vinery:dark_cherry_planks')
	sawShaped('vinery:dark_cherry_planks','#vinery:dark_cherry_logs','vinery','dark_cherry_planks')
	cuttingMachine('vinery:dark_cherry_planks','#vinery:dark_cherry_logs','dark_cherry_planks','vinery')

	event.forEachRecipe({type: 'minecraft:crafting_shapeless', input:'#minecraft:logs', output: '#minecraft:planks'}, r => {
		
		let logtype = r.originalRecipeIngredients
		let outputIS = r.originalRecipeResult
		let output = outputIS.id
		let mod = outputIS.getMod()
		let itemName = outputIS.getItem()



		event.shapeless(Item.of(outputIS.id, 2), logtype[0]).id(r.getId())
		sawShaped(output,logtype[0],mod,itemName)
		if (mod != 'minecraft') cuttingMachine(output,logtype[0],itemName,mod)


	})

})

ServerEvents.recipes(event => {
    event.remove({output: 'tconstruct:steel_ingot'});
    event.remove({output: 'tconstruct:steel_block'});
    event.remove({type: 'tconstruct:casting_table', output: 'ender_eye'})
});
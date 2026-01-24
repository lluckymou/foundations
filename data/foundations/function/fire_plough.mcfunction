execute as @a[nbt={SelectedItem:{id:"minecraft:stick"}}] unless data entity @s SelectedItem.components."minecraft:consumable" run item modify entity @s weapon.mainhand foundations:make_stick_consumable

execute as @a[nbt={SelectedItem:{components:{"minecraft:rarity":"uncommon"}}}] run function foundations:fire_plough/check_visual
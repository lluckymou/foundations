# One-time migration for sticks transformed by the removed lighting feature.
item modify entity @a inventory.* foundations:cleanup_legacy_sticks
execute as @e[type=item, nbt={Item:{id:"minecraft:stick"}}] run data remove entity @s Item.components."minecraft:consumable"
execute as @e[type=item, nbt={Item:{id:"minecraft:stick"}}] run data remove entity @s Item.components."minecraft:rarity"
data modify storage foundations:state legacy_stick_cleanup set value true

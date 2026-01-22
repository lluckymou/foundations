# Reset Logic
scoreboard players set @s foundations_result -1
advancement revoke @s only foundations:fire_plough

scoreboard players set @s foundations_range 40

scoreboard players set @s foundations_mode 1
execute at @s anchored eyes run function foundations:fire_plough/raycast

execute if score @s foundations_result matches -1 as @s[gamemode=!creative] at @s run summon item ~ ~1.8 ~ {PickupDelay:20,Item:{id:"minecraft:stick",count:1,components:{"minecraft:rarity":"uncommon","minecraft:consumable":{animation:"drink",consume_seconds:1,has_consume_particles:false,sound:"minecraft:item.spear_wood.attack"}}}}
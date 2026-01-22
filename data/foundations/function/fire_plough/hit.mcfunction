scoreboard players set @s foundations_result 0
execute if predicate foundations:fire_chance run scoreboard players set @s foundations_result 1

# ---

# Tooltip
execute if score @s foundations_mode matches 0 positioned ~ ~ ~ positioned ^ ^ ^-0.1 run particle minecraft:ash ~ ~ ~ 0.15 0.15 0.15 0.02 5

# ---

# Actual Click
execute if score @s foundations_mode matches 1 positioned ~ ~ ~ positioned ^ ^ ^-0.1 if block ~ ~ ~ #minecraft:replaceable run playsound minecraft:block.fire.extinguish player @s ~ ~ ~ 0.5 1
execute if score @s foundations_mode matches 1 positioned ~ ~ ~ positioned ^ ^ ^-0.1 run particle smoke ~ ~ ~ 0.3 0.3 0.3 0.01 30

# SUCCESS
execute if score @s foundations_mode matches 1 if score @s foundations_result matches 1 positioned ~ ~ ~ positioned ^ ^ ^-0.1 if block ~ ~ ~ #minecraft:replaceable run setblock ~ ~ ~ minecraft:fire

# FAIL
execute if score @s foundations_mode matches 1 if score @s foundations_result matches 0 positioned ~ ~ ~ positioned ^ ^ ^-0.1 if block ~ ~ ~ #minecraft:replaceable run playsound minecraft:entity.item.break player @s ~ ~ ~ 0.5 1

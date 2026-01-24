scoreboard players set @s foundations_result 0

# Surface Validation
execute positioned ^ ^ ^-0.1 run function foundations:fire_plough/validate_spot
execute if score @s foundations_result matches -1 run return -1

# RNG
execute if predicate foundations:fire_chance run scoreboard players set @s foundations_result 1

# Tooltip (Mode 0)
execute if score @s foundations_mode matches 0 positioned ^ ^ ^-0.1 run particle minecraft:ash ~ ~ ~ 0.15 0.15 0.15 0.02 5

# Actual Click Attempt (Mode 1)
execute if score @s foundations_mode matches 1 positioned ^ ^ ^-0.1 run playsound minecraft:block.fire.extinguish player @s ~ ~ ~ 0.5 1
execute if score @s foundations_mode matches 1 positioned ^ ^ ^-0.1 run particle smoke ~ ~ ~ 0.3 0.3 0.3 0.01 30

# SUCCESS (Mode 1 + RNG 1)
execute if score @s foundations_mode matches 1 if score @s foundations_result matches 1 positioned ^ ^ ^-0.1 run setblock ~ ~ ~ minecraft:fire
execute if score @s foundations_mode matches 1 if score @s foundations_result matches 1 positioned ^ ^ ^-0.1 run playsound minecraft:item.firecharge.use player @s ~ ~ ~ 1 1

# FAILED ATTEMPT (Mode 1 + RNG 0)
execute if score @s foundations_mode matches 1 if score @s foundations_result matches 0 positioned ^ ^ ^-0.1 run playsound minecraft:entity.item.break player @s ~ ~ ~ 0.5 1
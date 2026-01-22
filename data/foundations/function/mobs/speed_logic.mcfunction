# Day 0-4 (S): 0.3 or 0.325
execute if score #world_days foundations_days matches 0..4 if score @s foundations_rng matches ..50 run attribute @s minecraft:movement_speed base set 0.3
execute if score #world_days foundations_days matches 0..4 if score @s foundations_rng matches 51.. run attribute @s minecraft:movement_speed base set 0.325
execute if score #world_days foundations_days matches 0..4 if score @s foundations_rng matches 51.. run tag @s add foundations_indicator_speed

# Day 5-9 (M): 0.3, 0.325 or 0.35
execute if score #world_days foundations_days matches 5..9 if score @s foundations_rng matches ..33 run attribute @s minecraft:movement_speed base set 0.3
execute if score #world_days foundations_days matches 5..9 if score @s foundations_rng matches 34..66 run attribute @s minecraft:movement_speed base set 0.325
execute if score #world_days foundations_days matches 5..9 if score @s foundations_rng matches 67.. run attribute @s minecraft:movement_speed base set 0.35
execute if score #world_days foundations_days matches 5..9 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_speed

# Day 10+ (L): 0.3, 0.325, 0.35 or 0.4
execute if score #world_days foundations_days matches 10.. if score @s foundations_rng matches ..25 run attribute @s minecraft:movement_speed base set 0.3
execute if score #world_days foundations_days matches 10.. if score @s foundations_rng matches 26..50 run attribute @s minecraft:movement_speed base set 0.325
execute if score #world_days foundations_days matches 10.. if score @s foundations_rng matches 51..75 run attribute @s minecraft:movement_speed base set 0.35
execute if score #world_days foundations_days matches 10.. if score @s foundations_rng matches 76.. run attribute @s minecraft:movement_speed base set 0.4
execute if score #world_days foundations_days matches 10.. if score @s foundations_rng matches 26.. run tag @s add foundations_indicator_speed
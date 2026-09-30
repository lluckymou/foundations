# Tier 0: baseline hostility.
execute if score @s foundations_stage matches 0 if score @s foundations_rng matches ..50 run attribute @s minecraft:movement_speed base set 0.3
execute if score @s foundations_stage matches 0 if score @s foundations_rng matches 51.. run attribute @s minecraft:movement_speed base set 0.325
execute if score @s foundations_stage matches 0 if score @s foundations_rng matches 51.. run tag @s add foundations_indicator_speed

# Tier 1: 5 playtime days + Getting an Upgrade, or Cover Me with Diamonds.
execute if score @s foundations_stage matches 1 if score @s foundations_rng matches ..33 run attribute @s minecraft:movement_speed base set 0.3
execute if score @s foundations_stage matches 1 if score @s foundations_rng matches 34..66 run attribute @s minecraft:movement_speed base set 0.325
execute if score @s foundations_stage matches 1 if score @s foundations_rng matches 67.. run attribute @s minecraft:movement_speed base set 0.35
execute if score @s foundations_stage matches 1 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_speed

# Tier 2: 10 playtime days + Diamonds!, or The End.
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches ..25 run attribute @s minecraft:movement_speed base set 0.3
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches 26..50 run attribute @s minecraft:movement_speed base set 0.325
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches 51..75 run attribute @s minecraft:movement_speed base set 0.35
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches 76.. run attribute @s minecraft:movement_speed base set 0.4
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches 26.. run tag @s add foundations_indicator_speed

# Tier 3: 25 playtime days + Cover Me with Diamonds, or Withering Heights.
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches ..20 run attribute @s minecraft:movement_speed base set 0.3
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches 21..40 run attribute @s minecraft:movement_speed base set 0.325
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches 41..60 run attribute @s minecraft:movement_speed base set 0.35
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches 61..80 run attribute @s minecraft:movement_speed base set 0.4
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches 81.. run attribute @s minecraft:movement_speed base set 0.425
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches 21.. run tag @s add foundations_indicator_speed

# Tier 4: 50 playtime days + The End, or Cover Me in Debris.
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches ..16 run attribute @s minecraft:movement_speed base set 0.3
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 17..33 run attribute @s minecraft:movement_speed base set 0.325
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 34..50 run attribute @s minecraft:movement_speed base set 0.35
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 51..67 run attribute @s minecraft:movement_speed base set 0.4
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 68..84 run attribute @s minecraft:movement_speed base set 0.425
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 85.. run attribute @s minecraft:movement_speed base set 0.45
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 17.. run tag @s add foundations_indicator_speed

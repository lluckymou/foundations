# Tier 1: 5 playtime days + Getting an Upgrade, or Cover Me with Diamonds.
execute if score @s foundations_stage matches 1 if score @s foundations_rng matches ..33 run attribute @s minecraft:attack_damage modifier add foundations_atk_1 1 add_value
execute if score @s foundations_stage matches 1 if score @s foundations_rng matches 34..66 run attribute @s minecraft:attack_damage modifier add foundations_atk_2 2 add_value
execute if score @s foundations_stage matches 1 if score @s foundations_rng matches 67.. run attribute @s minecraft:attack_damage modifier add foundations_atk_3 3 add_value
execute if score @s foundations_stage matches 1 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_attack

# Tier 2: 10 playtime days + Diamonds!, or The End.
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches ..33 run attribute @s minecraft:attack_damage modifier add foundations_atk_3 3 add_value
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches 34..66 run attribute @s minecraft:attack_damage modifier add foundations_atk_4 4 add_value
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches 67.. run attribute @s minecraft:attack_damage modifier add foundations_atk_5 5 add_value
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_attack

# Tier 3: 25 playtime days + Cover Me with Diamonds, or Withering Heights.
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches ..33 run attribute @s minecraft:attack_damage modifier add foundations_atk_5 5 add_value
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches 34..66 run attribute @s minecraft:attack_damage modifier add foundations_atk_6 6 add_value
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches 67.. run attribute @s minecraft:attack_damage modifier add foundations_atk_7 7 add_value
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_attack

# Tier 4: 50 playtime days + The End, or Cover Me in Debris.
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches ..25 run attribute @s minecraft:attack_damage modifier add foundations_atk_7 7 add_value
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 26..50 run attribute @s minecraft:attack_damage modifier add foundations_atk_8 8 add_value
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 51..75 run attribute @s minecraft:attack_damage modifier add foundations_atk_9 9 add_value
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 76.. run attribute @s minecraft:attack_damage modifier add foundations_atk_10 10 add_value
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 26.. run tag @s add foundations_indicator_attack

# Day 5-9: +1, +2 or +3
execute if score #world_days foundations_days matches 5..9 if score @s foundations_rng matches ..33 run attribute @s minecraft:attack_damage modifier add foundations_atk_1 1 add_value
execute if score #world_days foundations_days matches 5..9 if score @s foundations_rng matches 34..66 run attribute @s minecraft:attack_damage modifier add foundations_atk_2 2 add_value
execute if score #world_days foundations_days matches 5..9 if score @s foundations_rng matches 67.. run attribute @s minecraft:attack_damage modifier add foundations_atk_3 3 add_value
execute if score #world_days foundations_days matches 5..9 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_attack

# Day 10-24: +3, +4 or +5
execute if score #world_days foundations_days matches 10..24 if score @s foundations_rng matches ..33 run attribute @s minecraft:attack_damage modifier add foundations_atk_3 3 add_value
execute if score #world_days foundations_days matches 10..24 if score @s foundations_rng matches 34..66 run attribute @s minecraft:attack_damage modifier add foundations_atk_4 4 add_value
execute if score #world_days foundations_days matches 10..24 if score @s foundations_rng matches 67.. run attribute @s minecraft:attack_damage modifier add foundations_atk_5 5 add_value
execute if score #world_days foundations_days matches 10..24 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_attack

# Day 25-49: +5, +6 or +7
execute if score #world_days foundations_days matches 25..49 if score @s foundations_rng matches ..33 run attribute @s minecraft:attack_damage modifier add foundations_atk_5 5 add_value
execute if score #world_days foundations_days matches 25..49 if score @s foundations_rng matches 34..66 run attribute @s minecraft:attack_damage modifier add foundations_atk_6 6 add_value
execute if score #world_days foundations_days matches 25..49 if score @s foundations_rng matches 67.. run attribute @s minecraft:attack_damage modifier add foundations_atk_7 7 add_value
execute if score #world_days foundations_days matches 25..49 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_attack

# Day 50+: +7, +8, +9 or +10
execute if score #world_days foundations_days matches 50.. if score @s foundations_rng matches ..25 run attribute @s minecraft:attack_damage modifier add foundations_atk_7 7 add_value
execute if score #world_days foundations_days matches 50.. if score @s foundations_rng matches 26..50 run attribute @s minecraft:attack_damage modifier add foundations_atk_8 8 add_value
execute if score #world_days foundations_days matches 50.. if score @s foundations_rng matches 51..75 run attribute @s minecraft:attack_damage modifier add foundations_atk_9 9 add_value
execute if score #world_days foundations_days matches 50.. if score @s foundations_rng matches 76.. run attribute @s minecraft:attack_damage modifier add foundations_atk_10 10 add_value
execute if score #world_days foundations_days matches 50.. if score @s foundations_rng matches 26.. run tag @s add foundations_indicator_attack
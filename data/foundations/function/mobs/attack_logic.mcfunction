# Day 5-9 (S): +1 Damage
execute if score #world_days foundations_days matches 5..9 if score @s foundations_rng matches ..50 run attribute @s minecraft:attack_damage modifier add foundations_atk_p 1 add_value

# Day 10-24 (M): +1 or +3 Damage
execute if score #world_days foundations_days matches 10..24 if score @s foundations_rng matches ..50 run attribute @s minecraft:attack_damage modifier add foundations_atk_p 1 add_value
execute if score #world_days foundations_days matches 10..24 if score @s foundations_rng matches 51.. run attribute @s minecraft:attack_damage modifier add foundations_atk_m 3 add_value
execute if score #world_days foundations_days matches 10..24 if score @s foundations_rng matches 51.. run tag @s add foundations_indicator_attack

# Day 25+ (L): +1, +3 or +5 Damage
execute if score #world_days foundations_days matches 25.. if score @s foundations_rng matches ..33 run attribute @s minecraft:attack_damage modifier add foundations_atk_p 1 add_value
execute if score #world_days foundations_days matches 25.. if score @s foundations_rng matches 34..66 run attribute @s minecraft:attack_damage modifier add foundations_atk_m 3 add_value
execute if score #world_days foundations_days matches 25.. if score @s foundations_rng matches 67.. run attribute @s minecraft:attack_damage modifier add foundations_atk_g 5 add_value
execute if score #world_days foundations_days matches 25.. if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_attack
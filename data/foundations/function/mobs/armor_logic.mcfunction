# Day 10-24: +1, +2 or +3 Armor
execute if score #world_days foundations_days matches 10..24 if score @s foundations_rng matches ..33 run attribute @s minecraft:armor base set 1
execute if score #world_days foundations_days matches 10..24 if score @s foundations_rng matches 34..66 run attribute @s minecraft:armor base set 2
execute if score #world_days foundations_days matches 10..24 if score @s foundations_rng matches 67.. run attribute @s minecraft:armor base set 3
execute if score #world_days foundations_days matches 10..24 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_armor

# Day 25-49: +3, +4 or +5 Armor
execute if score #world_days foundations_days matches 25..49 if score @s foundations_rng matches ..33 run attribute @s minecraft:armor base set 3
execute if score #world_days foundations_days matches 25..49 if score @s foundations_rng matches 34..66 run attribute @s minecraft:armor base set 4
execute if score #world_days foundations_days matches 25..49 if score @s foundations_rng matches 67.. run attribute @s minecraft:armor base set 5
execute if score #world_days foundations_days matches 25..49 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_armor

# Day 50+: +6, +7 or +8 Armor
execute if score #world_days foundations_days matches 50.. if score @s foundations_rng matches ..33 run attribute @s minecraft:armor base set 6
execute if score #world_days foundations_days matches 50.. if score @s foundations_rng matches 34..66 run attribute @s minecraft:armor base set 7
execute if score #world_days foundations_days matches 50.. if score @s foundations_rng matches 67.. run attribute @s minecraft:armor base set 8
execute if score #world_days foundations_days matches 50.. if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_armor
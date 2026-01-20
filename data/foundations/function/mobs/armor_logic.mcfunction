# Day 10-24 (S): 2 Armor
execute if score #world_age foundations_days matches 10..24 if score @s foundations_rng matches ..50 run attribute @s minecraft:armor base set 2

# Day 25-49 (M): 2 or 5 Armor
execute if score #world_age foundations_days matches 25..49 if score @s foundations_rng matches ..50 run attribute @s minecraft:armor base set 2
execute if score #world_age foundations_days matches 25..49 if score @s foundations_rng matches 51.. run attribute @s minecraft:armor base set 5

# Day 50+ (L): 2, 5 or 8 Armor
execute if score #world_age foundations_days matches 50.. if score @s foundations_rng matches ..33 run attribute @s minecraft:armor base set 2
execute if score #world_age foundations_days matches 50.. if score @s foundations_rng matches 34..66 run attribute @s minecraft:armor base set 5
execute if score #world_age foundations_days matches 50.. if score @s foundations_rng matches 67.. run attribute @s minecraft:armor base set 8
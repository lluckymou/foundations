# Tier 2: 10 playtime days + Diamonds!, or The End.
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches ..33 run attribute @s minecraft:armor base set 1
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches 34..66 run attribute @s minecraft:armor base set 2
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches 67.. run attribute @s minecraft:armor base set 3
execute if score @s foundations_stage matches 2 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_armor

# Tier 3: 25 playtime days + Cover Me with Diamonds, or Withering Heights.
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches ..33 run attribute @s minecraft:armor base set 3
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches 34..66 run attribute @s minecraft:armor base set 4
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches 67.. run attribute @s minecraft:armor base set 5
execute if score @s foundations_stage matches 3 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_armor

# Tier 4: 50 playtime days + The End, or Cover Me in Debris.
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches ..33 run attribute @s minecraft:armor base set 6
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 34..66 run attribute @s minecraft:armor base set 7
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 67.. run attribute @s minecraft:armor base set 8
execute if score @s foundations_stage matches 4 if score @s foundations_rng matches 34.. run tag @s add foundations_indicator_armor

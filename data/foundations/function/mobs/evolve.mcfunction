# =======================================================
# 1. SPEED (From day 0)
# =======================================================
execute as @s[type=#foundations:speed_mobs] run execute store result score @s foundations_rng run random value 1..100
execute as @s[type=#foundations:speed_mobs] run function foundations:mobs/speed_logic

# =======================================================
# 2. ATTACK (From day 5)
# =======================================================
execute as @s[type=#foundations:attack_mobs] if score #world_days foundations_days matches 5.. run execute store result score @s foundations_rng run random value 1..100
execute as @s[type=#foundations:attack_mobs] if score #world_days foundations_days matches 5.. run function foundations:mobs/attack_logic

# =======================================================
# 3. ARMOR (From day 10)
# =======================================================
execute as @s[type=#foundations:armor_mobs] if score #world_days foundations_days matches 10.. run execute store result score @s foundations_rng run random value 1..100
execute as @s[type=#foundations:armor_mobs] if score #world_days foundations_days matches 10.. run function foundations:mobs/armor_logic

tag @s add foundations_evolved
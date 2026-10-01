# =======================================================
# 1. DETERMINE LOCAL HOSTILITY TIER
# =======================================================
scoreboard players set @s foundations_stage 0

# Normal progression: playtime and the matching advancement must belong to the same nearby player.
execute at @s if entity @a[distance=..32,gamemode=!spectator,scores={foundations_playtime=120000..},advancements={minecraft:story/upgrade_tools=true}] run scoreboard players set @s foundations_stage 1
execute at @s if entity @a[distance=..32,gamemode=!spectator,scores={foundations_playtime=240000..},advancements={minecraft:story/mine_diamond=true}] run scoreboard players set @s foundations_stage 2
execute at @s if entity @a[distance=..32,gamemode=!spectator,scores={foundations_playtime=600000..},advancements={minecraft:story/shiny_gear=true}] run scoreboard players set @s foundations_stage 3
execute at @s if entity @a[distance=..32,gamemode=!spectator,scores={foundations_playtime=1200000..},advancements={minecraft:end/root=true}] run scoreboard players set @s foundations_stage 4

# Speedrunner milestones can skip the time gate, but only move the tier forward.
execute at @s if score @s foundations_stage matches ..0 if entity @a[distance=..32,gamemode=!spectator,advancements={minecraft:story/shiny_gear=true}] run scoreboard players set @s foundations_stage 1
execute at @s if score @s foundations_stage matches ..1 if entity @a[distance=..32,gamemode=!spectator,advancements={minecraft:end/root=true}] run scoreboard players set @s foundations_stage 2
execute at @s if score @s foundations_stage matches ..2 if entity @a[distance=..32,gamemode=!spectator,advancements={minecraft:nether/summon_wither=true}] run scoreboard players set @s foundations_stage 3
execute at @s if score @s foundations_stage matches ..3 if entity @a[distance=..32,gamemode=!spectator,advancements={minecraft:nether/netherite_armor=true}] run scoreboard players set @s foundations_stage 4

# =======================================================
# 2. SPEED (baby variants keep their vanilla speed)
# =======================================================
execute as @s[type=#foundations:speed_mobs] unless entity @s[nbt={IsBaby:1b}] run execute store result score @s foundations_rng run random value 1..100
execute as @s[type=#foundations:speed_mobs] unless entity @s[nbt={IsBaby:1b}] run function foundations:mobs/speed_logic

# =======================================================
# 3. ATTACK (From tier 1)
# =======================================================
execute as @s[type=#foundations:attack_mobs] if score @s foundations_stage matches 1.. run execute store result score @s foundations_rng run random value 1..100
execute as @s[type=#foundations:attack_mobs] if score @s foundations_stage matches 1.. run function foundations:mobs/attack_logic

# =======================================================
# 4. ARMOR (From tier 2)
# =======================================================
execute as @s[type=#foundations:armor_mobs] if score @s foundations_stage matches 2.. run execute store result score @s foundations_rng run random value 1..100
execute as @s[type=#foundations:armor_mobs] if score @s foundations_stage matches 2.. run function foundations:mobs/armor_logic

# The tier and attributes are fixed for this mob from this point onward.
tag @s add foundations_evolved

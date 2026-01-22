scoreboard players operation #temp foundations_tick = #current_tick foundations_tick
scoreboard players operation #temp foundations_tick %= #particle_rate foundations_tick

# Draws Particles
execute if score #temp foundations_tick matches 0 at @e[tag=foundations_indicator_speed] run particle minecraft:cloud ~ ~0.1 ~ 0.2 0.0 0.2 0.01 2
execute if score #temp foundations_tick matches 0 at @e[tag=foundations_indicator_attack] run particle minecraft:copper_fire_flame ~ ~1.5 ~ 0.15 0.3 0.15 0.02 1
execute if score #temp foundations_tick matches 0 at @e[tag=foundations_indicator_armor] run particle minecraft:trial_spawner_detection_ominous ~ ~1.0 ~ 0.3 0.5 0.3 0.0 1
execute store result score #world_days foundations_days run time query day
execute store result score #current_tick foundations_tick run time query gametime

# Evolve New Mobs
execute as @e[type=!player, tag=!foundations_evolved] run function foundations:mobs/evolve

# Visual Indicators
function foundations:mobs/render_particles
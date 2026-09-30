execute store result score #current_tick foundations_tick run time query gametime

# Evolve new mobs when a non-spectator player is close enough to establish their tier.
execute as @e[type=!player, tag=!foundations_evolved] at @s if entity @a[distance=..32,gamemode=!spectator] run function foundations:mobs/evolve

# Visual Indicators
function foundations:mobs/render_particles

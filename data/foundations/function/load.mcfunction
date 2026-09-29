# Dynamic Difficulty
scoreboard objectives add foundations_days dummy
scoreboard objectives add foundations_rng dummy
scoreboard objectives add foundations_tick dummy
scoreboard players set #particle_rate foundations_tick 15

# Remove residual legacy stick components from existing items once.
execute unless data storage foundations:state legacy_stick_cleanup run function foundations:cleanup_legacy_sticks

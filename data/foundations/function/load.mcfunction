# Dynamic Difficulty
scoreboard objectives add foundations_days dummy
scoreboard objectives add foundations_rng dummy
scoreboard objectives add foundations_tick dummy
scoreboard players set #particle_rate foundations_tick 15

# Fire Plough
scoreboard objectives add foundations_range dummy
scoreboard objectives add foundations_mode dummy
scoreboard objectives add foundations_result dummy
advancement revoke @a only foundations:fire_plough
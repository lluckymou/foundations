scoreboard players remove @s foundations_range 1
execute if score @s foundations_range matches ..0 run return 0

execute if block ~ ~ ~ #minecraft:replaceable positioned ^ ^ ^0.1 run function foundations:fire_plough/raycast
execute unless block ~ ~ ~ #minecraft:replaceable run function foundations:fire_plough/hit
execute unless block ~ ~ ~ #minecraft:replaceable run scoreboard players set @s foundations_result -1
execute if score @s foundations_result matches -1 run return fail

execute unless block ~ ~-1 ~ #foundations:friction_surfaces run scoreboard players set @s foundations_result -1
execute if score @s foundations_result matches -1 run return fail

scoreboard players set @s foundations_result 0

from terrain.terrain_type import *
from characters.soldier import Soldier
from characters.jedi import Jedi
from characters.clan import Clan
from army.army import Army
from map.map import Map
from map.field import *
from characters.character_type import CharacterType
from army.army_deploy import ArmyDeploy

m = Map(400, 400)
m.assign_type(TerrainType.FOREST)
# print(m)

deploy = ArmyDeploy.HORIZONTAL
rsize = 63
bsize = 494
a = Army(Clan.BLUE)
a.army_type = CharacterType.SPARTAN
# a.deploy = ArmyDeploy.HORIZONTAL
a.deploy = ArmyDeploy.TRIANGLE
a.createArmy(bsize)

b = Army(Clan.RED)
b.army_type = CharacterType.T_REX
b.deploy = ArmyDeploy.VERTICAL
b.createArmy(rsize)

launch(m, a, b)

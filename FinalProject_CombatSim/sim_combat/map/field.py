import pygame, sys
from pygame import *
from map.map import Map
from army.army import Army

WIDTH = 480
HEIGHT = 480
WHITE = (255, 255, 255)     # RGB
BLACK = (0, 0, 0)           # RGB
RED = (255, 0, 0)           # RGB
BLUE = (0, 0, 255)          # RGB


def launch(field: Map, blue: Army, red: Army) -> None:
    pygame.init()
    screen = display.set_mode((field.width*2, field.height*2), 0, 32)
    display.set_caption("CRAZY COMBAT SIM")
    screen.fill(WHITE)
    timer = pygame.time.Clock()
    abb = 0
    while True:
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()
        timer.tick(30)  # 60 times per second you can do the math for 17 ms
        screen.fill(WHITE)
        drawArmy(screen, blue, BLUE)
        drawArmy(screen, red, RED)
        display.update()
        if(blue.alive and red.alive):
            blue.step(red)
        if(blue.alive and red.alive):
            red.step(blue)
        if(not blue.alive or not red.alive):
            if red.alive:
                print("====RED ARMY WON=====")
                print(red._size, red.army_type, "UNITS SURVIVED!!!" )
            else:
                print("=====BLUE ARMY WON=====")
                print(blue._size, blue.army_type, "UNITS SURVIVED!!!" )
            break
        print("FRAME:", abb)
        print("BLUE UNITS LEFT:", blue._size)
        print("RED UNITS LEFT:", red._size)
        print("=======================================================================")
        abb += 1



def drawArmy(screen, army: Army, color: (int, int, int)) -> None:
    for sl in army.army:
        if(sl.alive):
            pos_on_screen = (int(sl.x)*2, int(sl.y)*2)
            draw.circle(screen, color, pos_on_screen, 2)
        else:
            pos_on_screen = (int(sl.x)*2, int(sl.y)*2)
            draw.circle(screen, BLACK, pos_on_screen, 2)

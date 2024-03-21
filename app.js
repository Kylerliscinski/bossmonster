console.log('connected')

const heroes = [
    {
        name: 'Prev',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Kyler',
        type: 'elf',
        damage: 10,
        health: 50
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

function hitBoss() {
    let currentHealth
    currentHealth = boss.health
    boss.health -= 20
    if (boss.health < 0) boss.health = 0
}

setInterval(bossAttack, 500)

function bossAttack() {
    heroes.forEach(hero => {
        hero.health -= 1
        console.log(hero.name, hero.health)
    })
}
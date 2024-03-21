console.log('connected')

const heroes = [
    {
        player: 1,
        name: 'Prev',
        type: 'dwarf',
        damage: 5,
        health: 100,
        gold: 0,
        level: 1,
    },
    {
        player: 2,
        name: 'Kyler',
        type: 'elf',
        damage: 10,
        health: 50,
        gold: 0,
        level: 1,
    }
]

const boss = {
    name: 'False Knight',
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}


function hitBoss() {
    let currentHealth
    currentHealth = boss.health
    boss.health -= 20
    if (boss.health <= 0) boss.health = 0
    checkBoss()
    console.log('Boss Health', boss.health)

    drawBoss()
}

// setInterval(bossAttack, 5000)

function bossAttack() {
    heroes.forEach(hero => {
        hero.health -= boss.damage
        if (hero.health <= 0) {
            hero.health = 0
        }
    })
    console.log('Boss Damage', boss.damage)

    drawPlayers()
}


function checkBoss() {
    if (boss.health <= 0) {
        boss.damage = boss.damage * 2
        // boss.health = 100
    }
    console.log('Boss Damage', boss.damage)

    getReward()
}

function drawPlayers() {
    heroes.forEach(hero => {
        if (hero.player == 1) {
            let p1NameElm = document.getElementById('p1name')
            let p1HPElm = document.getElementById('p1hp')
            let p1GoldElm = document.getElementById('p1gold')
            let p1LevelElm = document.getElementById('p1level')

            p1NameElm.innerText = `Name: ${hero.name}`
            p1HPElm.innerText = `Health: ${hero.health.toString()}`
            p1GoldElm.innerText = `Gold: ${hero.gold.toString()}`
            p1LevelElm.innerText = `Level: ${hero.level}`
        }
        if (hero.player == 2) {
            let p2NameElm = document.getElementById('p2name')
            let p2HPElm = document.getElementById('p2hp')
            let p2GoldElm = document.getElementById('p2gold')
            let p2LevelElm = document.getElementById('p2level')

            p2NameElm.innerText = `Name: ${hero.name}`
            p2HPElm.innerText = `Health: ${hero.health.toString()}`
            p2GoldElm.innerText = `Gold: ${hero.gold.toString()}`
            p2LevelElm.innerText = `Level: ${hero.level}`
        }
    }
    )
}


function drawBoss() {
    let bossNameElm = document.getElementById('bossName')
    let bossHPElm = document.getElementById('bossHP')

    bossNameElm.innerText = `Name: ${boss.name}`
    bossHPElm.innerText = `HP: ${boss.health.toString()}`
}

function getReward() {
    heroes.forEach(hero => {
        if (boss.health <= 0) {
            hero.gold += boss.damage * 2
            console.log(hero.gold);
        }
    })
    drawPlayers()
}

function buyPotion(player, value) {
    let playerSelected = heroes[player]
    if (playerSelected.gold > value) {
        playerSelected.health += value
        playerSelected.gold -= value
    }
    drawPlayers()
}

drawPlayers()
drawBoss()
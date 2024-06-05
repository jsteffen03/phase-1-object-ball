function gameObject(){
    let obj =  {
        home:{
            teamName:"Brooklyn Nets",
            colors:[
                "Black",
                "White"
            ],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                }
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:[
                "Turquoise",
                "Purple"
            ],
            players:{
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2
                },
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10
                },
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5
                },            
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12
                },
            }
        }
     }
     return obj;
}

gameObject()

function numPointsScored(name) {
    let game = gameObject();  
        for (let teamKey in game) {
           if (game[teamKey]["players"][name]){
            return game[teamKey]["players"][name]["points"]
           }
    }
}

function shoeSize(name) {
    let game = gameObject();  
        for (let teamKey in game) {
           if (game[teamKey]["players"][name]){
            return game[teamKey]["players"][name]["shoe"]
           }
    }
}

function teamColors(teamName) {
    let game = gameObject();  
        for (let teamKey in game) {
           if (game[teamKey]["teamName"] === teamName){
            return game[teamKey]["colors"]
           }
    }
}

function teamNames(){
    const game = gameObject();

    const return_arr = []
    for (let teamKey in game) {
        return_arr.push(game[teamKey]["teamName"])
    }
    return return_arr
}

function playerNumbers(teamName){
    const game = gameObject()

    return_arr = []

    for (let teamKey in game) {
        if (game[teamKey]["teamName"] === teamName){
            for (let player in game[teamKey]["players"]){
                return_arr.push(game[teamKey]["players"][player]["number"])
            }
        }
    }
    return return_arr
}

function playerStats(playerName){
    const game = gameObject()

    for (let teamKey in game){
        if(game[teamKey]["players"][playerName]){
        return game[teamKey]["players"][playerName]
        }
    }

}

function bigShoeRebounds(){
    const game = gameObject()

    let currentBiggestShoeSize = 0
    let currentPlayer = undefined

    for(let teamKey in game){
        for(player in game[teamKey]["players"]){
            if (game[teamKey]["players"][player]["shoe"] > currentBiggestShoeSize){
                currentPlayer = game[teamKey]["players"][player]
                currentBiggestShoeSize = game[teamKey]["players"][player]["shoe"]
            }
        }
    }
    return currentPlayer["rebounds"]
}

function mostPointsScored(){
    const game = gameObject()

    let currentMostPoints = 0
    let currentPlayer = undefined

    for(let teamKey in game){
        for(player in game[teamKey]["players"]){
            if(game[teamKey]["players"][player]["points"] > currentMostPoints){
                currentPlayer = player
                currentMostPoints = game[teamKey]["players"][player]["points"]
            }
        }
    }
    return currentPlayer
}

const score = numPointsScored("Ben Gordon")
const shoes = shoeSize("Ben Gordon")
const colors = teamColors("Charlotte Hornets")
const teams = teamNames()
const numbers = playerNumbers("Charlotte Hornets")
const stats = playerStats("Ben Gordon")
const bigShoe = bigShoeRebounds()
const mostPoints = mostPointsScored()

console.log(score)
console.log(shoes)
console.log(colors)
console.log(teams)
console.log(numbers)
console.log(stats)
console.log(bigShoe)
console.log(mostPoints)
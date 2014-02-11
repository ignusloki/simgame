traits = {
    "NEGATIVE TRAITS": {
        "Christian Parents": {
            description: "Both of your parents really love Jesus, and believe you should too. You lose your Sunday mornings to church.",
            effect: [
                "LOSE SUN 9AM-12AM"
            ],
            required: {
                age: "High-School"
            },
            forbidden: {}
        }
    },
    "MIXED TRAITS": {
        "Egotistic": {
            description: "You're amazing at everything, or at least you like to think so. You gain slight bonuses to several stats, but take a big hit to your Charisma.",
            effect: [
                "MOD INT +1",
                "MOD ATR +1",
                "MOD END +1",
                "MOD CHA -3"
            ],
            required: {},
            forbidden: {}
        },
        "Computer Nerd": {
            description: "You've spent years piddling around on computers, and neglecting everything else to boot. Your Intelligence is much higher, but at the cost to your Attractiveness and Charisma.",
            effect: [
                "MOD INT +4",
                "MOD CHA -2",
                "MOD ATR -1"
            ],
            required: {},
            forbidden: {}
        }
    },
    "POSITIVE TRAITS": {
        "Loner": {
            description: "You don't have much of a social life, and you like it that way. Your Socializing need decays more slowly.",
            effect: ["DECAY SOC -50%"],
            requirements: {},
            forbidden: {
                traits: {}
            }
        }
    }
};
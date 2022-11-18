const prompt = require("prompt")

async function ConvertBinary(input) {
    
    var integer = parseInt(input, 2)

    console.log(integer)

}


async function UserInput() {
    prompt.start()

    var number = await prompt.get({
        type: "string",
        message: "Enter a Binary number : ",
        name: "num"
    })

    ConvertBinary(number.num)
}

UserInput()
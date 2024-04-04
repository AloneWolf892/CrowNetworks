$(document).ready(() => {
    const UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const LowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const Numbers = "0123456789"

    $("#github-link").on("click", () => {
        window.open("https://github.com/AloneWolf892", "_newtab");
    })
    $("#twitter-link").on("click", () => {
        window.open("https://twitter.com/AloneWolf892", "_newtab")
    })
    $("#password-input").on("click", () => {
        const length = 8
        let password = ""

        for(let position = 0; position < length; position++) {
           if (position === 0) {
               const random = UpperCaseChars.charAt(Math.floor(Math.random() * UpperCaseChars.length))
               password += random
           } else if (position >= 1 && position <= 2) {
               const random = LowerCaseChars.charAt(Math.floor(Math.random() * LowerCaseChars.length))
               password += random
           } else if (position > 2) {
               const random = Numbers.charAt(Math.floor(Math.random() * Numbers.length))
               password += random
           }
        }
        $("#password-output").val(password)
    })
    $("#password-output").on("click", (event) => {
        navigator.clipboard.writeText($("#password-output").val());
    })
})


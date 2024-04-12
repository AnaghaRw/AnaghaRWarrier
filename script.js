function extractTextAfterTransition() {
    var inputText = [" Hi there,", "I'm Anagha R", "Warrier"]; 
    var delay = 100
    var totalChars = inputText.join('').length;

    var previousLineChars = 0;

    inputText.forEach(function(line, lineNumber) {
        var lineDelay = previousLineChars * delay;
        for (let i = 0; i < line.length; i++) {
            (function (extractedletter) {
                setTimeout(function () { extractText(extractedletter); }, lineDelay);
                lineDelay += delay;
            })(line[i]);
        }
        
        if (lineNumber < inputText.length - 1) {
            setTimeout(function() { extractText("<br>"); }, lineDelay);
            lineDelay += delay;
        }
        
        previousLineChars += line.length;
    });
}

function extractText(letter) {
    document.getElementById("welcomeText").innerHTML += letter;
}

window.onload = function () {
    extractTextAfterTransition();
};
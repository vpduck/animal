function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/trLHBDnpo/model.json', modelReady);
}
var dog=0;
var cat=0;
var cow=0;

 

function modelReady() {
    classifier.classify(gotResult);

}

function gotResult(error, results) {
    if (error) {
        console.error(error);

    } else {
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I Can Hear :" + results[0].label;
        document.getElementById("result_confidance").innerHTML = "Accuracy :" + results[0].confidence.toFixed(3);
        document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("result_confidance").style.color = "rgb(" + r + "," + g + "," + b + ")";

        img = document.getElementById("animal_image");
       
        

        if (results[0].label == "cat") {
            
            img.src = "giphy (1).gif";
          
            
        } else if (results[0].label == "dog") {
            img.src = "giphy-downsized-large.gif";
           
        } else if (results[0].label == "cow") {
           
            img.src = "giphy (2).gif";
            
        } 
        

    }

}
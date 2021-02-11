Webcam.set({

    width: 340,
    height: 340,
    image_quality: 'png',
    png_quality: 100
})

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){

    Webcam.snap(function(snapshot){
        document.getElementById("result").innerHTML = "<img id = 'picture' src = '" + snapshot + "'>";
    })
}

console.log(ml5.version)

    model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nS_YeUI9a/model.json',modelloded);
     function modelloded(){

        console.log("model loded successfully");
     }


    function Identify(){

        image = document.getElementById("picture");
        model.classify(image, gotresult);
    }

    function gotresult(error, results){

        if(error){
            console.error(error)
        }  
         else{
             console.log(results)
             document.getElementById("object").innerHTML = results[0].label
             document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(2);
         }
    };
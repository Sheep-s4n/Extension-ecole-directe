chrome.storage.local.get(["FirstTimeUsingTheExtension"] , (responce) => {
    const Rep = responce.FirstTimeUsingTheExtension
    console.log(Rep)
    if (Rep === undefined){
        chrome.storage.sync.set({ColorChoosen : "#0e3e85"})
        chrome.storage.sync.set({ColorChoosen2 : "#0f8fd1"})
        chrome.storage.sync.set({ColorChoosen3 : "rgb(255, 255, 255)"})
        let obj1 = JSON.stringify({Active : true, Color : "#0e3e85" , Equiped : true})
        chrome.storage.sync.set({choosenColor1 : obj1})
        let obj2 = JSON.stringify({Active : true, Color : "#0f8fd1" , Equiped : true})
        chrome.storage.sync.set({choosenColor2 : obj2})
        chrome.storage.local.set({Parameters : {BackgroundColorChecked: true, Color1Checked: true,Color2Checked: true ,ProfilePicture: true , Multicolor : false , AutoLogIn : false}})
        chrome.storage.local.set({customImage : "https://th.bing.com/th/id/R.ea411ebf6153f5f3201aa5a134949f3e?rik=TMsZisGUrPRPSA&pid=ImgRaw&r=0"})
        chrome.storage.local.set({ImageProvenence : "Link"})
        chrome.storage.local.set({FirstTimeUsingTheExtension : "nope"})
        window.location.reload()
    }
})



chrome.storage.local.get(["FirstTimeUsingTheExtension"] , (responce) => { 
if (responce.FirstTimeUsingTheExtension !== undefined){


    function ChangeLogoToTipp(DoIt){
    const LOGO =  document.querySelector("#Elogo")
    const TEXTCONTAINER = document.querySelector(".HelpText")
    if (DoIt){
        LOGO.style.visibility = "hidden";
        TEXTCONTAINER.innerText = "Recharger Ecole directe pour voir les effets des changements"
    }else {
        LOGO.style.visibility = "visible";
        TEXTCONTAINER.innerText = ""
    }
    
    }

    let color = "#ffffff"

    let limitTextSize = (string , MaxChar , type ) => {
    let finaloutput = ""
    let finish = false

    let IndexOfTypeStarting = String(string).indexOf("."+type)
    if (IndexOfTypeStarting === -1 && type === "jpeg"){
        IndexOfTypeStarting = String(string).indexOf(".jpg")
    }
    let extensions = [".gif",".jpeg",".png",".jpg",".jfif",".svg",".eps" , ".psd" , ".tiff"]
    if (IndexOfTypeStarting === -1){
        for (let i in extensions){
            let CurrentExten = extensions[i]
            if (String(string).indexOf(CurrentExten) !== -1){
                IndexOfTypeStarting = String(string).indexOf(CurrentExten)
                break
            }
        }
        if (IndexOfTypeStarting === -1){
            IndexOfTypeStarting === 15
        }
    }
    console.log(string ,IndexOfTypeStarting , type)
    for (let i = 0 ; i < MaxChar ; i ++){
        let currentChar = string[i]
        if (typeof currentChar !== "undefined"){
        finaloutput += currentChar
        }else {
            finish = true
        }
        if (i === MaxChar - 1 && i + 1 >= IndexOfTypeStarting){
            return string
        }
    }
    if (!finish && finaloutput !== string){
    finaloutput += "..."
    }

    return finaloutput
    }


    let LoadingAnimation = document.createElement("div")
    LoadingAnimation.innerHTML = 
    `<div class="align"><div class="loadingio-spinner-ellipsis-8eibfvar66v"><div class="ldio-jswtrtkp4z">
    <div></div><div></div><div></div><div></div><div></div>
    </div></div>
    <style type="text/css">
    @keyframes ldio-jswtrtkp4z {
    0% { transform: translate(5px,39px) scale(0); }
    25% { transform: translate(5px,39px) scale(0); }
    50% { transform: translate(5px,39px) scale(1); }
    75% { transform: translate(39px,39px) scale(1); }
    100% { transform: translate(73px,39px) scale(1); }
    }
    @keyframes ldio-jswtrtkp4z-r {
    0% { transform: translate(73px,39px) scale(1); }
    100% { transform: translate(73px,39px) scale(0); }
    }
    @keyframes ldio-jswtrtkp4z-c {
    0% { background: #00aaff }
    25% { background: #00c8ff }
    50% { background: #00aaff }
    75% { background: #00c8ff }
    100% { background: #00aaff }
    }
    .ldio-jswtrtkp4z div {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transform: translate(39px,39px) scale(1);
    background: #00aaff;
    animation: ldio-jswtrtkp4z 2.4390243902439024s infinite cubic-bezier(0,0.5,0.5,1);
    }
    .ldio-jswtrtkp4z div:nth-child(1) {
    background: #00c8ff;
    transform: translate(73px,39px) scale(1);
    animation: ldio-jswtrtkp4z-r 0.6097560975609756s infinite cubic-bezier(0,0.5,0.5,1), ldio-jswtrtkp4z-c 2.4390243902439024s infinite step-start;
    }.ldio-jswtrtkp4z div:nth-child(2) {
    animation-delay: -0.6097560975609756s;
    background: #00aaff;
    }.ldio-jswtrtkp4z div:nth-child(3) {
    animation-delay: -1.2195121951219512s;
    background: #00c8ff;
    }.ldio-jswtrtkp4z div:nth-child(4) {
    animation-delay: -1.8292682926829267s;
    background: #00aaff;
    }.ldio-jswtrtkp4z div:nth-child(5) {
    animation-delay: -2.4390243902439024s;
    background: #00c8ff;
    }
    .loadingio-spinner-ellipsis-8eibfvar66v {
    width: 98px;
    height: 98px;
    display: inline-block;
    overflow: hidden;
    background: none;
    }
    .ldio-jswtrtkp4z {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.98);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
    }
    .ldio-jswtrtkp4z div { box-sizing: content-box; }
    /* generated by https://loading.io/ */
    </style><div>`

    LoadingAnimation.classList = "Loading"



    let buttons = document.querySelectorAll(".color")
    let popup = document.querySelector(".PopUpUi");
    let background = document.querySelector(".Transparent");
    let saveValue = function(active,color,choosen){
        this.Active = active
        this.Color = color
        this.Equiped = choosen
    }



    function findIfCustomColorIsSelected1(){
        let exportData = new saveValue(false ,"",false)
        chrome.storage.sync.set({choosenColor1 : JSON.stringify(exportData)}, function(){ // changer
            console.log("saved choosen color data")
            ChangeLogoToTipp(true)
        })
        if (typeof document.querySelector(".CustomColor1").classList[1] !== "undefined"){ // changer
        let buton =  document.querySelector(".color") // changer
        buton.style = `height: 20px;     width: 20px;     padding: 0px;   border-radius: 3px;  border: 2px solid rgb(0, 0, 0); background-color: ${buton.style.backgroundColor}`
        chrome.storage.sync.set({ColorChoosen : buton.style.backgroundColor},function(){
            console.log("saved color")
            ChangeLogoToTipp(true)
        })
        }
    }

    function findIfCustomColorIsSelected2(){
        let exportData = new saveValue(false ,"",false)
        chrome.storage.sync.set({choosenColor2 : JSON.stringify(exportData)}, function(){ // changer
            console.log("saved choosen color data 2")
            ChangeLogoToTipp(true)
        })
        if (typeof document.querySelectorAll(".second")[6].classList[2] !== "undefined"){ // changer
        let buton =  document.querySelector(".color2") // changer
        buton.style = `height: 20px;     width: 20px;     padding: 0px;   border-radius: 3px;  border: 2px solid rgb(0, 0, 0); background-color: ${buton.style.backgroundColor}`
        chrome.storage.sync.set({ColorChoosen2 : buton.style.backgroundColor},function(){
            console.log("saved color")
            ChangeLogoToTipp(true)
        })
        }
    }

    // first buttons
    var colorSaved;
    chrome.storage.sync.get(["ColorChoosen"],function(storage){
        colorSaved = storage.ColorChoosen;
        buttons.forEach(function(button){
            if (button.style.backgroundColor === colorSaved){
                button.style = `height: 20px;     width: 20px;     padding: 0px;  border-radius: 3px;   border: 2px solid rgb(0, 0, 0); background-color: ${button.style.backgroundColor};`
            }
        })
    })



        buttons.forEach(function(button){
            let color = button.innerText
            button.style  = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: rgb(${color})`
            button.innerText = ""
            
            button.onclick = function(){
                chrome.storage.sync.set({ColorChoosen : button.style.backgroundColor},function(){
                    console.log("saved color")
                    ChangeLogoToTipp(true)
                })
                buttons.forEach(function(currentbutton){
                    let color2 = currentbutton.style.backgroundColor
                    if (currentbutton.style.border === "2px solid rgb(0, 0, 0)"){
                        currentbutton.style = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: ${color2};`
                    }
                })
                // New {
                if (document.querySelector(".NewColor").style.visibility === "hidden"){
                    colorCreated.classList = "CustomColor1"
                }
                let colorOfCustomValue = document.querySelector(".CustomColor1").style.backgroundColor
                let exportData = new saveValue(true ,colorOfCustomValue,false)
                chrome.storage.sync.set({choosenColor1 : JSON.stringify(exportData)}, function(){
                    console.log("saved choosen color data")
                    ChangeLogoToTipp(true)
                })
                // }
                button.style = `height: 20px;     width: 20px;     padding: 0px;  border-radius: 3px;   border: 2px solid rgb(0, 0, 0); background-color: rgb(${color}); filter: brightness(85%);`
            }

            button.onmouseover = function(){
                if (button.style.border === "1px solid rgb(0, 0, 0)"){
                        button.style = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: rgb(${color});filter: brightness(85%);`
                    }
                else if (button.style.border === "2px solid rgb(0, 0, 0)"){
                    button.style = `height: 20px;     width: 20px;     padding: 0px;   border-radius: 3px;  border: 2px solid rgb(0, 0, 0); background-color: rgb(${color}); filter: brightness(85%);`
                }   
            }

            button.onmouseout = function(){
                if (button.style.border === "1px solid rgb(0, 0, 0)"){
                    button.style  = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: rgb(${color})` 
                }
                if (button.style.border === "2px solid rgb(0, 0, 0)"){
                    button.style = `height: 20px;     width: 20px;     padding: 0px;   border-radius: 3px;  border: 2px solid rgb(0, 0, 0); background-color: rgb(${color})`
                }   
            }
        })



    // --- secondary button

    let buttons2 = document.querySelectorAll(".color2")

    var colorSaved;
    chrome.storage.sync.get(["ColorChoosen2"],function(storage){
        colorSaved = storage.ColorChoosen2;
        buttons2.forEach(function(button){
            if (button.style.backgroundColor === colorSaved){
                button.style = `height: 20px;     width: 20px;     padding: 0px;  border-radius: 3px;   border: 2px solid rgb(0, 0, 0); background-color: ${button.style.backgroundColor};`
            }
        })
    })



    buttons2.forEach(function(button){
        let color = button.innerText
        button.style  = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: rgb(${color})`
        button.innerText = ""
        
        button.onclick = function(){
            chrome.storage.sync.set({ColorChoosen2 : button.style.backgroundColor},function(){
                console.log("saved color")
                ChangeLogoToTipp(true)
            })
            buttons2.forEach(function(currentbutton){
                let color2 = currentbutton.style.backgroundColor
                if (currentbutton.style.border === "2px solid rgb(0, 0, 0)"){
                    currentbutton.style = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: ${color2};`
                }
            })


            if (document.querySelectorAll(".NewColor")[1].style.visibility === "hidden"){
                document.querySelectorAll(".second")[6].classList = "CustomColor2 second"
            }
            let colorOfCustomValue = document.querySelectorAll(".second")[6].style.backgroundColor
            let exportData = new saveValue(true ,colorOfCustomValue,false)
            chrome.storage.sync.set({choosenColor2 : JSON.stringify(exportData)}, function(){
                console.log("saved choosen color data 2")
                ChangeLogoToTipp(true)
            })

            button.style = `height: 20px;     width: 20px;     padding: 0px;  border-radius: 3px;   border: 2px solid rgb(0, 0, 0); background-color: rgb(${color}); filter: brightness(85%);`
        }

        button.onmouseover = function(){
            if (button.style.border === "1px solid rgb(0, 0, 0)"){
                    button.style = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: rgb(${color});filter: brightness(85%);`
                }
            else if (button.style.border === "2px solid rgb(0, 0, 0)"){
                button.style = `height: 20px;     width: 20px;     padding: 0px;   border-radius: 3px;  border: 2px solid rgb(0, 0, 0); background-color: rgb(${color}); filter: brightness(85%);`
            }   
        }

        button.onmouseout = function(){
            if (button.style.border === "1px solid rgb(0, 0, 0)"){
                button.style  = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: rgb(${color})` 
            }
            if (button.style.border === "2px solid rgb(0, 0, 0)"){
                button.style = `height: 20px;     width: 20px;     padding: 0px;   border-radius: 3px;  border: 2px solid rgb(0, 0, 0); background-color: rgb(${color})`
            }   
        }
    })

    // --- BacgroundColors

    let buttons3 = document.querySelectorAll(".backgroundColor")

    var colorSaved;
    chrome.storage.sync.get(["ColorChoosen3"],function(storage){
        colorSaved = storage.ColorChoosen3;
        buttons3.forEach(function(button){
            if (button.style.backgroundColor === colorSaved){
                button.style = `height: 20px;     width: 20px;     padding: 0px;  border-radius: 3px;   border: 2px solid rgb(0, 0, 0); background-color: ${button.style.backgroundColor};`
            }
        })
    })



    buttons3.forEach(function(button){
        let color = button.innerText
        button.style  = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: rgb(${color})`
        button.innerText = ""
        
        button.onclick = function(){
            chrome.storage.sync.set({ColorChoosen3 : button.style.backgroundColor},function(){
                console.log("saved color")
                ChangeLogoToTipp(true)
            })
            buttons3.forEach(function(currentbutton){
                let color2 = currentbutton.style.backgroundColor
                if (currentbutton.style.border === "2px solid rgb(0, 0, 0)"){
                    currentbutton.style = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: ${color2};`
                }
            })
            button.style = `height: 20px;     width: 20px;     padding: 0px;  border-radius: 3px;   border: 2px solid rgb(0, 0, 0); background-color: rgb(${color}); filter: brightness(85%);`
        }

        button.onmouseover = function(){
            if (button.style.border === "1px solid rgb(0, 0, 0)"){
                    button.style = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: rgb(${color});filter: brightness(85%);`
                }
            else if (button.style.border === "2px solid rgb(0, 0, 0)"){
                button.style = `height: 20px;     width: 20px;     padding: 0px;   border-radius: 3px;  border: 2px solid rgb(0, 0, 0); background-color: rgb(${color}); filter: brightness(85%);`
            }   
        }

        button.onmouseout = function(){
            if (button.style.border === "1px solid rgb(0, 0, 0)"){
                button.style  = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: rgb(${color})` 
            }
            if (button.style.border === "2px solid rgb(0, 0, 0)"){
                button.style = `height: 20px;     width: 20px;     padding: 0px;   border-radius: 3px;  border: 2px solid rgb(0, 0, 0); background-color: rgb(${color})`
            }   
        }
    })
    // ChoosenColor1
    let addColor = document.querySelector(".NewColor")


    addColor.onclick = function(){
            popup.style.visibility = "visible"
            background.style.visibility = "visible"
    }
    document.querySelector(".exit").onclick = function(){

        popup.style.visibility = "hidden";
        background.style.visibility = "hidden" ;
    }

    let colorPicker = document.querySelector(".colorPicker")
    let button123 = document.querySelector(".Submit")
    let remove1 = document.querySelector(".removeCustomColor")
    let colorCreated = document.querySelector(".CustomColor1")

    button123.onclick = function() {
        let colorV = colorPicker.value
        document.querySelectorAll(".second")[4].value = colorV
        let box = document.querySelector(".CustomColor1");
        box.classList = "CustomColor1"
        popup.style.visibility = "hidden";
        background.style.visibility = "hidden" ;
        document.querySelector(".NewColor").style.visibility = "hidden" ;
        box.style.visibility = "visible" ;
        box.style.backgroundColor = colorV;
        remove1.style.visibility = "visible";
        let exportData = new saveValue(true ,colorV,false)
        chrome.storage.sync.set({choosenColor1 : JSON.stringify(exportData)}, function(){
            console.log("saved choosen color data")
            ChangeLogoToTipp(true)
        })

    }

    remove1.onclick = function(){
                findIfCustomColorIsSelected1()
                let box = document.querySelector(".CustomColor1")
                box.style.visibility = "hidden" ;
                box.classList = "CustomColor1"
                document.querySelector(".NewColor").style.visibility = "visible" ;
                remove1.style.visibility = "hidden" ;
    }





    colorCreated.onclick = function(){
        colorCreated.classList = "CustomColor1 CustomColor1Selected"
        buttons.forEach(function(button){
            let color = button.style.backgroundColor
            button.style = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0);background-color: ${color};`
        })
        let color = document.querySelector(".CustomColor1").style.backgroundColor
        let exportData = new saveValue(true ,color,true)
        chrome.storage.sync.set({choosenColor1 : JSON.stringify(exportData)}, function(){
            console.log("saved choosen color data")
            ChangeLogoToTipp(true)
        })
        
    }


    var ChoosenColor1;
    chrome.storage.sync.get(["choosenColor1"],function(storage){
        ChoosenColor1 = JSON.parse(storage.choosenColor1)
        if (ChoosenColor1.Active === true && ChoosenColor1.Equiped === true){
            let colorV = ChoosenColor1.Color
            console.log(colorV)
            let box = document.querySelector(".CustomColor1");
            box.classList = "CustomColor1 CustomColor1Selected"
            popup.style.visibility = "hidden";
            background.style.visibility = "hidden" ;
            document.querySelector(".NewColor").style.visibility = "hidden" ;
            box.style.visibility = "visible" ;
            box.style.backgroundColor = colorV;
            remove1.style.visibility = "visible";
            buttons.forEach(function(button){
                let BGColor = button.style.backgroundColor
                    button.style = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: ${BGColor}`
            })
        } else if (ChoosenColor1.Active === true && ChoosenColor1.Equiped === false){
            let colorV = ChoosenColor1.Color
            console.log(colorV)
            let box = document.querySelector(".CustomColor1");
            box.classList = "CustomColor1"
            popup.style.visibility = "hidden";
            background.style.visibility = "hidden" ;
            document.querySelector(".NewColor").style.visibility = "hidden" ;
            box.style.visibility = "visible" ;
            box.style.backgroundColor = colorV;
            remove1.style.visibility = "visible";
        }

    })



    // ChoosenColor2
    console.log(document.querySelectorAll(".second"))
    let background2 = document.querySelectorAll(".second")[0]
    let popup2 = document.querySelectorAll(".second")[1]
    let colorPicker2 = document.querySelectorAll(".second")[4]
    let submit2 = document.querySelectorAll(".second")[5]
    let remove2 = document.querySelectorAll(".second")[7]
    let colorCreated2 = document.querySelectorAll(".second")[6]
    let addColor2 = document.querySelectorAll(".NewColor")[1]


    addColor2.onclick = function(){
            popup2.style.visibility = "visible"
            background2.style.visibility = "visible"
    }
    document.querySelectorAll(".second")[2].onclick = function(){

        popup2.style.visibility = "hidden";
        background2.style.visibility = "hidden" ;
    }

    submit2.onclick = function(){
        let colorV = colorPicker2.value
        document.querySelector(".colorPicker").value = colorV
        let box = colorCreated2
        box.classList = "CustomColor2 second"
        popup2.style.visibility = "hidden";
        background2.style.visibility = "hidden" ;
        document.querySelectorAll(".NewColor")[1].style.visibility = "hidden" ;
        box.style.visibility = "visible" ;
        box.style.backgroundColor = colorV;
        remove2.style.visibility = "visible";
        let exportData = new saveValue(true ,colorV,false)
        chrome.storage.sync.set({choosenColor2 : JSON.stringify(exportData)}, function(){
            console.log("saved choosen color data 2")
            ChangeLogoToTipp(true)
        })
    }

    remove2.onclick = function(){
        findIfCustomColorIsSelected2()
        let box = colorCreated2
        box.style.visibility = "hidden" ;
        box.classList = "CustomColor2 second"
        addColor2.style.visibility = "visible" ;
        remove2.style.visibility = "hidden" ;
    }

    colorCreated2.onclick = function(){
        colorCreated2.classList = "CustomColor2 second CustomColor2Selected"
        buttons2.forEach(function(button){
            let color = button.style.backgroundColor
            button.style = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0);background-color: ${color};`
        })
        let color = colorCreated2.style.backgroundColor
        let exportData = new saveValue(true ,color,true)
        chrome.storage.sync.set({choosenColor2 : JSON.stringify(exportData)}, function(){
            console.log("saved choosen color data 2")
            ChangeLogoToTipp(true)
        })
        
    }

    var ChoosenColor2;
    chrome.storage.sync.get(["choosenColor2"],function(storage){
        ChoosenColor2 = JSON.parse(storage.choosenColor2)
        if (ChoosenColor2.Active === true && ChoosenColor2.Equiped === true){
            let colorV = ChoosenColor2.Color
            console.log(colorV)
            let box = colorCreated2
            box.classList = "CustomColor2 second CustomColor2Selected"
            popup2.style.visibility = "hidden";
            background2.style.visibility = "hidden" ;
            document.querySelectorAll(".NewColor")[1].style.visibility = "hidden" ;
            box.style.visibility = "visible" ;
            box.style.backgroundColor = colorV;
            remove2.style.visibility = "visible";
            buttons2.forEach(function(button){
                let BGColor = button.style.backgroundColor
                    button.style = `height: 15px;     width: 15px;     padding: 0px;     border: 1px solid rgb(0, 0, 0); background-color: ${BGColor}`
            })
        } else if (ChoosenColor2.Active === true && ChoosenColor2.Equiped === false){
            let colorV = ChoosenColor2.Color
            console.log(colorV)
            let box = colorCreated2
            box.classList = "CustomColor2 second"
            popup2.style.visibility = "hidden";
            background2.style.visibility = "hidden" ;
            document.querySelectorAll(".NewColor")[1].style.visibility = "hidden" ;
            box.style.visibility = "visible" ;
            box.style.backgroundColor = colorV;
            remove2.style.visibility = "visible";
        }

    })

    let input = document.querySelector(".AddProfilePicture")

    input.addEventListener('change', () => {
        let output = document.querySelector("#ImageOutput")
        let file1  = input.files[0]
        if (typeof file1 !== "undefined"){
            if (String(file1.type).match("image/\*")){
                output.innerHTML = ""
                const fileName = file1.name
                const FileInfoOutput = document.querySelector("#InfoAboutFile")
                FileInfoOutput.innerHTML = limitTextSize(String(fileName) , 10 , String(file1.type).slice(file1.type.indexOf("/")+ 1)).replace(/ /g , "&nbsp")
                chrome.storage.local.set({ImageName : limitTextSize(String(fileName) , 10 , String(file1.type).slice(file1.type.indexOf("/")+ 1)).replace(/ /g , "&nbsp")},function(){
                    console.log("Image Name saved")
                    ChangeLogoToTipp(true)
                })
                let reader = new FileReader(); // api qui permet de lire les fichier
                reader.readAsDataURL(file1) // facons dont le fichier sera lus
                reader.onload = () => { // quand le serveure a fini de lire le fichier
                    let ImageURL = reader.result // le contenu du fichier
                    let imageHTML = document.createElement("img")
                    imageHTML.src = ImageURL
                    imageHTML.classList = "CustomPicture"
                    imageHTML.alt = "CustomImage"
                    output.appendChild(imageHTML)
                    chrome.storage.local.set({customImage : ImageURL}, function(){
                        console.log("sucesfuly saved image")
                        ChangeLogoToTipp(true)
                    })
                    chrome.storage.local.set({ImageProvenence : "Upload"},function(){
                        console.log("Image Provenence saved")
                        ChangeLogoToTipp(true)
                    })
                }
            }else {
                output.innerHTML = "<img class='ErrorCross' alt='cross' src='cross.png'><span class='errorType'>Selectionner un fichier de type image silvouplait</span>"
                const cross = document.querySelector(".ErrorCross")
                cross.style = "cursor : pointer ; position : fixed; bottom:96px ; right : 199px; height : 15px ; width : 15px"
                document.querySelector(".ErrorCross").addEventListener("click" , ()=> {
                    chrome.storage.local.get(["customImage"], function(responce){ 
                        let ImageURL = responce.customImage
                        let imageHTML = document.createElement("img")
                        imageHTML.src = ImageURL
                        imageHTML.classList = "CustomPicture"
                        imageHTML.alt = "CustomImage"
                        output.innerHTML = ""
                        output.appendChild(imageHTML)
                    })
                })
            }
    }else {
        console.log("Mes une images !")
    }
    });




    chrome.storage.local.get(["customImage"], function(responce){
        let output = document.querySelector("#ImageOutput")
        let ImageURL = responce.customImage
        let imageHTML = document.createElement("img")
        imageHTML.src = ImageURL
        imageHTML.classList = "CustomPicture"
        imageHTML.alt = "CustomImage"
        output.appendChild(imageHTML)
        chrome.storage.local.get(["ImageProvenence"] , function(responce){
        })
    })








    document.querySelector("#SubmitURL").onclick = () => {
        const input = document.querySelector("#URLText")
        const output = document.querySelector("#ImageOutput")
        if (navigator.onLine !== false){
            let imageHTML = new Image()
            imageHTML.src = input.value
            imageHTML.classList = "CustomPicture"
            imageHTML.alt = "CustomImage"
            imageHTML.style ="visibility : hidden;"
            output.innerHTML = ""
            output.appendChild(imageHTML)
            output.appendChild(LoadingAnimation)
            imageHTML.addEventListener("load" , (e) => {
                const image = e.target
                image.style = "visibility : visible;"
                if (image.naturalHeight === 0 && image.naturalHeight === 0){
                    output.innerHTML = "<span class='errorType'><div style='display:block;height: 29px;'></div>Le lien de l'image n'est pas valide <img class='ErrorCross' alt='cross' src='cross.png'></span>"
                    
                }else {
                    document.querySelector(".Loading").remove()
                    chrome.storage.local.set({customImage : input.value}, function(){
                        console.log("sucesfuly saved image")
                        ChangeLogoToTipp(true)

                    })
                    chrome.storage.local.set({ImageProvenence : "Link"},function(){
                        console.log("Image Provenence saved")
                        ChangeLogoToTipp(true)
                    })
                    document.querySelector("#InfoAboutFile").innerHTML = ""
                }
                input.value = ""
            })
            window.setTimeout(() => {
                const image = document.querySelector(".CustomPicture")
                if (image.naturalHeight === 0 && image.naturalHeight === 0){
                    output.innerHTML = "<span class='errorType'><div style='display:block;height: 29px;'></div>Le lien de l'image n'est pas valide <img class='ErrorCross' alt='cross' src='cross.png'></span>" //<img class='ErrorCross' alt='cross' src='cross.png'>
                    const cross = document.querySelector(".ErrorCross")
                    cross.style = "cursor : pointer ; position : fixed; bottom:96px ; right : 199px; height : 15px ; width : 15px"
                    document.querySelector(".ErrorCross").addEventListener("click" , ()=> {
                        chrome.storage.local.get(["customImage"], function(responce){ 
                            let ImageURL = responce.customImage
                            let imageHTML = document.createElement("img")
                            imageHTML.src = ImageURL
                            imageHTML.classList = "CustomPicture"
                            imageHTML.alt = "CustomImage"
                            output.innerHTML = ""
                            output.appendChild(imageHTML)
                        })
                    })
                }
            },2500)
        }else {
            output.innerHTML = "<img class='ErrorCross' alt='cross' src='cross.png'><img src=\"Icon/No_Wifi_icon.png\" alt='No Wifi =(' style='height : 60px ; width : 60px;display: block;margin-left: auto;margin-right: auto;'><span class='errorType' style='font-size : 15px'>Impossible de charger l'image sans connexion internet</span>"
            const cross = document.querySelector(".ErrorCross")
            cross.style = "cursor : pointer ; position : fixed; bottom:96px ; right : 199px; height : 15px ; width : 15px"
            document.querySelector(".ErrorCross").addEventListener("click" , ()=> {
                chrome.storage.local.get(["customImage"], function(responce){ 
                    let ImageURL = responce.customImage
                    let imageHTML = document.createElement("img")
                    imageHTML.src = ImageURL
                    imageHTML.classList = "CustomPicture"
                    imageHTML.alt = "CustomImage"
                    output.innerHTML = ""
                    output.appendChild(imageHTML)
                })
            })
        }
    }
        

    chrome.storage.local.get(["ImageName"] , function(responce){
        let imageName = responce.ImageName
        chrome.storage.local.get(["ImageProvenence"] , function(responce){
            if(responce.ImageProvenence !== "Link"){
                document.querySelector("#InfoAboutFile").innerHTML = imageName
            }
        })
    })


    // bug --> quand on change de couleure l image de fonctionne pas la premiere fois


    document.querySelector("#URLText").addEventListener("keydown", (e) => {
        console.log(e)
        if (e.key === "Enter"){
            const input = document.querySelector("#URLText")
            const output = document.querySelector("#ImageOutput")
            if (navigator.onLine !== false){
                let imageHTML = new Image()
                imageHTML.src = input.value
                imageHTML.classList = "CustomPicture"
                imageHTML.alt = "CustomImage"
                imageHTML.style ="visibility : hidden;"
                output.innerHTML = ""
                output.appendChild(imageHTML)
                output.appendChild(LoadingAnimation)
                imageHTML.addEventListener("load" , (e) => {
                    const image = e.target
                    image.style = "visibility : visible;"
                    if (image.naturalHeight === 0 && image.naturalHeight === 0){
                        output.innerHTML = "<span class='errorType'><div style='display:block;height: 29px;'></div>Le lien de l'image n'est pas valide <img class='ErrorCross' alt='cross' src='cross.png'></span>"
                        
                    }else {
                        document.querySelector(".Loading").remove()
                        chrome.storage.local.set({customImage : input.value}, function(){
                            console.log("sucesfuly saved image")
                            ChangeLogoToTipp(true)
        
                        })
                        chrome.storage.local.set({ImageProvenence : "Link"},function(){
                            console.log("Image Provenence saved")
                            ChangeLogoToTipp(true)
                        })
                        document.querySelector("#InfoAboutFile").innerHTML = ""
                    }
                    input.value = ""
                })
                window.setTimeout(() => {
                    const image = document.querySelector(".CustomPicture")
                    if (image.naturalHeight === 0 && image.naturalHeight === 0){
                        output.innerHTML = "<span class='errorType'><div style='display:block;height: 29px;'></div>Le lien de l'image n'est pas valide <img class='ErrorCross' alt='cross' src='cross.png'></span>"
                        const cross = document.querySelector(".ErrorCross")
                        cross.style = "cursor : pointer ; position : fixed; bottom:96px ; right : 199px; height : 15px ; width : 15px"
                        document.querySelector(".ErrorCross").addEventListener("click" , ()=> {
                            chrome.storage.local.get(["customImage"], function(responce){ 
                                let ImageURL = responce.customImage
                                let imageHTML = document.createElement("img")
                                imageHTML.src = ImageURL
                                imageHTML.classList = "CustomPicture"
                                imageHTML.alt = "CustomImage"
                                output.innerHTML = ""
                                output.appendChild(imageHTML)
                            })
                        })
                    }
                },2500)
        }else {
            output.innerHTML = "<img class='ErrorCross' alt='cross' src='cross.png'><img src=\"Icon/No_Wifi_icon.png\" alt='No Wifi =(' style='height : 60px ; width : 60px;display: block;margin-left: auto;margin-right: auto;'><span class='errorType' style='font-size : 15px'>Impossible de charger l'image sans connexion internet</span>"
            const cross = document.querySelector(".ErrorCross")
            cross.style = "cursor : pointer ; position : fixed; bottom:96px ; right : 199px; height : 15px ; width : 15px"
            document.querySelector(".ErrorCross").addEventListener("click" , ()=> {
                chrome.storage.local.get(["customImage"], function(responce){ 
                    let ImageURL = responce.customImage
                    let imageHTML = document.createElement("img")
                    imageHTML.src = ImageURL
                    imageHTML.classList = "CustomPicture"
                    imageHTML.alt = "CustomImage"
                    output.innerHTML = ""
                    output.appendChild(imageHTML)
                })
            })
        }
    }
    })


    document.querySelector(".Settings").addEventListener("click" , (e) => {
        const UI = document.querySelector("#ParamUI")
        const BACKGROUNDUI = document.querySelector("#ParamTransparent")

        UI.style.visibility = "visible"
        BACKGROUNDUI.style.visibility = "visible"

        
    })

    document.querySelector("#ParamUI > div").addEventListener("click" , (e) => {
        const UI = document.querySelector("#ParamUI")
        const BACKGROUNDUI = document.querySelector("#ParamTransparent")

        UI.style.visibility = "hidden"
        BACKGROUNDUI.style.visibility = "hidden"
    })





    document.addEventListener("input" , (e) => {
    if (e.target.value === "on"){
        let Inputs = document.querySelectorAll(".ParamCheckBox")
        let JSON = {
            Color1Checked : "false",
            Color2Checked : "false",
            BackgroundColorChecked : "false",
            ProfilePicture : "false",
            Multicolor : "false",
            AutoLogIn : "false",
        }
            Inputs.forEach((Input) => {
                let Value = Input.checked
                let Display;
                if (Value === true){
                    Display = "block"
                }else {
                    Display = "none"
                }
                if (Input.getAttribute("id") === "Color1CheckBox"){
                    JSON.Color1Checked = Value
                    document.querySelector("#FirstPart").style.display = Display
                }else if (Input.getAttribute("id") === "Color2CheckBox"){
                    JSON.Color2Checked = Value
                    document.querySelector("#SecondPart").style.display = Display
                }else if (Input.getAttribute("id") === "BackgroundColorCheckBox"){
                    JSON.BackgroundColorChecked = Value
                    document.querySelector("#ThirdPart").style.display = Display
                }else if (Input.getAttribute("id") === "ImageColorCheckBox"){
                    JSON.ProfilePicture = Value
                    document.querySelector("#FourthPart").style.display = Display
                }else if (Input.getAttribute("id") === "MulticolorCheckBox"){
                    JSON.Multicolor = Value;
                }else if (Input.getAttribute("id") === "auto-log-in"){
                    JSON.AutoLogIn = Value;
                }
            })
        chrome.storage.local.set({Parameters : JSON})
        ChangeLogoToTipp(true)
    }
    })

    function ChangeMulticolor(){
        document.querySelector("#MulticolorCheckBox").checked = false
    }
    function ChangeBasicColor(){
        document.querySelector("#Color1CheckBox").checked = false
        document.querySelector("#Color2CheckBox").checked = false
    }
    document.querySelector("#Color1CheckBox").addEventListener("click" , ChangeMulticolor)
    document.querySelector("#Color2CheckBox").addEventListener("click" , ChangeMulticolor)
    document.querySelector("#MulticolorCheckBox").addEventListener("click" , ChangeBasicColor)

    function ReturnDisplay(Boolean){
        let Visibility;
        if (Boolean === true){
            Visibility = "block"
        }else {
            Visibility = "none"
        }
        return Visibility
    }

    chrome.storage.local.get(["Parameters"], function(responce){
        const DATA = responce.Parameters
        console.log(DATA)
        let Inputs = document.querySelectorAll(".ParamCheckBox")
        Inputs.forEach((Input) => {
            if (Input.getAttribute("id") === "Color1CheckBox"){
                Input.checked = DATA.Color1Checked
                document.querySelector("#FirstPart").style.display = ReturnDisplay(DATA.Color1Checked)
            }else if (Input.getAttribute("id") === "Color2CheckBox"){
                Input.checked = DATA.Color2Checked
                document.querySelector("#SecondPart").style.display = ReturnDisplay(DATA.Color2Checked)
            }else if (Input.getAttribute("id") === "BackgroundColorCheckBox"){
                Input.checked = DATA.BackgroundColorChecked
                document.querySelector("#ThirdPart").style.display = ReturnDisplay(DATA.BackgroundColorChecked)
            }else if (Input.getAttribute("id") === "ImageColorCheckBox"){
                Input.checked = DATA.ProfilePicture
                document.querySelector("#FourthPart").style.display = ReturnDisplay(DATA.ProfilePicture)
            }else if (Input.getAttribute("id") === "MulticolorCheckBox"){
                Input.checked = DATA.Multicolor
            }else if (Input.getAttribute("id") === "auto-log-in"){
                Input.checked = DATA.AutoLogIn
            }
            
        })
    })


    

    setInterval(()=> {
        if (navigator.onLine === false){
            document.querySelector(".no-wifi").style.visibility = "visible"
        }else {
            document.querySelector(".no-wifi").style.visibility = "hidden"
        }
    },1000)

   /* let degrees = 1;
    let animationStarted = false
    let animation2Started = false
    document.querySelector("body > .Settings").addEventListener("mouseover" ,(e) => {
        if (animation2Started === false){
                degrees =1
                const BUTON = e.target
                animationStarted = true
                let animation = setInterval(() => {
                    degrees *= 1.05;
                    if (degrees > 360){
                        animationStarted = false
                            clearInterval(animation)
                    }else {
                        BUTON.style.transform = `rotate(${degrees}deg)`;
                    }
                }, 5);
        }
    })

    document.querySelector("body > .Settings").addEventListener("mouseout" ,(e) => { 
        if (animationStarted === false){
            const BUTON = e.target
            let degrees2 = 348.912;
            animation2Started = true
        let anim = setInterval(() => {
                degrees2 /= 1.05;
                if (degrees2 <= 1){
                    BUTON.style.transform = `rotate(0deg)`;
                    animation2Started = false
                    clearInterval(anim)
                }else{
                    BUTON.style.transform = `rotate(${degrees2}deg)`;
                }
        }, 5);
        }
    })*/

}})

// coded by LeMouton_noob
// me after looking at this code after 1 year -> this is trash 
if (new Date().getDate() === 1 && new Date().getMonth() === 3){
    window.addEventListener("load" , (e) => {
        function OnHomePage(){
            if (document.querySelector("#login > div.col-lg-4.col-md-5.login-container > header > img") != null){
                document.querySelector("#login > div.col-lg-4.col-md-5.login-container > header > img").src = "https://applicantes.com/wp-content/uploads/2020/11/rick-astley-bug.gif"
            }else {
                const GetImageLoop = setInterval(() => {
                    if (document.querySelector("#login > div.col-lg-4.col-md-5.login-container > header > img") != null){
                        document.querySelector("#login > div.col-lg-4.col-md-5.login-container > header > img").src = "https://applicantes.com/wp-content/uploads/2020/11/rick-astley-bug.gif"
                        clearInterval(GetImageLoop)
                    }
                },100)
            }
            if (document.querySelector("#connexion") != null){
                document.querySelector("#connexion").addEventListener("click" , (e) => {
                    OnSession()
                }) 
            }else{
                const GetButtonLoop = setInterval(() => {
                    if (document.querySelector("#connexion") != null){
                        document.querySelector("#connexion").addEventListener("click" , (e) => {
                            OnSession()
                        }) 
                        clearInterval(GetButtonLoop)
                    }
                },100)
            }
        }
        function OnSession() {
            if (document.querySelector("#item-deconnexion > button") != null){
                document.querySelector("#item-deconnexion > button").addEventListener("click" , (e) => {
                    OnHomePage()
                }) 
            }else {
                const GetSignOutLoop = setInterval(() => {
                    if (document.querySelector("#item-deconnexion > button") != null){
                        document.querySelector("#item-deconnexion > button").addEventListener("click" , (e) => {
                            OnHomePage()
                        }) 
                        clearInterval(GetSignOutLoop)
                    }
                },100)
            }
        }
        OnHomePage()
    })
}


chrome.storage.local.get(["FirstTimeUsingTheExtension"] , (responce) => {
    const Rep = responce.FirstTimeUsingTheExtension
    if (Rep === undefined){
        firsttime = true 
        const styles = document.createElement("style")
        styles.innerHTML = `
        @keyframes pop-up-extension-slide-down-animation {
            from  {
                translate : 0px 0px;
            }
            to {
                translate : 0px 110px;
            }
        }
        @keyframes pop-up-extension-slide-right-animation {
            from  {
                translate : 0px 110px;
            }
            to {
                translate : 200px 110px;
            }
        }

        @keyframes pop-up-extension-slide-left-animation {
            from  {
                translate : 200px 110px;
            }
            to {
                translate : 0px 110px;
            }
        }


        `
        document.head.appendChild(styles)
        const FirstTimePopUP = document.createElement("div")
        FirstTimePopUP.classList = "first-time-pop-up"
        FirstTimePopUP.style= "animation: pop-up-extension-slide-down-animation forwards ease-out 1.5s; z-index:98;height : 100px;width: 200px;position : fixed; background-color :rgb(36, 36, 36);top: -110px;right: 0px;left: Calc(100% - 200px);border-bottom-left-radius: 3px;border: 2px solid rgb(226, 226, 226);"
        FirstTimePopUP.innerHTML =`
        <img class="retract" src="${chrome.runtime.getURL("Icon/cone.png")}" alt="retract pop up" style="cursor : pointer;translate: -25px 38px; object-fit: contain;width: 25px; height: 25px; transform: rotate(-90deg);" />
        <img src="${chrome.runtime.getURL("Icon/Logo.png")}" alt="Ecole Directe Customizer Logo" style="translate : 0px -19px;object-fit: contain;width: 200px;height: 53px;">
        <div style="translate : 0px -24px; width: 70%; height: 1px; background-color: rgb(226, 226, 226); margin-left: 15%;position: relative; bottom: 10px;"></div>
        <div style="translate : 0px -21px; position:relative;top: -9px;font-size: 11px; text-align:center; color:rgb(226, 226, 226);font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
            Pour utiliser ecole directe customizer veuillez aller dans le <span class="Hover1" style="cursor: default;color: rgb(89, 161, 255);">menu des extensions</span> et sélectionner <span class="Hover2" style="cursor: default;color: rgb(89, 161, 255);">l'extension</span></div>
        <div class="Image1" style="visibility: hidden; background-size: cover;position: fixed;background-image: url(${chrome.runtime.getURL("Icon/cone.png")});top: 84px;height: 40px;width: 40px;"></div>
        <div class="Image1" style="visibility: hidden; width: 300px;height: 300px;background-image: url(${chrome.runtime.getURL("Icon/Menu_des_extensions.png")});position: fixed;top: 123px;right : 10%;border-radius: 3px;border: 2px solid rgb(226, 226, 226);"></div>
        <div class="Image2" style="visibility: hidden; background-size: cover;position: fixed;background-image: url(${chrome.runtime.getURL("Icon/cone.png")});top: 84px;height: 40px;width: 40px;    right: 7px;"></div>
        <div class="Image2" style="visibility: hidden;      left: calc(100% - 310px);   background-size: contain; width: 300px;height: 300px;background-image: url(${chrome.runtime.getURL("Icon/extension-location.png")});position: fixed;top: 123px;border-radius: 3px;border: 2px solid rgb(226, 226, 226);"></div>`
        document.body.appendChild(FirstTimePopUP)
        function JSforFirstTimePopUp() {
                let isLeft = false
                document.querySelector(".retract").addEventListener("click" ,(e) => {                    
                    const popUp = document.querySelector(".first-time-pop-up")
                    if (isLeft) { 
                        popUp.style.animation = "pop-up-extension-slide-left-animation forwards cubic-bezier(0.03, -0.2, 0.39, 1.15) 500ms"
                    }
                    if (!isLeft) { 
                        popUp.style.animation = "pop-up-extension-slide-right-animation forwards cubic-bezier(0.03, -0.2, 0.39, 1.15) 500ms"
                    }
                    isLeft = !isLeft
                })
                document.querySelector(".Hover1").addEventListener("mouseover" ,(e) => {
                    const Image1 = document.querySelectorAll(".Image1")
                    Image1.forEach((node) => {
                        node.style.visibility = "visible"
                    })
                })
                document.querySelector(".Hover1").addEventListener("mouseout" ,(e) => {
                    const Image1 = document.querySelectorAll(".Image1")
                    Image1.forEach((node) => {
                        node.style.visibility = "hidden"
                    })
                })
                document.querySelector(".Hover2").addEventListener("mouseover" ,(e) => {
                    const Image2 = document.querySelectorAll(".Image2")
                    Image2.forEach((node) => {
                        node.style.visibility = "visible"
                    })
                })
                document.querySelector(".Hover2").addEventListener("mouseout" ,(e) => {
                    const Image2 = document.querySelectorAll(".Image2")
                    Image2.forEach((node) => {
                        node.style.visibility = "hidden"
                    })
                })
        }
        JSforFirstTimePopUp()
    }else{
        RunMainContent()
    }
})


function RunMainContent() {
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
    
            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });
    
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    let LoadingAnimation = document.createElement("div")
    LoadingAnimation.innerHTML = 
    `<div style="    position: fixed;     top: 0px;     left: 0px;     height: 100%;     width: 100%;     background-color: #000000c9;     z-index: 50;"></div><div style="z-index : 51;position : fixed; top : 45%; right : 45%;"><div class="loadingio-spinner-ellipsis-8eibfvar66v"><div class="ldio-jswtrtkp4z">
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

    LoadingAnimation.classList = "LoadingAnimationForExtension"

    function PlayLoadingAnimation(){
        document.body.appendChild(LoadingAnimation)
    }
    function StopLoadingAnimation(){
        if(document.querySelector(".LoadingAnimationForExtension") !== null){
            document.querySelector(".LoadingAnimationForExtension").remove()
        }
    }

    PlayLoadingAnimation()
    chrome.storage.sync.get(["ColorChoosen3" , "ColorChoosen2" , "ColorChoosen" , "choosenColor1" , "choosenColor2" ],function(storage){
    let colorSaved3 = storage.ColorChoosen3;
    let colorSaved = storage.ColorChoosen2;
    let colorSaved2 = storage.ColorChoosen;
    let color1 = JSON.parse(storage.choosenColor1)
    if (color1.Equiped === true){
        colorSaved2 = color1.Color
    }
    let color2 = JSON.parse(storage.choosenColor2)
    if (color2.Equiped === true){
        colorSaved = color2.Color
    }
    let customImage = "NotLoadedYet"
    chrome.storage.local.get(["customImage","Parameters"], function(responce){
        customImage = responce.customImage
        let Params = responce.Parameters
        let Color1Param = Params.Color1Checked;
        let Color2Param = Params.Color2Checked;
        let BackgroundColorParam = Params.BackgroundColorChecked;
        let PictureParam = Params.ProfilePicture;
        let MulticolorParam = Params.Multicolor;
        if (Params.AutoLogIn === true){
            function clearAllStorage(){
                window.localStorage.clear()
                window.sessionStorage.clear()
            }
            async function LogUser(username, password){
                PlayLoadingAnimation()
                const req = await fetch("https://api.ecoledirecte.com/v3/login.awp?v=4.18.3", {
                "body": `data={\n    \"uuid\": \"\",\n    \"identifiant\": \"${username}\",\n    \"motdepasse\": \"${password}\",\n    \"isReLogin\": false\n}`,
                "method": "POST"
                });
                const data = await req.json()
                StopLoadingAnimation()
                console.log(data)
                if (data.code === 200){
                    window.localStorage.setItem("accounts", JSON.stringify(data.data))
                    window.localStorage.setItem("token", JSON.stringify(data.token))
                    addDataToSessionStorage()
                } else if (data.code === 505){
                    const text = document.querySelector("body > div.log-in-pop-up > div:nth-child(4)")
                    text.style.color = "red"
                    if (data.message === "Identifiant et/ou mot de passe invalide !"){
                        text.innerText = "Identifiant invalide !"
                    } else {
                        text.innerText = "mot de passe invalide !"
                    }
                } else {
                    const text = document.querySelector("body > div.log-in-pop-up > div:nth-child(4)")
                    text.style.color = "red"
                    text.innerText = "Erreur inconnu !"
                }
                 

            }
            function getQueryVariable(variable) { // robbed from stacl overflow
                var query = window.location.search.substring(1);
                var vars = query.split('&');
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split('=');
                    if (decodeURIComponent(pair[0]) == variable) {
                        return decodeURIComponent(pair[1]);
                    }
                }
                console.log('Query variable %s not found', variable);
            }
            function addDataToSessionStorage(){
                const token = window.localStorage.getItem("token")
                const userData = window.localStorage.getItem("accounts") 
                window.sessionStorage.setItem("accounts", userData)
                window.sessionStorage.setItem("token", token)
                window.location.replace("https://www.ecoledirecte.com/login?changedData=true")
            }
            function saveDataInLocalStorage(){ 
                const token = window.sessionStorage.getItem("token")
                const userData = window.sessionStorage.getItem("accounts") 
                window.localStorage.setItem("accounts", userData)
                window.localStorage.setItem("token", token)
            }

            if (window.sessionStorage.getItem("token") && window.location.pathname !== "/login"){ // if loged in 
                waitForElm("#connexion").then((elm) => {
                    clearAllStorage()
                    window.location.replace("https://www.ecoledirecte.com/login")
                })

                if (!window.localStorage.getItem("token") && !window.localStorage.getItem("accounts")){
                    saveDataInLocalStorage()
                }

            }else {

                if (window.localStorage.getItem("token") && window.localStorage.getItem("accounts")){ // if has already saved password in local storage
                    if (getQueryVariable("changedData") === "true"){
                        clearAllStorage()
                        window.location.replace("https://www.ecoledirecte.com/login")
                    }else {
                        addDataToSessionStorage()
                    }
                }else {
                    let isLoggingIn = false
                    window.addEventListener("click" , (e) => {
                        if (e.ctrlKey){
                            if (!isLoggingIn){                                
                                isLoggingIn = true
                                const password = document.querySelector("#password").value
                                const username = document.querySelector("#username").value
                                LogUser(username, password)
                            }
                        }

                    })

                    const styles = document.createElement("style")
                    styles.innerHTML = `
                    @keyframes pop-up-extension-slide-down-animation {
                        from  {
                            translate : 0px 0px;
                        }
                        to {
                            translate : 0px 110px;
                        }
                    }
                    @keyframes pop-up-extension-slide-right-animation {
                        from  {
                            translate : 0px 110px;
                        }
                        to {
                            translate : 200px 110px;
                        }
                    }
            
                    @keyframes pop-up-extension-slide-left-animation {
                        from  {
                            translate : 200px 110px;
                        }
                        to {
                            translate : 0px 110px;
                        }
                    }
            
            
                    `
                    document.head.appendChild(styles)
                    const FirstTimePopUP = document.createElement("div")
                    FirstTimePopUP.classList = "log-in-pop-up"
                    FirstTimePopUP.style= "animation: pop-up-extension-slide-down-animation forwards ease-out 1.5s; z-index:98;height : 100px;width: 200px;position : fixed; background-color :rgb(36, 36, 36);top: -110px;right: 0px;left: Calc(100% - 200px);border-bottom-left-radius: 3px;border: 2px solid rgb(226, 226, 226);"
                    FirstTimePopUP.innerHTML =`
                    <img class="retract" src="${chrome.runtime.getURL("Icon/cone.png")}" alt="retract pop up" style="cursor : pointer;translate: -25px 38px; object-fit: contain;width: 25px; height: 25px; transform: rotate(-90deg);" />
                    <img src="${chrome.runtime.getURL("Icon/Logo.png")}" alt="Ecole Directe Customizer Logo" style="translate : 0px -19px;object-fit: contain;width: 200px;height: 53px;">
                    <div style="translate : 0px -24px; width: 70%; height: 1px; background-color: rgb(226, 226, 226); margin-left: 15%;position: relative; bottom: 10px;"></div>
                    <div style="translate : 0px -21px; position:relative;top: -9px;font-size: 14px; text-align:center; color:rgb(226, 226, 226);font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                    ctrl + click n'importe où pour vous connecter
                    </div>
                    `
                    document.body.appendChild(FirstTimePopUP)

                    let isLeft = false
                    document.querySelector(".retract").addEventListener("click" ,(e) => {                    
                        const popUp = document.querySelector(".log-in-pop-up")
                        if (isLeft) { 
                            popUp.style.animation = "pop-up-extension-slide-left-animation forwards cubic-bezier(0.03, -0.2, 0.39, 1.15) 500ms"
                        }
                        if (!isLeft) { 
                            popUp.style.animation = "pop-up-extension-slide-right-animation forwards cubic-bezier(0.03, -0.2, 0.39, 1.15) 500ms"
                        }
                        isLeft = !isLeft
                    })
                }

            }
        }
        function Multicolor(param){
            if (param === true){
                const NewCSS2 = document.createElement("style")
                NewCSS2.innerHTML = `
                    @keyframes rainbow-background {
                            0% {
                                background-color: red;
                            }
                            10% {
                                background-color: rgb(155, 119, 0);
                            }
                            20% {
                                background-color: rgb(124, 138, 0);
                            }
                            30% {
                                background-color: rgb(0, 212, 0);
                            }
                            40% {
                                background-color: rgb(0, 197, 82);
                            }
                            50% {
                                background-color: rgb(0, 172, 202);
                            }
                            60% {
                                background-color: rgb(0, 81, 255);
                            }
                            70% {
                                background-color: rgb(68, 0, 255);
                            }
                            80% {
                                background-color: rgb(195, 0, 255);
                            }
                            90% {
                                background-color: rgb(204, 0, 170);
                            }
                            100% {
                                background-color: rgb(255, 0, 0);
                            }
                        
                    }

                    .ed-menu .rond-menu-eleve:not(.no-photo) {
                    background: no-repeat center center rgb(0 213 213 / 0%);
                    }

                    #container-menu {
                        background : none;
                        animation : rainbow-background 60s infinite ease-in

                    }
                    .ed-menu-parent .ed-menu:not(.active) .ed-menu-image-wrapper>div:after {
                        background : none
                    }
                    .ed-menu {
                        background : none
                    }


                    :root {
                        --secondary-color: ${colorSaved};
                    }
                    .ed-menu-image-wrapper>div {
                        transform: translateY(10px);
                        min-height: 90px;
                    }
                    .overlay p {
                        margin: 21px auto;
                    }

                    .ed-menu:not(.active) .ed-menu-image-wrapper>div:before {
                        transform: translate(-50%) translateY(-7px);
                    }
                `
                document.head.appendChild(NewCSS2)
            }
        }


        function ChangeImage(){
            if (PictureParam) { 
                let imageURL = customImage
                        if (document.querySelector("div.circular.text-center.rond-menu-eleve") !== null && typeof document.querySelector("div.circular.text-center.rond-menu-eleve") !== "undefined"){
                            let images = document.querySelectorAll("div.circular.text-center.rond-menu-eleve")
                                images.forEach(function(currentImage){
                                    currentImage.style = `background-image: url("${imageURL}");`
                                })
                        }
                        if (document.querySelector("div.profile") !== null && typeof document.querySelector("div.profile") !== "undefined"){
                            let images2 = document.querySelectorAll("div.profile")
                            images2.forEach(function(currentImage){
                                currentImage.style = `background-image: url("${imageURL}");`
                            })
                    
                    
                        }
                }
            }

            window.onclick = function(event) {
                var target = event.target;
            if (target.matches('#connexion')){ // .matches take selector and return true if the argument is the selector else return false
                let VerifyIfExist = window.setInterval(()=>{
                        if (typeof document.querySelector("#container-menu > ed-menu > div > div > a > div") !== "undefined" && document.querySelector("#container-menu > ed-menu > div > div > a > div") !== null && document.querySelector("#container-menu") !== null){
                            CSSfjdskahjf()
                            clearInterval(VerifyIfExist)
                        }
                    },50)
                    CSSfjdskahjf()
                    
            
                    function CSSfjdskahjf() {
                        let NewCSSRule = document.createElement("style")
                        NewCSSRule.innerHTML = `.ed-menu .profile {background: no-repeat center center/100% rgba(0,0,0,0%);} .ed-menu-eleve-seul .active .ed-menu-image-wrapper div:before {background: linear-gradient(rgba(13,79,147,0),rgba(13,79,147,0));} .ed-menu .rond-menu-eleve:not(.no-photo) {background: no-repeat center center ${Color1Param?colorSaved2 : "white"} ;}`
                        document.head.appendChild(NewCSSRule)
                        ChangeImage()
                        Multicolor(MulticolorParam)
                    }
                }
            }

        //console.log(colorSaved3,colorSaved,colorSaved2,color1,color2,customImage)
        let eventHasStarted = false
        window.addEventListener("load", (e)=> {
            eventHasStarted = true
            ChangeStyle(colorSaved3,colorSaved,colorSaved2,Color1Param,Color2Param,BackgroundColorParam,ChangeImage,MulticolorParam,Multicolor)
        })

        window.setTimeout(() => {
            if (!eventHasStarted){
                ChangeStyle(colorSaved3,colorSaved,colorSaved2,Color1Param,Color2Param,BackgroundColorParam,ChangeImage,MulticolorParam,Multicolor)
            }
        },700)
        })
    })



    function ChangeStyle(colorSaved3,colorSaved,colorSaved2,Color1Param,Color2Param,BackgroundColorParam,ChangeImage,MulticolorParam,Multicolor){
    //console.log("%c Main Function has runed", "font-size :30px")
    StopLoadingAnimation()
            let color2rgba = FindRGBA(colorSaved2)
            let NewStyleRule = document.createElement("style")
        if (colorSaved3 !== "rgb(35, 35, 35)"){
            NewStyleRule.innerText = `.ed-menu-eleve-seul .active .ed-menu-image-wrapper div:before {background: linear-gradient(rgba(13,79,147,0),rgba(13,79,147,0));} .ed-menu .rond-menu-eleve:not(.no-photo) {background: no-repeat center center ${Color1Param?colorSaved2 : "white"} ;}.ed-menu .profile {background: no-repeat center center/100% rgba(0,0,0,0%) ;} :root {     --footer-primary-color: #edf3fd;     --hover-primary-color: #aad8ea;     --light-primary-color: ${Color2Param? colorSaved : "#0f8fd1"};     --smalldark-primary-color: #2e6ac8;     --dark-primary-color: ${Color1Param?colorSaved2 : "#0e3e85"};     --ultradark-primary-color: #092354;     --light-secondary-color: #ff9393;     --secondary-color: ${Color2Param? colorSaved : "#cd1478"};     --dark-secondary-color: #960b56;     --light-placeholder-color: #f5f6f7;     --smalldark-placeholder-color: #e4e7ea;     --dark-placeholder-color: #c3c3c3;     --ultradark-placeholder-color: #887f7f;     --light-notice-color: #fffca0;     --middle-notice-color: #fff575;     --dark-notice-color: #f2ec9e;     --travail-color: #6aaf11;     --contenu-color: #0c91c6;     --search-color: #a5a7ab; }                                      .active .overlay {     background: linear-gradient(rgba(13,79,147,0) ,rgba(0,0,0,0)) !important;     opacity: 1;}                                                           .overlay {     position: absolute;     top: 0;     left: 0;     right: 0;     bottom: 0;     display: flex;     background: ${Color1Param ?color2rgba : "#ffffff50"} ! important;     text-align: center;     color: #fff;     opacity: 0;     transition: all .5s; }`
        }else {
            NewStyleRule.innerText = `.dhx_cal_weekNumber { color : var(--light-primary-color) }  .nav-tabs-container-bg.tab-container>ul>li>a:hover, .nav-tabs-container-bg>li>a:hover { border: none;} .table>tbody>tr:hover>td:not(.screen-reader) {background: #00000000;} .nav-pills>li.active>a {background-color : #5a5a5a !important;} #documentProperties  ,  #spreadEven  , #spreadOdd  , #spreadNone ,   #scrollWrapped , #scrollPage , #scrollVertical , #scrollHorizontal {color : #ebebeb !important} svg > path {color : #ebebeb !important;} ngx-extended-pdf-viewer .toolbar {border-bottom: 1px solid #626262 !important;} ngx-extended-pdf-viewer #toolbarContainer, ngx-extended-pdf-viewer .findbar, ngx-extended-pdf-viewer .secondaryToolbar {    background-color: #2c2c2c !important;} #viewer {    background: #2c2c2c;} .cke_combo_on a.cke_combo_button, .cke_combo_off a.cke_combo_button:hover, .cke_combo_off a.cke_combo_button:focus, .cke_combo_off a.cke_combo_button:active {color: #ebebeb !important;background: #212121 !important;border: none !important;border-radius: 3px; } a.cke_dialog_ui_button_cancel:hover {background: #9d0000 !important;} .cke_dialog_ui_button_cancel 
            { background: #c70000 !important;   border: 0px solid #bcbcbc !important; height : 28px !important; } select.cke_dialog_ui_input_select {   background-color: #323232 !important; } #login > div.col-lg-4.col-md-5.login-container > header > h1 {color : #ebebeb} .cke_reset_all, .cke_reset_all *, .cke_reset_all a, .cke_reset_all textarea { color: #ebebeb !important; } a.cke_dialog_tab_selected ,  a.cke_dialog_tab {   background: #323232!important;}.cke_dialog_contents_body , .cke_dialog_footer , .cke_dialog_body { background: #414141 !important; color : #ebebeb !important }.cke_dialog_title { background: #323232 !important; color : #ebebeb!important} a.cke_button_off:hover, a.cke_button_off:focus, a.cke_button_off:active  {background: #252525 !important;border-radius: 3px !important;border: none !important;} a.cke_button_on {background: #212121 !important ;border-radius: 3px !important ;border: none !important;padding: 3px 5px;}.text-enseignant {color: #ffffff;}.dropdown-menu>li>a {color: #ebebeb; background: #414141;}.text-danger {color : rgb(221,0,0) } #dropdown2 {background: #414141;} #dropdown-annees { color: #ebebeb; background: #414141;} .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover {color: #ebebeb !important;text-decoration: none; background-color: #323232!important;} .btn-default.active, .btn-default.active:focus, .btn-default.active:hover, .open>.dropdown-toggle.btn-default, .open>.dropdown-toggle.btn-default.focus, .open>.dropdown-toggle.btn-default:focus, .open>.dropdown-toggle.btn-default:hover {color :#ebebeb;}.cke_top {border-bottom: 1px solid #262626 !important;background: #323232 !important;}.cke_chrome {border: 1px solid #1e1e1e !important;} #cke_1_contents {background: rgb(50, 50, 50);}.cke_bottom {border-top: 1px solid #414141 !important;background: #323232 !important;} #container-messagerie-compose > form > div:nth-child(1) > div.col-sm-12.col-md-5.col-lg-6 > div > span {color: #ebebeb;}.cke_wysiwyg_frame, .cke_wysiwyg_div {background-color: #323232 !important;color: #ebebeb;}.btn-blanc {background: #414141; border: none;} .cloud .btn-breadcrumb .btn.btn-link:first-child .prenom-eleve {color : #ffffff !important;} .breadcrumb>.active {color: #ebebeb; } .breadcrumb.titre-page li.active:last-child:before { color: #ebebeb !important;}.pagination>li>a:focus, .pagination>li>a:hover, .pagination>li>span:focus, .pagination>li>span:hover {   background-color: #414141;   border-color: #ddd0;}
            .pagination>li>a, .pagination>li>span {    background-color: #323232; border: 1px solid #414141;} .pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover { background-color: #414141; border-color: #6c6c6c; } .form-control {     background-color: #323232; color : #ebebeb} textarea:focus {background-color: #323232;} #libelle {color : #ebebeb}#url {color : #ebebeb}.modal-content .modal-header button.btn-close i.fa-close {    color: #ebebeb; } #valeur {color : #ebebeb} hr {border-top: 1px solid #414141;}.help-block  {color: #d5d5d5;} .table-hover>tbody>tr:hover {background-color: #323232 !important;}.cloud .btn-breadcrumb .btn.btn-link:not(:last-child):after 
            { border-left: 10px solid #414141 !important; }.cloud .btn-breadcrumb .btn.btn-link { background: #414141 !important; } .table .table {background-color: #414141;}.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {border-color: #2c2c2c} .nav-tabs>li.active>a {border: 1px solid #323232;}.nav-tabs {border-bottom: 1px solid #323232;} .nav-tabs>li.active:after {background-color: #32323200; }.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {box-shadow: none;translate: 0px 3px;border : none ;background-image: linear-gradient(#444444 , #323232);}.bg-info { background: #323232;} #cdtnavigation-action .list-group-item:hover {background: #323232 !important;}.btn-default:hover {color: var(--light-primary-color) ;background: #414141;}.page-messagerie .inbox-nav li:hover {background: #414141 !important;}.un-message.clickable {color : #ffffff !important} .page-messagerie .messages-listing {background: #414141;} .dhx_scale_holder_now {background : #686868}.dhx_month_head { border-right: 1px solid #323232; }.dhx_month_body { border-right: 1px solid #323232;border-bottom: 1px solid #323232;}.dhx_now .dhx_month_body , .dhx_now .dhx_month_head{background-color : #686868}.dhx_after .dhx_month_head,.dhx_before .dhx_month_head {background : #414141} .dhx_after .dhx_month_body, .dhx_before .dhx_month_body, .dhx_month_body { background : #414141} .dhx_month_body {background-color: #414141;}.dhx_month_head {background-color: #414141; color: #ebebeb } small {color : #ebebeb !important} .dhx_cal_data {border-top-color : #323232 !important}.dhx_cal_header {border-top: 1px solid #323232;border-right: 1px solid #323232;} .dhx_scale_bar{ z-index : 2 ; border-left : 1px solid #323232 ;color : #ebebeb ;background: #414141;} 
            .dhx_scale_hour {color : #ebebeb ; background : #414141;  border-color: #323232;} #view-week {color : #ebebeb}#view-month {color : #ebebeb}.dhx_cal_today_button {color : #ebebeb ; border-color : #ebebeb} .dhx_cal_next_button {border-color: #ebebeb ; background-image : url("${chrome.runtime.getURL("arrow_right.png")}") }.dhx_cal_prev_button {border-color: #ebebeb ; background-image : url("${chrome.runtime.getURL("arrow_left.png")}") }.dhx_scale_holder {border-right: 1px solid #323232 !important} .dhx_cal_data .dhx_scale_holder {background-image: url(${chrome.runtime.getURL("ecole_directe_emploi_du_temp.png")});} .dhx_scale_holder_now {    border-right: 1px solid #323232; !important} .dhx_cal_date {color: #ebebeb !important;} small.ng-star-inserted  {color : #ebebeb;} #cdtnavigation-action .list-group-item:hover { background: #323232 !important;}.bs-datepicker-body table td span.is-other-month, .bs-datepicker-body table td.is-other-month span {color: rgb(255 255 255 / 52%);}.bs-datepicker-body {border-width : 0px}.bs-datepicker {box-shadow: 0 0 0px 0 #aaa;} .bs-calendar-container {background: #323232;}.modal-content {background : #323232;}.note-postit {color: #323232;} .ed-card {border : 2px solid #ebebeb85;    border-radius: 2px;}.ed-menu .rond-menu-eleve:not(.no-photo) {background: no-repeat center center ${Color1Param?colorSaved2 : "#ffffff50"};} .ed-menu-eleve-seul .active .ed-menu-image-wrapper div:before {background: linear-gradient(rgba(13,79,147,0),rgba(13,79,147,0));} .ed-menu .profile {background: no-repeat center center/100% rgba(0,0,0,0%);} button:hover {background-color : #585858 !important}input {background-color : #323232 !important}.page-messagerie .messages-listing {  background: #4e4e4e !important;overflow-y: inherit;right: 10px;}#encart-moyennes > table > tbody > tr:nth-child(16) > td:nth-child(1) > strong,td.moyennegenerale-valeur ,td.text-right.moyennegeneralelibelle { color : ${Color2Param? colorSaved : "#0f8fd1"}
            !important} div.help-block.pull-left.date-conseil{ color : #ebebeb !important}#encart-notes .bloc-legende table caption {color: #fff !important;} .ed-card {background: #323232 !important } .link:not(.blue-link), a:not(.blue-link), button.btn.btn-link:not(.blue-link) { color: #ebebeb;} .container-bg {box-shadow: 0 0 20px rgb(0 0 0 / 50%) !important; border : none !important;background :#323232 !important } #item-contact-famille-eleve > a {background-color: #404040 !important;} #footer > ul > li:nth-child(3) > a {background-color: #404040 !important;}#footer > ul > li.hidden-xs.hidden-sm > a { background-color: #404040 !important;} 
            #nom-etb {box-shadow : 0 0 0px 0px rgba(0,0,0,0%)} #encart-postit > div > ed-postits > div > div.liste-postit > div { color : #323232} .message-item .message-overlay { position: absolute; top: 0; left: -20px;width: 40px;height: 40px;background: #323232 ;border: 2px solid #e2e7ed; border-radius: 100%; text-align: center line-height: 45px;} #user-account-link {background-color: #404040 !important} a {color : #ebebeb !important} #password { background-color: #323232 !important; border-color :#686868 ! important;}  ::placeholder {color : #ebebeb;} #username.input-block-level {  background-color: #323232 !important; border-color :#686868 ! important;} span.pull-left.version-site:hover { color : #ebebeb !important}
            :root {     --footer-primary-color: #414141;     --hover-primary-color: #aad8ea;     --light-primary-color: ${Color2Param? colorSaved : "#0f8fd1"};     --smalldark-primary-color: #2e6ac8;     --dark-primary-color: ${Color1Param?colorSaved2 : "#0e3e85"};     --ultradark-primary-color: #092354;     --light-secondary-color: #ff9393;     --secondary-color: ${Color2Param? colorSaved : "#cd1478"};     --dark-secondary-color: #960b56;     --light-placeholder-color: #383838;     --smalldark-placeholder-color: #4e4e4e;     --dark-placeholder-color: #c3c3c3;     --ultradark-placeholder-color: #887f7f;     --light-notice-color: #fffca0;     --middle-notice-color: #fff575;     --dark-notice-color: #f2ec9e;     --travail-color: #6aaf11;     --contenu-color: #0c91c6;     --search-color: #a5a7ab; }                                      .active .overlay {     background: linear-gradient(rgba(13,79,147,0) ,rgba(0,0,0,0)) !important;     opacity: 1;}                                                           .overlay {     position: absolute;     top: 0;     left: 0;     right: 0;     bottom: 0;     display: flex;     background: ${Color1Param ?color2rgba : "#ffffff50"} ! important;     text-align: center;     color: #fff;     opacity: 0;     transition: all .5s; }      body {     font-family: Helvetica Neue,Helvetica,Arial,sans-serif;     line-height: 1.42857143;     color: #ebebeb ! important;     background-color: #323232 !important; }  button.btn.btn-link:not(.blue-link) {     color: #ebebeb; }  .mdp-lost[_ngcontent-nok-c62] {     float: right;     margin: -3vh 0 4vh;     font-style: italic;     color: #ff6161; }  .version-site[_ngcontent-nok-c63] {     color: #ebebeb; }  .login-container[_ngcontent-nok-c63] header[_ngcontent-nok-c63] h1[_ngcontent-nok-c63] {     font-size: 15px;     color: #ebebeb;     margin-top: 5px; `
        
            let modeGraphic = false
            
            function addEventListenerForSubjectGraphic(){
                [...document.querySelectorAll(".fa.fa-bar-chart.fa-2x")].forEach(elm => {
                    elm.addEventListener("click", () => { 
                        setGraphicColor()
                    })
                }); 
            }

            function setGraphicColor(){
                window.setTimeout(() => {
                    [...document.querySelectorAll(".highcharts-background")].forEach(elm => {
                        elm.setAttribute("fill", "#484848")
                    });
                    [...document.querySelectorAll("text")].forEach(elm => {
                        if (elm.x.animVal[0].valueAsString !== "21"){
                            elm.style.fill = "#ebebeb"
                        }
                    })
                },5)
            }

            function ChangeOnBtnGraphicClick(){
                addEventListenerForSubjectGraphic();
                [...document.querySelectorAll(".nav-link")].forEach(elm => {
                    elm.addEventListener("click", () => { 
                        if(elm.innerText === "Graphiques") {
                            setGraphicColor()
                        }

                    })
                })
            }

            function ChangeOnTabClick(){
                [...document.querySelectorAll("[data-toggle='tab']")].forEach(elm => { 
                    elm.addEventListener("click", () => { 
                        // calcul de moyenne
                        addEventListenerForSubjectGraphic();
                        const active  = document.querySelector(".nav-link.active")
                        switch(active.innerText) {
                            case "Moyennes" : 
                                modeGraphic = false
                                break  
                            case "Evaluations" :
                                modeGraphic = false
                                break 
                            case "Graphiques" :
                                modeGraphic = true
                                break 
                        }

                        ChangeOnBtnGraphicClick()

                        if (modeGraphic){
                            setGraphicColor()
                        }
                    })
                });
            }

            function GraphicModeHandler() {
                [...document.querySelectorAll(".nav-link")].forEach(elm => {
                    elm.addEventListener("click", () => { 
                        addEventListenerForSubjectGraphic();
                        switch(elm.innerText) {
                            case "Moyennes" : 
                                modeGraphic = false
                                break  
                            case "Evaluations" :
                                modeGraphic = false
                                break 
                            case "Graphiques" :
                                modeGraphic = true
                                break 
                        }
                    })
                })
            }



            function graphicMain(){
                ChangeOnTabClick()
                GraphicModeHandler()
                ChangeOnBtnGraphicClick()
            }

            waitForElm(".item-actif").then(elm => {
                elm.addEventListener("click", () => {
                    graphicMain()
                })
            })
            waitForElm(".nav-link").then(elm => { 
                graphicMain()
            })
            

            waitForElm(".highcharts-background").then(elm => { 
                setGraphicColor()
            })

            window.onresize = setGraphicColor

        }
        if (BackgroundColorParam === false){
            NewStyleRule.innerText = `.ed-menu-eleve-seul .active .ed-menu-image-wrapper div:before {background: linear-gradient(rgba(13,79,147,0),rgba(13,79,147,0));} .ed-menu .rond-menu-eleve:not(.no-photo) {background: no-repeat center center ${Color1Param?colorSaved2 : "white"} ;}.ed-menu .profile {background: no-repeat center center/100% rgba(0,0,0,0%) ;} :root {     --footer-primary-color: #edf3fd;     --hover-primary-color: #aad8ea;     --light-primary-color: ${Color2Param? colorSaved : "#0f8fd1"};     --smalldark-primary-color: #2e6ac8;     --dark-primary-color: ${Color1Param?colorSaved2 : "#0e3e85"};     --ultradark-primary-color: #092354;     --light-secondary-color: #ff9393;     --secondary-color: ${Color2Param? colorSaved : "#cd1478"};     --dark-secondary-color: #960b56;     --light-placeholder-color: #f5f6f7;     --smalldark-placeholder-color: #e4e7ea;     --dark-placeholder-color: #c3c3c3;     --ultradark-placeholder-color: #887f7f;     --light-notice-color: #fffca0;     --middle-notice-color: #fff575;     --dark-notice-color: #f2ec9e;     --travail-color: #6aaf11;     --contenu-color: #0c91c6;     --search-color: #a5a7ab; }                                      .active .overlay {     background: linear-gradient(rgba(13,79,147,0) ,rgba(0,0,0,0)) !important;     opacity: 1;}                                                           .overlay {     position: absolute;     top: 0;     left: 0;     right: 0;     bottom: 0;     display: flex;     background: ${Color1Param ?color2rgba : "#ffffff50"} ! important;     text-align: center;     color: #fff;     opacity: 0;     transition: all .5s; }`
        }
            document.head.append(NewStyleRule) 
            let NewCSSRule = document.createElement("style")
            NewCSSRule.innerHTML = `.ed-menu .profile {background: no-repeat center center/100% rgba(0,0,0,0%);} .ed-menu-eleve-seul .active .ed-menu-image-wrapper div:before {background: linear-gradient(rgba(13,79,147,0),rgba(13,79,147,0));} .ed-menu .rond-menu-eleve:not(.no-photo) {background: no-repeat center center ${Color1Param?colorSaved2 : "white"} ;}`
            document.head.appendChild(NewCSSRule)
            
        
        Multicolor(MulticolorParam)
        ChangeImage() 



        
    }

    function FindRGBA(color){
        //console.log(`%c${color}`,`color : ${color} ; font-weight : bold`)
    let colorCode = String(color).slice(String(color).indexOf("("), String(color).indexOf(")")) // - permet de partir de la fin
        let returnV = `rgba${String(colorCode)}, 0.5)`
        //console.log("%c"+returnV,`color : ${returnV} ; font-weight : bold !important`)
        return returnV
    }


    /* 

    
    .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
        background-color: #ff0000;
        border: 1px solid black;
    }


    .nav-tabs-container-bg.tab-container>ul>li>a:hover, .nav-tabs-container-bg>li>a:hover { border: none;}
    .table>tbody>tr:hover>td:not(.screen-reader) {background: #00000000;}
    .nav-pills>li.active>a
    #documentProperties  ,  #spreadEven  , #spreadOdd  , #spreadNone ,   #scrollWrapped , #scrollPage , #scrollVertical , #scrollHorizontal {color : #ebebeb !important}
    svg > path {color : #ebebeb;}
    ngx-extended-pdf-viewer .toolbar {border-bottom: 1px solid #626262;}
    ngx-extended-pdf-viewer #toolbarContainer, ngx-extended-pdf-viewer .findbar, ngx-extended-pdf-viewer .secondaryToolbar {    background-color: #2c2c2c;}
    #viewer {    background: #2c2c2c;}
    .cke_combo_on a.cke_combo_button, .cke_combo_off a.cke_combo_button:hover, .cke_combo_off a.cke_combo_button:focus, .cke_combo_off a.cke_combo_button:active {color: #ebebeb !important;background: #212121;border: none !important;border-radius: 3px; }
    a.cke_dialog_ui_button:hover {background: #9d0000 !important;} #cke_212_uiElement{ background: #c70000;   border: 0px solid #bcbcbc !important; height : 25px !important; }
    select.cke_dialog_ui_input_select {   background-color: #323232; }
    #login > div.col-lg-4.col-md-5.login-container > header > h1 {color : #ebebeb}
    .login-container[_ngcontent-xwc-c63] header[_ngcontent-xwc-c63] h1[_ngcontent-xwc-c63] {color :}
    .cke_reset_all, .cke_reset_all *, .cke_reset_all a, .cke_reset_all textarea { color: #ebebeb !important; }
    a.cke_dialog_tab_selected ,  a.cke_dialog_tab {   background: #323232!important;}
        border-bottom-color: #323232;
    #cke_dialog_contents_62
    .cke_dialog_contents_160 , .cke_dialog_footer , .cke_dialog_body { background: #414141; color : #ebebeb !important }.cke_dialog_title { background: #323232 !important; color : #ebebeb!important}

    a.cke_button_off:hover, a.cke_button_off:focus, a.cke_button_off:active , {background: #252525 !important;border-radius: 3px !important;border: none !important;}
    a.cke_button_off:hover, a.cke_button_off:focus, a.cke_button_off:active , {background: #252525;border-radius: 3px;border: none;padding: 3px 5px;}

    .text-enseignant {color: #ffffff;}
    .text-danger {color : rgb(221,0,0) }

    #dropdown2 {background: #414141;}
    background: #414141;
    .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover {color: #ebebeb;text-decoration: none; background-color: #323232;}
    #dropdown-annees { color: #ebebeb; background: #414141;} #dropdown-annees:hover { color: #ebebeb; background: #323232;}
    document.querySelector("#highcharts-crrbscl-0 > svg > rect.highcharts-background").fill = "rgb(50,50,50)"
    tr:hover {color : red}
    .btn-default.active, .btn-default.active:focus, .btn-default.active:hover, .open>.dropdown-toggle.btn-default, .open>.dropdown-toggle.btn-default.focus, .open>.dropdown-toggle.btn-default:focus, .open>.dropdown-toggle.btn-default:hover {color :#ebebeb;}
    .cke_top {border-bottom: 1px solid #262626 !important;background: #323232 !important;}
    .cke_chrome {border: 1px solid #1e1e1e;}
    #cke_1_contents {background: rgb(50, 50, 50);}
    .cke_bottom {border-top: 1px solid #414141;background: #323232;}
    #container-messagerie-compose > form > div:nth-child(1) > div.col-sm-12.col-md-5.col-lg-6 > div > span {color: #ebebeb;}
    .cke_wysiwyg_frame, .cke_wysiwyg_div {background-color: #323232;color: #ebebeb;}
    .btn-blanc {background: #414141; border: none;}

    .breadcrumb>.active {color: #ebebeb; } .breadcrumb.titre-page li.active:last-child:before { color: #ebebeb !important;}
    .pagination>li>a:focus, .pagination>li>a:hover, .pagination>li>span:focus, .pagination>li>span:hover {   background-color: #414141;   border-color: #ddd0;}
    .pagination>li>a, .pagination>li>span {    background-color: #323232; border: 1px solid #414141;}
    .form-control {     background-color: #323232; color : #ebebeb}
    textarea:focus {background-color: #323232;}
    #libelle {color : #ebebeb}#url {color : #ebebeb}
    .modal-content .modal-header button.btn-close i.fa-close {    color: #ebebeb; }
    #valeur {color : #ebebeb}
    hr {border-top: 1px solid #414141;}
    .help-block  {color: #d5d5d5;}
    .table-hover>tbody>tr:hover {background-color: #000000;}
    .cloud .btn-breadcrumb .btn.btn-link:not(:last-child):after { border-left: 10px solid #414141; }
    .cloud .btn-breadcrumb .btn.btn-link { background: #414141; }

    #container-menu {background : #323232 !important }
    .ed-menu .profile {background: no-repeat center center/100% ${C};}

    button:hover {background-color : #323232 !important}

    .container-bg {background : !important }
    #item-contact-famille-eleve > a {background-color: #404040 !important;} #footer > ul > li:nth-child(3) > a {background-color: #404040 !important;}
    #footer > ul > li.hidden-xs.hidden-sm > a { background-color: #323232 !important;}
    body {
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        line-height: 1.42857143;
        color: #ebebeb ! important;
        background-color: #ebebeb; !important;
    }

    button.btn.btn-link:not(.blue-link) {
        color: #ebebeb;
    }

    .mdp-lost[_ngcontent-nok-c62] {
        float: right;
        margin: -3vh 0 4vh;
        font-style: italic;
        color: #ff6161;
    }

    .version-site[_ngcontent-nok-c63] {
        color: #ebebeb;
    }

    .login-container[_ngcontent-nok-c63] header[_ngcontent-nok-c63] h1[_ngcontent-nok-c63] {
        font-size: 15px;
        color: #ebebeb;
        margin-top: 5px;
    }
    */
    /*
    noir :#323232;
    noir clair : #414141;
    blanc : #ebebeb;


    text size => document.querySelector("#cke_123")
    */


}

// coded by LeMouton_noob
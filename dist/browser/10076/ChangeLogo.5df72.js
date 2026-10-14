

window.ChangeLogo = function() 
{
    //&x=2&p=dafabet
    //&x=1&p=dafabet
    let l_strURL = location.search.replace("?", "").split("&");
    var l_bShowCustomLogo = false;
    let l_strPlatformName = "dafabet";
    for (let i = 0; i < l_strURL.length; i++)
    {

        let key = l_strURL[i].split("=")[0];
        let data = l_strURL[i].split("=")[1];
        switch (key)
        {
            case "x":
                if(data == '2')
                {
                    l_bShowCustomLogo = true;
                }
                break;
            case "p":
                data = data.toLowerCase();
                l_strPlatformName = data;
                break;
        }
    }
    var l_TargetDiv = "logo";
    var l_strImageSrc = "../system/logo/APLogo.png";
    if(l_bShowCustomLogo)
    {
        let l_URL = "../system/logo/"+l_strPlatformName+"/"+l_strPlatformName;
        l_strImageSrc = l_URL+"_loading.svg";
    }
    var l_Splash = document.getElementById(l_TargetDiv);
    if(l_Splash)
    {
        l_Splash.style.position = "fixed";
        l_Splash.style.top = "50%";
        l_Splash.style.left = "50%";
        l_Splash.style.transform = "translate(-50%, -50%)";
        l_Splash.setAttribute("src", l_strImageSrc);
    }
    else
    {
      //console.log("no splash");
    }
    var l_BG = document.getElementById("BG");
    if(l_BG)
    {
        l_BG.style.backgroundImage="url(./html_bg.623b7.jpg)";;
        l_BG.style.position = "absolute";
        l_BG.style.backgroundRepeat = "no-repeat";
        l_BG.style.backgroundPosition = "center";
        l_BG.style.width = "100%";
        l_BG.style.height = "100%";
        l_BG.style.backgroundSize = "cover";
    }
    else
    {
      //console.log("no BG");
    }    
};
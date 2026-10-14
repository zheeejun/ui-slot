window.boot = function ()
{
    function MyLog(e_Log)
    {
        let l_strURL = location.origin;
        if (l_strURL.includes("dev.") || l_strURL.includes("qa."))
        {
            console.log(e_Log);
        }
    }
    function MyError(e_Log)
    {
        let l_strURL = location.origin;
        if (l_strURL.includes("dev.") || l_strURL.includes("qa.")) {
            console.error(e_Log);
        }
    }
    var settings = window._CCSettings;
    window._CCSettings = undefined;
    var onProgress = null;
    var RESOURCES = cc.AssetManager.BuiltinBundleName.RESOURCES;
    var INTERNAL = cc.AssetManager.BuiltinBundleName.INTERNAL;
    var MAIN = cc.AssetManager.BuiltinBundleName.MAIN;

    var l_strBundleName = "chiikawa";
    var l_strCDN = sessionStorage.getItem('CDN_URL');
    if(!l_strCDN)
    {
        l_strCDN = "../";
    }
    var l_bDoUseRemoteBundle = true;
    //check is shared code bundle exists
    if (!settings.bundleVers || !settings.bundleVers.chiikawa)
    {
        MyLog("chiikawa not exists");
        l_bDoUseRemoteBundle = false;
    }
    function GetGameIDFromURLJS()
    {
        let l_strRemoveHostName = window.location.href.substring(location.origin.length+1,window.location.href.length);
        if(l_strRemoveHostName)
        {
            let l_Array = l_strRemoveHostName.split("/");
            if(l_Array.length>1)
            {
                return l_Array[0];
            }
        }
        MyError("GetGameIDFromURLJS() get game id failed");
        return "10046";
    }

    function DownloadDSCodeBundleMD5(e_CompleteCallbackFunction)
    {
        if(!l_bDoUseRemoteBundle)
        {
            if(e_CompleteCallbackFunction)
            {
                e_CompleteCallbackFunction();    
            }
            return;
        }
        var l_strGameID = GetGameIDFromURLJS()
        MyLog("GameID:"+l_strGameID);
        MyLog("CDN:"+l_strCDN);
        let l_strBundleURL = l_strCDN+l_strBundleName+"/";
        let l_URL = l_strCDN+l_strBundleName+"/version/Rule.json?t=" + Date.now();
        MyLog("BundleURL"+l_strBundleURL);
        MyLog("URL"+l_URL);
        cc.assetManager.loadRemote(l_URL, (err, res)=>
        {
            if (err)
            {
                MyError(err);
            }
            else
            {
                MyLog(res);
                var l_JSON = res;
                var l_LatestVersion = l_JSON.json["LatestVersion"];
                var l_SpecialGameRule = l_JSON.json["SpecialGameRule"];
                if(l_SpecialGameRule[l_strGameID])
                {
                    l_LatestVersion = l_SpecialGameRule[l_strGameID];
                }
                MyLog("l_LatestVersion:"+l_LatestVersion);
                if(!l_LatestVersion || l_LatestVersion == "0" || l_LatestVersion.length == 0 || l_LatestVersion == "Local")
                {//use local version
                    MyLog("use local shared code bundle");
                    cc.assetManager.loadBundle(l_strBundleName, e_CompleteCallbackFunction);
                }
                else
                {
                    l_strBundleURL += l_LatestVersion;
                    MyLog("BundleURL:"+l_strBundleURL);
                    cc.assetManager.loadBundle(l_strBundleURL,{version:l_LatestVersion},()=>
                    {
                        e_CompleteCallbackFunction();
                    });                    
                }
            }
        });
    }

    function setLoadingDisplay ()
    {
        // Loading splash scene
        var logo = document.getElementById('logo');
        if (logo)
        {
            logo.remove();
        }
        var splash = document.getElementById('splash');
        var progressBar = splash.querySelector('.progress-bar span');
        onProgress = function (finish, total) {
            var percent = 100 * finish / total;
            if (progressBar) {
                progressBar.style.width = percent.toFixed(2) + '%';
            }
        };
        splash.style.display = 'block';
        progressBar.style.width = '0%';

        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            //splash.style.display = 'none';
        });
    }

    var onStart = function () {

        cc.view.enableRetina(true);
        cc.view.resizeWithBrowserSize(true);

        if (cc.sys.isBrowser) {
            setLoadingDisplay();
        }

        if (cc.sys.isMobile) {
            if (settings.orientation === 'landscape') {
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            }
            else if (settings.orientation === 'portrait') {
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            }
            //cc.view.enableAutoFullScreen([
            //    cc.sys.BROWSER_TYPE_BAIDU,
            //    cc.sys.BROWSER_TYPE_BAIDU_APP,
            //    cc.sys.BROWSER_TYPE_WECHAT,
            //    cc.sys.BROWSER_TYPE_MOBILE_QQ,
            //    cc.sys.BROWSER_TYPE_MIUI,
            //    cc.sys.BROWSER_TYPE_HUAWEI,
            //    cc.sys.BROWSER_TYPE_UC,
            //].indexOf(cc.sys.browserType) < 0);
            cc.view.enableAutoFullScreen(false);
        }

        // Limit downloading max concurrent task to 2,
        // more tasks simultaneously may cause performance draw back on some android system / browsers.
        // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
        if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
            cc.assetManager.downloader.maxConcurrency = 2;
            cc.assetManager.downloader.maxRequestsPerFrame = 2;
        }
        else
        {
            cc.assetManager.downloader.maxConcurrency = 10;
        }

        var launchScene = settings.launchScene;
        var bundle = cc.assetManager.bundles.find(function (b) {
            return b.getSceneInfo(launchScene);
        });
        bundle.loadScene(launchScene, null, onProgress,
            function (err, scene) {
                if (!err) {
                    cc.director.runSceneImmediate(scene);
                    if (cc.sys.isBrowser) {
                        // show canvas
                        var canvas = document.getElementById('GameCanvas');
                        canvas.style.visibility = '';
                        var div = document.getElementById('GameDiv');
                        if (div) {
                            div.style.backgroundImage = '';
                        }
                        //MyLog('Success to load scene: ' + launchScene);
                    }
                }
            }
        );

    };

    var option = {
        id: 'GameCanvas',
        debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
        showFPS: settings.debug,
        frameRate: 60,
        groupList: settings.groupList,
        collisionMatrix: settings.collisionMatrix,
    };

    cc.assetManager.init({ 
        bundleVers: settings.bundleVers,
        remoteBundles: settings.remoteBundles,
        server: settings.server
    });
    
    var bundleRoot = [INTERNAL];
    settings.hasResourcesBundle && bundleRoot.push(RESOURCES);

    var count = 0;
    function cb (err) {
        if (err) return MyError(err.message, err.stack);
        count++;
        if (count === bundleRoot.length + 1) {
            cc.assetManager.loadBundle(MAIN, function (err) {
                if (!err) cc.game.run(option, onStart);
            });
        }
    }

    cc.assetManager.loadScript(settings.jsList.map(function (x) { return 'src/' + x;}), cb);


    DownloadDSCodeBundleMD5(()=>
    {
        for (var i = 0; i < bundleRoot.length; i++)
        {
            cc.assetManager.loadBundle(bundleRoot[i], cb);
        }
    });
};

if (window.jsb) {
    var isRuntime = (typeof loadRuntime === 'function');
    if (isRuntime) {
        require('src/settings.bfb7f.js');
        require('src/cocos2d-runtime.js');
        if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
            require('src/physics.js');
        }
        require('jsb-adapter/engine/index.js');
    }
    else {
        require('src/settings.bfb7f.js');
        require('src/cocos2d-jsb.js');
        if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
            require('src/physics.js');
        }
        require('jsb-adapter/jsb-engine.js');
    }

    cc.macro.CLEANUP_IMAGE_CACHE = true;
    window.boot();
}
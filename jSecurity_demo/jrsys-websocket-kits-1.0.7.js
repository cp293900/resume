// 使用一般 ws 連線
//var jWsUrl = "ws://127.0.0.1:17522";

// 使用 ws+ssl 連線
var jWsUrl = "wss://127.0.0.1:17540";

// 元件位置，空白的話只會出現提示訊息，有值的話會讓使用者下載
var jSecurityToolFilePath = "./JSecurity_FuzhouFoxitSign1.0.1.05beta.exe";
//var jSecurityToolFilePath = "";

var jWebSocket;

$(function () {
    isComRegister();
});

var jGLanguage = "tw";

var jGVersion = "";


function checkPluginVer(result, mycallback) {
    //先檢查連線
    if (!checkWebSocketStatus()) {
        console.log("[doSend] open socket");
        WebsocketConnection(mycallback);
    } else {
        console.log("[doSend] socket still live");
    }
    jPKI.prototype.jMethod = "";
    jPKI.prototype.signature = "";
    jPKI.prototype.signerCert = "";
    var obj = {
        MethodSelect: "Version",
    };
    var jsonString = JSON.stringify(obj);

    // 送 websocket 的時候要等 socket 連線完成
    wait_for_socket_connection(jWebSocket, function () {
        jWebSocket.send(jsonString);
    });
}

function isComRegister() {

    //先檢查連線
    if (!checkWebSocketStatus()) {
        console.log("[doSend] open socket");
        WebsocketConnection();
    } else {
        console.log("[doSend] socket still live");
    }
    var obj = {
        MethodSelect: "isComRegister",
    };
    var jsonString = JSON.stringify(obj);

    // 送 websocket 的時候要等 socket 連線完成
    wait_for_socket_connection(jWebSocket, function () {
        jWebSocket.send(jsonString);
    });
}

jPKI = function () {

    //if (!isConnection) {

    //    // 網頁全部載入後預設會loadPlugin，如果沒有的話才呼叫

    //    location.reload();

    //}

    // 檢查元件是否有安裝，並取得版本號

    //checkPluginVer();

    //this.version = jGVersion;

};

jPKI.prototype = {

    licenseInfo: 'Fuzhou FoxitSign控件',

    rv: 0,

    language: jGLanguage,

    version: '',

    signature: '',

    signerCert: '',

    autoChoose: true,

    signedDataWithContent: true,

    digestAlg4Sign: 0, // 簽章雜湊演算法

    alg4Encrypt: 0, // 加密演算法

    certChosenPriority: 2, //自動選擇效期最長(有效日期最晚)的憑證

    certVersion: '',

    certSerial: '',

    certIssuer: '',

    certSubject: '',

    certNotBefore_display: '',

    certNotBefore_timet: '',

    certNotAfter_display: '',

    certNotAfter_timet: '',

    certSubjectAlternativeName: '',

    certIdentityNoL4: '',

    certUniqueId: '',

    certKeyUsage: '',

    certCardHolderRankString: '',

    certUnifromOrganizationIDString: '',

    p11dll: 'HiCOSPKCS11.dll',

    signform: 'plugin-ctbcsec/signform.htm',

    jMethod: "",

    errorMsg: "",

    SetLicense: function (LicenseName, LicenseCode, mycallback) {
        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "SetLicense",
            Pro: {
                LicenseName: LicenseName,
                LicenseCode: LicenseCode
            }

        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    rsaSignedDataUseCn: function (cn, issuer, data2BSigned, useform, dataHeader, dataContent, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }

        //執行簽章
        this.jMethod = "";
        this.signature = "";
        this.signerCert = "";

        useform = useform || false; // default is false;

        dataHeader = dataHeader || ""; // default is empty;

        dataContent = dataContent || ""; // default is empty;

        var obj = {
            MethodSelect: "SignUseCn",
            //MethodSelect: "Version",
            Data: {
                cn: cn,
                data2BSigned: data2BSigned,
                issuer: issuer
            },
            Pro: {
                autoChoose: this.autoChoose,
                digestAlg4Sign: this.digestAlg4Sign,
                signedDataWithContent: this.signedDataWithContent,
                certChosenPriority: this.certChosenPriority,
                signerCert: this.signerCert,
                signature: this.signature
            }
        }

        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });

    },
    rsaSignedDataUseSn: function (sn, issuer, data2BSigned, useform, dataHeader, dataContent, mycallback) {
        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }

        //執行簽章
        this.jMethod = "";
        this.signature = "";
        this.signerCert = "";

        useform = useform || false; // default is false;

        dataHeader = dataHeader || ""; // default is empty;

        dataContent = dataContent || ""; // default is empty;

        var obj = {
            MethodSelect: "SignUseSn",
            Data: {
                sn: sn,
                data2BSigned: data2BSigned,
                issuer: issuer
            },
            Pro: {
                autoChoose: this.autoChoose,
                digestAlg4Sign: this.digestAlg4Sign,
                signedDataWithContent: this.signedDataWithContent,
                certChosenPriority: this.certChosenPriority,
                signerCert: this.signerCert,
                signature: this.signature
            }
        }

        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },

    rsaSignedDataUseCnOu: function (cn, ou, issuer, data2BSigned, useform, dataHeader, dataContent, mycallback) {
        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }

        //執行簽章
        this.jMethod = "";
        this.signature = "";
        this.signerCert = "";

        useform = useform || false; // default is false;

        dataHeader = dataHeader || ""; // default is empty;

        dataContent = dataContent || ""; // default is empty;

        var obj = {
            MethodSelect: "SignUseCnOu",
            Data: {
                cn: cn,
                ou: ou,
                data2BSigned: data2BSigned,
                issuer: issuer
            },
            Pro: {
                autoChoose: this.autoChoose,
                digestAlg4Sign: this.digestAlg4Sign,
                signedDataWithContent: this.signedDataWithContent,
                certChosenPriority: this.certChosenPriority
            }
        }

        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    rsaSignedData: function (data2BSigned, mycallback) {
        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }

        //執行簽章
        this.signature = "";
        this.signerCert = "";

        var obj = {
            MethodSelect: "SignedData",
            Data: {
                data2BSigned: data2BSigned
            }
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    rsaSignedDataWithContentDigest: function (data2BSigned, mycallback) {
        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }

        //執行簽章
        this.signature = "";
        this.signerCert = "";

        var obj = {
            MethodSelect: "SignedDataWithContentDigest",
            Data: {
                data2BSigned: data2BSigned
            },
            Pro: {
                digestAlg4Sign: this.digestAlg4Sign
            }
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    rsaSignedDataP11: function (data2BSigned, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }

        this.signature = "";
        this.signerCert = "";

        var obj = {
            MethodSelect: "SignP11",
            Data: {
                data2BSigned: data2BSigned
            },
            Pro: {
                autoChoose: this.autoChoose,
                digestAlg4Sign: this.digestAlg4Sign,
                p11dll: this.p11dll
            }
        }

        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    //加密
    rsaEncrypt: function (data2BSigned, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }

        //
        var obj = {
            MethodSelect: "Encrypt",
            Data: {
                data2BSigned: data2BSigned
            }
        }

        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    rsaEncryptP11: function (data2BSigned, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "EncryptP11",
            Data: {
                data2BSigned: data2BSigned
            },
            Pro: {
                autoChoose: this.autoChoose,
                alg4Encrypt: this.alg4Encrypt,
                p11dll: this.p11dll
            }
        }

        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    //解密
    rsaDecrypt: function (hexEnvelopedData, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "Decrypt",
            Data: {
                data2BSigned: hexEnvelopedData
            }
        }

        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });

    },
    rsaDecryptP11: function (hexEnvelopedData, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }

        //
        var obj = {
            MethodSelect: "DecryptP11",
            Pro: {
                p11dll: this.p11dll
            },
            Data: {
                data2BSigned: hexEnvelopedData
            }
        }

        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },

    //對檔案加解密
    rsaEncryptFileByCert: function (hexCert, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "EncryptFileByCert",
            Data: {
                data2BSigned: hexCert,
            },
            Pro: {
                alg4Encrypt: this.alg4Encrypt
            }
        }

        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },

    rsaEncryptFileByP11: function (mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "EncryptFileByP11",
            Pro: {
                alg4Encrypt: this.alg4Encrypt,
                autoChoose: this.autoChoose,
                p11dll: this.p11dll

            }
        }

        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },

    rsaDecryptFileByP11: function (mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }

        var obj = {
            MethodSelect: "DecryptFileByP11",
            Pro: {
                alg4Encrypt: this.alg4Encrypt,
                autoChoose: this.autoChoose,
                p11dll: this.p11dll
            }
        }

        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },

    decodeCertificate: function (hexCert, mycallback) {
        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }

        var obj = {
            MethodSelect: "decodeCertificate",
            Data: {
                data2BSigned: hexCert
            }
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });

    },
    //匯出軟體憑證成 Hex 字串
    exportCertToHex: function (mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "exportCertToHex"
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    exportCertToHexP11: function (iCertType, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "exportCertToHexP11",
            Pro: {
                p11dll: this.p11dll
            },
            Data: {
                iCertType: iCertType
            }
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },

    digestData: function (data, alg, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "digestData",
            Data: {
                data2BSigned: data
            },
            Pro: {
                digestAlg4Sign: alg
            }
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    digestFile: function (alg, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "digestFile",
            Pro: {
                digestAlg4Sign: alg
            }
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    //
    hexToB64: function (hexString, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "hexToB64",
            sendString: hexString
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },

    b64ToHex: function (b64String, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "b64ToHex",
            sendString: b64String
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    isGCACardPresent: function (mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "isGCACardPresent"
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    //genkey test

    containerGenCSR: function (providerName, containerName, subjectDN, providerType, keySizeInBits, keySpec, keyFlag, digestAlgId, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "containerGenCSR",
            CspObjPro: {
                providerName: providerName,
                containerName: containerName,
                providerType: providerType,
                subjectDN: subjectDN,
                keySizeInBits: keySizeInBits,
                keySpec: keySpec,
                keyFlag: keyFlag,
                digestAlgId: digestAlgId
            }
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    containerImportCert: function (providerName, containerName, providerType, keySpec, base64Cert, checkContainerExist, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        var obj = {
            MethodSelect: "containerImportCert",
            CspObjPro: {
                providerName: providerName,
                containerName: containerName,
                providerType: providerType,
                keySpec: keySpec,
                base64Cert: base64Cert,
                checkContainerExist: checkContainerExist
            }
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    RSAP7SignExByCNHex: function (cn, sn, issuer, data2BSigned, mycallback) {
        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        this.jMethod = "";
        this.signature = "";
        this.signerCert = "";

        var obj = {
            MethodSelect: "RSAP7SignExByCNHex",
            Data: {
                cn: cn,
                sn: sn,
                data2BSigned: data2BSigned,
                issuer: issuer
            },
            Pro: {
                autoChoose: this.autoChoose,
                digestAlg4Sign: this.digestAlg4Sign,
                signedDataWithContent: this.signedDataWithContent,
                certChosenPriority: this.certChosenPriority,
                signerCert: this.signerCert,
                signature: this.signature
            }
        }

        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    UnicodeToHexString: function (UnicodeString, mycallback) {
        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "UnicodeToHexString",
            sendString: UnicodeString
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    OpenStoreUser: function (StoreName, mycallback) {
        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "OpenStoreUser",
            Data: {
                sn: StoreName
            }
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    FindCtxByCertDERHex: function (bstrHexCertDER, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }

        var obj = {
            MethodSelect: "FindCtxByCertDERHex",
            Data: {
                sn: bstrHexCertDER
            }
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });

    },
    StoreExportPFX: function (bstrHexSerialNum, bstrSubjectCN, bstrPfxPassword, bstrExportPfxFilePath, vbIsFileDialogshown, mycallback) {

        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }

        var obj = {
            MethodSelect: "StoreExportPFX",
            storePFX: {
                bstrHexSerialNum: bstrHexSerialNum,
                bstrSubjectCN: bstrSubjectCN,
                bstrPfxPassword: bstrPfxPassword,
                bstrExportPfxFilePath: bstrExportPfxFilePath,
                vbIsFileDialogshown: vbIsFileDialogshown
            }
        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    StoreImportPFX: function (bstrExportPfxFilePath, bstrPfxPassword, Flag, mycallback) {
        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        //
        var obj = {
            MethodSelect: "StoreImportPFX",
            storePFX: {
                bstrPfxPassword: bstrPfxPassword,
                bstrExportPfxFilePath: bstrExportPfxFilePath,
                Flag: Flag
            }

        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    },
    StoreImportCert: function (bstrBase64Cert, vbExistenceReplaced, mycallback) {
        //先檢查連線
        if (!checkWebSocketStatus()) {
            console.log("[doSend] open socket");
            WebsocketConnection(mycallback);
        } else {
            console.log("[doSend] socket still live");
        }
        var obj = {
            MethodSelect: "StoreImportCert",
            storePFX: {
                bstrBase64Cert: bstrBase64Cert,
                vbExistenceReplaced: vbExistenceReplaced
            }

        }
        var jsonString = JSON.stringify(obj);

        // 送 websocket 的時候要等 socket 連線完成
        wait_for_socket_connection(jWebSocket, function () {
            jWebSocket.send(jsonString);
        });
    }
};
function WebsocketConnection(mycallback) {

    if ("WebSocket" in window) {
        jWebSocket = new WebSocket(jWsUrl);

        jWebSocket.onopen = function () {
            console.log("::OPEN");
            //$('#ChatContext').append("Connected" + "<br />");
        };
        jWebSocket.onmessage = function (evt) {
            jWebSocket.close();
            receiveFun(evt, mycallback);
        };
        jWebSocket.onclose = function (event) {
            console.log("::CLOSE");
            //$('#ChatContext').append("Closed" + event.code + "<br />" + "Reason" + event.reason + "<br />");
            //$('#ChatContext').append("連線失敗!"  + "<br />");
        }
        jWebSocket.onerror = function (event) {
            if (jSecurityToolFilePath !== "") {
                if (confirm("您尚未安裝 WebSocket 元件或是 WebSocket 元件沒有啟動!!\r\n未安裝 WebSocket 元件 > 請按「確定」下載 WebSocket 元件\r\n已安裝 WebSocket 元件 > 請按「取消」，然後至應用程式中啟動 jSecurityTool，並確定服務已開啟")) {
                    location.href = jSecurityToolFilePath;
                } else {
                }
            } else {
                alert("您尚未安裝 WebSocket 元件或是 WebSocket 元件沒有啟動!!");
            }
            //alert("Error");
            //$('#ChatContext').append("Error:" +"<br />");
        }
    }
}
function wait_for_socket_connection(socket, callback) {
    setTimeout(function () {
        if (socket.readyState === 1) {
            if (callback !== undefined) {
                callback();
            }
            return;
        } else {
            wait_for_socket_connection(socket, callback);
        }
    }, 5);
}
//檢查socket連線狀態
function checkWebSocketStatus() {
    /*
    CONNECTING	0	連線尚未打開。
    OPEN	1	連線已打開，可以進行通訊。
    CLOSING	2	連線正在進行關閉程序。
    CLOSED	3	連線已關閉／連線不能打開。
*/

    var live = false;
    if (jWebSocket == undefined) {
        //console.log("[checkWebSocketStatus] websocket not init");
    } else {
        if (jWebSocket.readyState == 1) {
            //console.log("[checkWebSocketStatus] websocket ok");
            live = true;
        } else {
            //console.log("[checkWebSocketStatus] websocket not ready: " + jWebSocket.readyState);
        }
    }
    return live;
}

//receive function
function receiveFun(evt, mycallback) {
    var received_obj = JSON.parse(evt.data);
    var method = received_obj.MethodSelect;
    isSend = false;
    var isError = received_obj.isError;
    if (isError) {
        var prototype = received_obj.Pro;

        jPKI.prototype.rv = prototype.rv;
        jPKI.prototype.errorMsg = received_obj.ErrorMessage;
    } else {
        jPKI.prototype.rv = 0;
        jPKI.prototype.errorMsg = "";
    }
    switch (method) {
        case "SetLicense":
            jPKI.prototype.jMethod = "SetLicense";
            SetLicense(received_obj, mycallback);
            break;
        case "isComRegister":
            var received_msg = received_obj.Message;
            if (isError) {
                alert(received_msg);
            } else {
                jGVersion = received_msg;
                jPKI.prototype.version = received_msg;
                //alert(received_msg);
                //$('#ChatContext').append(received_msg + "<br />");
                console.log(received_msg);
            }
            break;
        case "IPVerification":
            var received_msg = received_obj.ErrorMessage;
            alert(received_msg);
            break;
        case "Version":
            jPKI.prototype.jMethod = "checkPluginVer";
            setVersion(received_obj, mycallback);
            break;
        case "SignUseCn":
            jPKI.prototype.jMethod = "rsaSignedDataUseCn";
            setSignUseCnResult(received_obj, mycallback);
            break;
        case "SignUseSn":
            jPKI.prototype.jMethod = "rsaSignedDataUseSn";
            setSignUseSnResult(received_obj, mycallback);
            break;
        case "SignUseCnOu":
            jPKI.prototype.jMethod = "rsaSignedDataUseCnOu";
            setSignUseCnOuResult(received_obj, mycallback);
            break;
        case "SignedData":
            jPKI.prototype.jMethod = "rsaSignedData";
            setSignedDataResult(received_obj, mycallback);
            break;
        case "SignedDataWithContentDigest":
            jPKI.prototype.jMethod = "rsaSignedDataWithContentDigest";
            setSignedDataWithContentDigestResult(received_obj, mycallback);
            break;
        case "SignP11":
            jPKI.prototype.jMethod = "rsaSignedDataP11";
            setSignP11Result(received_obj, mycallback);
            break;
            //加密
        case "Encrypt":
            jPKI.prototype.jMethod = "rsaEncrypt";
            setEncryptResult(received_obj, mycallback);
            break;
        case "EncryptP11":
            jPKI.prototype.jMethod = "rsaEncryptP11";
            setEncryptP11Result(received_obj, mycallback);
            break;
            //
        case "Decrypt":
            jPKI.prototype.jMethod = "rsaDecrypt";
            setDecryptResult(received_obj, mycallback);
            break;
        case "DecryptP11":
            jPKI.prototype.jMethod = "rsaDecryptP11";
            setDecryptP11Result(received_obj, mycallback);
            break;
            //對檔案加解密
        case "EncryptFileByCert":
            jPKI.prototype.jMethod = "rsaEncryptFileByCert";
            setEncryptFileByCertResult(received_obj, mycallback);
            break;
        case "EncryptFileByP11":
            jPKI.prototype.jMethod = "rsaEncryptFileByP11";
            setEncryptFileByP11Result(received_obj, mycallback);
            break;
        case "DecryptFileByP11":
            jPKI.prototype.jMethod = "rsaDecryptFileByP11";
            setDecryptFileByP11Result(received_obj, mycallback);
            break;
            //
        case "decodeCertificate":
            jPKI.prototype.jMethod = "decodeCertificate";
            decodeCertificate(received_obj, mycallback);
            break;
            //匯出Hex字串
        case "exportCertToHex":
            jPKI.prototype.jMethod = "exportCertToHex";
            exportCertToHex(received_obj, mycallback);
            break;
        case "exportCertToHexP11":
            jPKI.prototype.jMethod = "exportCertToHexP11";
            exportCertToHexP11(received_obj, mycallback);
            break;
            //
        case "digestData":
            jPKI.prototype.jMethod = "digestData";
            digestData(received_obj, mycallback);
            break;
        case "digestFile":
            jPKI.prototype.jMethod = "digestFile";
            digestFile(received_obj, mycallback);
            break;
            //
        case "hexToB64":
            jPKI.prototype.jMethod = "hexToB64";
            hexToB64(received_obj, mycallback);
            break;
        case "b64ToHex":
            jPKI.prototype.jMethod = "b64ToHex";
            b64ToHex(received_obj, mycallback);
            break;
            //
        case "isGCACardPresent":
            jPKI.prototype.jMethod = "isGCACardPresent";
            isGCACardPresent(received_obj, mycallback);
            break;
            //gen key 相關 20160226
        case "containerGenCSR":
            jPKI.prototype.jMethod = "containerGenCSR";
            containerGenCSRResult(received_obj, mycallback);
            break;
        case "containerImportCert":
            jPKI.prototype.jMethod = "containerImportCert";
            containerImportCertResult(received_obj, mycallback);
            break;
        case "RSAP7SignExByCNHex":
            jPKI.prototype.jMethod = "RSAP7SignExByCNHex";
            RSAP7SignExByCNHexResult(received_obj, mycallback);
            break;
        case "UnicodeToHexString":
            jPKI.prototype.jMethod = "UnicodeToHexString";
            UnicodeToHexStringResult(received_obj, mycallback);
            break;
        case "OpenStoreUser":
            jPKI.prototype.jMethod = "OpenStoreUser";
            OpenStoreUser(received_obj, mycallback);
            break;
        case "FindCtxByCertDERHex":
            jPKI.prototype.jMethod = "FindCtxByCertDERHex";
            FindCtxByCertDERHex(received_obj, mycallback);
            break;

        case "StoreExportPFX":
            jPKI.prototype.jMethod = "StoreExportPFX";
            storeExportPFX(received_obj, mycallback);
            break;
        case "StoreImportPFX":
            jPKI.prototype.jMethod = "StoreImportPFX";
            StoreImportPFX(received_obj, mycallback);
            break;
        case "StoreImportCert":
            jPKI.prototype.jMethod = "StoreImportCert";
            StoreImportCert(received_obj, mycallback);
            break;

    }
}

function setVersion(received_obj, mycallback) {
    var received_msg = received_obj.Message;
    jGVersion = received_msg;
    result = received_msg;
    //$('#ChatContext').append(evt.data + "<br />");
    mycallback(received_msg);
}

function setSignUseCnResult(received_obj, mycallback) {
    var returnValue = received_obj.Message;
    var prototype = JSON.stringify(received_obj.Pro);

    jPKI.prototype.signature = received_obj.Pro.signature;

    jPKI.prototype.signerCert = received_obj.Pro.signerCert;

    mycallback(returnValue);
}

function setSignUseSnResult(received_obj, mycallback) {
    var returnValue = received_obj.Message;
    var prototype = JSON.stringify(received_obj.Pro);

    jPKI.prototype.signature = received_obj.Pro.signature;

    jPKI.prototype.signerCert = received_obj.Pro.signerCert;

    mycallback(returnValue);
}

function setSignUseCnOuResult(received_obj, mycallback) {
    var returnValue = received_obj.Message;
    var prototype = JSON.stringify(received_obj.Pro);

    jPKI.prototype.signature = received_obj.Pro.signature;

    jPKI.prototype.signerCert = received_obj.Pro.signerCert;

    mycallback(returnValue);
}
function setSignedDataResult(received_obj, mycallback) {

    var returnValue = received_obj.Message;
    var prototype = JSON.stringify(received_obj.Pro);

    jPKI.prototype.signature = received_obj.Pro.signature;

    jPKI.prototype.signerCert = received_obj.Pro.signerCert;

    mycallback(returnValue);
}
function setSignedDataWithContentDigestResult(received_obj, mycallback) {
    var returnValue = received_obj.Message;
    var prototype = JSON.stringify(received_obj.Pro);

    jPKI.prototype.signature = received_obj.Pro.signature;

    jPKI.prototype.signerCert = received_obj.Pro.signerCert;

    mycallback(returnValue);
}
function setSignP11Result(received_obj, mycallback) {
    var returnValue = received_obj.Message;
    var prototype = JSON.stringify(received_obj.Pro);

    jPKI.prototype.signature = received_obj.Pro.signature;

    jPKI.prototype.signerCert = received_obj.Pro.signerCert;

    mycallback(returnValue);
}
//加密
function setEncryptResult(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function setEncryptP11Result(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
//解密
function setDecryptResult(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function setDecryptP11Result(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
//
function setEncryptFileByCertResult(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function setEncryptFileByP11Result(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function setDecryptFileByP11Result(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
//
function decodeCertificate(received_obj, mycallback) {
    var Jprototype = received_obj.Pro;
    // 憑證版本
    jPKI.prototype.certVersion = Jprototype.certVersion;
    // 憑證啟始日期
    jPKI.prototype.certNotBefore_display = Jprototype.certNotBefore_display;
    jPKI.prototype.certNotBefore_timet = Jprototype.certNotBefore_timet;
    // 憑證到期日
    jPKI.prototype.certNotAfter_display = Jprototype.certNotAfter_display;
    jPKI.prototype.certNotAfter_timet = Jprototype.certNotAfter_timet;
    // 憑證序號
    jPKI.prototype.certSerial = Jprototype.certSerial;
    // 憑證主旨
    jPKI.prototype.certSubject = Jprototype.certSubject;
    // 憑證發行者
    jPKI.prototype.certIssuer = Jprototype.certIssuer;
    // 主旨別名 RFC 822 (Email)
    jPKI.prototype.certSubjectAlternativeName = Jprototype.certSubjectAlternativeName;
    // 身分證末四碼
    jPKI.prototype.certIdentityNoL4 = Jprototype.certIdentityNoL4;
    // 金鑰用途
    jPKI.prototype.certKeyUsage = Jprototype.certKeyUsage;
    //20160617 3.0.0.8新增工商憑證正副卡別和統一編號欄位取得
    //Only for MOEACA CERT
    //Uniform Organization ID 統一編號
    jPKI.prototype.certUnifromOrganizationIDString = Jprototype.certUnifromOrganizationIDString;
    //Card Holder Rank 正附卡別
    jPKI.prototype.certCardHolderRankString = Jprototype.certCardHolderRankString;

    mycallback("憑證解釋成功");
}
//
function exportCertToHex(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function exportCertToHexP11(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}

//
function digestData(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function digestFile(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
//
function isGCACardPresent(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
//
function hexToB64(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function b64ToHex(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
//gen key function 20160225

function RSAP7SignExByCNHexResult(received_obj, mycallback) {
    var returnValue = received_obj.Message;
    var prototype = JSON.stringify(received_obj.Pro);

    jPKI.prototype.signature = received_obj.Pro.signature;

    jPKI.prototype.signerCert = received_obj.Pro.signerCert;

    mycallback(returnValue);
}
function UnicodeToHexStringResult(received_obj, mycallback) {
    var returnValue = received_obj.Message;
    mycallback(returnValue);
}
function OpenStoreUser(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function FindCtxByCertDERHex(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}

function storeExportPFX(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function StoreImportPFX(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function StoreImportCert(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function containerImportCertResult(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function containerGenCSRResult(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}
function SetLicense(received_obj, mycallback) {
    var returnValue = received_obj.Message;

    mycallback(returnValue);
}



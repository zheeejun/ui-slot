import { serverProto } from "../../shared/Protobuf/new_proto";

export const offlineSpinResult: serverProto.Ispin_result = {
    "mainGame": {
        "plate": [
            {
                "winScore": 0,
                "reel": [
                    {
                        "symbol": [
                            "L3",
                            "L4",
                            "H2"
                        ]
                    },
                    {
                        "symbol": [
                            "L3",
                            "L2",
                            "H4"
                        ]
                    },
                    {
                        "symbol": [
                            "L2",
                            "H3",
                            "L1"
                        ]
                    },
                    {
                        "symbol": [
                            "E1",
                            "E1",
                            "L3"
                        ]
                    },
                    {
                        "symbol": [
                            "L1",
                            "H4",
                            "L4"
                        ]
                    }
                ],
                "winData": [],
                "winPos": [],
                "event": "{\"taichi\":[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"score\":[[0,0,0],[0,0,0],[0,0,0],[50000,20000,0],[0,0,0]],\"fgtimes\":0,\"tcfgtimes\":[],\"randomseed\":3350073277}"
            }
        ]
    },
    "freeGame": [],
    "errorCode": "",
    "balance": 10005419686983,
    "note": "",
    "jp": ""
}
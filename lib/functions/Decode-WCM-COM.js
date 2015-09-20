// name: Decode WCM-COM
// outputs: 1
msg.payload = msg.payload.telegramm;

whinfo = {};


whinfo["[10,0,1,2572,0,0].name"] = "AussentempAvg";
whinfo["[10,0,1,2572,0,0].type"] = "TEMP"; 

whinfo["[10,0,1,2,0,0].name"] = "Waermeanforderung";
whinfo["[10,0,1,2,0,0].type"] = "TEMP"; 

whinfo["[10,0,1,12,0,0].name"] = "Aussentemp";
whinfo["[10,0,1,12,0,0].type"] = "TEMP"; 

whinfo["[10,0,1,14,0,0].name"] = "Warmwasser";
whinfo["[10,0,1,14,0,0].type"] = "TEMP"; 

whinfo["[10,0,1,138,0,0].name"] = "Laststellung";
whinfo["[10,0,1,138,0,0].type"] = "VALUE"; 

whinfo["[10,0,1,373,0,0].name"] = "Betriebsphase";
whinfo["[10,0,1,373,0,0].type"] = "VALUE"; 

whinfo["[10,0,1,3101,0,0].name"] = "Vorlauftemp";
whinfo["[10,0,1,3101,0,0].type"] = "TEMP"; 

whinfo["[10,0,1,325,0,0].name"] = "Abgastemp";
whinfo["[10,0,1,325,0,0].type"] = "TEMP"; 

for(var i = 0; i < msg.payload.length; i++) {
    var obj = msg.payload[i];
    var idx = "["+obj[0]+","+obj[1]+","+obj[2]+","+obj[3]+","+obj[4]+","+obj[5]+"]";
    
    var oname = whinfo[idx+".name"];
    var otype = whinfo[idx+".type"];
    
    if ((oname !== undefined) && (otype !== undefined)) {
        nmsg = {};
        nmsg.topic = msg.topic + "/" + oname;
        switch (otype) {
            case "TEMP":
                var temp;
                temp = (obj[6] + obj[7]*256) / 10;
                nmsg.payload = temp;
                break;
            case "VALUE":
                var value;
                value = (obj[6] + obj[7]*256);
                nmsg.payload = value;
                break;
        }
        // node.warn(nmsg)
        node.send(nmsg);
    }
}

return null;
// name: Sensor to InfluxDB
// outputs: 1
var arr = msg.topic.split("/");

msg.payload = {
    "database": "test",
    "retentionPolicy": "default",
    "points": [
        {
            "measurement": "temp",
            "tags": {
                "location": arr[0],
                "device": arr[1],
                "sensor": arr[2]
            },
            "fields": {
                "value": msg.payload
            }
        }
    ]
};

return msg;
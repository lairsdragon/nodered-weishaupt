// name: ToJson
// outputs: 1
msg.payload = {"temperature": msg.payload,"ts": Math.floor(Date.now() / 1000)};

return msg;
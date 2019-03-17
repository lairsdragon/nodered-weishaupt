nodered-weishaupt
-----------------

Read values from a Weishaupt Heater with a WCM-COM 1.0 home module

See also




Program
11  Programm 1
12  Programm 2
13  Programm 3
1 Standby
3 Normal
4 Absenk
5 Sommer
255 Wie Leitstelle



{"prot":"coco","telegramm":[[6,0,1,274,0,0,3,0],[6,0,1,5,0,0,230,0],[6,0,1,8,0,0,100,0],[6,0,1,297,0,0,0,128],[6,0,1,298,0,0,0,128],[6,0,1,270,0,0,150,0]]}

```
curl 'http://192.168.50.111/parameter.json' -H 'Origin: http://192.168.50.111' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/71.0.3578.80 Chrome/71.0.3578.80 Safari/537.36' -H 'Content-Type: text/plain;charset=UTF-8' -H 'Accept: */*' -H 'Referer: http://192.168.50.111/CARD/Websites/Form_Heizung/Form_Heizung_Benutzer_2.xml?Busk=0' -H 'Cookie: i18next=de-DE' -H 'Connection: keep-alive' -H 'DNT: 1' --data-binary '{"prot":"coco","telegramm":[[6,0,1,274,0,0,0,0],[6,0,1,5,0,0,0,0],[6,0,1,8,0,0,0,0],[6,0,1,297,0,0,0,0],[6,0,1,298,0,0,0,0],[6,0,1,270,0,0,0,0],[3,0,1,128,0,0,0,0]]}' --compressed
```

6,0,1,274,0,0,3,0

6,0,1,274,0,0,3,0 -- Betriebsart
6,0,1,5,0,0,230,0 -- Raumtemperatur
6,0,1,8,0,0,100,0 -- Absenktemperatur
6,0,1,297,0,0,0,128 -- Normal Vorlauf Soll
6,0,1,298,0,0,0,128 -- Absenk Vorlauf Soll
6,0,1,270,0,0,150,0 -- Steilheit

whinfo["[6,0,1,274,0,0].name"] = "Betriebsart"
whinfo["[6,0,1,274,0,0].type"] = "VALUE"

whinfo["[6,0,1,5,0,0].name"] = "Raumtemperatur"
whinfo["[6,0,1,5,0,0].type"] = "TEMP"

whinfo["[6,0,1,8,0,0].name"] = "Absenktemperatur"
whinfo["[6,0,1,8,0,0].type"] = "TEMP"

whinfo["[6,0,1,297,0,0].name"] = "Normal Vorlauf Soll"
whinfo["[6,0,1,298,0,0].name"] = "Absenk Vorlauf Soll"
whinfo["[6,0,1,270,0,0].name"] = "Steilheit"






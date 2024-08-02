const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94752799279" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94752799279";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_14_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NyxcbiAgICAgICAgNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICA1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTczLFxuICAgICAgICA2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDczLFxuICAgICAgICA3NixcbiAgICAgICAgMTMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1LFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDY5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzZmpxbVZKd0krbzZuQnpiNnVtNFB6NVVFcTh5YzRONEoybGcrdXk2aHBNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIT3JBXzJkUFNRQ2cwczdkRElpZlpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdhNTQ5MDBkLTg0NGUtNGVhYS05MDY5LThlYzY3OGVhZGM0MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAxMTEsXG4gICAgICAyMDksXG4gICAgICAyNDEsXG4gICAgICAxOTYsXG4gICAgICAxNzksXG4gICAgICAyMTgsXG4gICAgICAwLFxuICAgICAgMTIsXG4gICAgICA3NixcbiAgICAgIDE3MyxcbiAgICAgIDIyLFxuICAgICAgMjQ3LFxuICAgICAgMjEzLFxuICAgICAgNixcbiAgICAgIDEzMyxcbiAgICAgIDEwMyxcbiAgICAgIDEyNyxcbiAgICAgIDE5MixcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgMjQ2LFxuICAgICAgMTAxLFxuICAgICAgMjM5LFxuICAgICAgMTg5LFxuICAgICAgMjExLFxuICAgICAgMTE2LFxuICAgICAgNDksXG4gICAgICAxNTIsXG4gICAgICA5NCxcbiAgICAgIDE1OCxcbiAgICAgIDU4LFxuICAgICAgMjIzLFxuICAgICAgMTc2LFxuICAgICAgODMsXG4gICAgICAyMzMsXG4gICAgICAxNTcsXG4gICAgICAxNDksXG4gICAgICA4NixcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBFU1lESkozXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1Mjc5OTI3OToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlZpaGFuZ2FcIixcbiAgICBcImxpZFwiOiBcIjU4NzQyNzAzOTc2NDYxOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tMTXpYQVFvcmV6dFFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieTVydUE4QXoxTjVBdVdzMzVmT01ld0lGTDYybi9UWHdBSVhXUW9La3gwWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrUzJaTlY4dE9xZm80R1MrLzg3d2p5am9QeWJRbkMvU2RaQnllQk50MzZES2V4V0J3My9udE9veGNHbkd5dnB3RStvRzhRa2VRaFB1ZE83WUpuSFlDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhK3hIK2FXWTFpbnNmK3R0eTVzV3NWZ2p6dXpiblZhNFB1VUhLUEY3WVU0ZTZMMjdvemE3OHBmVDNnTEMxZzRLaUdpT2JJY1FoR1NiYmh5ZUNwMXJCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1Mjc5OTI3OToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYwNDQ1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUF0VFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXRULmpzb24iOiAie1wia2V5RGF0YVwiOlwieitwT2Z4enpYd1Y5L1NrOENpS3RLVzhFUmM5cEkyNTBXSlpMamdXRjc4VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzYxNTIzNTQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjYwNDQyMTg5OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",


const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
	return `
ββββ *π°ππππππππππ π«π πΌππππππ* βββββ
β£β± *Nombre* : ${pushname}
β£β± *Numero* : wa.me/${sender.split("@")[0]}
β£β± *XP* : ${getLevelingXp(sender)}/${reqXp}
β£β± *Nivel* : ${getLevelingLevel(sender)}
β£β± *Registro de usuario : ${_registered.length}
β£β± *YouTube* : https://youtube.com/channel/UCqCaZ_SEhSykF3-PR5os7YA
β£β± *Grupo oficial * : https://chat.whatsapp.com/GUdiX6cuCE1I14hNTPzhae
β£β± *Creador* : πΉππππ₯πππππ
βββββββββββββββββ

ββββ *LEVEL 0* ββββ
β£β± *${prefix}sticker*
β£β± *${prefix}tts*
β£β± *${prefix}toimg*
β£βββ *LEVEL 2* βββ
β£β± *${prefix}ocr*
β£β± *${prefix}quotemaker*
β£β± *${prefix}tiktokstalk*
β£β± *${prefix}fototiktok*
β£β± *${prefix}truth*
β£β± *${prefix}dare*
β£βββ *LEVEL 4* βββ
β£β± *${prefix}text3d*
β£β± *${prefix}bucin*
β£β± *${prefix}hilih*
β£β± *${prefix}persengay*
β£β± *${prefix}ssweb*
β£βββ *LEVEL 6* βββ
β£β± *${prefix}artinama*
β£β± *${prefix}spamcall*
β£β± *${prefix}quotes*
β£β± *${prefix}kbbi*
β£β± *${prefix}map*
β£β± *${prefix}cerpen*
β£βββ *LEVEL 8* βββ
β£β± *${prefix}chord*
β£β± *${prefix}lirik*
β£β± *${prefix}phlogo*
β£βββ *LEVEL 9* βββ
β£β± *${prefix}bisakah*
β£β± *${prefix}apakah*
β£β± *${prefix}kapankah*
β£β± *${prefix}rate*
β£β± *${prefix}owner*
βββββββββββββββ

ββββ *Nsfw* ββββββ
β£β± *${prefix}waifu*
β£β± *${prefix}anime*
β£β± *${prefix}neko*
β£β± *${prefix}dewabatch*
β£β± *${prefix}pokemon*
β£β± *${prefix}anjing*
β£β± *${prefix}indohot*
βββββββββββββββ

ββββ *Group* ββββββ
β£β± *${prefix}hidetag*
β£β± *${prefix}linkgc*
β£β± *${prefix}tagall*
β£β± *${prefix}setpp*
β£β± *${prefix}add*
β£β± *${prefix}kick*
β£β± *${prefix}setname*
β£β± *${prefix}setdesc*
β£β± *${prefix}demote*
β£β± *${prefix}promote*
β£β± *${prefix}listadmin*
β£β± *${prefix}group* [open/closed]
β£β± *${prefix}leveling* [enable/disable]
β£β± *${prefix}nsfw* [1/0]
β£β± *${prefix}simih* [1/0]
β£β± *${prefix}welcome* [1/0]
β£βββ *Owner* βββ
β£β± *${prefix}bc*
β£β± *${prefix}setprefix*
β£β± *${prefix}getses*
β£β± *${prefix}clearall*
β£β± *${prefix}block*
β£β± *${prefix}unblock*
β£β± *${prefix}leave*
β£β± *${prefix}clone*
βββββββββββββββββ

Ayuda a mi creador πΉππππ₯πππππ

`
}
exports.help = help



  

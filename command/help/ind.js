exports.limitcount = (prem, limitCounts) => {
  return `
*ใ LIMIT COUNT ใ*
Sisa limit : ${prem ? "1000" : `${limitCounts}`}
`;
};
exports.limitend = (pushname) => {
  return `Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`;
};
exports.noregis = (pushname) => {
  return ` ๐โโ๏ธ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`;
};
exports.regis = () => {
  return ` Lu udah daftar ๐`;
};
exports.daftar = (sender, pushname, time, serialUser, totalUser) => {
  return ` *PENDAFTARAN BERHASIL*

โข Nama : ${pushname}
โข Nomor : ${sender.split("@")[0]}
โข Waktu : ${time}
โข Serial : ${serialUser}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`;
};
exports.owner = (botname) => {
  return ` ๐โโ๏ธ Command khusus owner ${botname}`;
};
exports.admin = (groupName) => {
  return `๐โโ๏ธ Command khusus admin ${groupName}`;
};
exports.adminB = () => {
  return `โ ๏ธ Bot bukan admin grup`;
};
exports.err = () => {
  return `โ ๏ธ Fitur ini sedang eror !`;
};
exports.group = () => {
  return `๐โโ๏ธ Command khusus di dalam group`;
};

exports.wait = () => {
  return `โณ Sedang di proses ~`;
};
exports.ok = () => {
  return ` โ Oke done ~`;
};
exports.welcome = () => {
  return `Jangan Lupa Intro Ya~
โฏึธ   ึNama :
โฏึธ   ึNick :
โฏึธ   ึKelamin :
โฏึธ   ึDomisil :
โฏึธ   ึึึึึึึึึึึึึึึึึึึึึึึึึึึึึึึึKenapa Malam Gelap :
โฐโ แฌ _Patuhi Rules Group Ya_  >_<`;
};
exports.leave = () => {
  return `
โ
โฐโ แฌ _Balik Lagi Wajib Donasi Ya_ >_<`;
};
exports.menu = (prefix, salam, pushname) => {
  return `Hi ${pushname}, selamat ${salam}

โญโโฌฃ *List Menu*
โ โข ${prefix}menu
โ โข ${prefix}help
โ
โ *Download*
โ โข ${prefix}play [query]
โ โข ${prefix}song [judul lagu]
โ โข ${prefix}pinterest [query]
โ โข ${prefix}ytmp3 [url]
โ โข ${prefix}ytmp4 [url]
โ โข ${prefix}tiktok [url]
โ โข ${prefix}tiktoknowm [url]
โ โข ${prefix}tiktokwm [url]
โ โข ${prefix}tiktokaudio [url]
โ โข ${prefix}soundcloud [url]
โ โข ${prefix}telesticker [url]
โ โข ${prefix}spotify [url]
โ โข ${prefix}spotifysearch [query]
โ 
โ *Info*
โ โข ${prefix}owner
โ โข ${prefix}daftar
โ
โ *Owner*
โ โข ${prefix}broadcast [text]
โ โข ${prefix}leave
โ
โ *Group*
โ โข ${prefix}antilink 1 / 0
โ โข ${prefix}hidetag [text]
โ โข ${prefix}linkgrup
โ โข ${prefix}tagall
โ โข ${prefix}kick @tag
โ โข ${prefix}setdesc [text] 
โ โข ${prefix}setname [text] 
โฐโโฌฃ
`;
};

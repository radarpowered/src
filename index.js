/*

PROPRIETARY RIGHTS NOTICE

THIS SOFTWARE PRODUCT IS THE PROPRIETARY PROPERTY OF SRYDEN, 
149 NEW MONTGOMERY ST 4TH FLOOR, SAN FRANCISCO, CA 94105, UNITED STATES ("SRYDEN, INC.").

ALL RIGHT, TITLE, AND INTEREST IN AND TO THIS SOFTWARE PRODUCT AND ANY 
AND ALL COPIES THEREOF, INCLUDING BUT NOT LIMITED TO ALL INTELLECTUAL 
PROPERTY RIGHTS, ARE AND SHALL REMAIN THE EXCLUSIVE PROPERTY OF OWNER.

THIS SOFTWARE PRODUCT IS PROTECTED BY COPYRIGHT LAWS AND INTERNATIONAL 
COPYRIGHT TREATIES, AS WELL AS OTHER INTELLECTUAL PROPERTY LAWS AND 
TREATIES.

UNAUTHORIZED REPRODUCTION, DISPLAY, DISTRIBUTION, OR USE OF THIS SOFTWARE 
PRODUCT OR ANY PORTION THEREOF MAY RESULT IN SEVERE CIVIL AND CRIMINAL 
PENALTIES, AND WILL BE PROSECUTED TO THE MAXIMUM EXTENT POSSIBLE UNDER LAW.

© 2024 SRYDEN, INC. ALL RIGHTS RESERVED.

*/ 

const _0x319abc=_0x5997;(function(_0x4de340,_0x50dd46){const _0x2f53f0=_0x5997,_0x43fbd9=_0x4de340();while(!![]){try{const _0x261def=parseInt(_0x2f53f0(0x150))/0x1*(parseInt(_0x2f53f0(0xe1))/0x2)+-parseInt(_0x2f53f0(0x166))/0x3*(-parseInt(_0x2f53f0(0xeb))/0x4)+-parseInt(_0x2f53f0(0x118))/0x5*(parseInt(_0x2f53f0(0xef))/0x6)+parseInt(_0x2f53f0(0x12f))/0x7+-parseInt(_0x2f53f0(0x15d))/0x8+parseInt(_0x2f53f0(0xea))/0x9*(parseInt(_0x2f53f0(0x132))/0xa)+-parseInt(_0x2f53f0(0xe3))/0xb;if(_0x261def===_0x50dd46)break;else _0x43fbd9['push'](_0x43fbd9['shift']());}catch(_0x4c0dad){_0x43fbd9['push'](_0x43fbd9['shift']());}}}(_0x26e8,0x72c40));const fs=require('fs-extra'),path=require(_0x319abc(0x14f)),axios=require(_0x319abc(0x16e)),Docker=require('dockerode'),crypto=require(_0x319abc(0x12d)),config=require(_0x319abc(0x11a)),VOLUMES_DIR=config[_0x319abc(0x141)]||_0x319abc(0x13a),STRATEGIES_DIR=path[_0x319abc(0xf6)](__dirname,_0x319abc(0x15b)),FLAGGED_CONTAINERS_FILE=_0x319abc(0xe2),SCAN_INTERVAL=0x3*0x3c*0x3e8,PUBLIC_WEBHOOK_URL=config[_0x319abc(0x167)],PRIVATE_WEBHOOK_URL=config[_0x319abc(0x14a)],PTERODACTYL_API_URL=config[_0x319abc(0xdf)]+_0x319abc(0x146),PTERODACTYL_API_KEY=config['key'],PTERODACTYL_SESSION_COOKIE='none',docker=new Docker();let flaggedContainers={};fs[_0x319abc(0xf5)](FLAGGED_CONTAINERS_FILE)&&(flaggedContainers=JSON[_0x319abc(0x143)](fs['readFileSync'](FLAGGED_CONTAINERS_FILE,_0x319abc(0x10d))));async function calculateFileHash(_0x4ef035){return new Promise((_0x29422d,_0x597799)=>{const _0xc1139d=_0x5997,_0x2037a5=crypto['createHash']('sha256'),_0x5c45bf=fs[_0xc1139d(0x160)](_0x4ef035);_0x5c45bf['on'](_0xc1139d(0x151),_0x597799),_0x5c45bf['on'](_0xc1139d(0xed),_0x86acd1=>_0x2037a5[_0xc1139d(0x13b)](_0x86acd1)),_0x5c45bf['on'](_0xc1139d(0x155),()=>_0x29422d(_0x2037a5[_0xc1139d(0x10f)](_0xc1139d(0x13d))));});}function _0x26e8(){const _0x145d2c=['readdir','file_content','\x20on\x20volume\x20','Server\x20','Error\x20in\x20scan\x20cycle:','Completed\x20scan.\x20Waiting\x20','{usage}','Path\x20is\x20undefined\x20for\x20','message','.\x20Skipping.','\x20check\x20in\x20strategy\x20','All\x20Flags','Error\x20executing\x20check\x20','includes','\x20already\x20flagged.\x20Skipping...','No\x20valid\x20strategies\x20loaded.\x20Check\x20your\x20.radar\x20files\x20and\x20permissions.','Error\x20checking\x20container\x20logs:','utf-8','readFile','digest','{pattern}','length','Invalid\x20file\x20check\x20type:\x20','rx_bytes','Invalid\x20check\x20configuration:\x20path\x20or\x20max_size\x20is\x20undefined\x20for\x20volume\x20','Starting\x20continuous\x20container\x20abuse\x20detection...','warn','Unspecified\x20issue\x20detected','27955uHHkFi','Invalid\x20check\x20configuration:\x20path\x20is\x20undefined\x20for\x20volume\x20','./config.json','networks','type','Container','process_check','{filename}','Error\x20suspending\x20server\x20','Suspicious\x20activity\x20detected\x20by\x20Radar.','Invalid\x20check\x20configuration:\x20patterns\x20is\x20undefined\x20for\x20container\x20','/servers?per_page=50000','Invalid\x20check\x20configuration:\x20path\x20or\x20patterns\x20is\x20undefined\x20for\x20volume\x20','post','Error\x20in\x20anti-abuse\x20script:','{processes}','\x20from\x20','\x20in\x20strategy\x20','\x20seconds\x20before\x20next\x20scan...','get','tx_bytes','crypto','network_usage','2388729RZTHFc','checks','Error\x20checking\x20container\x20network\x20usage:','10DyyOMt','toISOString','dependencies','Error\x20checking\x20file\x20existence\x20for\x20','Executing\x20strategy:\x20','patterns','split','file_size','/var/lib/pterodactyl/volumes','update','Executing\x20check\x20type:\x20','hex','file_existence','push','dependency','volumes_dir','Bearer\x20','parse','\x20suspended\x20successfully.','getContainer','/api/application','writeFile','devDependencies','\x20for\x20volume\x20','private_whook','Error\x20sending\x20private\x20alert\x20for\x20container\x20','.radar','name','\x20strategies\x20successfully.','path','137cjIYfe','error','toString','threshold','filter','end','Sent\x20public\x20alert\x20for\x20container\x20','isArray','Sent\x20private\x20alert\x20for\x20container\x20','\x20does\x20not\x20exist.\x20Skipping...','Error\x20reading\x20strategies\x20directory:','strategies','basename','4900744qBqZoJ','log','package_check','createReadStream','uuid','Panel\x20Server\x20ID','package.json','Unknown','processes','6OjGrUw','public_whook','Invalid\x20check\x20configuration:\x20command\x20or\x20cpu_threshold\x20is\x20undefined\x20for\x20container\x20','/suspend','logs','application/json','cpu_threshold','reduce','axios','exec','stat','Loaded\x20strategy:\x20','\x20for\x20strategy\x20','endsWith','log_content','Volume\x20directory\x20for\x20','file_check','Unknown\x20check\x20type:\x20','panel','file','13254ImyPAU','flagged.json','8246414DpIFzu','/servers/','command','toLowerCase','Docker\x20UUID','attributes','trim','5564331fQOFol','19340GuilLz','usage','data','stringify','48HUVZLs','replace','Error\x20loading\x20strategy\x20from\x20','Incident\x20[','pattern','Error\x20processing\x20volume\x20','existsSync','join','Container\x20','filename','Invalid\x20check\x20configuration:\x20threshold\x20is\x20undefined\x20for\x20container\x20','max_size','Powered\x20by\x20https://radar.sryden.com'];_0x26e8=function(){return _0x145d2c;};return _0x26e8();}async function getServerIdFromUUID(_0x322013){const _0x27df5f=_0x319abc;try{const _0x4af4eb=await axios[_0x27df5f(0x12b)](PTERODACTYL_API_URL+_0x27df5f(0x123),{'headers':{'Accept':'application/json','Content-Type':_0x27df5f(0x16b),'Authorization':_0x27df5f(0x142)+PTERODACTYL_API_KEY,'Cookie':PTERODACTYL_SESSION_COOKIE}}),_0x595266=_0x4af4eb[_0x27df5f(0xed)][_0x27df5f(0xed)]['find'](_0x58d76e=>_0x58d76e[_0x27df5f(0xe8)][_0x27df5f(0x161)]===_0x322013);return _0x595266?_0x595266['attributes']['id']:null;}catch(_0x42ee0c){return console['error']('Error\x20fetching\x20server\x20data:',_0x42ee0c),null;}}async function suspendServer(_0x22415b){const _0x3db96e=_0x319abc;try{await axios[_0x3db96e(0x125)](PTERODACTYL_API_URL+_0x3db96e(0xe4)+_0x22415b+_0x3db96e(0x169),{},{'headers':{'Accept':_0x3db96e(0x16b),'Content-Type':_0x3db96e(0x16b),'Authorization':'Bearer\x20'+PTERODACTYL_API_KEY,'Cookie':PTERODACTYL_SESSION_COOKIE}}),console['log'](_0x3db96e(0xff)+_0x22415b+_0x3db96e(0x144));}catch(_0x110053){console['error'](_0x3db96e(0x120)+_0x22415b+':',_0x110053);}}async function sendPublicAlert(_0x5d8d4f,_0x5e5e1a){const _0x4cd284=_0x319abc,_0x397c0f={'title':_0x4cd284(0x121),'color':0x5046e4,'fields':[{'name':_0x4cd284(0x11d),'value':_0x5e5e1a||_0x4cd284(0x164),'inline':![]}],'timestamp':new Date()[_0x4cd284(0x133)](),'footer':_0x4cd284(0xfb)},_0x52051c={'embeds':[_0x397c0f]};try{await axios[_0x4cd284(0x125)](PUBLIC_WEBHOOK_URL,_0x52051c),console[_0x4cd284(0x15e)](_0x4cd284(0x156)+_0x5d8d4f);}catch(_0x4a7727){console[_0x4cd284(0x151)]('Error\x20sending\x20public\x20alert\x20for\x20container\x20'+_0x5d8d4f+':',_0x4a7727);}}async function sendPrivateAlert(_0x4975e1,_0x118280,_0x515896){const _0x514ca1=_0x319abc,_0x87e184={'title':_0x514ca1(0xf2)+_0x118280+']','color':0x5046e4,'fields':[{'name':_0x514ca1(0xe7),'value':_0x4975e1,'inline':!![]},{'name':_0x514ca1(0x162),'value':_0x118280||_0x514ca1(0x164),'inline':!![]},{'name':_0x514ca1(0x107),'value':_0x515896[_0x514ca1(0xf6)]('\x0a')}],'footer':{'text':'©\x20SRYDEN,\x20Inc.'},'timestamp':new Date()['toISOString']()},_0x254b53={'embeds':[_0x87e184]};try{await axios[_0x514ca1(0x125)](PRIVATE_WEBHOOK_URL,_0x254b53),console[_0x514ca1(0x15e)](_0x514ca1(0x158)+_0x4975e1);}catch(_0x1cb2af){console[_0x514ca1(0x151)](_0x514ca1(0x14b)+_0x4975e1+':',_0x1cb2af);}}async function loadStrategies(){const _0x409646=_0x319abc,_0x10a7fd=[];try{const _0x122e22=await fs[_0x409646(0xfc)](STRATEGIES_DIR);for(const _0x5bef73 of _0x122e22){if(_0x5bef73[_0x409646(0xda)](_0x409646(0x14c))){const _0x43368a=path[_0x409646(0xf6)](STRATEGIES_DIR,_0x5bef73);try{const _0x47e470=await fs[_0x409646(0x10e)](_0x43368a,'utf-8'),_0x235d2e=JSON['parse'](_0x47e470);if(!_0x235d2e[_0x409646(0x14d)]||!_0x235d2e[_0x409646(0x11c)]||!Array[_0x409646(0x157)](_0x235d2e[_0x409646(0x130)])){console[_0x409646(0x116)]('Invalid\x20strategy\x20structure\x20in\x20file\x20'+_0x5bef73+_0x409646(0x105));continue;}_0x10a7fd[_0x409646(0x13f)](_0x235d2e),console[_0x409646(0x15e)](_0x409646(0xd8)+_0x235d2e[_0x409646(0x14d)]+_0x409646(0x128)+_0x5bef73);}catch(_0x5029d3){console['error'](_0x409646(0xf1)+_0x5bef73+':',_0x5029d3);}}}}catch(_0x58a120){console['error'](_0x409646(0x15a),_0x58a120);}return _0x10a7fd[_0x409646(0x111)]===0x0?console['warn'](_0x409646(0x10b)):console[_0x409646(0x15e)]('Loaded\x20'+_0x10a7fd[_0x409646(0x111)]+_0x409646(0x14e)),_0x10a7fd;}async function executeStrategy(_0x1e5bff,_0x48f86e,_0x4cb710){const _0x583c8e=_0x319abc,_0x142c5b=[];console[_0x583c8e(0x15e)](_0x583c8e(0x136)+_0x1e5bff[_0x583c8e(0x14d)]+_0x583c8e(0x149)+_0x48f86e);if(!Array[_0x583c8e(0x157)](_0x1e5bff[_0x583c8e(0x130)]))return console['warn']('Invalid\x20checks\x20array\x20in\x20strategy\x20'+_0x1e5bff[_0x583c8e(0x14d)]+_0x583c8e(0x149)+_0x48f86e),_0x142c5b;for(const _0x165720 of _0x1e5bff[_0x583c8e(0x130)]){if(!_0x165720||typeof _0x165720!=='object'||!_0x165720[_0x583c8e(0x11c)]){console['warn']('Invalid\x20check\x20configuration\x20in\x20strategy\x20'+_0x1e5bff[_0x583c8e(0x14d)]+_0x583c8e(0x149)+_0x48f86e);continue;}let _0x513a4b=![],_0xe94332=_0x165720[_0x583c8e(0x104)]||_0x583c8e(0x117);try{console['log'](_0x583c8e(0x13c)+_0x165720[_0x583c8e(0x11c)]+_0x583c8e(0xd9)+_0x1e5bff[_0x583c8e(0x14d)]+_0x583c8e(0xfe)+_0x48f86e);switch(_0x165720[_0x583c8e(0x11c)]){case _0x583c8e(0x13e):case _0x583c8e(0xfd):case _0x583c8e(0x139):if(!_0x165720[_0x583c8e(0x14f)]&&_0x1e5bff['type']!==_0x583c8e(0xdd)){console[_0x583c8e(0x116)](_0x583c8e(0x103)+_0x165720[_0x583c8e(0x11c)]+_0x583c8e(0x106)+_0x1e5bff[_0x583c8e(0x14d)]+'\x20for\x20volume\x20'+_0x48f86e);continue;}_0x513a4b=await fileCheck(_0x48f86e,_0x165720,_0x1e5bff[_0x583c8e(0x11c)]);break;case _0x583c8e(0x140):if(!_0x165720[_0x583c8e(0xe0)]&&_0x1e5bff[_0x583c8e(0x11c)]!==_0x583c8e(0x15f)){console['warn']('File\x20is\x20undefined\x20for\x20dependency\x20check\x20in\x20strategy\x20'+_0x1e5bff['name']+_0x583c8e(0x149)+_0x48f86e);continue;}_0x513a4b=await dependencyCheck(_0x48f86e,_0x165720,_0x1e5bff['type']);break;case _0x583c8e(0xdb):_0x513a4b=await logContentCheck(_0x4cb710,_0x165720);break;case _0x583c8e(0x11e):_0x513a4b=await processCheck(_0x4cb710,_0x165720);break;case _0x583c8e(0x12e):_0x513a4b=await networkUsageCheck(_0x4cb710,_0x165720);break;default:console['warn'](_0x583c8e(0xde)+_0x165720[_0x583c8e(0x11c)]+_0x583c8e(0x129)+_0x1e5bff[_0x583c8e(0x14d)]+_0x583c8e(0x149)+_0x48f86e);continue;}_0x513a4b&&(_0xe94332=replacePlaceholders(_0xe94332,_0x513a4b),_0x142c5b[_0x583c8e(0x13f)](_0xe94332),console[_0x583c8e(0x15e)]('Flag\x20raised:\x20'+_0xe94332));}catch(_0x57b43a){console['error'](_0x583c8e(0x108)+_0x165720[_0x583c8e(0x11c)]+_0x583c8e(0x129)+_0x1e5bff[_0x583c8e(0x14d)]+_0x583c8e(0x149)+_0x48f86e+':',_0x57b43a);}}return _0x142c5b;}function replacePlaceholders(_0x40b6f2,_0x2512cb){const _0x12939c=_0x319abc;return _0x40b6f2[_0x12939c(0xf0)](_0x12939c(0x110),_0x2512cb[_0x12939c(0xf3)]||'')[_0x12939c(0xf0)](_0x12939c(0x11f),_0x2512cb[_0x12939c(0xf8)]||'')[_0x12939c(0xf0)]('{dependency}',_0x2512cb[_0x12939c(0x140)]||'')[_0x12939c(0xf0)](_0x12939c(0x102),_0x2512cb[_0x12939c(0xec)]?(_0x2512cb[_0x12939c(0xec)]/0x400/0x400)['toFixed'](0x2):'')[_0x12939c(0xf0)](_0x12939c(0x127),_0x2512cb[_0x12939c(0x165)]?_0x2512cb['processes'][_0x12939c(0xf6)](',\x20'):'');}async function fileCheck(_0x292abd,_0x508b7b,_0x1ca00b){const _0x50ed96=_0x319abc,_0x155b4e=_0x1ca00b==='file_check'?path['join'](_0x292abd,_0x508b7b[_0x50ed96(0x14f)]||''):_0x508b7b[_0x50ed96(0x14f)];switch(_0x508b7b['type']){case _0x50ed96(0x13e):return fileExistenceCheck(_0x155b4e,_0x508b7b);case _0x50ed96(0xfd):return fileContentCheck(_0x155b4e,_0x508b7b);case _0x50ed96(0x139):return fileSizeCheck(_0x155b4e,_0x508b7b);default:throw new Error(_0x50ed96(0x112)+_0x508b7b[_0x50ed96(0x11c)]);}}async function fileExistenceCheck(_0x1273e3,_0xf18879){const _0x4d6132=_0x319abc;if(!_0xf18879[_0x4d6132(0x14f)])return console[_0x4d6132(0x116)](_0x4d6132(0x119)+_0x1273e3),![];const _0x4e1661=path[_0x4d6132(0xf6)](_0x1273e3,_0xf18879['path']);if(_0xf18879[_0x4d6132(0x137)]){try{for(const _0x314a56 of _0xf18879[_0x4d6132(0x137)]){const _0x4bd9c9=await glob(path[_0x4d6132(0xf6)](_0x4e1661,_0x314a56));if(_0x4bd9c9['length']>0x0)return{'filename':path[_0x4d6132(0x15c)](_0x4bd9c9[0x0])};}}catch(_0xdb5d5e){console['error'](_0x4d6132(0x135)+_0x4e1661+':',_0xdb5d5e);}return![];}else try{return fs[_0x4d6132(0xf5)](_0x4e1661);}catch(_0x3a7bc0){return console['error']('Error\x20checking\x20file\x20existence\x20for\x20'+_0x4e1661+':',_0x3a7bc0),![];}}async function fileContentCheck(_0xcb9cb3,_0x26e86b){const _0x2de288=_0x319abc;if(!_0x26e86b['path']||!_0x26e86b[_0x2de288(0x137)])return console[_0x2de288(0x116)](_0x2de288(0x124)+_0xcb9cb3),![];const _0x449d4a=path['join'](_0xcb9cb3,_0x26e86b[_0x2de288(0x14f)]);if(fs[_0x2de288(0xf5)](_0x449d4a)){const _0x17cd00=await fs[_0x2de288(0x10e)](_0x449d4a,_0x2de288(0x10d));for(const _0x3bce5e of _0x26e86b[_0x2de288(0x137)]){if(_0x17cd00['includes'](_0x3bce5e))return{'pattern':_0x3bce5e};}}return![];}async function fileSizeCheck(_0x5d0def,_0x15cb3d){const _0x54fd44=_0x319abc;if(!_0x15cb3d[_0x54fd44(0x14f)]||!_0x15cb3d[_0x54fd44(0xfa)])return console[_0x54fd44(0x116)](_0x54fd44(0x114)+_0x5d0def),![];const _0x471531=path['join'](_0x5d0def,_0x15cb3d[_0x54fd44(0x14f)]);if(fs['existsSync'](_0x471531)){const _0x594cfd=await fs[_0x54fd44(0xd7)](_0x471531);return _0x594cfd['size']<_0x15cb3d[_0x54fd44(0xfa)];}return![];}async function dependencyCheck(_0x108760,_0x308db9){const _0x49acc8=_0x319abc;if(!_0x308db9['file']||!_0x308db9[_0x49acc8(0x137)])return console[_0x49acc8(0x116)]('Invalid\x20check\x20configuration:\x20file\x20or\x20patterns\x20is\x20undefined\x20for\x20volume\x20'+_0x108760),![];const _0x1864cf=strategyType==='package_check'?path['join'](_0x108760,_0x308db9[_0x49acc8(0xe0)]||_0x49acc8(0x163)):_0x308db9[_0x49acc8(0xe0)];if(fs[_0x49acc8(0xf5)](_0x1864cf)){const _0x4e6d9b=JSON[_0x49acc8(0x143)](await fs[_0x49acc8(0x10e)](_0x1864cf,_0x49acc8(0x10d))),_0x3e2cbf={..._0x4e6d9b[_0x49acc8(0x134)],..._0x4e6d9b[_0x49acc8(0x148)]};for(const _0x561bb3 of _0x308db9[_0x49acc8(0x137)]){const _0x15c8ab=Object['keys'](_0x3e2cbf)['find'](_0x217f31=>_0x217f31[_0x49acc8(0xe6)]()[_0x49acc8(0x109)](_0x561bb3[_0x49acc8(0xe6)]()));if(_0x15c8ab)return{'dependency':_0x15c8ab};}}return![];}async function logContentCheck(_0x321423,_0x1206e0){const _0x15cd65=_0x319abc;if(!_0x1206e0[_0x15cd65(0x137)])return console[_0x15cd65(0x116)](_0x15cd65(0x122)+_0x321423['id']),![];try{const _0x3c0551=await _0x321423[_0x15cd65(0x16a)]({'stdout':!![],'stderr':!![],'tail':0x3e8}),_0x3b0ad9=_0x3c0551[_0x15cd65(0x152)]('utf-8');for(const _0x35391b of _0x1206e0['patterns']){if(_0x3b0ad9[_0x15cd65(0xe6)]()[_0x15cd65(0x109)](_0x35391b[_0x15cd65(0xe6)]()))return{'pattern':_0x35391b};}}catch(_0x2cd16b){console[_0x15cd65(0x151)](_0x15cd65(0x10c),_0x2cd16b);}return![];}async function processCheck(_0x1eab7e,_0xd3a313){const _0x399e64=_0x319abc;if(!_0xd3a313[_0x399e64(0xe5)]||!_0xd3a313[_0x399e64(0x16c)])return console[_0x399e64(0x116)](_0x399e64(0x168)+_0x1eab7e['id']),![];try{const _0x31e0f9=await _0x1eab7e[_0x399e64(0xd6)]({'Cmd':['sh','-c',_0xd3a313[_0x399e64(0xe5)]],'AttachStdout':!![],'AttachStderr':!![]}),_0x2e4f0f=await _0x31e0f9['start'](),_0x590355=await new Promise(_0x3b08d8=>{const _0x4fd2aa=_0x399e64;let _0xb87ebe='';_0x2e4f0f['on'](_0x4fd2aa(0xed),_0x988c44=>_0xb87ebe+=_0x988c44[_0x4fd2aa(0x152)]()),_0x2e4f0f['on']('end',()=>_0x3b08d8(_0xb87ebe));}),_0x2fac66=_0x590355[_0x399e64(0x138)]('\x0a')[_0x399e64(0x154)](_0x3881f4=>{const _0x5435f6=_0x399e64,_0x43ffea=_0x3881f4[_0x5435f6(0xe9)]()['split'](/\s+/);if(_0x43ffea[_0x5435f6(0x111)]>0x8){const _0x49a16d=parseFloat(_0x43ffea[0x8]);return!isNaN(_0x49a16d)&&_0x49a16d>_0xd3a313[_0x5435f6(0x16c)];}return![];});return _0x2fac66[_0x399e64(0x111)]>0x0?{'processes':_0x2fac66}:![];}catch(_0x580451){return console[_0x399e64(0x151)]('Error\x20checking\x20container\x20processes:',_0x580451),![];}}async function networkUsageCheck(_0x31f3b4,_0x5bacb5){const _0x20a5d1=_0x319abc;if(!_0x5bacb5[_0x20a5d1(0x153)])return console[_0x20a5d1(0x116)](_0x20a5d1(0xf9)+_0x31f3b4['id']),![];try{const _0x345c25=await _0x31f3b4['stats']({'stream':![]}),_0x5cac9b=_0x345c25[_0x20a5d1(0x11b)]&&Object['values'](_0x345c25[_0x20a5d1(0x11b)])[_0x20a5d1(0x16d)]((_0x432a3,_0x3400a3)=>_0x432a3+_0x3400a3[_0x20a5d1(0x113)]+_0x3400a3[_0x20a5d1(0x12c)],0x0);return _0x5cac9b>_0x5bacb5['threshold']?{'usage':_0x5cac9b}:![];}catch(_0x3b44db){return console['error'](_0x20a5d1(0x131),_0x3b44db),![];}}async function checkVolume(_0xab559a,_0x5083e9){const _0x584cf7=_0x319abc,_0x4c643b=path[_0x584cf7(0xf6)](VOLUMES_DIR,_0xab559a),_0x28c30a=[];if(!fs['existsSync'](_0x4c643b))return console[_0x584cf7(0x15e)](_0x584cf7(0xdc)+_0xab559a+_0x584cf7(0x159)),_0x28c30a;const _0x2bde7b=docker[_0x584cf7(0x145)](_0xab559a);for(const _0x3397f8 of _0x5083e9){const _0x5a4440=await executeStrategy(_0x3397f8,_0x4c643b,_0x2bde7b);_0x28c30a[_0x584cf7(0x13f)](..._0x5a4440);}return _0x28c30a;}function _0x5997(_0xd66644,_0x2f8398){const _0x26e8ae=_0x26e8();return _0x5997=function(_0x599751,_0x2975ee){_0x599751=_0x599751-0xd6;let _0xa89503=_0x26e8ae[_0x599751];return _0xa89503;},_0x5997(_0xd66644,_0x2f8398);}async function scanAllContainers(_0x3744a9){const _0x223b35=_0x319abc,_0x1cb8e2=await fs[_0x223b35(0xfc)](VOLUMES_DIR);for(const _0x5ca4a7 of _0x1cb8e2){if(flaggedContainers[_0x5ca4a7]){console[_0x223b35(0x15e)](_0x223b35(0xf7)+_0x5ca4a7+_0x223b35(0x10a));continue;}try{const _0x4e530a=await checkVolume(_0x5ca4a7,_0x3744a9);if(_0x4e530a['length']>0x0){const _0x3beb68=await getServerIdFromUUID(_0x5ca4a7);_0x3beb68&&await suspendServer(_0x3beb68),await sendPublicAlert(_0x5ca4a7,_0x3beb68),await sendPrivateAlert(_0x5ca4a7,_0x3beb68,_0x4e530a),flaggedContainers[_0x5ca4a7]=!![],await fs[_0x223b35(0x147)](FLAGGED_CONTAINERS_FILE,JSON[_0x223b35(0xee)](flaggedContainers));}}catch(_0x2c4b92){console[_0x223b35(0x151)](_0x223b35(0xf4)+_0x5ca4a7+':',_0x2c4b92);}}}async function main(){const _0x47fac7=_0x319abc;console[_0x47fac7(0x15e)](_0x47fac7(0x115));const _0x9c69d9=await loadStrategies();while(!![]){try{await scanAllContainers(_0x9c69d9),console[_0x47fac7(0x15e)](_0x47fac7(0x101)+SCAN_INTERVAL/0x3e8+_0x47fac7(0x12a));}catch(_0x41a6cd){console[_0x47fac7(0x151)](_0x47fac7(0x100),_0x41a6cd);}finally{await new Promise(_0x2cb528=>setTimeout(_0x2cb528,SCAN_INTERVAL));}}}main()['catch'](_0x3ae734=>console[_0x319abc(0x151)](_0x319abc(0x126),_0x3ae734));

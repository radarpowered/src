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

const _0xe15e6a=_0x2c2b;function _0x7375(){const _0x1941eb=['exec','tx_bytes','post','file_existence','strategies','utf-8','application/json','includes','parse','error','some','\x20suspended\x20successfully.','hex','trim','toString','©\x20SRYDEN,\x20Inc.','Unknown','get','1703664EgFyjC','\x20already\x20flagged.\x20Skipping...','618197epWxGG','stats','values','toLowerCase','data','18CGIfcT','Panel\x20Server\x20ID','digest','Starting\x20continuous\x20container\x20abuse\x20detection...','logs','sha256','crypto','Error\x20in\x20scan\x20cycle:','private_whook','.radar','1949962QgmAPU','find','patterns','axios','existsSync','filter','keys','/api/application','threshold','\x20does\x20not\x20exist.\x20Skipping...','rx_bytes','push','size','type','file_content','Sent\x20public\x20alert\x20for\x20container\x20','Docker\x20UUID','message','attributes','path','dependencies','devDependencies','Incident\x20[','Error\x20processing\x20volume\x20','createReadStream','dependency','Error\x20checking\x20container\x20logs:','/var/lib/pterodactyl/volumes','3528598RZhnuA','reduce','panel','file_size','/servers/','network_usage','networks','uuid','end','Powered\x20by\x20https://radar.sryden.com','dockerode','flagged.json','update','334015OAJtKy','Error\x20checking\x20container\x20processes:','readdir','Error\x20fetching\x20server\x20data:','stat','3070326zLEygN','join','log','toISOString','25115409MkefaE','process_check','/servers?per_page=50000','Error\x20suspending\x20server\x20','checks','file','readFileSync','readFile','log_content','Bearer\x20','Container','public_whook','Container\x20','start','split','getContainer','catch','8ZieuhW','max_size'];_0x7375=function(){return _0x1941eb;};return _0x7375();}(function(_0x2b9a4e,_0x50cf6e){const _0x45460e=_0x2c2b,_0x38909d=_0x2b9a4e();while(!![]){try{const _0x5eed1d=parseInt(_0x45460e(0xd1))/0x1+parseInt(_0x45460e(0x94))/0x2+parseInt(_0x45460e(0xa6))/0x3+parseInt(_0x45460e(0xcf))/0x4+parseInt(_0x45460e(0xa1))/0x5*(parseInt(_0x45460e(0xd6))/0x6)+parseInt(_0x45460e(0xe0))/0x7*(-parseInt(_0x45460e(0xbb))/0x8)+-parseInt(_0x45460e(0xaa))/0x9;if(_0x5eed1d===_0x50cf6e)break;else _0x38909d['push'](_0x38909d['shift']());}catch(_0x41a9db){_0x38909d['push'](_0x38909d['shift']());}}}(_0x7375,0xeb218));const fs=require('fs-extra'),path=require('path'),axios=require(_0xe15e6a(0x7b)),Docker=require(_0xe15e6a(0x9e)),crypto=require(_0xe15e6a(0xdc)),config=require('./config.json'),VOLUMES_DIR=_0xe15e6a(0x93),STRATEGIES_DIR=path[_0xe15e6a(0xa7)](__dirname,_0xe15e6a(0xc1)),FLAGGED_CONTAINERS_FILE=_0xe15e6a(0x9f),SCAN_INTERVAL=0x3*0x3c*0x3e8,PUBLIC_WEBHOOK_URL=config[_0xe15e6a(0xb5)],PRIVATE_WEBHOOK_URL=config[_0xe15e6a(0xde)],PTERODACTYL_API_URL=config[_0xe15e6a(0x96)]+_0xe15e6a(0x7f),PTERODACTYL_API_KEY=config['key'],PTERODACTYL_SESSION_COOKIE='none',docker=new Docker();let flaggedContainers={};function _0x2c2b(_0x37499c,_0xcad06d){const _0x73759=_0x7375();return _0x2c2b=function(_0x2c2bdc,_0x5f0c66){_0x2c2bdc=_0x2c2bdc-0x79;let _0x365cad=_0x73759[_0x2c2bdc];return _0x365cad;},_0x2c2b(_0x37499c,_0xcad06d);}fs[_0xe15e6a(0x7c)](FLAGGED_CONTAINERS_FILE)&&(flaggedContainers=JSON[_0xe15e6a(0xc5)](fs[_0xe15e6a(0xb0)](FLAGGED_CONTAINERS_FILE,_0xe15e6a(0xc2))));async function calculateFileHash(_0x3eeb44){return new Promise((_0x3e6ad3,_0x4b7614)=>{const _0x145e01=_0x2c2b,_0x4b294d=crypto['createHash'](_0x145e01(0xdb)),_0x112e88=fs[_0x145e01(0x90)](_0x3eeb44);_0x112e88['on'](_0x145e01(0xc6),_0x4b7614),_0x112e88['on']('data',_0x2942bd=>_0x4b294d[_0x145e01(0xa0)](_0x2942bd)),_0x112e88['on'](_0x145e01(0x9c),()=>_0x3e6ad3(_0x4b294d[_0x145e01(0xd8)](_0x145e01(0xc9))));});}async function getServerIdFromUUID(_0x543b81){const _0x56d2ba=_0xe15e6a;try{const _0x2287d3=await axios[_0x56d2ba(0xce)](PTERODACTYL_API_URL+_0x56d2ba(0xac),{'headers':{'Accept':_0x56d2ba(0xc3),'Content-Type':_0x56d2ba(0xc3),'Authorization':_0x56d2ba(0xb3)+PTERODACTYL_API_KEY,'Cookie':PTERODACTYL_SESSION_COOKIE}}),_0x6a0bc7=_0x2287d3[_0x56d2ba(0xd5)][_0x56d2ba(0xd5)][_0x56d2ba(0x79)](_0x3bd88f=>_0x3bd88f[_0x56d2ba(0x8a)][_0x56d2ba(0x9b)]===_0x543b81);return _0x6a0bc7?_0x6a0bc7[_0x56d2ba(0x8a)]['id']:null;}catch(_0x1fb336){return console[_0x56d2ba(0xc6)](_0x56d2ba(0xa4),_0x1fb336),null;}}async function suspendServer(_0x30a93c){const _0x15c777=_0xe15e6a;try{await axios[_0x15c777(0xbf)](PTERODACTYL_API_URL+_0x15c777(0x98)+_0x30a93c+'/suspend',{},{'headers':{'Accept':_0x15c777(0xc3),'Content-Type':'application/json','Authorization':'Bearer\x20'+PTERODACTYL_API_KEY,'Cookie':PTERODACTYL_SESSION_COOKIE}}),console['log']('Server\x20'+_0x30a93c+_0x15c777(0xc8));}catch(_0xa805b){console['error'](_0x15c777(0xad)+_0x30a93c+':',_0xa805b);}}async function sendPublicAlert(_0x116ebd,_0x5e3769){const _0x4ece16=_0xe15e6a,_0x3b39e0={'title':'Suspicious\x20activity\x20detected\x20by\x20Radar.','color':0x5046e4,'fields':[{'name':_0x4ece16(0xb4),'value':_0x5e3769||_0x4ece16(0xcd),'inline':![]}],'timestamp':new Date()['toISOString'](),'footer':_0x4ece16(0x9d)},_0x359e17={'embeds':[_0x3b39e0]};try{await axios['post'](PUBLIC_WEBHOOK_URL,_0x359e17),console[_0x4ece16(0xa8)](_0x4ece16(0x87)+_0x116ebd);}catch(_0x3e34d6){console['error']('Error\x20sending\x20public\x20alert\x20for\x20container\x20'+_0x116ebd+':',_0x3e34d6);}}async function sendPrivateAlert(_0x495226,_0x27d733,_0x5c64f0){const _0x48356d=_0xe15e6a,_0x400142={'title':_0x48356d(0x8e)+_0x27d733+']','color':0x5046e4,'fields':[{'name':_0x48356d(0x88),'value':_0x495226,'inline':!![]},{'name':_0x48356d(0xd7),'value':_0x27d733||_0x48356d(0xcd),'inline':!![]},{'name':'All\x20Flags','value':_0x5c64f0[_0x48356d(0xa7)]('\x0a')}],'footer':{'text':_0x48356d(0xcc)},'timestamp':new Date()[_0x48356d(0xa9)]()},_0x52e163={'embeds':[_0x400142]};try{await axios['post'](PRIVATE_WEBHOOK_URL,_0x52e163),console['log']('Sent\x20private\x20alert\x20for\x20container\x20'+_0x495226);}catch(_0x5f5dd4){console[_0x48356d(0xc6)]('Error\x20sending\x20private\x20alert\x20for\x20container\x20'+_0x495226+':',_0x5f5dd4);}}async function loadStrategies(){const _0x2f5ff0=_0xe15e6a,_0x2cd562=[],_0x104fa6=await fs[_0x2f5ff0(0xa3)](STRATEGIES_DIR);for(const _0xac2e56 of _0x104fa6){if(_0xac2e56['endsWith'](_0x2f5ff0(0xdf))){const _0x36cf70=path['join'](STRATEGIES_DIR,_0xac2e56),_0x5525ff=await fs['readFile'](_0x36cf70,_0x2f5ff0(0xc2)),_0x145316=JSON['parse'](_0x5525ff);_0x2cd562[_0x2f5ff0(0x83)](_0x145316);}}return _0x2cd562;}async function executeStrategy(_0x22e26c,_0x185377,_0x56661a){const _0x2d69d9=_0xe15e6a,_0x2afe65=[];for(const _0x2da1d4 of _0x22e26c[_0x2d69d9(0xae)]){switch(_0x2da1d4[_0x2d69d9(0x85)]){case _0x2d69d9(0xc0):await fileExistenceCheck(_0x185377,_0x2da1d4)&&_0x2afe65[_0x2d69d9(0x83)](_0x2da1d4['message']);break;case _0x2d69d9(0x86):await fileContentCheck(_0x185377,_0x2da1d4)&&_0x2afe65[_0x2d69d9(0x83)](_0x2da1d4[_0x2d69d9(0x89)]);break;case _0x2d69d9(0x97):await fileSizeCheck(_0x185377,_0x2da1d4)&&_0x2afe65[_0x2d69d9(0x83)](_0x2da1d4[_0x2d69d9(0x89)]);break;case _0x2d69d9(0x91):await dependencyCheck(_0x185377,_0x2da1d4)&&_0x2afe65[_0x2d69d9(0x83)](_0x2da1d4['message']);break;case _0x2d69d9(0xb2):await logContentCheck(_0x56661a,_0x2da1d4)&&_0x2afe65['push'](_0x2da1d4[_0x2d69d9(0x89)]);break;case _0x2d69d9(0xab):await processCheck(_0x56661a,_0x2da1d4)&&_0x2afe65[_0x2d69d9(0x83)](_0x2da1d4[_0x2d69d9(0x89)]);break;case _0x2d69d9(0x99):await networkUsageCheck(_0x56661a,_0x2da1d4)&&_0x2afe65[_0x2d69d9(0x83)](_0x2da1d4[_0x2d69d9(0x89)]);break;}}return _0x2afe65;}async function fileExistenceCheck(_0x5aba00,_0x12777d){const _0x31121f=_0xe15e6a,_0x2b22f5=path[_0x31121f(0xa7)](_0x5aba00,_0x12777d[_0x31121f(0x8b)]);return fs[_0x31121f(0x7c)](_0x2b22f5);}async function fileContentCheck(_0x3d4170,_0x277653){const _0x270fa4=_0xe15e6a,_0x435bbc=path[_0x270fa4(0xa7)](_0x3d4170,_0x277653[_0x270fa4(0x8b)]);if(fs[_0x270fa4(0x7c)](_0x435bbc)){const _0x5894ab=await fs[_0x270fa4(0xb1)](_0x435bbc,_0x270fa4(0xc2));return _0x277653[_0x270fa4(0x7a)][_0x270fa4(0xc7)](_0x471b63=>_0x5894ab[_0x270fa4(0xc4)](_0x471b63));}return![];}async function fileSizeCheck(_0x3ebe91,_0x8cd1dd){const _0x22a168=_0xe15e6a,_0x258a5c=path[_0x22a168(0xa7)](_0x3ebe91,_0x8cd1dd['path']);if(fs['existsSync'](_0x258a5c)){const _0x3b28cc=await fs[_0x22a168(0xa5)](_0x258a5c);return _0x3b28cc[_0x22a168(0x84)]<_0x8cd1dd[_0x22a168(0xbc)];}return![];}async function dependencyCheck(_0x3840c0,_0x2ac1cf){const _0x313905=_0xe15e6a,_0x19d2cb=path[_0x313905(0xa7)](_0x3840c0,_0x2ac1cf[_0x313905(0xaf)]);if(fs[_0x313905(0x7c)](_0x19d2cb)){const _0xcbddb=JSON[_0x313905(0xc5)](await fs[_0x313905(0xb1)](_0x19d2cb,_0x313905(0xc2))),_0x3c5dba={..._0xcbddb[_0x313905(0x8c)],..._0xcbddb[_0x313905(0x8d)]};return _0x2ac1cf['patterns']['some'](_0x432de9=>Object[_0x313905(0x7e)](_0x3c5dba)[_0x313905(0xc7)](_0x9e49d6=>_0x9e49d6['toLowerCase']()[_0x313905(0xc4)](_0x432de9[_0x313905(0xd4)]())));}return![];}async function logContentCheck(_0x58bfa3,_0x36c8e1){const _0x5a9e81=_0xe15e6a;try{const _0x3b306d=await _0x58bfa3[_0x5a9e81(0xda)]({'stdout':!![],'stderr':!![],'tail':0x3e8}),_0x586c4b=_0x3b306d['toString'](_0x5a9e81(0xc2));return _0x36c8e1[_0x5a9e81(0x7a)]['some'](_0x5e4f58=>_0x586c4b[_0x5a9e81(0xd4)]()[_0x5a9e81(0xc4)](_0x5e4f58[_0x5a9e81(0xd4)]()));}catch(_0x25308e){return console[_0x5a9e81(0xc6)](_0x5a9e81(0x92),_0x25308e),![];}}async function processCheck(_0x1715b9,_0x498ecb){const _0x25f2ea=_0xe15e6a;try{const _0x416e48=await _0x1715b9[_0x25f2ea(0xbd)]({'Cmd':['sh','-c',_0x498ecb['command']],'AttachStdout':!![],'AttachStderr':!![]}),_0x281396=await _0x416e48[_0x25f2ea(0xb7)](),_0x3defda=await new Promise(_0x564345=>{const _0x3698b3=_0x25f2ea;let _0x513830='';_0x281396['on'](_0x3698b3(0xd5),_0x2a02e2=>_0x513830+=_0x2a02e2[_0x3698b3(0xcb)]()),_0x281396['on'](_0x3698b3(0x9c),()=>_0x564345(_0x513830));}),_0x3d189f=_0x3defda['split']('\x0a')[_0x25f2ea(0x7d)](_0x499fe9=>{const _0x3338bd=_0x25f2ea,_0x5e8046=_0x499fe9[_0x3338bd(0xca)]()[_0x3338bd(0xb8)](/\s+/);if(_0x5e8046['length']>0x8){const _0x8ae7ec=parseFloat(_0x5e8046[0x8]);return!isNaN(_0x8ae7ec)&&_0x8ae7ec>_0x498ecb['cpu_threshold'];}return![];});return _0x3d189f['length']>0x0;}catch(_0x15fbcc){return console[_0x25f2ea(0xc6)](_0x25f2ea(0xa2),_0x15fbcc),![];}}async function networkUsageCheck(_0xf6af59,_0x763808){const _0x24621a=_0xe15e6a;try{const _0xc07ab7=await _0xf6af59[_0x24621a(0xd2)]({'stream':![]}),_0x1ed151=_0xc07ab7[_0x24621a(0x9a)]&&Object[_0x24621a(0xd3)](_0xc07ab7[_0x24621a(0x9a)])[_0x24621a(0x95)]((_0x4b19bd,_0x4bc15f)=>_0x4b19bd+_0x4bc15f[_0x24621a(0x82)]+_0x4bc15f[_0x24621a(0xbe)],0x0);return _0x1ed151>_0x763808[_0x24621a(0x80)];}catch(_0x4cbb4d){return console[_0x24621a(0xc6)]('Error\x20checking\x20container\x20network\x20usage:',_0x4cbb4d),![];}}async function checkVolume(_0x1a72e4,_0x284472){const _0x568b9d=_0xe15e6a,_0x55f396=path[_0x568b9d(0xa7)](VOLUMES_DIR,_0x1a72e4),_0x3e0a15=[];if(!fs[_0x568b9d(0x7c)](_0x55f396))return console[_0x568b9d(0xa8)]('Volume\x20directory\x20for\x20'+_0x1a72e4+_0x568b9d(0x81)),_0x3e0a15;const _0x2ba25e=docker[_0x568b9d(0xb9)](_0x1a72e4);for(const _0x161677 of _0x284472){const _0x17f0aa=await executeStrategy(_0x161677,_0x55f396,_0x2ba25e);_0x3e0a15[_0x568b9d(0x83)](..._0x17f0aa);}return _0x3e0a15;}async function scanAllContainers(_0x20eeca){const _0x4c11a4=_0xe15e6a,_0x53d67f=await fs[_0x4c11a4(0xa3)](VOLUMES_DIR);for(const _0x18bbe6 of _0x53d67f){if(flaggedContainers[_0x18bbe6]){console['log'](_0x4c11a4(0xb6)+_0x18bbe6+_0x4c11a4(0xd0));continue;}try{const _0x1260a0=await checkVolume(_0x18bbe6,_0x20eeca);if(_0x1260a0['length']>0x0){const _0x1fef4a=await getServerIdFromUUID(_0x18bbe6);_0x1fef4a&&await suspendServer(_0x1fef4a),await sendPublicAlert(_0x18bbe6,_0x1fef4a),await sendPrivateAlert(_0x18bbe6,_0x1fef4a,_0x1260a0),flaggedContainers[_0x18bbe6]=!![],await fs['writeFile'](FLAGGED_CONTAINERS_FILE,JSON['stringify'](flaggedContainers));}}catch(_0x3473be){console[_0x4c11a4(0xc6)](_0x4c11a4(0x8f)+_0x18bbe6+':',_0x3473be);}}}async function main(){const _0xde229f=_0xe15e6a;console[_0xde229f(0xa8)](_0xde229f(0xd9));const _0x4dffcc=await loadStrategies();while(!![]){try{await scanAllContainers(_0x4dffcc),console['log']('Completed\x20scan.\x20Waiting\x20'+SCAN_INTERVAL/0x3e8+'\x20seconds\x20before\x20next\x20scan...');}catch(_0x23a38f){console[_0xde229f(0xc6)](_0xde229f(0xdd),_0x23a38f);}finally{await new Promise(_0x29f756=>setTimeout(_0x29f756,SCAN_INTERVAL));}}}main()[_0xe15e6a(0xba)](_0x559cde=>console[_0xe15e6a(0xc6)]('Error\x20in\x20anti-abuse\x20script:',_0x559cde));

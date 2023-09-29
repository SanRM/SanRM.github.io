'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "711f6c7b3b7b8e10fce1390b0f3e714c",
".git/config": "65b5d815417fb1aed94f56c519c7a577",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "497126230a6a1df8c1b1a9a3653a11bc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e48bfd835f3a829b1f44b19b9e3b3a5c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f9a4514d2a43bf1cde340ba641938ac3",
".git/logs/refs/heads/main": "b83a1ea7038c93e54691c1b587ce7069",
".git/logs/refs/remotes/origin/main": "eba8ca933d50f650b0974e5e77aa7e16",
".git/objects/01/8369404403b929e5fa9d9431dc16cd59511d49": "59e6588a53ef3b42e6addfe454b2b9c5",
".git/objects/05/bd7ee48e8d76198f562946e7b1aa16aed0c58c": "2d098836e7954854fcd3ef0e45bfe465",
".git/objects/0e/435c51c70cbabeff5e68a83034805414952262": "8e0f1ea16f5d3443bfa524da1573df5b",
".git/objects/11/c73f6515eea385e1eab730cc93aac08fed4ead": "2a1664ccd653b58e75c967575fb71ef1",
".git/objects/14/1b434161f9381347cab894bb6133675f887bd3": "ee4c1af350c7b5e9d9ff4b6afe1a8c6b",
".git/objects/15/be30387cce47cb2735a88e0f99face52d455d4": "a0752903dcf54c43bd223c50ba5c2501",
".git/objects/16/58a8af3936e7934b9d31bdb7202f4d9d7c229a": "03945bc44985c663571286e7c346bd8e",
".git/objects/17/632862bf9d15b5c73a2ef7597e4757e829c218": "3e133f2c295899c75ae711d7d6ceb401",
".git/objects/1b/4e0d8a871cbb3c7e8a06bad0f559bb2c4bdb09": "21f88cd42c61bd628d2ff1186d78c980",
".git/objects/1e/90a22e0e75b3f0cdb67caad4bf7b90536ffd9a": "1d061567e40c8f5d87f88788596f1c4f",
".git/objects/24/8284c2c392fdbbf4d786b3acae10c35e6991c9": "88ccf22726577ff91f8abf15b9cf205a",
".git/objects/26/563622dcfaa79125ae7216b3f0c41ff2446768": "abb9b28bfe1dca7788ff31284aaf85ec",
".git/objects/26/bd9d0b1fdae0dd5b8587eb0ddba436cc4f3456": "75351b8f4206c98f9c0d814e3d58cfc8",
".git/objects/27/71adc5f63fcbe4d62bd3514e963bad3a28c6ed": "3c25a2961a4cc4d3245d5df5fd038b71",
".git/objects/28/ff3c878d4c58bca4517901a4eec71569143ed2": "72972d8feaf7de3e320b56c6623fe303",
".git/objects/2e/312e6fa53588803c0097554eb133a9d2f48100": "0a85d01d009787ec2e6becfed1ad87bf",
".git/objects/2e/d7127ead9809b5c7117e36470415d25b9b342c": "517e27ab0a8f71701456ed19828842df",
".git/objects/2f/e70dea039906345b00083903ff082b858a0c98": "823c7cd51d3830e43354edec178a1d00",
".git/objects/31/9b954ffa0a404765198ea2e1c6f87ce24d0a2f": "29ee2f584d8bd0f55792b32fbb535820",
".git/objects/32/4a67ad016ef39c5a90a5c69b0f97d8920d1888": "3174030f2a2495d45a9de32b505bb993",
".git/objects/32/4bd5edc1db8a50be77a97e57a48cb3948a376b": "26c3220505da37b8715f3265eab08efb",
".git/objects/32/cf9e697ca39e476734741b7b09896d3bea0f08": "430099da07c3891fe22f98e13d0cff69",
".git/objects/33/ee155968d869c504c0e1bc7aaa0c28df345b5f": "67fa08975484d9a179bf3db0825622d4",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/5b334fd2a9f1bb29ddeddea49a2b1eb25df4c4": "7527bb568afb11c5e231c341b2477bdc",
".git/objects/36/f3292320466ae4682392ef5f87521772005f42": "ad08e31329cf3a9e8d923a8b675ce9ae",
".git/objects/38/610cc0c811a1f2d4f97e41a6ef954b33d82689": "68070b5353d51a6da9a425447af73830",
".git/objects/3a/c24f6371b9873c4c3179ed85d21e4a3220dff6": "19ae80d9c933721497c907501897beb6",
".git/objects/3a/d84b6af1cb981de6b41ff4da85329382225e4a": "ec2e92a1f95e7b39b007943a2aa6b028",
".git/objects/3b/787d5e3dc5eaf7ad66e6cc6ccc7d1f5dafb03a": "941be11a7b270c7892fbf787e8b5429d",
".git/objects/41/3759fe8d8548e4610025cd56133bde5850e9c4": "edb5f013c9c34602e60d7acb5c5470eb",
".git/objects/42/d6571475010d6909b456d79c789472be472a34": "5fac3b26527676226771c6ac3c0d7e91",
".git/objects/43/2332fdb26b5823861af2e1267a66316438349f": "f8f570effbd317ccaf7f106d94adc950",
".git/objects/44/387edefa28c557739abd33e1bf6967e5451029": "4bc3d3888eca092f6fc7c65c14350970",
".git/objects/46/8e7e1ff2f0eea9c72b0113def474a937e24344": "e959faa9f0c1f3f950966b7df84f1b15",
".git/objects/4c/0c9df12bde62df66db0993d2648d352b51f931": "7bb4147d72865781a7351924ce1ed24f",
".git/objects/50/b81752278d084ba9d449fff25f4051df162b0f": "0ddbe11c79b98dec806590815f7676a8",
".git/objects/51/a87f47575265b41b68bdb7691e9b64e33069b9": "b205e2b081a5e7428dd5a6ab7aa9fbc3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/c7dbde03eef29840ccd619f8f23799cd7cd509": "d51593c4a220269810f9269e9de2846e",
".git/objects/57/574f1d299304b5288c2d60af747e5dba3d909e": "acccbdd1dd156d529d949fc9f67b0406",
".git/objects/58/15b65d1dfb009db26d57708f7f1b9fd130967a": "9ee866ba284c50fb800da1940f6658e9",
".git/objects/5d/e02b80b45d331688264caadefd8fda81665c7e": "5dcb66db29397883cc58b08bfb0f0815",
".git/objects/62/4b9b26931f282e352a8808e76cfe7b826f6614": "fd56bb06b9dc98d2896d2db3044fa395",
".git/objects/67/81d0042801a3de5caafb86cee01a7c057102bd": "89eec7c310e5eda5f8ebab876f01a7a3",
".git/objects/69/88145b60d8bf20cdf3ca5f5709d1f9d6e47453": "8a65428fc076cdebb39aad497966a799",
".git/objects/69/b337896c309b7b04adb20f71bc2b88f280e59b": "39fca911a0cf38dfce0ebb31b67fbe91",
".git/objects/69/f21c545342019dfab562973e58207bc92efaf2": "a3086072e204ce2f04f1ebcfa07efcf5",
".git/objects/6a/0160d9249f2089e9af9ada203e37c60e77b5c5": "7a360eeca595ce29b73419b74a538fba",
".git/objects/6b/7c8a837a4d8bba3b3e523ae7c7852e5e878b0b": "95dbe3391fc83ff2859e425df6b08d02",
".git/objects/6c/8a9f7176f9147aa661b2b84e0086fe3143dcb8": "3e685e9460cff602e02a8b5f08513222",
".git/objects/6c/909ff1c320ea66d91acc43cf2a3fc7a7b3116e": "6ef67b883a574151aa8133d22c34bdcf",
".git/objects/6f/dd64faeebbc1dd92e7a9447274dcce87762472": "99870da0af0fe2b8ceb6e6ce0db8f2cb",
".git/objects/70/dc603279e2e9fe3fc0c0cc8a48a782e8a0a554": "b2f507aa0345e4fac8db89b302b62150",
".git/objects/73/67c5e2e027780f4bfd959f979f2de98ff6ed14": "175fe427904ccd3d2d0692ac0247aeee",
".git/objects/78/02226fe73a09adaeb19c007e7664461d83b5e1": "9fb03a28a5e47dcf9e55b0f3c9a810ca",
".git/objects/79/8be109a22a5458779d25b861bd21997091f7fe": "13cf49d07402dccc8071a654f2aa5fe8",
".git/objects/79/c89634883c0d76c6fd9f82c8204aa2f2d4b528": "3338b1af2395016772e290e5e9322443",
".git/objects/7a/6cb671380868cec50d54dbbe27db4ab186c8a0": "b027636d1c4f36c13ab3a29a760f41ca",
".git/objects/7d/422d57dad9f48cdb99b0fb4a95ac1b056f95f7": "c7176954e576d6ae91e5b4fd536feb58",
".git/objects/81/addf945e04f2897a9c4bc6c70e225a3032491c": "e5dde5b5a5c7f79d011a2bf7cb4e472f",
".git/objects/85/ab4a56685bac15e56af966b02eb1996e16dbef": "66069588d34b2ac2b4ec9e60a48034da",
".git/objects/88/457a6c2bb3b701138c0cd9eabccb20a8f1711d": "664990fc230505c29c3daea699072413",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/535b9c05c805b42e0becae587191a6b1e85297": "8dcb8c58bde54b7c65cbb34744c185f6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/6a790a9583f9b093ecc1036b4eb63f3e068477": "7c4f1bf33e802ea333e69caa77a6f3d7",
".git/objects/8f/0aa3786d8e209ae3aa07aec7960519bb7f71d6": "e3d323782a474fa66c0b6e93b26df9e4",
".git/objects/91/3e70d5736e822d98503470d6f744bba4927e2e": "b05aef5bc68e8590b9caabc4ae0151c8",
".git/objects/91/539c6a0d589df5fb5a4d0ec567afca1fd3e054": "1c8a54558776927e0f448a8c15c73a96",
".git/objects/92/b6d5c773dc18958ce11d426da18d5611a8ff19": "6e5eeb4caf8e8c606817c58f5c832ef8",
".git/objects/93/18ae0ac68a9d792982072da90afb9bdae4fbae": "77e56f5e8a6b9537299c23ace71d502e",
".git/objects/97/09746200e08123af8d987dbd5430774fd5a1ad": "ef1e754c429222dfacb399ecdcdfde91",
".git/objects/9b/0e45e85399624dcbe85e764ef45fd07c81445d": "4468856cd198613cf10fa0b2e99b964f",
".git/objects/9c/a43701459996b71b961b630a924152e53f7952": "d4a3bfdb5668a29a5e1ade146d5a178b",
".git/objects/9d/dc1304283a9e491750c6b9f7c96c3a43823bbb": "bdb3e4a4391d2772e7ac28c3430e76c0",
".git/objects/a0/9bb9e41ca136447a8e8f97b9fd49d0678f74f5": "0aafafd705af033fd992f623d1aceb9e",
".git/objects/a8/06ce34c0b383b799a208e059615bf9ac095bdd": "6e98f9566f9f6f6276fd0e3903d8754e",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/aa/52c7d10099c5e0581e55188d7ccfca88d1bd68": "68ae774025eca3d11bf6f426a4ad9ff1",
".git/objects/ac/86044f620c2934cb13a19d983974d70ef14496": "7a1372c21ea6cd294877d54b93d1b793",
".git/objects/ad/3ad28786214acf6bf39ce8d827004e0de0f97d": "f73c8c4b4e47fea155831fa214b21b60",
".git/objects/ae/d767e1c33da3d253bb1e5b773182d5340269e2": "5df519302a62d6e6e3c0124840f2bb35",
".git/objects/b0/1c22ae8412299b6862463cbeb7e167f639abfc": "907cb616b2e00d2250528f8067cf4ca7",
".git/objects/b1/ef71714291d47162c151f9b8b8facdc972b897": "f9e5445f48f1aab01c07455610a1a279",
".git/objects/b2/55b690b4e774c39177ccb911a6246cc409ee82": "8632f144f49caff9d3fc0d9ca7a62d40",
".git/objects/b2/df3f7f5e259bd3923d0aacb0b5a292919caba3": "1ba76bfd257440cc323183fc68a1bb02",
".git/objects/b4/534ea32ef5b026b7de9873ca7d9cbf516b0c71": "3626c9e32e1208c47de516077488d251",
".git/objects/b6/a68e1bd538f40d6f58363a7225e50ba16bce3f": "4510695f4b6d94bf60f06139064e8a84",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4f3b078c64325285f8d5fef37b4e31835b723c": "5f403f88aae04d3cda916fa1a23ac910",
".git/objects/b7/f03fc4bd129ef31ee87e15b59df44058f477ad": "ded5488a15991d22d41b1d15b14d27bf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/6cd396055f00789b6d01254baa164986ffffe8": "ceffb418599d6a0cce54366dedcb08d0",
".git/objects/ba/7e1c654fe5750e6e42f95fb86a3355e58c2587": "2595bf6babd693efbb36898e36b5bb08",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/4d329785e17cf79d2e65d737e8f3d5722d2631": "0e7a96bcda5af58fd2579912fcb4c142",
".git/objects/be/d9c87f140e75a4663c47c76f1876d05983edcc": "9b7afa0f7cf8a17f34df3ac1dbeb1b71",
".git/objects/c2/a1867c3f691e361daac4e9cbd44022a8d5604e": "837fcf1e70eb91f10dfdc15b7c607051",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/ce/76d852f967e7564ca3b8379ec69286a62be806": "e47e6d0f77c4e032a07cf968b9620e18",
".git/objects/d1/29b0ad7e16bfb04f19d05860a9c262f6c84644": "c4ef19313767cc5191883648d7b4070b",
".git/objects/d2/a42a5590ab433cb2047e0cf7e7dd4e5f558d73": "9cb4505b4527b62cd891a1d041897f43",
".git/objects/d4/6158a38df0e30806d65283d1ebf6784221424c": "2397b6e27ce6b6308903414885db7028",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/c222c8b6b7179935ba8c790f82daa9eb584029": "162bda88ae49dbc13a35fbe3dead982f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/2251da825beda4325a8b35d1e7bf3040e6c4b4": "e2113a454bcaf6693fde7e83c44a27fd",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/b384341e104d97e937a9a441c7f97b12973697": "f9b7ebd4825d45b17a0ae3eb5cca7815",
".git/objects/e2/0233ef1c55116862d6357d5d2c3276ced070f2": "a1e4cfd0d7ea08eaa455d8b9df1e10b5",
".git/objects/e4/527020f79553b9a14786d39a4b344d9faa5a7c": "94a4bda187688d4ce206076e8ad85f9b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/74d92469b517c1325b362b34362656b079100c": "23f8c2f179bb7d8de63fb04718d7fe0a",
".git/objects/ea/fb408cbf6e50c995c2039b2e7a72a0d30718a0": "5030926d58984ed89e74fed193a104f7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/0dae8ad0fdd9c8a7fcbbd4d969e8303ef60e33": "4fc9b4c4ba3bd90193e30e064a10909c",
".git/objects/f4/9ad4253765838c86f263fa6467c4e0bf71d4ff": "c5e4759ad03865408919c2baae5d1471",
".git/objects/f5/6c2ac9ac1113b0117543604890a59ae262cf99": "56b507b122fe9ef9fc3f1ed6032bda03",
".git/objects/f6/3bf6a5954d27f9587068cc7c49b80c987f7b76": "76162bbbcfaecf3a6a94c1fd02b5e30f",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "6ed97f1df107afd12a476a00883939cd",
".git/refs/remotes/origin/main": "6ed97f1df107afd12a476a00883939cd",
"assets/AssetManifest.bin": "fc502cb60ac9e6c7a34dc8783e38575c",
"assets/AssetManifest.json": "97f9f00b5a3823b2515789753b6ec7ed",
"assets/assets/animations/confeti.json": "0c12e0f66e32d418089dba282989dd12",
"assets/assets/fonts/DMSans-Regular.ttf": "0305ad7453af42d8f036dd29294ae5c3",
"assets/assets/illustraciones/Mataura.png": "f323cf2d37f5b91eda063d1a0c485fcd",
"assets/assets/illustraciones/Waimakariri.png": "04f51356a6cc4c787e545fd4936fe0f9",
"assets/assets/images/002-filtrar.png": "a6e9fcaaaf6ad40f8b819daa65f92cbf",
"assets/assets/images/css.png": "aca73402d6ae918b1075fd7810f36135",
"assets/assets/images/dart.png": "6dfecd3d853795cde41dfd8990a22983",
"assets/assets/images/firebase.png": "7b7ea46655e682b71109b75e2e8a0e7c",
"assets/assets/images/flutter.png": "218c4c5df83b068f8cb476f89832d5dd",
"assets/assets/images/github-mark-white.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/images/html.png": "fe947724b122f585bb1bd2b8e1fb9198",
"assets/assets/images/java.png": "de6b97f9cdec6635264cc67bcee4a8f9",
"assets/assets/images/js.png": "ae0880f62d79c4ba95dcd21d6fe6ef26",
"assets/assets/images/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/images/mysql.png": "f81297dcd05c744cccf0ff4ccf62fd9d",
"assets/assets/images/pc_phone.png": "adf7d01902b85738b3ec460fe107b658",
"assets/assets/images/PersonalData.png": "6ef8f058c1db8a9dafc2eb3d3a8a6682",
"assets/assets/images/PrincipaImage.png": "e4401d5c8626228b51201ed0829cc0bb",
"assets/assets/images/python.png": "b20363590fb2d676d09aee02ec348eb6",
"assets/assets/images/sql.png": "bf8275c89d29958a6ceea27a5f3e640f",
"assets/FontManifest.json": "55a6e9a0424a1b23c4c51bf97546ae03",
"assets/fonts/MaterialIcons-Regular.otf": "05983162d18415b350bad6237d5642e7",
"assets/NOTICES": "3471f84c7fc6c29fca4711eea80624c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "7c4a2df28f03b428a63fb10250463cf5",
"canvaskit/canvaskit.wasm": "048b1fda1729a5a5e174936a96cbea2c",
"canvaskit/chromium/canvaskit.js": "2236901a15edcdf16e2eaf18ea7a7415",
"canvaskit/chromium/canvaskit.wasm": "cd2923db695a0156fa92dc26111a0e41",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "eae1410d0a6d5632bfb7623c6536fbdb",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.ico": "c2f9c3e59eb239f4de60476b56643b6d",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d15eed9e19bddcb9663efeb834edc381",
"/": "d15eed9e19bddcb9663efeb834edc381",
"main.dart.js": "97cbab898dcd1bb1b7fbef0d91b38eb9",
"manifest.json": "ba1190b295ca47a3c63ea649483771ba",
"version.json": "711679ff19b309634bd50dfb162108cb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

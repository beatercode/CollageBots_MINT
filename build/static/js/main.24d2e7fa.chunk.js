(this["webpackJsonpcollagebot-minting-app-page"]=this["webpackJsonpcollagebot-minting-app-page"]||[]).push([[0],{270:function(e,t){},273:function(e,t){},276:function(e,t){},280:function(e,t){},281:function(e,t){},306:function(e,t){},308:function(e,t){},319:function(e,t){},321:function(e,t){},331:function(e,t){},333:function(e,t){},347:function(e,t){},375:function(e,t){},376:function(e,t){},450:function(e,t){},452:function(e,t){},459:function(e,t){},460:function(e,t){},594:function(e,t){},595:function(e,t,a){},597:function(e,t,a){},598:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(94),r=a.n(n),o=a(13),b=a(22),d=a(39),f=a(15),x=a(63),i=a(76),s=a.n(i),l=a(95),C=a.n(l),A=a(78),E=a(238),D=a(18),B={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(D.a)(Object(D.a)({},B),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(D.a)(Object(D.a)({},B),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(D.a)(Object(D.a)({},e),{},{account:t.payload.account});default:return e}},p={loading:!1,totalSupply:0,maxSupply:0,ogMinted:0,wlMinted:0,hexProofOG:0,hexProofWL:0,amountOG:0,amountWL:0,cost:0,error:!1,errorMsg:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(D.a)(Object(D.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,maxSupply:t.payload.maxSupply,nftMinted:t.payload.nftMinted,isWL:t.payload.isWL,isOG:t.payload.isOG,isWHALE:t.payload.isWHALE,freeMintable:t.payload.freeMintable,higherProof:t.payload.higherProof,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(D.a)(Object(D.a)({},p),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},j=Object(A.b)({blockchain:F,data:u}),g=[E.a],h=Object(A.c)(A.a.apply(void 0,g)),O=Object(A.d)(j,h),m=a(563).MerkleTree,y=a(592),w=["0x68e4b1A3d7315F27a78550e5CDa86fB27cbe007A","0xab1417494c348a8defbe7a0d5e7b4547da286c92","0x2D3fBd62A90Dd58C5606975b963498739ebC2CEd","0x995F625E36B17170Bd946F9610d07A6666A7ee7c","0xae4b25d333ffadd4959658d00c8fe857d5be396c","0x5e10cb1b0e8f673f98a5a5a4001a375fa1cb6748","0x5F144158970B53f6dCBB761e7B02B6455d05C861","0xfEF805a586580a845440ea303324bfDd2FC8AcC0","0x545582D94B338bC445e906a3c9877Ed2DFf19E90","0x6F5f2271e70A98409B8c091291803Bb894E8aa7d","0xc2e78371789CC67DF6f18774ca4A35882044C1E5","0x72CcD287CAf23D839ab9760EE3C55DC4Db55321A","0xcd21d3b0e8fb11287927c7cffd3e329fcc7e17aa","0x1AC0FA9Ab44b19d495065AAc4931e3E92C3305D9","0x6eB1a4236fBf25a1E7fFF8985D5FD813C5eaCB1a","0x3AB66471fBA1804AA8b95abf0b0f8Eb2aD0FD7d8","0xBfdC89253c41DA7b3705ad478F78D2c810A9657B","0xc8e27bd06e6B9B31e716fA23681AfBadD75C1f5f","0x2Fda6b369677BC0637B27b276125683359d1C995","0x5B22579045aa510d979766A47E58C78453EF13EC","0xB7b2a7cB1f3E0E23aca9A6ca39372A53f2560211","0x49548D3Ba62403F26bEC711886704E1205a45fd8","0xE77262fB26c5FF7De2C56f4e016C4CdB06e1779e","0xBDB969A121D3Bd526D90996D426e815C1e88652B","0x97D4d56c8f1eEc783CC5B303CbE7D5b501E6Eb79","0x117972f869f12fd5Bd31622eEB12e166ACAfB6c8","0x426A0B4DF2ddff42A52f51032Cd48dA62B489ebb","0x2230F9D381721A73a88809C3375299FE996C3B34","0x4774730Fd1A81029d8AE9ebF9bcCb6db31b46a5B","0xBAdFd1949a51b18B35d28b8bd8BfC333205b4Dd0","0x4D0cc05daD3Eb7D10a4961d4AedDFD60c3076C6e","0xB33D68146533A4A21d98e8E9b4d69803E1CE05C4","0x8853F1e3Bfa863dc03De52155db2F23AD384a6D0","0xf83733F9fEBc2b06a8CEc34d9EA26bBd7cA05569","0x5afb33754273eEd333b071C4055757A490c7dBa4","0x817682851004Dbe5b860D641633Be7E8b4949c64","0xB1e2526B4a88f6bCF731Fa6A288558c13af797f2","0x01b52c5b5c893d822a0b8e515a7709ca5d900b5f","0x73156fbd3e92ecb18cf202c20e05f8c23e8bbc4d","0xdBd5A41581F06FA33cE5E9b8Fe0D546D2A3bA6D1","0xF96fd6F445dc6B20af87BD805c362E3b503eBC49","0xED72476C07d31e1F4383b789606D367cbD1Eb7F5","0xD958D165957A20A2D3019F6078c48f4FC628c6D0","0xd6c9961b2658198035dd4ed1d85dC10C58629127","0xef9457C120eA04Ec66801F5554a71200326C1631","0x9808231271124715119C535BD31838de71661F03","0xFd2a795666Afb2266Eb2136a74D1a95E0535F259","0xDa4bBC4014076E0B37B5E8b946feF74F333128AF","0xA9171FC7B7Df76Ec09e0D94d46866c1A7831Bf10","0x381B730eB1Aea34AB53F56b4b0bc7f9C251D965B","0xDC585f2774a154fef87EAa666d1ED2bBc187947F","0x091d8F6e2570bB77d2623E390D28278BE4BbD218","0x4f765b9FCD43712404dC32CeE0bd4cAdf073CC05","0x514af73E062dFE28901Abf26C478e0f3E3ad03dA","0x4c8E22d1c15Ed6AD0fE36e6d5D7fc80e0Fc00b38","0x798c4D95F5C186ea4fA2838CDa5e797A28f982E6","0x7eA34bAb4F317596DC068fEF7c6030197cb650E8","0xb8F7196463a52741d16EDf7B66738C1EA0eE7966","0x4f2f19F64A5891115BCDad2446FEEBF2E82eb6C8","0x38031F1493064646bE7d4670aA90588255c3a3C8","0xc9579CAAcf1c83756450cF5F20D4040F433db562","0xDC706A6c1466bEf76E727b3e30349e51d23Bf79b","0x3b0D5d308e160c0aE05E9e6e1cAe8a36C4462eD2","0xB93a7932C807e8adF115C58b4D7825b0572bFe1E","0xd5c86C2e4Dd07FCE5354AFF248A408B686d6fD60","0xb1ADD88461eC550e0C6DFb3CAc7654512F69BbE8","0xB89bFcD5C4F5bcD081989bab7963D7eC01400CaF","0x7b39291665de458894Fc1ca0D316d642FE567f7e","0x434Eb950eF67470F1c255BDAcd1b6A39e1c67A14","0x9308E6be6373B9d0593B23935f0019c1c46B6168","0xBb1f78fe4729eFe133825f87DBbB247CDB3AC0C0","0x77B2F9a5DF2efc260B6f1b57C636f64C3b3e926F","0xc0717cb3AFC07e38C1ae67acc5f397dA8FB7eFaE","0x666635C982276c2773f4F53978b56EEe42491498","0x25389037d62DA127C7FeaeaB5987e0f5cA5fA60A","0x414480e92394FBbab283e1174aBe5F7b16355514","0x2e00846592959FE73C57d57860CC9D175744711e","0xA3069CFA9C0aA758965E29285b24090e816e2308","0x72663d91773b7ee255822322a99aa2860ff3a85a","0xad431E740Bb07848a85415df29541ECFe2F62C84","0x183DfBF69C1e6D76931288F5614Cb2214b12bB6b","0x5Ecd6259beD9Bef30925fEd4eE68B2190EaF5eB4","0x5bc6F0662134D59d5eD145672C3137e1f3bCFd36","0x68696D2d051005c195eb07EFF091457F6B2D21ED","0x57CC7a82776aC275ace75C900e6A7126cbb8c29F","0xa8467Ce68F4c2aF9C0B21E5f9A140eb691c90768","0xf679eD02bC523f78473e8660A617f3c16127dbe2","0x6D9916fc54A27B8F936cCb3480CC6FBbbE7cb23d","0xCeA6d4bAaf2155859c155D3A3CC92842c1508a96","0x248610bcf5b309886890d253BCd32B3cc25aF786","0x0431de6d4c9ed5712a9df217c7d2f5f7e670d6fa","0xE33BDe7E83D648D30B7399A3F8843D9EC11d151F","0x378a74911747e140aFFB121318D63E70bdf30C35","0x3537477a12A098be61Ecb7eCE34719B0C162139B","0x8f32aE0b4180C5320aAee0aBe8005a07BE941F46","0x50611CC468a1a02f931c807417F57EE55898E496","0xC99e255f88E39889A5FeC0B8D58A2Dba426BEcd8","0x4132C0C09D51e9d85599291648f6a81357F7D821","0x3fc36aDE615BF6e4581A6CF91B80fD46165cbdBA","0xD41CEEDfBE5ccd671199f250F4eCE52AFFfC3aFc","0x2cD795a235Fb1C0cdc80dD8975bA69688858a285","0xc6473856a74732374ec3aF4f2B04cb94A28f60B1","0xD89d37B9b1058f5B5D49ebFd067b269087Aee7e0","0xb4b2Ce2d75B9D7379f93f8dD4D42Ba015C8F7ea4","0x69996A1C2cF3e94c5b2856A4Df1089D3eAfB1660","0x1e7CE36DA0bA4821a36582c407A654D214DbCFC3","0x435F3e8B4ce25aEA096F423fc61BC334B197e019","0x6B0e9E027abc8BAaaC1761cE515C232A111129f6","0xB00D57CB6c332d62CcB670B2E61DBAb917A92D51","0x0f2D050d7c0926a50B3c4C6c72A5412812C79BD4","0x8Cf61E409b9B90C1Dfa12D35810F7711371AB68A","0x35A2ab7Aa5089c860B51c9ED148beB79F2835b93","0xc756B2681E1fD93ec3dbF114E36975F82BD103eb","0x30aA851F3905deD4eB7a3680FC2809Aee7f47D07","0x2395E61Be7Aa1A2823F7c85bF8D6cdE348760F84","0x87F3770D0E364419Ca0307b2fE53bbF3E6089B09","0x8E0EDD0fd4CD8A8ABbd77487469769Cf4888B181","0x26712645ebF56AfaD0Fb877e3D2109E02106F074","0x7D3dc2547f507Df0cfe704e6D17E6A8541e6f36d","0x3869E8e565d2FF80817439c680DEbb937947cAc6","0x312271094ac441BF566184a37a7fA5ac9e397902","0x5670C9aE19Cdb966dFE91C280f1D3FdC6999923e","0xc4f5be6b7951b154aa73115f700604eeb2499ff3","0xFbECf6BEF97f1DdfD74195D52dbBe25CC7c086b0","0xb7f06401A2954d2AFb3e1380Ee0dD8Fe3726471D","0xc2484fBFb220D093AA7DA5BEc09caD2E403AcdF6","0x02F75Cc5E776A241E7b5738f24b61D222B62E404","0xC60517F48c10C98160A5a2383aAb9C6606cEb624","0xab25D9a34B87D30098e090b8AC608acB8AB98341","0x69e9541Bae37fd07cFfcf4Bb9f1816B0121cdeeC","0x5B38dC8dfa9a171aB80b6AD06E6E57f9177a0432","0x0828d7eCD3B5D6461Af19A9B21bB9F9FE2Dea43E","0x1523D8E9f6C6d6Af3Ebc3b75E5503f47d57C0504","0xE4EA824CD80E61E101Af246E9B217F155Ee2E090","0xf727F8db63569104C8D9FBf38B761cFA80aeb516","0x60DB1B023cc89AE61BCe47c470aFF4fFBF674e35","0x7c947ccE5f01F2b5De341266b30D40811b094944","0xeD9393f4CbE273D94002975aB9D73420c92F710a","0x1ee5c1DCf49433BE8696c085c5edF7a1aD467E7a","0x243AFdeC8f104119Eb409ca776C9C2f4941f5307","0xf055E89033b00Be0Eb46f8302fb106449CFe5AD2","0xfE3Cf487565A3Cd275cb2cbf96a395F023637D86","0x31ec5BE3Dba53012280B85243BBaB558c41b163c","0xFeC236Fb18250fD9880f280601ba15A9F47bE7F5","0x52eB606f94091A2BA4f985D98C62880a9BA591B6","0xdf1AfB318bEF8Cf3047dF6d65177145B01E58c92","0x2d80B1d4009C47FB257216725Ff9478C65BDd259","0x4f4E61b556300fbe349adF08a722eeE081643f48","0x24313F0495e0Db6212ef9CA143ca9a94e39CC700","0xC7d8a6955859d9903c63216C8345A3DAdC8d146f","0x21237Fd9034b76fDDC9d213f8AB38010ceE4Ac75","0x5638de887060aaD096b9c8C6E93f16292e429471","0x7F88df6ac16e5ee4A75B98F4842cA2c1E7EA88cD","0x6c3850F04b48817557aFAB3c79015c3E86D6D0E5","0xB67A054572a8fD44C86b4e563d4ff820c257B9CA","0x1Bc9E3c3C410C41a2D784107a4fC89FE1378F441","0x472041c922dF8663e071932C6bB7dd3978C63109","0x4F0F9F2DF0B2149a364D6958B4F6597F85C66C32","0x2518d14b6797D5e974e9bF6B1345B3f7970a3954","0x17b319479497019A0AeB39c3E1E7ECfc5DC8B94A","0x23438ff96eaa034fEDD1EFFE4dC0616ddC3525c2","0xF3c7Fc54F15fb4a8DC9D6E111dCD3B0c24d416d4","0x4012dBd303447EC2EF495f18c1f95CCf01a33594","0xf5b8231BF3792b7080e705a0B162b65cB9902C87","0x6d9f24aFC7e0C2a102124B769bd9E8DfE25f303c","0x600A889107f8a7121aa71D5CF93BC24499a64b48","0x42b4F5e916eC0fD4b01F4D01536cAc180091fE1E","0x8FBe84F3Fefc0A9411bF87A216875110468E4910","0xB050FdE04c1E5aaed62f94F7aC14d5Ed9b166057","0x70e58Ef239dA7DA1D5332C34FAD21e636EF483Cf","0xe1cDF32847258e5872dcFbB27958A64DA3327117","0xDA97b3b43DB3501a220b713A9f4F2D359C722915","0x9Edc8F80B08B223617E1385561f5c8be4Aa1a73b","0xf8648D32b882E97C44EFB05824cf3EaD87DF729f","0x67B248b88077b49a8aF84c40fB89A22E8E06074f","0x77bdd60a3537e1e1367D9114a1b7017753173A22","0x82fBC709258990cCE657ba61236e26cDDB2D7A47","0x5F1F54D347e5Cb097bf83d053EbBf5E34F1CA65b","0xa84dd0c6a8f5DEA65672f1B82DAFb79b3d0Db748","0xCF5c36072602b8519427CFf5bcDDa69EbDe71B9a","0xa31D0884C1C8E21092af0510CB70cfCca6D009de","0xec613Ab9A2Df9ca12AE0D690E95EFCB075505fF9","0x4fE82D8272611342807DA3eA0d853180333115EA","0x405dFe0f6cdBb437F1E62AeF9677832c6A831bcA","0x2db76087AB6719Ca091dc53B4971a746b57EaEE2","0x9Bd226EfF925470f5671181DaF17fD4661580805","0x1D981567D01645697D28D0c1c6eb7e06ed4A2E39","0x8A0d92dD1e3F415a4034f20FB4774c8C05873066","0xAE97b142FD5f777aa1CCFd77d25C9Be1902C465F","0x75335B4c35c701EEdB8BE020F02d683c845368Be","0x8376a3468DF07DeBc9e468889BBB7b6d774a2761","0x7DaEb8C98381ecf613Fd6711696DA0Ef138ea38F","0x17f320E6079E97B2D20Cc8E8fD946aB6A9f87683","0x2d569972Bf7F33319955f129ADdD63755D39AD27","0xA9cbA77d52B0555fA996A528D68b4CEFBB541599","0x7Dd03A6634D3Ca0F1B7D7B46f0bE62A142e25E9F","0xD259632aB3E17a1c4A05Aa5EB5527dC2Ac0F1004","0x9BBa1C0CdC31E22b7C0b99878544B11736fc043c","0x85f5De9d8C4B0450F4979DD9406C73E29680fe21","0x5bcCd013502f34305f8d6396B3E3A525401F59BB","0x88e70650BfE7Bf2996AAE4826E305E2B1eD775F7","0xF25A00bB9844053727765b00B3d2Cba35dbC7a73","0x1729C4e316aF92965F9A100537B47903e7f7A82c","0x159fe66a440DBa073D5a48CbDD1592BA3d0eDD03","0x7d4F74820132a10CEc69EBFe5b43Be4A92d6d99D","0x760dDd501dDE7Fe6AC58E1b39D45be7743E20637","0xb09f09B1c3dFADFBfE1dAc72cbcaB6451d00F433","0xEfC334F754D6B9a193EE9A423aad561efa1408dE","0x72e131366B15E0C40bBb89283c42EfeBABf9D7dE","0xcc20ac23ada85f2e060a7c530d5ed154ff73d32f","0x40E505d11ef380Ed287F6Ee87FC83A1250fD1854","0xa262f14976B005D8Cd29d4283F218b7eeAE31aA7","0xaB52814573F8fAeEd944aaD9608cdc7cba164bF6"],v=["0xa761CdAcc37d65E2b09A4F7965711f261228eeB8","0x31171800B2C2bB8348FaB708DA7fC3D5fC8fde07","0xDA97b3b43DB3501a220b713A9f4F2D359C722915","0x89e70e1ce76B1f14581277DFa6fA4015B9F11657","0x2db76087AB6719Ca091dc53B4971a746b57EaEE2","0xF3e883AFD2e58D518D04DC42219b16a98f474290","0x5F4f0E17067c9a9F9DC2339eccc09541A0256a7a","0xC99e255f88E39889A5FeC0B8D58A2Dba426BEcd8","0x3060dc7b800fec0c8fc6f7966d9f3fa5f30c43d3","0x2007B90C18b28049b2f064A7E184d8f48c02FeeA","0x57cc7a82776ac275ace75c900e6a7126cbb8c29f","0x731f5a91F0249e37D944aFfa0Dc22EA05485f1BA","0x325FC6333cCb80BBEca15A5665C33868ec40E335","0xFe23887a4CF160f06D7E217B10C7C12560f2026c","0x88629E277ba6e22809E78402e9Db5e8285cf3A14","0x21237Fd9034b76fDDC9d213f8AB38010ceE4Ac75","0x86A77162072177999209e1a05161A9C9fa4dd211","0xfA46E7E42640c64708451b3Ddee6F527daB40df8","0x2d569972Bf7F33319955f129ADdD63755D39AD27","0xaCDaDfcdaD09b3B6A30c66cbF8292A64DD011C13","0xc79D1e613d62A89a4A025DF829b3318f34D0540d","0xd58F769CC9CF584045AdEB0c6C4A25f2Aa05fA64","0x67B248b88077b49a8aF84c40fB89A22E8E06074f","0xCE61b88aE9a9Fe70E0cf465D234addb162A38b94","0x8A0d92dD1e3F415a4034f20FB4774c8C05873066","0x0b0971bb2Ba317A15f52D6556fe8A72478BA2B60","0x3eC269Fa04127D2a9f6C37D2461eb3442373483c","0xF51cA8fD29A9F1025c84746b0321C3987C7a509D","0xc90BC2aF54c8fA6489d9FaB9ba27A263a676C007","0x3f6CfCdB7FbF6F503803Ac5d19c10D5Fee063181","0xec613Ab9A2Df9ca12AE0D690E95EFCB075505fF9","0xDC3d3884A1274C45b13108d4D8c7A7d0fD3f6076","0x9b4F3Ae59043E37B1953C2630c7D0b660191481D","0x545f4677a2227360cf70d20c1813df0345dc6f78","0x75d8c3fe9A61Cc38266D883e3060d648eB5f071F","0x2a38120DfFdB1b62A6b1f3e56d288980f57CdF30","0x03C12E6683bc893464E23364998207B6F12ffbE2","0xa430dE458a8C142aeCC7559173421454b812770D","0x850b87D03A705CfCBD46b1Be9a540ac4f553a032","0x40Bf75304596cA5ce424F6CC70Cef7CaE5aD8AF2","0xb61ddb0370ae548486101b008D8901D705c3EdC6","0x540bc21784a3bcd72aB77C830381f3EEE4548A5C","0xdf3a49f85ffe85c72e35e43bc4f4b220f394249a","0x5Ac79dBDf2E9587A3325d79D9045a48d9e3eab0d","0x8D479e19cb2F896F1879Bd56f924eb2a6Ef29e18","0x329c1e65227c5296f6e991f957a5f282ce2bd9e8","0xa1434Cb31D3B3e48062efD3CEe11385967bCF282","0x77904f1a4E9D81CAFb47db7Ae5DBA46456683d10","0x5bcCd013502f34305f8d6396B3E3A525401F59BB","0xa2fb09cB58Fb0F0916C35BFBe0B3aC55E551fe4E","0x40BAd26432912b416CD5F665b99812c5E9729834","0xF609d9E0d10C4a9Bf513de3037671d041EBC6bC3","0x49548D3Ba62403F26bEC711886704E1205a45fd8","0xa8467Ce68F4c2aF9C0B21E5f9A140eb691c90768","0xb09f09B1c3dFADFBfE1dAc72cbcaB6451d00F433","0xd80b5cd3ffdd88b82ba47fbde6d8ebd4f75b44db","0x87e85f065d7540dF24D9487E8f86c4dAe652B19b","0x7CfB6471D2A9913b7d27D3f3983751eFA028Eea9","0x38B06dBBC841e872425eEFBc222de3fA08d00D27","0x787a8b6f6a9855802adf0d12b82956a9814c8e28","0xBa0b2426a9B1435D5304BeF7F2D0C761428db624","0x426A0B4DF2ddff42A52f51032Cd48dA62B489ebb","0xC91D55707848c3DBc20d7d1b357aDE3499ba0a16","0xB939a33F9af217B1A8e3226c9D59aF0c87f27D2c","0xAB1417494C348A8dEfBE7a0d5E7B4547DA286C92","0x71A6A1FbDaafB5b389cCAEaa1D84d0Ce6B7520De","0xc3f94a20414C34a9c3B7C16aD4d1126c9f3f25F5","0xb8F7196463a52741d16EDf7B66738C1EA0eE7966","0x468b98B17C278909975A1A211ee039D4A6614520","0x4012dBd303447EC2EF495f18c1f95CCf01a33594","0x41C0F1468F2731671A6Dbe5135383A28Ad47a5B7","0x87E205e53D796dDd902b54e9AD4EB3e492dc36c8"],S=["0x21237Fd9034b76fDDC9d213f8AB38010ceE4Ac75","0xD6ec01A88f52A11681AAFC7eeEfe6602cc351657","0x5c096D684dF697B7aD963caa2592036128A0faF0","0xF6397a57A43a67fD855B9465B8Bb73a32CaAE8EA","0xF09793777F25bFaAA1F3fF3d610673d531073a9d","0x8a8f3dD2E7c4e17F43Fd8C989e6288049C26588c","0xE55E2E7F6a58403603d9F49F2da511BadF94BA07","0xD6Ba38B9729ec6EF2D1cef640eA6229A87E3753E","0x71eBBC656D937Bfd4FEf55687dd292933D125B92","0xa49D85a26fcB5b8cA0c78692439591Bc718e2D21","0xDd5f7D3D52F97b94fCFed492730240e93d792e98","0x8D5E4b486E727Bde6C2ebd5013341aBF82EaF9E9","0x595b0693C9A54C8351b11dAF77334e4d1A7421E8","0x6d3a14E4Ccb26DF08F7046b1A5DA0eae309a2128","0x7004c7F20F50A55A6e6fb002a4AE331A7026f93B","0xb1EAA160b26996BA2D66638f58705801eBf25e21","0x2cf7c8a42E2BDc30A50453979A3452279C05532D","0x37e6010357A84267D11F4d82A534597AFCA77e05","0x71E2Ba6fC204278bd1D9D0b62516bACCbACF806B","0xbA4Ac042BFEc01E44dBDD947BA8E2f4Ef475d1e0","0xeEC80480D91B31a30B09a347A071d7AFd640953c","0x79741f55A40160DA2930a45eeB498B4F23a46f40","0x968B8F746391c8c17dD4656424FA65eC9CD09aaf","0xEaB73D4E656bBfAB1bc04BD944390b3846D4f685","0x040C204A0ecCdf9E5471dA263a9B75c0110807fB","0x5d0eCE4CAe6295becdae25233F8acA23a5c512f7","0xf1F10c6dA12F1bd456AAE4a10ebe6CEBB6c9d2D2","0x4adAbFD2383021ccF3D0DF73a1127e47130d56B9","0x451B342f6b25c41D9fDD7a0D135d03CfEd19e3eb"];function N(e,t){return k.apply(this,arguments)}function k(){return(k=Object(b.a)(Object(o.a)().mark((function e(t,a){var c,n,r,b,d,f;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0==a||1==a||2==a){e.next=2;break}return e.abrupt("return",null);case 2:return c=(0==a?w:1==a?v:S).map((function(e){return y(e)})),n=new m(c,y,{sortPairs:!0}),r=n.getRoot(),b=y(t),d=n.getHexProof(b),f=n.verify(d,b,r),e.abrupt("return",!!f&&d);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=a(95),T=function(e){return{type:"CHECK_DATA_SUCCESS",payload:e}},M=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},_=function(){var e=Object(b.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",function(){var e=Object(b.a)(Object(o.a)().mark((function e(a){var c,n,r,b,d,f,x,i,s,l,C,A,E,D,B,F;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,O.getState().blockchain.smartContract.methods.totalSupply().call();case 4:return c=e.sent,e.next=7,O.getState().blockchain.smartContract.methods.maxSupply().call();case 7:return n=e.sent,e.next=10,O.getState().blockchain.smartContract.methods.addressMintedBalance(t).call();case 10:return r=e.sent,e.next=13,N(t,0);case 13:return b=e.sent,e.next=16,N(t,1);case 16:return d=e.sent,e.next=19,N(t,2);case 19:return f=e.sent,e.next=22,O.getState().blockchain.smartContract.methods.amountPUBLIC().call();case 22:return x=e.sent,e.t0=Number,e.next=26,O.getState().blockchain.smartContract.methods.amountOG().call();case 26:return e.t1=e.sent,i=(0,e.t0)(e.t1),e.t2=Number,e.next=31,O.getState().blockchain.smartContract.methods.amountWL().call();case 31:return e.t3=e.sent,s=(0,e.t2)(e.t3),e.t4=Number,e.next=36,O.getState().blockchain.smartContract.methods.amountWHALE().call();case 36:return e.t5=e.sent,l=(0,e.t4)(e.t5),D=0,D=x>r?x-r:D,D=(C=!!b)?i>r?i-r:0:D,D=(A=!!d)?s>r?s-r:0:D,D=(E=!!f)?l>r?l-r:0:D,e.next=48,I(t);case 48:if(!e.sent){e.next=52;break}e.t6=20,e.next=53;break;case 52:e.t6=D;case 53:return D=e.t6,B=[],B=A?d:B,B=C?b:B,B=E?f:B,e.next=60,O.getState().blockchain.smartContract.methods.cost().call();case 60:F=e.sent,a(T({totalSupply:c,maxSupply:n,nftMinted:r,isWL:A,isOG:C,isWHALE:E,freeMintable:D,higherProof:B,cost:F})),e.next=68;break;case 64:e.prev=64,e.t7=e.catch(1),console.log(e.t7),a(M("Could not load data from contract."));case 68:case"end":return e.stop()}}),e,null,[[1,64]])})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function I(e){return R.apply(this,arguments)}function R(){return(R=Object(b.a)(Object(o.a)().mark((function e(t){var a,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",t.toLowerCase()==c.OWNER.toLowerCase());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W,K,P,z,U,H,G,Y,X,Q,q,J,V,Z,$,ee,te,ae,ce,ne,re,oe=function(e){return{type:"CONNECTION_FAILED",payload:e}},be=a(16),de=be.a.div(W||(W=Object(f.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),fe=be.a.div(K||(K=Object(f.a)(["\n  height: 8px;\n  width: 8px;\n"]))),xe=be.a.div(P||(P=Object(f.a)(["\n  height: 16px;\n  width: 16px;\n"]))),ie=be.a.div(z||(z=Object(f.a)(["\n  height: 24px;\n  width: 24px;\n"]))),se=be.a.div(U||(U=Object(f.a)(["\n  height: 32px;\n  width: 32px;\n"]))),le=be.a.div(H||(H=Object(f.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Ce=be.a.p(G||(G=Object(f.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),Ae=(be.a.p(Y||(Y=Object(f.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),be.a.p(X||(X=Object(f.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),Ee=(be.a.div(Q||(Q=Object(f.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),a(603)),De=a(242),Be=a.n(De),Fe=a(243),pe=a.n(Fe),ue=(a(595),a(48)),je=a(1),ge=a(95),he="https://mint.collagebots.com/",Oe=be.a.button(q||(q=Object(f.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),me=be.a.button(J||(J=Object(f.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ye=(be.a.div(V||(V=Object(f.a)(["\n  width: 100%;\n  padding: 20px 0px 20px 0px;\n  border: 1px solid #CC;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n"]))),be.a.div(Z||(Z=Object(f.a)(["\n  width: 100%;\n  padding: 20px 0px 20px 0px;\n  border-top: 1px solid var(--secondary);\n"])))),we=be.a.div($||($=Object(f.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ve=be.a.img(ee||(ee=Object(f.a)(["\n  width: 300px;\n  @media (min-width: 767px) {\n    width: 500px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),Se=be.a.img(te||(te=Object(f.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 2px solid var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  max-width: 200px;\n  width: 90%;\n  transition: width 0.5s;\n"]))),Ne=be.a.img(ae||(ae=Object(f.a)(["\n\n"]))),ke=be.a.img(ce||(ce=Object(f.a)(["\n  width: 26%;\n  height: 100%;\n  max-width: 140px;\n  max-height: 140px;\n  @media(max-width: 340px) {\n    width: 100px;\n    height: 100px;\n    margin: 2px auto 10px auto !important;\n  }\n"]))),Le=be.a.div(ne||(ne=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  width: 100%;\n  height: 100;\n  align-items: flex-start;\n  @media(max-width: 340px) {\n    flex-direction: column;\n  }\n"]))),Te=be.a.a(re||(re=Object(f.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var Me=function(){var e,t,a=Object(x.b)(),n=Object(x.c)((function(e){return e.blockchain})),r=Object(x.c)((function(e){return e.data})),f=Object(c.useState)(!1),i=Object(d.a)(f,2),l=i[0],A=i[1],E=Object(c.useState)("Click buy to mint your NFT."),D=Object(d.a)(E,2),B=D[0],F=D[1],p=Object(c.useState)(1),u=Object(d.a)(p,2),j=u[0],g=u[1],h=Object(c.useState)(!1),O=Object(d.a)(h,2),m=O[0],y=O[1],w=Object(c.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),v=Object(d.a)(w,2),S=v[0],N=v[1],k=function(){var e=Object(b.a)(Object(o.a)().mark((function e(){var t,c,d,f;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.higherProof,c=r.cost,d=S.GAS_LIMIT,f=(j>r.freeMintable?(j-r.freeMintable)*c:0).toString(),String(d+d/100*5*(j-1)),F("Minting your ".concat(S.NFT_NAME,"...")),A(!0),n.smartContract.methods.mint(j,t).send({to:S.CONTRACT_ADDRESS,from:n.account,value:f}).once("error",(function(e){console.log(e),F("Sorry, something went wrong please try again later."),A(!1)})).then(function(){var e=Object(b.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pe()("Mint succesfull!","Welcome to the fam!","success",{buttons:{opensea:"Check on Opensea!",ok:!0}}).then((function(e){if("opensea"===e)window.open(S.MARKETPLACE_LINK,"_blank").focus()})),F("WOW, the ".concat(S.NFT_NAME," is yours! go visit Opensea.io to view it.")),A(!1),e.t0=a,e.next=6,_(n.account);case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===n.account||null===n.smartContract){e.next=6;break}return e.t0=a,e.next=4,_(n.account);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){a(function(){var e=Object(b.a)(Object(o.a)().mark((function e(t){var a,c,n,r,b,d,f,x;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,a=new L("https://mainnet.infura.io/v3/06fe0445755547ada4623b41ef2428ba"),e.next=5,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 5:return c=e.sent,e.next=8,c.json();case 8:return n=e.sent,e.next=11,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 11:return r=e.sent,e.next=14,r.json();case 14:return b=e.sent,d=new a.eth.Contract(n,b.CONTRACT_ADDRESS),e.next=18,d.methods.totalSupply().call();case 18:return f=e.sent,e.next=21,d.methods.maxSupply().call();case 21:x=e.sent,t(T({totalSupply:f,maxSupply:x})),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(1),console.log(e.t0),t(M("Could not load data from contract."));case 29:case"end":return e.stop()}}),e,null,[[1,25]])})));return function(t){return e.apply(this,arguments)}}())},W=function(){var e=Object(b.a)(Object(o.a)().mark((function e(){var t,a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,N(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){W(),R(),window.ethereum&&(ethereum.on("accountsChanged",(function(e){return window.location.reload()})),ethereum.on("chainChanged",(function(){return window.location.reload()})))}),[]),Object(c.useEffect)((function(){I()}),[n.account]),Object(je.jsx)(de,{children:Object(je.jsxs)(le,{flex:1,ai:"center",style:{paddingTop:24,backgroundColor:"var(--primary)"},image:S.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(je.jsx)(ve,{alt:"logo",src:"/config/images/collagebot_logo.png"}),Object(je.jsx)(xe,{}),Object(je.jsxs)(le,{jc:"center",ai:"center",style:{textDecoration:"none",textAlign:"center",display:"inline",width:"70%"},children:[Object(je.jsx)("a",{className:"socialIconLink",href:"https://collagebots.com/",style:{fontSize:"30px"},children:Object(je.jsx)(ue.b,{})}),Object(je.jsx)("a",{className:"socialIconLink",href:"https://twitter.com/CollageBotsNFT",style:{fontSize:"30px",marginLeft:"8px"},children:Object(je.jsx)(ue.c,{})}),Object(je.jsx)("a",{className:"socialIconLink",href:"https://discord.gg/UFEkYyHJGY",style:{fontSize:"30px",marginLeft:"8px"},children:Object(je.jsx)(ue.a,{})}),Object(je.jsx)("a",{className:"socialIconLink",href:S.MARKETPLACE_LINK,style:{fontSize:"30px",marginLeft:"8px"},children:Object(je.jsx)(Ne,{onMouseOver:function(e){return e.target.src=he+"config/images/opensea-focus.png"},onMouseOut:function(e){return e.target.src=he+"config/images/opensea.png"},alt:"",src:"/config/images/opensea.png",style:{width:"30px",height:"30px"}})}),Object(je.jsx)("a",{className:"socialIconLink",href:S.SCAN_LINK,style:{fontSize:"30px",marginLeft:"8px"},children:Object(je.jsx)(Ne,{onMouseOver:function(e){return e.target.src=he+"config/images/etherscan-focus.png"},onMouseOut:function(e){return e.target.src=he+"config/images/etherscan.png"},alt:"",src:"/config/images/etherscan.png",style:{width:"30px",height:"30px"}})})]}),Object(je.jsxs)(we,{flex:1,style:{padding:24},test:!0,children:[Object(je.jsx)(le,{flex:1,jc:"center",ai:"center",children:Object(je.jsx)(Se,{alt:"example",src:"/config/images/example.gif"})}),Object(je.jsx)(ie,{}),Object(je.jsxs)(le,{flex:3,jc:"center",ai:"center",style:{backgroundColor:"#310e68",backgroundImage:"linear-gradient(316deg, #320a68 0%, #5a0f40 74%)",padding:25,borderRadius:15,border:"1px solid var(--secondary)",boxShadow:"rgba(0, 0, 0, 0.65) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",height:"120%",margin:"auto"},children:[Object(je.jsxs)(Le,{id:"rolesContainer",style:{transformStyle:"preserve-3d"},children:[Object(je.jsx)(ke,{alt:"mintRole",src:"/config/images/public.png",style:{transform:"scaleX(1)",marginLeft:"auto"}}),Object(je.jsx)(ke,{alt:"mintRole",src:"/config/images/whitelist.png",style:{transform:"scaleX(1)",marginRight:"11%",marginLeft:"11%"}}),Object(je.jsx)(ke,{alt:"mintRole",src:"/config/images/og-role.png",style:{transform:"scaleX(1)",marginRight:"auto"}}),void Be.a.init(document.querySelectorAll("#rolesContainer"))]}),Object(je.jsx)(ie,{}),Object(je.jsxs)(Ce,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",r.maxSupply]}),Object(je.jsx)(Ae,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(je.jsx)(Te,{target:"_blank",href:S.SCAN_LINK,children:(e=S.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),Object(je.jsx)(xe,{}),Number(r.totalSupply)>=Number(r.maxSupply)?Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(Ce,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(je.jsxs)(Ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",S.NFT_NAME," on"]}),Object(je.jsx)(xe,{}),Object(je.jsx)(Te,{target:"_blank",href:S.MARKETPLACE_LINK,children:S.MARKETPLACE})]}):Object(je.jsxs)(je.Fragment,{children:[Object(je.jsxs)(Ce,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",S.SYMBOL," NFT costs ",S.DISPLAY_COST," ",S.NETWORK.SYMBOL,Object(je.jsx)("span",{style:{fontSize:"80%"},children:" (Excluding gas fees)"})]}),Object(je.jsx)(xe,{}),""===n.account||null===n.smartContract?Object(je.jsxs)(le,{ai:"center",jc:"center",children:[Object(je.jsxs)(Ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",S.NETWORK.NAME," network"]}),Object(je.jsx)(xe,{}),Object(je.jsx)(Oe,{onClick:function(e){e.preventDefault(),a(function(){var e=Object(b.a)(Object(o.a)().mark((function e(t){var a,c,n,r,b,d,f,x,i;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return n=e.sent,e.next=12,n.json();case 12:if(r=e.sent,b=window,!(d=b.ethereum)||!d.isMetaMask){e.next=33;break}return s.a.setProvider(d),f=new C.a(d),e.prev=18,e.next=21,d.request({method:"eth_requestAccounts"});case 21:return x=e.sent,e.next=24,d.request({method:"net_version"});case 24:e.sent==r.NETWORK.ID?(i=new s.a(c,r.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:x[0],smartContract:i,web3:f}})):t(oe("Change network to ".concat(r.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(oe("Something went wrong."));case 31:e.next=34;break;case 33:t(oe("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),I()},children:"CONNECT"}),""!==n.errorMsg?Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(xe,{}),Object(je.jsx)(Ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:n.errorMsg})]}):null,Object(je.jsx)(ie,{})]}):Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(Ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:B}),Object(je.jsx)(ie,{}),void 0!=r.freeMintable?Object(je.jsx)(je.Fragment,{children:Object(je.jsxs)(ye,{onLoad:function(){if(!m){var e=r.isWHALE?20:r.isOG?15:r.isWL?10:5;g(e),console.log(r.freeMintable),g(r.freeMintable>0?e:1),y(!0)}}(),children:[Object(je.jsxs)(le,{style:{textAlign:"center"},children:[Object(je.jsx)(Le,{children:r.isOG?Object(je.jsx)(ke,{alt:"example",src:"/config/images/og-role_label.png",style:{margin:"auto"}}):r.isWL?Object(je.jsx)(ke,{alt:"example",src:"/config/images/whitelist_label.png",style:{margin:"auto"}}):r.isWHALE?Object(je.jsx)(Ce,{style:{margin:"auto",fontSize:"2em",fontWeight:"800",textAlign:"center",color:"var(--accent-text)"},children:"WHALE ROLE"}):Object(je.jsx)(ke,{alt:"example",src:"/config/images/public_label.png",style:{margin:"auto"}})}),Object(je.jsx)(Ce,{style:{margin:"auto",fontSize:"2em",fontWeight:"800",textAlign:"center",color:"var(--accent-text)"},children:r.freeMintable>0?r.freeMintable+" FREE":""}),Object(je.jsx)(ie,{})]}),l?Object(je.jsx)(le,{ai:"center",jc:"center",fd:"row",children:Object(je.jsx)(Ee.a,{})}):Object(je.jsx)(je.Fragment,{children:Object(je.jsxs)(le,{children:[Object(je.jsxs)(le,{ai:"center",jc:"center",fd:"row",children:[Object(je.jsx)(me,{style:{lineHeight:.4},disabled:l?1:0,onClick:function(e){e.preventDefault(),function(){var e=j-1;e<1&&(e=1),g(e)}()},children:"-"}),Object(je.jsx)(ie,{}),Object(je.jsx)(Ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(je.jsx)(ie,{}),Object(je.jsx)(me,{disabled:l?1:0,onClick:function(e){e.preventDefault(),function(){var e=j+1;n.account.toLowerCase()!=S.OWNER.toLowerCase()&&n.account!=S.VAULT&&e>S.MAX_MINT_AMOUNT&&(e=S.MAX_MINT_AMOUNT),g(e)}()},children:"+"})]}),Object(je.jsx)(xe,{}),Object(je.jsx)(le,{ai:"center",jc:"center",fd:"row",children:Object(je.jsxs)(Oe,{disabled:l?1:0,onClick:function(e){e.preventDefault(),k(),I()},children:[l?"BUSY":"BUY",null!=r.hexProofOG]})})]})}),Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(xe,{}),Object(je.jsxs)(Ce,{style:{fontSize:"16px",textAlign:"center",color:"var(--accent-text)"},children:["TOTAL COST: ",ge.utils.fromWei((j>r.freeMintable?(j-r.freeMintable)*r.cost:0).toString(),"ether")]}),Object(je.jsx)(Ce,{style:{fontSize:"16px",textAlign:"center",color:"var(--accent-text)"},children:"MAX 20 PER WALLET"})]})]})}):Object(je.jsx)(Ee.a,{})]})]})]}),Object(je.jsx)(ie,{}),Object(je.jsx)(le,{flex:1,jc:"center",ai:"center",children:Object(je.jsx)(Se,{alt:"example",src:"/config/images/example2.gif",style:{transform:"scaleX(-1)"}})})]}),Object(je.jsx)(se,{}),Object(je.jsxs)(le,{jc:"center",ai:"center",style:{textDecoration:"none",textAlign:"center",display:"inline",width:"70%"},children:[Object(je.jsx)("a",{className:"socialIconLink",href:"https://collagebots.com/",style:{fontSize:"30px"},children:Object(je.jsx)(ue.b,{})}),Object(je.jsx)("a",{className:"socialIconLink",href:"https://twitter.com/CollageBotsNFT",style:{fontSize:"30px",marginLeft:"8px"},children:Object(je.jsx)(ue.c,{})}),Object(je.jsx)("a",{className:"socialIconLink",href:"https://discord.gg/UFEkYyHJGY",style:{fontSize:"30px",marginLeft:"8px"},children:Object(je.jsx)(ue.a,{})}),Object(je.jsx)("a",{className:"socialIconLink",href:S.MARKETPLACE_LINK,style:{fontSize:"30px",marginLeft:"8px"},children:Object(je.jsx)(Ne,{onMouseOver:function(e){return e.target.src=he+"config/images/opensea-focus.png"},onMouseOut:function(e){return e.target.src=he+"config/images/opensea.png"},alt:"",src:"/config/images/opensea.png",style:{width:"30px",height:"30px"}})}),Object(je.jsx)("a",{className:"socialIconLink",href:S.SCAN_LINK,style:{fontSize:"30px",marginLeft:"8px"},children:Object(je.jsx)(Ne,{onMouseOver:function(e){return e.target.src=he+"config/images/etherscan-focus.png"},onMouseOut:function(e){return e.target.src=he+"config/images/etherscan.png"},alt:"",src:"/config/images/etherscan.png",style:{width:"30px",height:"30px"}})})]}),Object(je.jsx)(fe,{}),Object(je.jsxs)(le,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(je.jsxs)(Ae,{style:{lineHeight:"110%",textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",S.NETWORK.NAME," Mainnet) and the correct address. ",Object(je.jsx)(fe,{}),"Please note: Once you make the purchase, you cannot undo this action."]}),Object(je.jsx)(xe,{}),Object(je.jsx)(Ae,{style:{textAlign:"center",color:"var(--primary-text)"},children:"\xa9 2022 Collage Bots All Rights Reserved"})]})]})})},_e=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,604)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))};a(597);r.a.render(Object(je.jsx)(x.a,{store:O,children:Object(je.jsx)(Me,{})}),document.getElementById("root")),_e()}},[[598,1,2]]]);
//# sourceMappingURL=main.24d2e7fa.chunk.js.map
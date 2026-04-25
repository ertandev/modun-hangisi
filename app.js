// Game Data - Situation Cards
const situations = [
    "Patronun seni odasına çağırdığında hissettiğin o an.",
    "Eski sevgilini yeni sevgilisiyle görünce...",
    "Sabah alarm çalmadan 1 dakika önce uyanınca.",
    "Arkadaşın 'Ben hesabı ödüyorum' dediğinde.",
    "Sınavdan beklediğinden yüksek not alınca.",
    "Toplu taşımada ayakta uyurken biri yer verdiğinde.",
    "Garson yemeğini getirdiğinde ama yanlış masa olduğunu anlayınca.",
    "Annene 'Tamam anne kapattım' dedikten sonra telefonu kapatmadığını fark edince.",
    "Instagram'da yanlışlıkla 3 yıl önceki fotoyu beğendiğinde.",
    "Cüzdanını evde unuttuğunu kasada fark edince.",
    "Kuaförde saçını beğenmeyip 'Çok güzel oldu' derken.",
    "Misafirliğe gidip tuvaleti tıkadığında.",
    "WhatsApp grubuna atacağın dedikoduyu yanlışlıkla o kişiye atınca.",
    "Otobüste ineceğin durağa gelirken düğmeye basmaya çalışıp ulaşamayınca.",
    "Sevgilin 'Kızmıcam, doğruyu söyle' dediğinde.",
    "Yolda yürürken kendi kendine güldüğünü fark edip ciddileşmeye çalışırken.",
    "Arkadaş ortamında espri yapıp kimse gülmeyince.",
    "Zoom toplantısında mikrofonun açık kaldığını fark edince.",
    "Sipariş verdiğin yemek 1 saat sonra iptal edilince.",
    "Dedikodu yaparken bahsettiğin kişi içeri girince.",
    "Biri sana iltifat ettiğinde ne yapacağını bilemediğinde.",
    "Diyeti bozup 2. İskenderi söylerken.",
    "Film izlerken +18 sahne çıkınca ailenle göz göze gelmemeye çalışırken.",
    "Markette parayı denkleştirmeye çalışırken arkadaki sıranın bakışları.",
    "Flörtün 'Biz şimdi neyiz?' diye sorduğunda.",
    "Telefonun şarjı %1 kalınca priz ararken.",
    "Yazın klimasız otobüse bindiğinde.",
    "Hesabı ödeyecekmiş gibi yapıp arkadaşının ödemesini beklerken.",
    "Kankana 'Bakma ama arkanda kim var' dediğinde kankan.",
    "Haftasonu planı iptal olunca içten içe sevinirken.",
    "İnternet gidince modeme attığın o bakış.",
    "Düğünde oynamaya zorla kaldırılınca.",
    "Sınavda hoca tam senin kopya kağıdına doğru yürürken.",
    "Kargocu 'Evde yoktunuz' mesajı atınca ama aslında bütün gün evdeysen.",
    "Arkadaşın sana borcunu hatırlatınca konuyu değiştirmeye çalışırken.",
    "Selfie çekerken arkadan biri geçince.",
    "Google'da arattığın utanç verici şeyi biri görecek diye korkarken.",
    "Yemeğin tuzu az olmuş denilince annenin bakışı.",
    "Doktorda sıra sana gelip içeri girdiğinde.",
    "Yanlışlıkla patronuna 'Canım' yazınca.",
    "Sabah kalkıp işe gitmen gerektiğini hatırlayınca.",
    "Biri seninle konuşurken adını hatırlayamayınca.",
    "Otobüste kulaklığını evde unuttuğunu fark edince.",
    "Ders çalışmak için masaya oturup 5 dakika sonra Instagram'a girince.",
    "Arkadaş ortamında herkesin güldüğü espriyi tek anlamayan sen olunca.",
    "Sevgilin 'Konuşmamız lazım' mesajı atınca.",
    "Hesabı ödeyecekken kartın 'Yetersiz Bakiye' verince.",
    "Kuaför saçını çok kısa kesince ama 'Harika oldu' derken.",
    "Asansörde tanımadığın biriyle göz göze gelince.",
    "Whatsapp grubuna yanlışlıkla sticker atınca.",
    "Sınavda hoca 'Kağıtları bırakın' dediğinde hala yazmaya çalışırken.",
    "Annen 'Bunu kim kırdı?' diye sorduğunda.",
    "Eski sevgilini stalklarken yanlışlıkla beğeni atınca.",
    "Kargocu geldiğinde üstünde pijamayla kapıyı açınca.",
    "Yemek siparişi beklerken kuryenin haritada evin önünden geçtiğini görünce.",
    "Sinemada film arası verilince ışıklar aniden yanınca.",
    "Toplantıda sunum yaparken bilgisayarın donunca.",
    "Misafirlikte tuvaleti bulamayınca.",
    "Biri sana el salladığında sen de el sallayıp aslında arkadakine selam verdiğini anlayınca.",
    "Yolda yürürken ayağın takılınca ve kimse gördü mü diye bakınca.",
    "Dolmuşta 'Müsait bir yerde' diye bağırıp şoförün duymaması.",
    "Arkadaşın çok kötü bir şarkı açıp 'Bak bu efsane' dediğinde.",
    "Sınav notunu öğrenmek için sisteme girerken ellerinin titremesi.",
    "Annen misafirler varken senin bebeklik anılarını anlatmaya başlayınca.",
    "Telefonun şarjı %1 iken priz bulamayınca.",
    "Gece tam uyuyacakken aklına gelen utanç verici anı.",
    "Garson 'Afiyet olsun' dediğinde yanlışlıkla 'Sana da' deyince.",
    "Biri sana iltifat ettiğinde ne yapacağını bilemediğinde.",
    "Düğünde zorla halaya kaldırıldığında.",
    "Mağazada kıyafet denerken kabinde sıkışınca.",
    "Selfie çekerken arkadan birinin photobomb yapması.",
    "Whatsapp'ta yazdığın uzun mesajı yanlışlıkla sildiğinde.",
    "Bilgisayarın güncellemesi %99'da takılı kalınca.",
    "Arkadaşın borcunu ödemeyince ama isteyemeyince.",
    "Sevgilin 'Neyin var?' dediğinde 'Hiçbir şey yok' derken.",
    "Diyetin ilk günü akşamı buzdolabının önünde.",
    "Kuaförde 'Azıcık ucundan al' dedikten sonra aynaya bakınca.",
    "Otobüste uyuyakalip son durağa gelince.",
    "Yağmurlu havada yanından geçen araba su sıçratınca.",
    "Telefonun yüzüne düştüğünde.",
    "Yanlışlıkla patronuna emoji atınca.",
    "Eczanede kondom alırken tanıdık biriyle karşılaşınca.",
    "Instagram hikayene yanlışlıkla utanç verici bir şey atınca.",
    "Annen odanı toplarken özel eşyalarını bulunca.",
    "Sevgilin doğum gününü unutunca.",
    "Arkadaşların sensiz plan yapıp story attığında.",
    "Yemek yaparken tuzu fazla kaçırınca ama çaktırmamaya çalışırken.",
    "Sabah alarmı erteleyip işe geç kaldığında.",
    "Biri seninle dalga geçtiğinde cevap veremeyip eve gidince aklına gelince.",
    "Toplu taşımada yer verdiği teyzenin 'Ben yaşlı mıyım?' demesi.",
    "Markette parayı düşürünce arkadaki sıranın bakışları.",
    "Online toplantıda kameranı açmayı unutunca ve herkes seni pijamalarla görünce.",
    "Otobüste birinin üstüne oturacakken son anda fark edince.",
    "Yemek siparişinde 'Afiyet olsun' diyen kişiye 'Sana da' deyince.",
    "Markette kasiyere para uzatırken elinden düşürünce.",
    "Sınıfta sessizce osurduğunda ama ses çıkınca.",
    "Birinin sana baktığını fark edip sen de bakınca göz göze gelince.",
    "Yanlış numarayı arayıp 5 dakika sohbet ettikten sonra fark edince.",
    "Story atıp kimse görmeyince.",
    "Selfie çekerken arka kamera açık olduğunu fark edince.",
    "Arkadaşına 'Gelme ya' dediğinde gerçekten gelmeyince.",
    "Yeni saç kesimini kimsenin fark etmemesi.",
    "Laf sokan birine 3 saat sonra cevap bulunca.",
    "Uber'de şoförle konuşmak istemeyip sessizce oturunca.",
    "İnternette bir şeye gülerken yanındaki 'Neye gülüyorsun?' deyince.",
    "Market poşetlerini tek seferde taşımaya çalışırken.",
    "Telefonun yüzde 5 şarjla hayatta kalmaya çalışırken.",
    "Birisi 'Seni tanıyor muyum?' dediğinde.",
    "Yanlış sınıfa/toplantıya girip 10 dakika sonra fark edince.",
    "Komşunun WiFi şifresini kırmaya çalışırken yakalanınca.",
    "Birisiyle aynı anda kapıdan geçmeye çalışınca.",
    "WhatsApp'ta çevrimiçi görünüp mesajlara cevap vermeyince.",
    "Annene 'Yemek hazır' dediğinde ama 30 dakika daha bekleyince.",
    "Esprini açıklaman gerekince.",
    "Birisi sana sarılmaya gelirken el sıkışmaya uzanınca.",
    "Netflix'te 'Hala izliyor musun?' sorusu gelince.",
    "Asansörde yanlış kata basınca ve kimseyle göz göze gelmemeye çalışırken.",
    "İlk maaşını alıp 3 günde bitirince.",
    "Spor salonuna yazılıp 1 kere gidince.",
    "Birinin hikayesini yanlışlıkla baştan sonra izleyince.",
    "Yağmurda şemsiyesiz kalınca ve koşarak bir yere sığınmaya çalışırken.",
    "Online alışverişte beden tutmayınca.",
    "Toplantıda hocanın/patronun adını yanlış söyleyince.",
    "Arkadaşın senin hakkında konuşurken yakalanınca."
];

const moodImages = [
    'assets/  .jpg',
    'assets/015b90e18b88d2ff9df0bdca4deb22b8.jpg',
    'assets/01801c28e0d6019af7275c08a42bf9c7.jpg',
    'assets/01b18eba30005f02dfc3a869ff39fe9b.jpg',
    'assets/01f273600e0336217bc148cd3e045ef3.jpg',
    'assets/023bd064cac717e5f51fcc66303554ba.jpg',
    'assets/0265de0d63feb109363b2181f305e66e.jpg',
    'assets/032f8335f248c071795effe7704c95e2.jpg',
    'assets/04e7e9fad4679f97d69d558208bedd85.jpg',
    'assets/0508c014c1f4ef78aa9cd740909d91bb.jpg',
    'assets/0649283ecb4d528f3fba4145b793ef21.jpg',
    'assets/072fb78006e795fc9f8aeec69731530a.jpg',
    'assets/08c4217db0651ae84430012a07ff0e39.jpg',
    'assets/09624f923a648243222bcb1531b6f6ce.jpg',
    'assets/09855da40def6c359c234e3249362f55.jpg',
    'assets/0ae00d2c2e8bb5e43706ab9c8ef21c33.jpg',
    'assets/0e73050bdebc06727dac500fb70d2dd7.jpg',
    'assets/0ed71631c7ea5978ba41a61aace9044c.jpg',
    'assets/0edbbfe7b336414675610bb8150a4d32.jpg',
    'assets/0efeb3d1caf4ab228299e4b9bad2a21a.jpg',
    'assets/0f63a1fc2ffe8a3dd2348280601ce64e.jpg',
    'assets/0fde4b193b3f9ffa3b163508ad958262.jpg',
    'assets/1073aa9395a38c222818b89858d6ec1a.0000000.jpg',
    'assets/118c6648c7b1811c57fce344a8da3bac.jpg',
    'assets/1233c5c22d192c097831141cf02c5083.jpg',
    'assets/127182056961d74c9deb503950594bd6.jpg',
    'assets/1332b8a1a58347e2de6ee21b41183248.jpg',
    'assets/142ae5bbca73b163589b07c49a71b934.jpg',
    'assets/14df4758f5ffa70d9236288332a2aac7.jpg',
    'assets/1535c46ecec9c018018101d67068cd06.jpg',
    'assets/161cc9c1a45991f8372e316bf3131eeb.jpg',
    'assets/167587376eeb5220da4fdd54589393d4.jpg',
    'assets/18109dbbe984a551084f4ad4ceccecad.jpg',
    'assets/183a2203542c99d2f41e6ed966b201e5.jpg',
    'assets/18c1b58a41b6449f24d0c3416a4fee14.jpg',
    'assets/1a1108657ad833137cc6d63d795f0314.jpg',
    'assets/1a524108ab4b439472b832ada3aa6a9f.jpg',
    'assets/1ac27bb243f746844d7662e3ba89a51f.jpg',
    'assets/1b2ef9d1d0c900f302af28579c41bd48.jpg',
    'assets/1b9d2d7e857f2ef8fd668088dc6fedb9.jpg',
    'assets/1c849065db414763cbafe04eac277a51.jpg',
    'assets/1c98385fed58f5051645df4eb1f868d6.jpg',
    'assets/2045142d3f5249199540c047a6c72ba6.jpg',
    'assets/20ab7d4d4e34edd3a4e479b29c951535.jpg',
    'assets/212894b605fbab84282f7cb858171d55.jpg',
    'assets/21c8af7442297ef64bf0250ea27c121c.jpg',
    'assets/21e59b8f160044f2868f3b10aeab3010.jpg',
    'assets/240a4da5a25a195534e1189471714d36.jpg',
    'assets/24649a297185786733b80241f41ab0b1.jpg',
    'assets/2589c7c327a58caa6ca188643e0e9826.jpg',
    'assets/26c093c1a11e034945b3289a4eb75b3f.jpg',
    'assets/27e54105c8ed36fc0b2741def87a5cdc.jpg',
    'assets/290d95515808e248f51e9974d99086c0.0000000.jpg',
    'assets/290e4f624e1b5b8ec4352c04d71c70e8.jpg',
    'assets/2983917fc67004d1d2401f76f488a411.jpg',
    'assets/29df1867e1a17eca3f0bb5757f3ea1cf.jpg',
    'assets/2bf083a29b4df4847364067ccca0e75d.jpg',
    'assets/2c0db2a79c40f295951ee280f88ae18c.jpg',
    'assets/2c484fdbfc2d8860987d970c62f9ea1d.jpg',
    'assets/2c6e52b86995c75a320fc0002005e04c.jpg',
    'assets/2d06456364402edd62c11c7d774294de.jpg',
    'assets/2e0ff2429bab283fe7d481e0580f331d.jpg',
    'assets/2e37d1511fa0e8c2c6c55d2e7d897a04.jpg',
    'assets/2e7f9217b50069b6007db64a3e777982.jpg',
    'assets/2e898dcb96f25aabc11fa63cbe3eb3a6.jpg',
    'assets/2f4aeffd0f7f22d75c9c173b1ec4b2f7.jpg',
    'assets/30454245a82305b7f165adcd0aa6b561.jpg',
    'assets/30753d99b4e9d8182cf4dca72de8d287.jpg',
    'assets/30b26b037c143b04c95a362cd293bfe2.jpg',
    'assets/31b950eb9c8c3e8ddfcac4e703fb09a3.jpg',
    'assets/34b8aa3708af5511029a0823761c5188.jpg',
    'assets/35c180419a9de158e03f6e0132afab07.jpg',
    'assets/36b2a51cf6b6e83143b8d409782a3c8d.jpg',
    'assets/36c255b2e852500feff82e52b1beb8e5.jpg',
    'assets/37dd4a4cd38a5b811014cf43d8be531b.jpg',
    'assets/38102c97c34239d6602f2d85b142967c.jpg',
    'assets/38e7ead12c22f669f790b1e129ec3987.jpg',
    'assets/398c288e5e768d5a441742d2225dc311.jpg',
    'assets/39bb354de5ecef6d6b9067014f7683c3.jpg',
    'assets/3a25eb6fbd12772c8d81c512c9e1cfa3.jpg',
    'assets/3a42548bc2856f94d830e8f0729af77d.jpg',
    'assets/3a58d47b7ca5a67eceb8d59e774404d3.jpg',
    'assets/3a65bf2cfb440368fa0eae2630b8aa02.jpg',
    'assets/3ba145223af86a65d86019c9af61cf6e.jpg',
    'assets/3bda1e1593fa3e16d012fcebda00978e.jpg',
    'assets/3c1ca1f4442664aa1fd562e8e2b5aa3a.jpg',
    'assets/3c499aefd0582a6004dbe6788fba5137.jpg',
    'assets/3d627994d1affa42f21941ee1bc78656.jpg',
    'assets/3ee8ae686f9582ac6f7ff0692e01c875.jpg',
    'assets/3fb0acc463b1917be6bddeeee01a2b2c.jpg',
    'assets/40036d2c0e23617ae36b5a00d4f96459.jpg',
    'assets/402acd7e328539f7c87cc686131d9c6f.jpg',
    'assets/402f9eb4f7ba00cc7515d969407c5b6c.jpg',
    'assets/4055c4e2312cbce15b7352a5e7cdcd01.jpg',
    'assets/4069ff7980590214dcd0542e0a4ace47.jpg',
    'assets/40cd22a4674a2679d1c8d5a4d416c969.jpg',
    'assets/415b6649d2f2146c95f4b99aa2653563.jpg',
    'assets/41ce1d5d649fdf30def6e3d35ef08721.jpg',
    'assets/4249476c73119d3e4ae820ab4910a411.jpg',
    'assets/42948fc63d294c2e0d9c587c28e3473e.jpg',
    'assets/4304d607a33c95b69690888842e4ccde.jpg',
    'assets/4375f3230ae0eb52671284ebcc2f73d3.jpg',
    'assets/4595141a8e4a1f327af17b971bd68c09.jpg',
    'assets/46883b530b4a0d2cfc2d4a92c7b9687f.jpg',
    'assets/48379896088a6982e95f86352e533b01.jpg',
    'assets/48c6eb97ed6c9bd19dab6a84c2c3899b.jpg',
    'assets/490ac9a279452fd858144cb8e6695983.jpg',
    'assets/49e69387345ff537352d88a3ec24c5cd.jpg',
    'assets/4e8cdb377828b6ff103623c1cff64c62.jpg',
    'assets/4eb960ab54a8de767025863a577fa3a4.jpg',
    'assets/4fe5c7f269f91d48567893f833aa66f6.jpg',
    'assets/504160f269aec28526dff3a282608ed0.jpg',
    'assets/50c0e78f09a494fb6d26179f9c5dd7e8.jpg',
    'assets/50d9f00fdbb28d4be8b4316085c83361.jpg',
    'assets/5126e89411536bf5ac4f5e1d1b4d45cd.jpg',
    'assets/516619b6a49a641b648dac668947ff89.jpg',
    'assets/51839e641750881c0404cb233c311326.jpg',
    'assets/52f4bfd85a00d2a4b658316a3854f11d.jpg',
    'assets/53bfcd0479067077f8230ac89c22bf95.jpg',
    'assets/5463417d505c61c87408d0732aa0d2b4.jpg',
    'assets/546cbf07111a3889cba87f369bc8531a.jpg',
    'assets/56134866bcc36ac08060d6efeef9a3ae.jpg',
    'assets/58261ad8408d601bf8e888371f98f31b.jpg',
    'assets/59214463057f969545d6a71024be3aa8.jpg',
    'assets/596d34e582d6daa46708d14de669a090.jpg',
    'assets/59ce76f4c9fe34484fa68c328749d7dc.jpg',
    'assets/59ceb93cc3d03309fa61aacbd3a591a4.jpg',
    'assets/59d1d0116f78377f0918a7653b03e069.jpg',
    'assets/5c31d2c308a4fa0bafe316ce6f888427.jpg',
    'assets/5cb35563a0d3e41d1abfe50b6645ef61.jpg',
    'assets/5d1baba997da391fc2aa368b0633b22f.jpg',
    'assets/5d2c264d063e59b9c41c0c4af129d9ac.jpg',
    'assets/5ef28335f323bb54f30df5169e2aa6d0.jpg',
    'assets/5fae5b393598b579cd452bbd93294418.jpg',
    'assets/602c1338264af8e48f97a693914f593b.jpg',
    'assets/60bf3f9f8c96716e00ffecb04916c2b9.jpg',
    'assets/6118289853bec5e430eb470c89553958.jpg',
    'assets/62367c4e0725abab25efb669b361df20.0000000.jpg',
    'assets/62a42a767b38cfe6dca1f619f40521f0.jpg',
    'assets/646cb7bee22f1c53955d15dcd78dac3b.jpg',
    'assets/657b2f691cd148e7a9af4963e46933fd.jpg',
    'assets/669def2b5e74e937848ce2e9cf741073.jpg',
    'assets/670acd828fad8a048b022ef0f1a0543b.jpg',
    'assets/674cca49d382fbcaf9b042aa18965e52.jpg',
    'assets/674fd425457fa56c56838e52f4068d16.jpg',
    'assets/68719620d16878ad267fceb9b71e867d.jpg',
    'assets/68bdb8c818e315d185f93e74e0e0b449.jpg',
    'assets/68f5a268400bce36b3eb36d8cbf2835b.jpg',
    'assets/6a04d8da9788ed54a6af0a84f3402aba.jpg',
    'assets/6ab37466f3e2cc69d3f7585badb02657.jpg',
    'assets/6ac102df051187de97265e2f28b0359c.jpg',
    'assets/6b7df82b1bc5494ee7894cf3641233da.jpg',
    'assets/6c708d1db101b5c59c43e2db9288ca6e.jpg',
    'assets/6cf56c3556bc6df2c5fa802edf5752c0.jpg',
    'assets/6d539686ba243efc5ce978555b33fe12.jpg',
    'assets/6e9943e9251121fc901ebc960e1e0c7d.jpg',
    'assets/6f2df140911f7f613104034a8b3ee0aa.jpg',
    'assets/7428fc7972be6c3ffb83ab399b992cca.jpg',
    'assets/74fe5e83e3514eb92af5a1e2cb32a050.jpg',
    'assets/75077d71294b0e00c21e576678dce110.jpg',
    'assets/750e5dba9bc13e330be7a506c942e29c.jpg',
    'assets/75199ae1594b65a82ce823c08cf90529.jpg',
    'assets/77cf59f226d6fc1b77dce74c67974e78.jpg',
    'assets/77d229a5316cb4337f56aa9b5ff30c26.jpg',
    'assets/7a5aa26f8b32445e396898631df13095.jpg',
    'assets/7aad1f2b66ffc82f1894c803c5341010.jpg',
    'assets/7cbdccbfda0b7e6380b65bb29e25df95.jpg',
    'assets/7dacda9dbae096cd2c1f969799129a12.jpg',
    'assets/7db7e02738c9dd5bd540d39aa4e85575.jpg',
    'assets/7dbf53e22ce8195d41434171fa952133.jpg',
    'assets/7e60d431cd1ac7e70887a97057da4c96.jpg',
    'assets/7ebe72add1149d769b20205fc20895ba.jpg',
    'assets/7fa44eff12781cc0ecb254c6e2a1572c.jpg',
    'assets/800bddea941c249553f1a5d868b7a608.jpg',
    'assets/801109c2333283f31f0e04391d3bac6f.jpg',
    'assets/8037562b2712b3e597572f96a72eab2a.jpg',
    'assets/80b95c61892fd4d5ee2548e472541d67.jpg',
    'assets/80e24cb42ea92c5e276573c6f8e35af8.jpg',
    'assets/80f7bf71f8f5c945a5aed8fcf01bc8b1.jpg',
    'assets/813233e7c7e11e5b3acdf4142b5dcc4a.jpg',
    'assets/816373837dbcb8f14819449ec213c818.jpg',
    'assets/8344b61c3acc00afb9610d89ebbfe3ec.jpg',
    'assets/83cbeaafe6f69c498dfe84cff3e9d4a7.jpg',
    'assets/848dd458f81ec5c28978210a7cbadbfb.jpg',
    'assets/84d38c4c48851fa57cffb979e11df29e.jpg',
    'assets/857e20777bea7d97fad73b8e5b37f5e0.jpg',
    'assets/85cd634fe1885313a679e75a5aab0f0a.jpg',
    'assets/863bc214155fad12c2d9684ccffed575.jpg',
    'assets/86baf826eaf65b0e0fe2cbf56b7c95b4.jpg',
    'assets/8903f4c4d48ad8433ed8858c6404e9a3.jpg',
    'assets/89cc417ebc5c5672026a1049545a4fb8.jpg',
    'assets/8a608b0163cf40d94dcecbb30d5479bb.jpg',
    'assets/8bbe12d81f2196d679c1714839954416.jpg',
    'assets/8be8141f2994679a9d9045302a8ea75c.jpg',
    'assets/8bf6828f390d57233c47579b5debe535.jpg',
    'assets/8c07b226b34a2c2dfa882b1601ca1b3c.jpg',
    'assets/8c0bab161fd0478f6e6e3c73955b67a5.jpg',
    'assets/8c2fc85aff41abc1e0acc2e94d62cd73.jpg',
    'assets/8c9772461da99327560f375dbdcf3bd0.0000000.jpg',
    'assets/8c98a58c998797214922bb1a3821c181.0000000.jpg',
    'assets/8cdc1a0acfeca9295332eb13a367e1e8.jpg',
    'assets/8dca582604c92f2eda16f57ca565a4f3.jpg',
    'assets/90b678ee10c31b243c3402c8015360d9.jpg',
    'assets/90b78f6ca41514aad1496e4621ca409c.jpg',
    'assets/90bdf6344c29f80f0c3a001a549b02ed.jpg',
    'assets/9113e8f899f72db50236d69aa805e3ce.jpg',
    'assets/921109371cc51cf1501426499a0df917.jpg',
    'assets/937b0a582530e7adba105f37885bbb9e.jpg',
    'assets/93bd69cbf32e25456838ff62f07658e6.jpg',
    'assets/944bc064550bf602b31dc35e2c951326.jpg',
    'assets/94734e46ef15d46ab054a611e9ec517b.jpg',
    'assets/94a8e8b85216d0908d768cd357f8e6e9.jpg',
    'assets/951acf744949793025f4c08278616700.jpg',
    'assets/952eaf6d1fbd5669b2b419e22f826ad4.jpg',
    'assets/954c76c0168b0f41ad721a8eeedb021d.jpg',
    'assets/95e5301c951e8b251eb2311a71b725b6.jpg',
    'assets/9769408f1d4b59299b9e0102eddb84cb.jpg',
    'assets/97806e3c51ebd57ff87932b775a2e3f3.jpg',
    'assets/98e6ebbe9fee16075b9a461db0057a3b.jpg',
    'assets/99d7dcff587bf4c8ead684b3fc814c1d.jpg',
    'assets/9a71bed4c20dad608d1d3cd27e58970b.jpg',
    'assets/9b1a1d6c21ecdfce46ec29742b65b2b9.jpg',
    'assets/9b588c6ea4ed79829266a7dbbe067b33.jpg',
    'assets/9b763ed07d2e5633232b10fb8c098590.jpg',
    'assets/9bcfbedc8057ff46181a48d3e4bff1bf.jpg',
    'assets/9ce5be7498cefa30ee90ac34d0abc9c8.jpg',
    'assets/9e0c03f4f4c5df206b0c382be34dd10a.jpg',
    'assets/9f02d255b1cf1c35fb93d52a111424da.jpg',
    'assets/9f6ade9c43c102cc6722410eed8e6260.jpg',
    'assets/9fa47f80665e8c884539caf84a300388.jpg',
    'assets/a026f687eaa9a2f6222128f886242525.jpg',
    'assets/a0cbf5f25702aa97da094e3bbfcb8687.jpg',
    'assets/a0e2e2c382138f53532a882abf74bd24.jpg',
    'assets/a12df87f07b1cf1a3bc6c52cf3251cd1.jpg',
    'assets/a1a6e0a7dd3c22510e600a2b03ad358c.0000000.jpg',
    'assets/a24d3c7ade3ce2fcc496d35902704a34.jpg',
    'assets/a288e0456e02d265a674158f740e42f2.jpg',
    'assets/a2ff1cd4364195e7837e1b26c864e389.jpg',
    'assets/a3456f5bac7b77f23e47dacf6dcf2487.jpg',
    'assets/a3f9f46171c9a077a9743c98001deab7.jpg',
    'assets/a4f7e172cadd82a835b50dc22d41332f.jpg',
    'assets/a61343637fcf47570ea7cbd8490a2ea0.jpg',
    'assets/a673f07bba0d5693490405fc61f58f0d.jpg',
    'assets/a70784f6960903c2b8e9f06f845dc9dd.jpg',
    'assets/a74b2d1a44e143bf75f3ebb7ab54660a.jpg',
    'assets/a864cd0b66d8082da1db33e057696949.jpg',
    'assets/a8675ce82acf5eddde5145b5c1b7f305.jpg',
    'assets/a95aac0ec0c663946f397021de288f3b.jpg',
    'assets/a9fd3b61466be5de0c3df2574c2c5e56.jpg',
    'assets/aa83ed7bc7d9e428ea565b4dfb1d1b20.jpg',
    'assets/aa90fb8d1dc0a19f9d9d027dde7aab2f.jpg',
    'assets/aaa3ca0eab776723fec9896ca3f03a2e.jpg',
    'assets/aaf04922231cc2054c2658eed5d9c968.jpg',
    'assets/ab4b5ff62bcb82edcb5643024ed1e6d5.jpg',
    'assets/ab75f27997999105874b795ec3a71c15.jpg',
    'assets/ab86504aabfc7c9b7b61764ea6715776.jpg',
    'assets/ad0a25e18f61c7c1959df7723553b87b.jpg',
    'assets/ad6e8422cab29ffc7a7bf432fd583c93.jpg',
    'assets/ad94a589b2f8ddea059d47c68f8460e5.jpg',
    'assets/ae062025462b7449b997a85c586cec61.jpg',
    'assets/aedb6867a1fb8091c350fbafe62bc3d2.jpg',
    'assets/aee81d9796d492fb37d4cca4255dfbea.jpg',
    'assets/af0f4b6c642a3229481d1e326d4d7104.jpg',
    'assets/b0bca070fcae57998069d08b3e30abac.jpg',
    'assets/b1e3eac8fea747075cbf5754e86e85ed.jpg',
    'assets/b1f3ab7f7cd71818f0b894949b96e4af.jpg',
    'assets/b2285867df09b51b7956c4e5bfe522d5.jpg',
    'assets/b3eafe7ebaf0a36fc468bded292fc58c.jpg',
    'assets/b417c2fd093ec5956b5eab6ae2be5a7a.jpg',
    'assets/b49eba378e33146053a3cff7bdfa36b9.jpg',
    'assets/b588acebd1fc23959fdecbea84b04fb3.jpg',
    'assets/b6808115beb239a67b6458b74a5b40d2.jpg',
    'assets/b6b25b2f5ca4d51ea6f06b2ff680e034.jpg',
    'assets/b7c5a02b057b2dad8895f6d5554cba49.jpg',
    'assets/b8561bb696e1f922230fbaadbeb31fb2.jpg',
    'assets/b88b115b50bee4a6fabeb16a5260e5b0.jpg',
    'assets/b895ee71094b9a04aabb1e93dd1e0ce7.jpg',
    'assets/b8dc95ed8433e8b32223cd946def098b.jpg',
    'assets/b9544ac52570d2e88a704b51f35f0836.jpg',
    'assets/b95d39b38d72e149a7b86394693e3bd1.jpg',
    'assets/b964427c4a14e7a6c115196928f52a6f.jpg',
    'assets/b9995f06c120f1c8cc04e2bd0ef89bd5.jpg',
    'assets/b9b27d9228fde98d933704f43fc3478a.jpg',
    'assets/b9ffe17fe1d2129504c29449fae9e94f.jpg',
    'assets/ba361ce9dc4cf4df51973c6ec8a909f2.jpg',
    'assets/bb4a28f9bdf965731e4e0f433d8c659a.jpg',
    'assets/bcbf73076c39627be54aba84fba892b2.jpg',
    'assets/bce014c5e080518dc60aae5ad78aeb72.jpg',
    'assets/bd115b6eb1a1f8bb2fb396649a6a5378.jpg',
    'assets/be54b2169c08d32d46b25ef258499a5d.jpg',
    'assets/beabf6506552224cfb28fb6c585beb57.jpg',
    'assets/bf7f711a8bc446ef8df921fe15042925.jpg',
    'assets/bff23c155cfeac2048f2a3140f712687.jpg',
    'assets/c14ea97d591385bd2c760625232ecfe3.jpg',
    'assets/c15fc1ac8726131664b9861ede85792b.jpg',
    'assets/c21e8b69cfd99adc348fc1d8b3429c88.jpg',
    'assets/c222ba5bc7ed21edef8e1edda65d524c.jpg',
    'assets/c281a40ae58634baecdefd23a1742260.jpg',
    'assets/c3eeceabe294c7432ef0dd2a8e4b9a1c.jpg',
    'assets/c46d089d24a8d77c299399e21bc0fac6.jpg',
    'assets/c4bd7b615c9f5d2e96ca4fa9b5b4fecd.jpg',
    'assets/c51279645f2a71ec7a42f08d09091afd.jpg',
    'assets/c5ca4debc94880128da144d940f7700a.jpg',
    'assets/c6156d4c2794c87478bae6d70e800c15.jpg',
    'assets/c705252d2209d5eb7909824a573f8e83.jpg',
    'assets/c768b156920cc8cd71007f280ece5b4c.jpg',
    'assets/c989b73825fc93a296c2f2efeea9c350.jpg',
    'assets/c99c02ca4fed7b2300267d8b6c31abae.jpg',
    'assets/c9f04be4683b4f6552e3ab8aee8650bb.jpg',
    'assets/ca15fd154995cfa24ba3f7de8372819b.jpg',
    'assets/ca86befc6b46b4078db01fd51c198b58.jpg',
    'assets/caf07cf7774c3fb3f5ff3672fe6e275a.jpg',
    'assets/cb23cbc9c48478354e9ef240f9996b58.jpg',
    'assets/cb28e45ae53917c4bd95caed4af10361.jpg',
    'assets/cb3245aa83a6a3d0d61779d41d9da8ab.jpg',
    'assets/cbb8cffa5aec570d86067b37e434cedf.jpg',
    'assets/ccda396d3d75f93f0cc7928073654f5b.jpg',
    'assets/ccf21345f04fca896f3fb77a2843e79a.jpg',
    'assets/cd542ad79208d33aa7f503c82fda3bea.jpg',
    'assets/ce033b2b429fbff8f85d5fbf3e0aa44b.jpg',
    'assets/ce49732c6661ab34ed48445f1ae79f7d.jpg',
    'assets/ceeb57014060d09ed0dbe6b42784148e.jpg',
    'assets/cf2031a79d683f7e9823b220a5a161c1.jpg',
    'assets/cf972838e7140655945d5537b1fcdef1.jpg',
    'assets/d0e7bde247b61a9d6f495aefff75762f.jpg',
    'assets/d0e996caebb06b5515be883d0306ce15.jpg',
    'assets/d18b062423918a9920d1c7f5b80f6767.jpg',
    'assets/d1bdaea8d8ae416a64e0eb2b84d38eea.jpg',
    'assets/d37759daf2072f957ee7bbf6065e336e.jpg',
    'assets/d3c6fdb4618e3359686f8495c7d411cf.jpg',
    'assets/d404eb77aa5aeaa4febd8ca6afe45478.jpg',
    'assets/d4937e4a80f8707174ba74dee01cbe52.jpg',
    'assets/d4c5adda31cc6d16ca516e0244415eb9.jpg',
    'assets/d600d11c44a35f21181e2dfa81a34359.jpg',
    'assets/d66367e0af463827d271cba14c2afedb.jpg',
    'assets/d6f09f2ae3e0a1c677d2aa889a8452ec.jpg',
    'assets/d958b91db7daec8772d99c8dc667bb5f.jpg',
    'assets/d994e7a06f83063c42882fefca4e0156.jpg',
    'assets/d999ab61a9a3ad875fc7fb226396d668.jpg',
    'assets/d9e05155569a0d262ebe2d10f73fac53.jpg',
    'assets/d9f9c1d2c55b8f1c5f7a9820e6868371.jpg',
    'assets/da751845d740c323b27a9a90daa1f050.jpg',
    'assets/db23ef13e8bc6db448aa507034bfaaa5.jpg',
    'assets/dce9d13d76051f8be75a09b68effc052.jpg',
    'assets/ddb847fcad1013621b05037024993b55.jpg',
    'assets/df2a85e0f350610bc9b2c10c2c7da2a8.jpg',
    'assets/e0252f001cef21b493b6f5655334ea4f.jpg',
    'assets/e0367ac1dd039b49ba9ecd45e51fc79c.jpg',
    'assets/e0caed9db1cc9a2d75e8bb5a911afa5b.jpg',
    'assets/e0eea32c9d556b3cb4b1270849e3e87d.jpg',
    'assets/e111aa978d0ba1dc60c40a30ab868df4.jpg',
    'assets/e11ece03cc7b41cc2545f6a221a977a7.jpg',
    'assets/e28b17b2a899e9f16f5bd37eccca2469.jpg',
    'assets/e2f63b0eb373d2f8d4a83af9ea99f818.jpg',
    'assets/e31f4a8044a045d55caa370746114969.jpg',
    'assets/e4cf96753969e0f52dc335409bf217bd.jpg',
    'assets/e4d283beb31db1047df7e3fc80147187.jpg',
    'assets/e4ee12f5ced155e5f7b3ca6d3cbf6398.jpg',
    'assets/e5e7e6b2548fe2d1780594cdb293a799.jpg',
    'assets/e77e60cb445e7cf5edd40a57bb086092.jpg',
    'assets/e959aa48ab435ad212a42c19749691f3.jpg',
    'assets/eb3cca6829a6addcf0f42c97034b8803.jpg',
    'assets/eb4135d152f4b35fbf6762ffcc4f45c7.jpg',
    'assets/ebda9ee53422cdec7d13b6275fe82e0c.jpg',
    'assets/ebe517e91528c383982efc88468a5130.jpg',
    'assets/ebec0828d93aeb9a387546781617d008.jpg',
    'assets/ec90e7585725d5d4f497be2eddfe51ea.jpg',
    'assets/ed8f09feee6340099a9fa03fd7f2d4f2.jpg',
    'assets/edfe13f2830aee18a3533448164871a1.jpg',
    'assets/efdcf3888de174b31c13a76ef10f582e.jpg',
    'assets/f04becaf3ddb3d4c5cbc7e94c4831288.jpg',
    'assets/f0b157ca5485b5bff9ccb756679b0f38.jpg',
    'assets/f1b5b1395c8c9bb4f82370d0275f6a38.jpg',
    'assets/f2228e2b1d4753542dd3978d289002f6.jpg',
    'assets/f22d32730bd1591a75ac9d846275e9e2.jpg',
    'assets/f27bdb69fb6c7483f57ce5dbc49de7ca.jpg',
    'assets/f443a4abc7487d43078c60f318b74060.jpg',
    'assets/f44679b7337fe58fcd5726e29b7c9abf.jpg',
    'assets/f5227704efdb9eaec40b042ada17a8fd.jpg',
    'assets/f5b77c7ce1608c2cfc9ca2b272f16102.jpg',
    'assets/f6bffbf3ae2c2f34cb78ae5f4f1bd962.0000000.jpg',
    'assets/f710e000c976c9d2c6fd8b8c12d9449e.jpg',
    'assets/f8c3bca04a9e6ebdcb0ab10ba8631a44.jpg',
    'assets/f9674b0a0064b5c79f78f3271bbd369d.jpg',
    'assets/f9ad965d10dbf284db6163ec67e2afec.jpg',
    'assets/f9de2a90ed0736c3d852ed497e625985.jpg',
    'assets/faff83ba039a8299fcfb3ec074c0b9d6.jpg',
    'assets/fb148b9d943422b6e07f09f15e88417f.0000000.jpg',
    'assets/fb81c12bd3c854312ebbc750d4d77744.jpg',
    'assets/ffae5881c2a19db58430c8c2424ff4b0.jpg',
    'assets/imageye___-_034031febced35fbd11b3c0259d9f79c.jpg',
    'assets/imageye___-_0f63a1fc2ffe8a3dd2348280601ce64e.jpg',
    'assets/imageye___-_19b0c52be8d058c4358ba94edfaf0ffb.jpg',
    'assets/imageye___-_1fc58227cea12af382760b8225234136.jpg',
    'assets/imageye___-_2b8a8594897355026c5a151111d89079.jpg',
    'assets/imageye___-_31b950eb9c8c3e8ddfcac4e703fb09a3.jpg',
    'assets/imageye___-_38f1464e5308a2267fb25012a32cd80e.jpg',
    'assets/imageye___-_48379896088a6982e95f86352e533b01.jpg',
    'assets/imageye___-_5123e985f0bdd5240e2268e59d0adab3.jpg',
    'assets/imageye___-_5b55c327eac4b84897396eeebd89fdb6.jpg',
    'assets/imageye___-_611a2b99ee04bbf9db136e54f0fdb5e8.jpg',
    'assets/imageye___-_669def2b5e74e937848ce2e9cf741073.jpg',
    'assets/imageye___-_78fae96eeaed5c6a8fd983f4eb5ea2f1.jpg',
    'assets/imageye___-_7c3f99231ae54649ad8282f4d81afe7f.jpg',
    'assets/imageye___-_85cd634fe1885313a679e75a5aab0f0a.jpg',
    'assets/imageye___-_860a2266d0abec638528c5faada69be7.jpg',
    'assets/imageye___-_8c0bab161fd0478f6e6e3c73955b67a5.jpg',
    'assets/imageye___-_96a8989bb65feb330b5ee84f6c32323a.jpg',
    'assets/imageye___-_a1845fb4bc44448d9fa92cf042b2787b.jpg',
    'assets/imageye___-_a55619fb7fd6e84fc924181bc595fd17.jpg',
    'assets/imageye___-_a83d208e5a01a9faed58b7e0e4623343.jpg',
    'assets/imageye___-_ad6e8422cab29ffc7a7bf432fd583c93.jpg',
    'assets/imageye___-_b9ffe17fe1d2129504c29449fae9e94f.jpg',
    'assets/imageye___-_c5d51c365cc8d73055a6426c22d6f099.jpg',
    'assets/imageye___-_c95b925cb9225f1f6a0414ed53ccde2e.jpg',
    'assets/imageye___-_dd49e3f6205b236aa002c8dfceeca7eb.jpg',
    'assets/imageye___-_e7ed8ce46411c8789f21ca8969533fc3.jpg',
    'assets/imageye___-_f56afa04031163408549aab736f19309.jpg',
];

// Sound Manager using Web Audio API
class SoundManager {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.enabled = true;
    }

    play(type) {
        if (!this.enabled) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        switch (type) {
            case 'click':
                this.osc(1200, 'sine', 0.1);
                break;
            case 'draw':
                this.noise(0.1); // Paper rustle
                break;
            case 'play':
                this.osc(600, 'triangle', 0.1);
                setTimeout(() => this.osc(400, 'triangle', 0.1), 50);
                break;
            case 'flip':
                this.noise(0.2);
                break;
            case 'win':
                this.arpeggio([523.25, 659.25, 783.99, 1046.50]); // C Major
                break;
            case 'lose':
                this.osc(150, 'sawtooth', 0.4);
                this.osc(100, 'sawtooth', 0.4);
                break;
            case 'power':
                this.osc(100, 'square', 0.5);
                setTimeout(() => this.osc(200, 'square', 0.5), 100);
                setTimeout(() => this.osc(400, 'square', 0.5), 200);
                break;
        }
    }

    osc(freq, type, duration) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    noise(duration) {
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        noise.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();
    }

    arpeggio(notes) {
        notes.forEach((freq, i) => {
            setTimeout(() => this.osc(freq, 'sine', 0.3), i * 100);
        });
    }
}

class Game {
    constructor() {
        this.sound = new SoundManager();
        // State
        this.gameMode = 'single'; // 'single' | 'local'
        this.players = {
            p1: { score: 0, hand: [], name: 'Oyuncu 1', avatar: null, streak: 0, buffs: {}, debuffs: {} },
            p2: { score: 0, hand: [], name: 'Oyuncu 2', avatar: null, streak: 0, buffs: {}, debuffs: {} },
            ai: { score: 0, name: 'AI Bot', streak: 0, buffs: {}, debuffs: {} } 
        };
        this.currentPlayer = 'p1'; 
        this.round = 1;
        this.playedCards = [];
        this.isPowerRound = false; // Power round flag
        this.usedSituations = new Set(); // Track used situations to prevent repeats
        this.cardPlayed = false; // Lock to prevent playing multiple cards per turn
        
        // Deck System
        this.deck = [];
        this.discardPile = [];
        this.initializeDeck();

        this.initElements();
        this.attachListeners();
    }

    initializeDeck() {
        // Clone and shuffle
        this.deck = [...moodImages];
        this.shuffleDeck(this.deck);
    }

    shuffleDeck(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    drawCard() {
        this.sound.play('draw');
        if (this.deck.length === 0) {
            if (this.discardPile.length === 0) {
                // Should not happen unless extremely low asset count
                return moodImages[Math.floor(Math.random() * moodImages.length)];
            }
            // Reshuffle discard into deck
            this.deck = [...this.discardPile];
            this.discardPile = [];
            this.shuffleDeck(this.deck);
        }
        return this.deck.pop();
    }

    showToast(message, type = 'default') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);
        
        // Remove after animation
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    showImagePreview(imgSrc) {
        let preview = document.getElementById('image-preview');
        if (!preview) {
            preview = document.createElement('div');
            preview.id = 'image-preview';
            preview.innerHTML = '<img src="" alt="Preview">';
            document.body.appendChild(preview);
        }
        preview.querySelector('img').src = imgSrc;
        preview.classList.add('visible');
    }

    hideImagePreview() {
        const preview = document.getElementById('image-preview');
        if (preview) {
            preview.classList.remove('visible');
        }
    }


    initElements() {
        this.screens = {
            menu: document.getElementById('main-menu'),
            setup: document.getElementById('setup-screen'),
            dealing: document.getElementById('dealing-screen'),
            game: document.getElementById('game-board'),
            interstitial: document.getElementById('turn-interstitial')
        };
        
        this.ui = {
            situation: document.getElementById('current-situation'),
            situationCard: document.getElementById('situation-card'),
            situationText: document.getElementById('situation-text'),
            playedArea: document.getElementById('played-cards-area'),
            hand: document.getElementById('player-hand'),
            status: document.getElementById('status-message'),
            userScore: document.getElementById('user-score'),
            aiScore: document.getElementById('ai-score'),
            roundCount: document.getElementById('round-count'),
            nextPlayerName: document.getElementById('next-player-name'),
            // Inputs
            p1Name: document.getElementById('p1-name'),
            p1Avatar: document.getElementById('p1-avatar'),
            p2Name: document.getElementById('p2-name'),
            p2Avatar: document.getElementById('p2-avatar'),
            // Dealing
            dealingTitle: document.getElementById('dealing-title'),
            dealingSubtitle: document.getElementById('dealing-subtitle'),
            deckArea: document.getElementById('main-deck'),
            drawCount: document.getElementById('draw-count')
        };
    }

    attachListeners() {
        // Global Click Sound
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('.card')) {
                this.sound.play('click');
            }
        });

        document.getElementById('btn-start').addEventListener('click', () => this.openSetup('single'));
        document.getElementById('btn-local').addEventListener('click', () => this.openSetup('local'));
        
        document.getElementById('btn-confirm-start').addEventListener('click', () => this.confirmSetup());
        document.getElementById('btn-back-menu').addEventListener('click', () => {
             this.screens.setup.classList.add('hidden');
             this.screens.setup.classList.remove('active'); // Fix: Remove active class
             this.screens.menu.classList.remove('hidden');
             this.screens.menu.classList.add('active');
        });

        // Deck click listener for drafting
        this.ui.deckArea.addEventListener('click', () => this.handleDraftClick());

        document.getElementById('btn-ready').addEventListener('click', () => this.startTurn());
        
        document.getElementById('btn-rules').addEventListener('click', () => {
            document.getElementById('rules-modal').classList.remove('hidden');
        });
        document.getElementById('btn-close-rules').addEventListener('click', () => {
            document.getElementById('rules-modal').classList.add('hidden');
        });

        // Home Button Logic
        document.getElementById('btn-home').addEventListener('click', () => {
            document.getElementById('home-confirm-modal').classList.remove('hidden');
        });
        
        document.getElementById('btn-cancel-home').addEventListener('click', () => {
            document.getElementById('home-confirm-modal').classList.add('hidden');
        });
        
        document.getElementById('btn-confirm-home').addEventListener('click', () => this.returnToMenu());
    }

    returnToMenu() {
        document.getElementById('home-confirm-modal').classList.add('hidden');
        
        // Reset Screens
        this.screens.game.classList.remove('active');
        this.screens.game.classList.add('hidden');
        this.screens.dealing.classList.remove('active');
        this.screens.dealing.classList.add('hidden');
        
        this.screens.menu.classList.remove('hidden');
        this.screens.menu.classList.add('active');
        
        // Reset Game State completely
        this.round = 1;
        this.players.p1.score = 0;
        this.players.p1.streak = 0;
        this.players.p1.hand = [];
        this.players.p1.buffs = {};
        this.players.p1.debuffs = {};
        
        this.players.p2.score = 0;
        this.players.p2.streak = 0;
        this.players.p2.hand = [];
        this.players.p2.buffs = {};
        this.players.p2.debuffs = {};
        
        this.players.ai.score = 0;
        this.players.ai.streak = 0;
        this.players.ai.hand = [];
        this.players.ai.buffs = {};
        this.players.ai.debuffs = {};
        
        this.discardPile = [];
        this.playedCards = [];
        this.ui.playedArea.innerHTML = '';
        
        this.showToast("Oyun sonlandırıldı. Ana menüye dönüldü.", 'info');
    }

    openSetup(mode) {
        this.gameMode = mode;
        this.screens.menu.classList.remove('active');
        this.screens.menu.classList.add('hidden');
        this.screens.setup.classList.remove('hidden');
        this.screens.setup.classList.add('active');
        
        const p2Card = document.getElementById('p2-setup-card');
        
        if(mode === 'single') {
            this.ui.p2Name.value = "Rakipler (AI)";
            this.ui.p2Name.disabled = true;
            if (p2Card) p2Card.style.display = 'none';
        } else {
            this.ui.p2Name.value = "Oyuncu 2";
            this.ui.p2Name.disabled = false;
            if (p2Card) p2Card.style.display = 'block';
        }
    }

    startDraftPhase(playerKey) {
        this.currentDraftPlayer = playerKey;
        this.draftCount = 0;
        
        // Check for slowStart debuff
        let maxCards = 5;
        if (this.players[playerKey].debuffs && this.players[playerKey].debuffs.slowStart) {
            maxCards = 3;
            this.players[playerKey].debuffs.slowStart = false; // Use it up
            this.showToast(`🐢 ${this.players[playerKey].name} yavaş başlangıç! Sadece 3 kart.`, 'warning');
        }
        this.currentMaxCards = maxCards;
        
        const playerName = this.players[playerKey].name;
        this.ui.dealingTitle.textContent = `${playerName} - Kart Seçimi`;
        this.ui.dealingSubtitle.textContent = `Desteden ${maxCards} kart çekmek için sırayla tıkla!`;
        this.ui.drawCount.textContent = `0 / ${maxCards}`;
        
        // Clear previous drawn cards
        const drawnRow = document.getElementById('drawn-cards-row');
        if (drawnRow) drawnRow.innerHTML = '';

        // Hide other screens, show dealing
        this.screens.setup.classList.add('hidden');
        this.screens.setup.classList.remove('active');
        this.screens.game.classList.add('hidden');
        this.screens.game.classList.remove('active');
        this.screens.interstitial.classList.add('hidden');
        this.screens.interstitial.classList.remove('active');
        this.screens.dealing.classList.remove('hidden');
        this.screens.dealing.classList.add('active');
    }

    handleDraftClick() {
        const maxCards = this.currentMaxCards || 5;
        if (this.draftCount >= maxCards) return;

        // Draw card logic
        const newCard = this.drawCard();
        this.players[this.currentDraftPlayer].hand.push(newCard);
        this.draftCount++;
        this.ui.drawCount.textContent = `${this.draftCount} / ${maxCards}`;

        // Visual feedback on deck
        this.ui.deckArea.style.transform = "scale(0.95)";
        setTimeout(() => this.ui.deckArea.style.transform = "scale(1)", 100);

        // Create flip card element
        const flipCard = document.createElement('div');
        flipCard.className = 'flip-card';
        flipCard.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">?</div>
                <div class="flip-card-back">
                    <img src="${newCard}" alt="Mood Card">
                </div>
            </div>
        `;
        
        const drawnRow = document.getElementById('drawn-cards-row');
        drawnRow.appendChild(flipCard);
        
        // Trigger flip animation after a short delay
        setTimeout(() => {
            flipCard.classList.add('flipped');
        }, 100);

        if (this.draftCount === maxCards) {
            setTimeout(() => {
                if (this.currentDraftPlayer === 'p1') {
                    if (this.gameMode === 'local') {
                        this.showToast(`${this.players.p1.name} hazır! Sıra ${this.players.p2.name}'te.`, 'info');
                        // Clear drawn cards for next player
                        drawnRow.innerHTML = '';
                        this.startDraftPhase('p2');
                    } else {
                        this.refillHand('ai');
                        this.showToast("Kartlar seçildi! Oyun başlıyor.", 'success');
                        drawnRow.innerHTML = '';
                        this.startGameboard();
                    }
                } else if (this.currentDraftPlayer === 'p2') {
                    this.showToast("Kartlar seçildi! Oyun başlıyor.", 'success');
                    drawnRow.innerHTML = '';
                    this.startGameboard();
                }
            }, 1000);
        }
    }

    confirmSetup() {
        // Read P1
        this.players.p1.name = this.ui.p1Name.value || 'Oyuncu 1';

        // Read P2
        if(this.gameMode === 'local') {
            this.players.p2.name = this.ui.p2Name.value || 'Oyuncu 2';
        } else {
             this.players.ai.name = "Rakipler";
        }

        this.screens.setup.classList.remove('active');
        this.screens.setup.classList.add('hidden');
        
        // Start Drafting instead of immediate game
        this.resetGameDataOnly();
        this.startDraftPhase('p1');
    }

    resetGameDataOnly() {
        this.players.p1.score = 0;
        this.players.p1.hand = [];
        this.players.p2.score = 0;
        this.players.p2.hand = [];
        this.players.ai.score = 0;
        this.players.ai.hand = []; // Ensure AI hand is init
        this.round = 1;
        this.discardPile = [];
        this.usedSituations = new Set(); // Reset situation tracking
        this.initializeDeck();
    }

    startGameboard() {
        this.screens.dealing.classList.remove('active');
        this.screens.dealing.classList.add('hidden');
        this.screens.game.classList.remove('hidden');
        this.screens.game.classList.add('active');
        
        // Re-bind score elements (they exist in HTML now)
        this.ui.userScore = document.getElementById('user-score');
        this.ui.aiScore = document.getElementById('ai-score');

        this.updateScoreboard();
        this.startRound();
    }

    getUniqueSituation() {
        // Reset if all situations have been used
        if (this.usedSituations.size >= situations.length) {
            this.usedSituations.clear();
        }
        // Filter available situations
        const available = situations
            .map((s, i) => ({ text: s, index: i }))
            .filter(item => !this.usedSituations.has(item.index));
        // Pick random from available
        const pick = available[Math.floor(Math.random() * available.length)];
        this.usedSituations.add(pick.index);
        return pick.text;
    }

    startRound() {
        this.cardPlayed = false; // Reset card lock for new round
        this.playedCards = [];
        this.ui.playedArea.innerHTML = '';
        this.ui.status.textContent = "Durum kartı açılıyor...";
        this.updateScoreboard();

        // Check for power round
        if (this.isPowerRound) {
            this.showToast("⚡ GÜÇ TURU! Kazanan buff seçecek!", 'warning');
        }

        // 1. Reset situation card (unflip)
        this.ui.situationCard.classList.remove('flipped');
        
        // 2. Pick Situation
        const randomSituation = this.getUniqueSituation();
        this.ui.situationText.textContent = randomSituation;

        // 3. Flip animation after short delay
        setTimeout(() => {
            this.ui.situationCard.classList.add('flipped');
            
            // 4. After flip, start player turn
            setTimeout(() => {
                if (this.gameMode === 'local') {
                    this.prepareTurn('p1');
                } else {
                    this.currentPlayer = 'p1';
                    this.renderHand('p1');
                    this.ui.status.textContent = "Kartını Seç!";
                }
            }, 1000);
        }, 500);
    }

    prepareTurn(playerKey) {
        this.currentPlayer = playerKey;
        
        // Show interstitial
        this.screens.game.classList.add('hidden');
        this.screens.interstitial.classList.remove('hidden');
        this.screens.interstitial.classList.add('active');
        
        const playerName = this.players[playerKey].name;
        this.ui.nextPlayerName.textContent = `Sıradaki: ${playerName}`;
    }

    startTurn() {
        // Hide interstitial, show game
        this.screens.interstitial.classList.remove('active');
        this.screens.interstitial.classList.add('hidden');
        this.screens.game.classList.remove('hidden'); // Ensure visible
        this.cardPlayed = false; // Reset card lock for this player's turn
        
        this.renderHand(this.currentPlayer);
        const name = this.players[this.currentPlayer].name;
        this.ui.status.textContent = `${name} - Kartını Seç`;
        
        this.renderPlayedAreaLocally();
    }

    renderPlayedAreaLocally() {
        // Just show face-down markers for already played cards in this round
        this.ui.playedArea.innerHTML = '';
        this.playedCards.forEach(pc => {
            const slot = document.createElement('div');
            slot.className = 'card played-card-slot';
            slot.style.background = '#333';
            slot.textContent = 'Hazır';
            slot.style.color = 'white';
            this.ui.playedArea.appendChild(slot);
        });
    }

    refillHand(playerKey) {
        if (!this.players[playerKey]) return; // Safety
        // Logic: Add logic for AI
        while(this.players[playerKey].hand.length < 5) {
            const newCard = this.drawCard();
            this.players[playerKey].hand.push(newCard);
        }
    }

    renderHand(playerKey) {
        this.ui.hand.innerHTML = '';
        
        // Check if player has blind debuff
        const isBlind = this.players[playerKey].debuffs && this.players[playerKey].debuffs.blind > 0;
        
        const cards = this.players[playerKey].hand;
        const cardCount = cards.length;
        
        // Fan configuration - true fan shape
        const maxAngle = 50; // Total spread angle
        const angleStep = cardCount > 1 ? maxAngle / (cardCount - 1) : 0;
        const startAngle = -(maxAngle / 2);
        
        // Arc height configuration - DRAMATIC arc
        const middleIndex = (cardCount - 1) / 2;
        const maxArcHeight = 120; // Edge cards can go way down
        
        cards.forEach((imgSrc, index) => {
            const cardEl = document.createElement('div');
            cardEl.className = 'hand-card';
            
            // Calculate rotation for fan effect
            const angle = cardCount > 1 ? startAngle + (angleStep * index) : 0;
            
            // Parabolic arc
            const distanceFromMiddle = Math.abs(index - middleIndex);
            const normalizedDist = distanceFromMiddle / (cardCount / 2 || 1);
            const yOffset = normalizedDist * normalizedDist * maxArcHeight;
            
            // Store original transform
            const originalTransform = `translateY(${yOffset}px) rotate(${angle}deg)`;
            const hoverTransform = `translateY(${yOffset - 60}px) rotate(${angle}deg) scale(1.2)`;
            
            cardEl.style.transform = originalTransform;
            cardEl.style.transformOrigin = 'center 120%';
            cardEl.style.zIndex = Math.round(10 - distanceFromMiddle);
            
            // Hover handlers to preserve rotation
            cardEl.addEventListener('mouseenter', () => {
                cardEl.style.transform = hoverTransform;
                cardEl.style.zIndex = '100';
                cardEl.style.boxShadow = '0 25px 50px rgba(0,0,0,0.7)';
                cardEl.style.borderColor = 'gold';
                
                // Show preview popup with native resolution
                if (!isBlind) {
                    this.showImagePreview(imgSrc);
                }
            });
            
            cardEl.addEventListener('mouseleave', () => {
                cardEl.style.transform = originalTransform;
                cardEl.style.zIndex = Math.round(10 - distanceFromMiddle);
                cardEl.style.boxShadow = '0 5px 15px rgba(0,0,0,0.4)';
                cardEl.style.borderColor = 'rgba(255,255,255,0.3)';
                
                this.hideImagePreview();
            });
            
            if (isBlind) {
                cardEl.innerHTML = '<div class="blind-card">?</div>';
                cardEl.style.background = 'linear-gradient(135deg, #2c3e50, #34495e)';
            } else {
                const imgEl = document.createElement('img');
                imgEl.src = imgSrc;
                imgEl.style.width = '100%';
                imgEl.style.height = '100%';
                imgEl.style.objectFit = 'cover';
                imgEl.style.borderRadius = '8px';
                cardEl.appendChild(imgEl);
            }
            
            cardEl.onclick = () => this.playCard(index);
            this.ui.hand.appendChild(cardEl);
        });
    }

    playCard(handIndex) {
        // Prevent playing multiple cards in one turn
        if (this.cardPlayed) return;
        this.cardPlayed = true;
        
        // Hide any open preview
        this.hideImagePreview();
        this.sound.play('play');
        
        const card = this.players[this.currentPlayer].hand[handIndex];
        this.players[this.currentPlayer].hand.splice(handIndex, 1);
        
        // Add to played and discard pile tracking
        this.playedCards.push({ player: this.currentPlayer, content: card });
        this.discardPile.push(card);
        
        if (this.gameMode === 'single') {
            // Single Player Logic
            this.renderHand(this.currentPlayer); // update hand view
            this.addPlayedCardToView(card, 'user');
            this.ui.status.textContent = "Rakipler Düşünüyor...";
            setTimeout(() => this.aiPlaySingle(), 1000);
        
        } else {
            // Local Multiplayer Logic
            if (this.currentPlayer === 'p1') {
                // P1 done, switch to P2
                this.prepareTurn('p2');
            } else {
                // P2 done, proceed to Judging
                this.renderPlayedAreaLocally(); // clean up
                this.judgeRoundLocal();
            }
        }
    }

    // --- Single Player Methods ---
    addPlayedCardToView(cardContent, type) {
        const slot = document.createElement('div');
        slot.className = 'card played-card-slot';
        slot.style.width = '120px';
        slot.style.height = '168px';
        slot.style.overflow = 'hidden';
        
        if (type === 'ai') {
             slot.style.background = '#333';
             slot.textContent = '?';
             slot.style.color = 'white';
        } else {
             const imgEl = document.createElement('img');
             imgEl.src = cardContent;
             imgEl.style.width = '100%';
             imgEl.style.height = '100%';
             imgEl.style.objectFit = 'cover';
             slot.appendChild(imgEl);
        }
        this.ui.playedArea.appendChild(slot);
        return slot;
    }

    aiPlaySingle() {
        // AI plays 1 card
        let aiCard;
        if (this.players.ai.hand && this.players.ai.hand.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.players.ai.hand.length);
            aiCard = this.players.ai.hand.splice(randomIndex, 1)[0];
        } else {
            aiCard = moodImages[Math.floor(Math.random() * moodImages.length)];
        }
        let slot = this.addPlayedCardToView(aiCard, 'ai');
        this.playedCards.push({ player: 'ai', content: aiCard, element: slot });
        this.discardPile.push(aiCard);

        setTimeout(() => this.judgeRoundSingle(), 1500);
    }

    judgeRoundSingle() {
        this.ui.status.textContent = "Kartlar Açılıyor...";
        // Reveal AI card
        this.playedCards.forEach((item) => {
            if(item.player === 'ai') {
                item.element.textContent = '';
                item.element.style.backgroundColor = 'transparent';
                
                const imgEl = document.createElement('img');
                imgEl.src = item.content;
                imgEl.style.width = '100%';
                imgEl.style.height = '100%';
                imgEl.style.objectFit = 'cover';
                item.element.appendChild(imgEl);
            }
        });

        // After reveal, launch a random mini-game
        setTimeout(() => {
            this.launchMiniGame();
        }, 1500);
    }

    // ========== MINI-GAME SYSTEM ==========
    launchMiniGame() {
        const games = ['quicktap', 'timing', 'coinflip', 'numberguess'];
        // Avoid repeating the same mini-game consecutively
        let pick;
        do {
            pick = games[Math.floor(Math.random() * games.length)];
        } while (pick === this.lastMiniGame && games.length > 1);
        this.lastMiniGame = pick;

        const modal = document.getElementById('minigame-modal');
        const title = document.getElementById('minigame-title');
        const desc = document.getElementById('minigame-desc');
        const area = document.getElementById('minigame-area');
        const result = document.getElementById('minigame-result');
        area.innerHTML = '';
        result.textContent = '';
        modal.classList.remove('hidden');

        switch(pick) {
            case 'quicktap': this.miniGameQuickTap(title, desc, area, result); break;
            case 'timing': this.miniGameTiming(title, desc, area, result); break;
            case 'coinflip': this.miniGameCoinFlip(title, desc, area, result); break;
            case 'numberguess': this.miniGameNumberGuess(title, desc, area, result); break;
        }
    }

    resolveMiniGame(winner) {
        const modal = document.getElementById('minigame-modal');
        const result = document.getElementById('minigame-result');

        if (winner === 'user') {
            this.players.p1.score++;
            result.textContent = "🎉 KAZANDIN!";
            result.style.color = '#38ef7d';
        } else {
            this.players.ai.score++;
            result.textContent = "😢 KAYBETTİN.";
            result.style.color = '#ff416c';
        }
        this.updateScoreboard();

        setTimeout(() => {
            modal.classList.add('hidden');
            // Clean up any intervals
            if (this._miniGameInterval) {
                clearInterval(this._miniGameInterval);
                this._miniGameInterval = null;
            }

            // Check if hands are empty
            const p1HandSize = this.players.p1.hand.length;
            const aiHandSize = this.players.ai.hand ? this.players.ai.hand.length : 0;

            if (p1HandSize === 0 && aiHandSize === 0) {
                this.showToast("Bu el bitti! Yeni kart seçimi başlıyor...", 'warning');
                setTimeout(() => {
                    this.round++;
                    this.startDraftPhase('p1');
                }, 1500);
            } else {
                this.round++;
                this.startRound();
            }
        }, 2000);
    }

    // --- MINI-GAME 1: Quick Tap ---
    miniGameQuickTap(title, desc, area, result) {
        title.textContent = "⚡ Hızlı Tıkla!";
        desc.textContent = "3 saniyede 15 kere tıkla!";
        
        let count = 0;
        const target = 15;
        const duration = 3000;
        let started = false;
        let ended = false;

        const counter = document.createElement('div');
        counter.className = 'quicktap-counter';
        counter.textContent = '0';

        const timer = document.createElement('div');
        timer.className = 'quicktap-timer';
        timer.textContent = '3.0s';

        const btn = document.createElement('button');
        btn.className = 'quicktap-btn';
        btn.textContent = 'TIKLA!';

        area.appendChild(counter);
        area.appendChild(btn);
        area.appendChild(timer);

        btn.onclick = () => {
            if (ended) return;
            if (!started) {
                started = true;
                const startTime = Date.now();
                this._miniGameInterval = setInterval(() => {
                    const elapsed = Date.now() - startTime;
                    const remaining = Math.max(0, (duration - elapsed) / 1000);
                    timer.textContent = remaining.toFixed(1) + 's';
                    if (elapsed >= duration) {
                        ended = true;
                        clearInterval(this._miniGameInterval);
                        btn.disabled = true;
                        this.resolveMiniGame(count >= target ? 'user' : 'ai');
                    }
                }, 50);
            }
            count++;
            counter.textContent = count;
            btn.style.transform = 'scale(0.9)';
            setTimeout(() => btn.style.transform = 'scale(1)', 80);
        };
    }

    // --- MINI-GAME 2: Timing Bar ---
    miniGameTiming(title, desc, area, result) {
        title.textContent = "🎯 Zamanlama!";
        desc.textContent = "Çubuğu yeşil bölgede durdur!";

        const container = document.createElement('div');
        container.className = 'timing-bar-container';

        // Green zone (random position, 20% width)
        const zoneWidth = 20;
        const zoneLeft = 15 + Math.random() * (65 - 15); // Between 15% and 65%
        const zone = document.createElement('div');
        zone.className = 'timing-bar-zone';
        zone.style.left = zoneLeft + '%';
        zone.style.width = zoneWidth + '%';

        const indicator = document.createElement('div');
        indicator.className = 'timing-bar-indicator';
        indicator.style.left = '0%';

        container.appendChild(zone);
        container.appendChild(indicator);

        const btn = document.createElement('button');
        btn.className = 'timing-stop-btn';
        btn.textContent = '🛑 DURDUR!';

        area.appendChild(container);
        area.appendChild(btn);

        let pos = 0;
        let direction = 1;
        const speed = 1.2;
        let stopped = false;

        this._miniGameInterval = setInterval(() => {
            if (stopped) return;
            pos += speed * direction;
            if (pos >= 100) { pos = 100; direction = -1; }
            if (pos <= 0) { pos = 0; direction = 1; }
            indicator.style.left = pos + '%';
        }, 16);

        btn.onclick = () => {
            if (stopped) return;
            stopped = true;
            clearInterval(this._miniGameInterval);
            btn.disabled = true;

            const inZone = pos >= zoneLeft && pos <= (zoneLeft + zoneWidth);
            this.resolveMiniGame(inZone ? 'user' : 'ai');
        };
    }

    // --- MINI-GAME 3: Coin Flip ---
    miniGameCoinFlip(title, desc, area, result) {
        title.textContent = "🪙 Yazı mı Tura mı?";
        desc.textContent = "Tarafını seç, şansını dene!";

        const coin = document.createElement('div');
        coin.className = 'mini-coin';
        coin.textContent = '🪙';

        const btnContainer = document.createElement('div');
        btnContainer.className = 'guess-buttons';

        const btnHeads = document.createElement('button');
        btnHeads.className = 'guess-btn high';
        btnHeads.textContent = '👤 Yazı';

        const btnTails = document.createElement('button');
        btnTails.className = 'guess-btn low';
        btnTails.textContent = '👥 Tura';

        btnContainer.appendChild(btnHeads);
        btnContainer.appendChild(btnTails);

        area.appendChild(coin);
        area.appendChild(btnContainer);

        const handleChoice = (choice) => {
            btnHeads.disabled = true;
            btnTails.disabled = true;
            coin.classList.add('spinning');

            const actual = Math.random() >= 0.5 ? 'heads' : 'tails';

            setTimeout(() => {
                coin.classList.remove('spinning');
                coin.textContent = actual === 'heads' ? '👤' : '👥';
                desc.textContent = actual === 'heads' ? 'Yazı geldi!' : 'Tura geldi!';

                const won = choice === actual;
                this.resolveMiniGame(won ? 'user' : 'ai');
            }, 1500);
        };

        btnHeads.onclick = () => handleChoice('heads');
        btnTails.onclick = () => handleChoice('tails');
    }

    // --- MINI-GAME 4: Number Guess ---
    miniGameNumberGuess(title, desc, area, result) {
        title.textContent = "🔢 Sayı Tahmini!";
        const firstNumber = Math.floor(Math.random() * 10) + 1;
        desc.textContent = "Sonraki sayı daha yüksek mi düşük mü?";

        const display = document.createElement('div');
        display.className = 'number-display';
        display.textContent = firstNumber;

        const btnContainer = document.createElement('div');
        btnContainer.className = 'guess-buttons';

        const btnHigh = document.createElement('button');
        btnHigh.className = 'guess-btn high';
        btnHigh.textContent = '⬆️ Yüksek';

        const btnLow = document.createElement('button');
        btnLow.className = 'guess-btn low';
        btnLow.textContent = '⬇️ Düşük';

        btnContainer.appendChild(btnHigh);
        btnContainer.appendChild(btnLow);

        area.appendChild(display);
        area.appendChild(btnContainer);

        const handleGuess = (guess) => {
            btnHigh.disabled = true;
            btnLow.disabled = true;

            let secondNumber;
            do {
                secondNumber = Math.floor(Math.random() * 10) + 1;
            } while (secondNumber === firstNumber);

            // Animate number change
            let animCount = 0;
            this._miniGameInterval = setInterval(() => {
                display.textContent = Math.floor(Math.random() * 10) + 1;
                animCount++;
                if (animCount >= 15) {
                    clearInterval(this._miniGameInterval);
                    display.textContent = secondNumber;

                    const isHigher = secondNumber > firstNumber;
                    const correct = (guess === 'high' && isHigher) || (guess === 'low' && !isHigher);
                    desc.textContent = `${firstNumber} → ${secondNumber} (${isHigher ? 'Yüksek' : 'Düşük'})`;
                    this.resolveMiniGame(correct ? 'user' : 'ai');
                }
            }, 80);
        };

        btnHigh.onclick = () => handleGuess('high');
        btnLow.onclick = () => handleGuess('low');
    }

    // --- Local Multiplayer Methods ---
    judgeRoundLocal() {
        this.ui.status.textContent = "Kartları değerlendirin!";
        this.ui.hand.innerHTML = '';
        
        // Initialize voting state
        this.votes = { p1Card: 0, p2Card: 0 };
        this.votedPlayers = [];
        this.currentVoter = 'p1';

        // Reveal both cards with voting capability
        this.ui.playedArea.innerHTML = '';
        
        this.playedCards.forEach((item, index) => {
            const slot = document.createElement('div');
            slot.className = 'card played-card-slot votable';
            slot.style.position = 'relative';
            slot.dataset.cardOwner = item.player;
            slot.dataset.cardIndex = index;

            const imgEl = document.createElement('img');
            imgEl.src = item.content;
            slot.appendChild(imgEl);

            // Player label
            const label = document.createElement('div');
            label.textContent = this.players[item.player].name;
            label.style.cssText = 'position:absolute;bottom:0;width:100%;text-align:center;background:rgba(0,0,0,0.7);color:white;font-size:0.8rem;padding:3px;';
            slot.appendChild(label);

            // Vote count badge (hidden initially)
            const voteBadge = document.createElement('div');
            voteBadge.className = 'vote-count';
            voteBadge.style.display = 'none';
            voteBadge.textContent = '0';
            voteBadge.id = `vote-badge-${item.player}`;
            slot.appendChild(voteBadge);
            
            // Click to vote
            slot.addEventListener('click', () => this.castVote(item.player));
            
            this.ui.playedArea.appendChild(slot);
        });

        // Show voting area
        document.getElementById('voting-area').classList.remove('hidden');
        document.getElementById('voting-info').textContent = `${this.players.p1.name} oy veriyor...`;
    }

    castVote(cardOwner) {
        if (this.votedPlayers.includes(this.currentVoter)) return;
        
        // Record vote
        if (cardOwner === 'p1') {
            this.votes.p1Card++;
        } else {
            this.votes.p2Card++;
        }
        this.votedPlayers.push(this.currentVoter);
        
        // Update vote badge
        const badge = document.getElementById(`vote-badge-${cardOwner}`);
        if (badge) {
            badge.style.display = 'flex';
            badge.textContent = cardOwner === 'p1' ? this.votes.p1Card : this.votes.p2Card;
        }
        
        // Mark card as voted (visual)
        const cards = document.querySelectorAll('.played-card-slot');
        cards.forEach(card => {
            if (card.dataset.cardOwner === cardOwner) {
                card.classList.add('voted');
            }
        });

        this.showToast(`${this.players[this.currentVoter].name} oy verdi!`, 'info');

        // Check if both voted
        if (this.votedPlayers.length >= 2) {
            document.getElementById('voting-area').classList.add('hidden');
            this.resolveVotes();
        } else {
            // Next voter
            this.currentVoter = 'p2';
            document.getElementById('voting-info').textContent = `${this.players.p2.name} oy veriyor...`;
        }
    }

    resolveVotes() {
        const p1Votes = this.votes.p1Card;
        const p2Votes = this.votes.p2Card;

        if (p1Votes > p2Votes) {
            this.declareWinner('p1');
        } else if (p2Votes > p1Votes) {
            this.declareWinner('p2');
        } else {
            // Tie! Coin flip
            this.showToast("Berabere! Yazı-Tura atılacak!", 'warning');
            setTimeout(() => this.startCoinFlip(), 1500);
        }
    }

    // ========== COIN FLIP SYSTEM ==========
    startCoinFlip() {
        document.getElementById('coin-modal').classList.remove('hidden');
        document.getElementById('coin-result').textContent = '';
        
        const coin = document.getElementById('coin');
        coin.classList.remove('flipping', 'heads', 'tails');
        
        document.getElementById('btn-flip-coin').disabled = false;
        document.getElementById('btn-flip-coin').onclick = () => this.flipCoin();
    }

    flipCoin() {
        const coin = document.getElementById('coin');
        document.getElementById('btn-flip-coin').disabled = true;
        
        coin.classList.add('flipping');
        
        // Random result
        const isHeads = Math.random() >= 0.5;
        const winner = isHeads ? 'p1' : 'p2';
        
        setTimeout(() => {
            coin.classList.remove('flipping');
            coin.classList.add(isHeads ? 'heads' : 'tails');
            
            const winnerName = this.players[winner].name;
            document.getElementById('coin-result').textContent = `${winnerName} kazandı!`;
            
            setTimeout(() => {
                document.getElementById('coin-modal').classList.add('hidden');
                this.declareWinner(winner);
            }, 1500);
        }, 1500);
    }


    // ========== WINNER DECLARATION ==========
    declareWinner(winner) {
        this.sound.play('win');
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

        const winnerName = this.players[winner].name;
        const loser = winner === 'p1' ? 'p2' : 'p1';
        let points = 1;
        
        let shieldActive = false;
        
        // Check for SHIELD on loser
        if (this.players[loser].buffs && this.players[loser].buffs.shield) {
            this.players[loser].buffs.shield = false;
            shieldActive = true;
            this.showToast(`🛡️ ${this.players[loser].name} Kalkan kullandı! Seri korundu.`, 'info');
        }
        
        // Update streaks
        this.players[winner].streak++;
        
        if (!shieldActive) {
            this.players[loser].streak = 0;
        }
        
        // Check streak rewards
        this.checkStreakRewards(winner);
        
        // Check for double points buff on winner
        if (this.players[winner].buffs && this.players[winner].buffs.doublePoints > 0) {
            points *= 2;
            this.players[winner].buffs.doublePoints--;
            this.showToast(`🔥 2x Puan aktif! ${points} puan kazanıldı!`, 'success');
        }
        
        this.players[winner].score += points;
        this.ui.status.textContent = `${winnerName} KAZANDI! (+${points} Puan)`;
        
        // Apply loser debuffs (only if no shield)
        if (!shieldActive) {
            this.applyLoserPenalties(loser);
        }
        
        this.updateScoreboard();
        this.decrementBuffDebuffCounters();
        
        // Check if hands are empty
        const p1HandSize = this.players.p1.hand.length;
        const p2HandSize = this.players.p2.hand.length;
        
        // If this was a power round, show buff selection modal
        if (this.isPowerRound) {
            setTimeout(() => {
                this.showPowerRoundModal(winner);
            }, 2000);
            return; // Don't auto-continue, selectPowerBuff will handle it
        }
        
        // Set up next power round chance (15%)
        this.isPowerRound = Math.random() < 0.25;
        
        if (p1HandSize === 0 && p2HandSize === 0) {
            setTimeout(() => {
                this.showToast("Bu el bitti! Yeni kart seçimi başlıyor...", 'warning');
                this.round++;
                this.startDraftPhase('p1');
            }, 3000);
        } else {
            setTimeout(() => {
                this.round++;
                this.startRound();
            }, 3000);
        }
    }

    // ========== STREAK SYSTEM ==========
    checkStreakRewards(winner) {
        const streak = this.players[winner].streak;
        const name = this.players[winner].name;
        
        if (streak === 2) {
            // 2 streak - Next win = 2x points
            this.players[winner].buffs.doublePoints = 1;
            this.showStreakBanner('🔥', `${name} 2 SERİ! Sonraki galibiyet 2x puan!`);
        } else if (streak === 3) {
            // 3 streak - Shield
            this.players[winner].buffs.shield = true;
            this.showStreakBanner('🛡️', `${name} 3 SERİ! Kalkan kazandı!`);
        } else if (streak === 4) {
            // 4 streak - Steal point
            const loser = winner === 'p1' ? 'p2' : 'p1';
            if (this.players[loser].score > 0) {
                this.players[loser].score--;
                this.players[winner].score++;
                this.showStreakBanner('💰', `${name} 4 SERİ! Puan çaldı!`);
            }
            // Reset streak after big reward
            this.players[winner].streak = 0;
        }
    }

    showStreakBanner(icon, text) {
        const banner = document.getElementById('streak-banner');
        document.getElementById('streak-icon').textContent = icon;
        document.getElementById('streak-text').textContent = text;
        
        banner.classList.remove('hidden');
        
        setTimeout(() => {
            banner.classList.add('hidden');
        }, 3000);
    }

    // ========== POWER ROUND SYSTEM ==========  
    showPowerRoundModal(winner) {
        this.sound.play('power');
        const content = document.querySelector('#power-modal .modal-content');
        if(content) content.classList.add('pulse-anim');
        
        this.powerRoundWinner = winner;
        document.getElementById('power-modal').classList.remove('hidden');
        document.getElementById('power-winner-text').textContent = `${this.players[winner].name}, bir buff seç!`;
        
        // Attach click handlers to buff buttons
        document.querySelectorAll('.buff-btn').forEach(btn => {
            btn.onclick = () => this.selectPowerBuff(btn.dataset.buff);
        });
    }

    selectPowerBuff(buffType) {
        const winner = this.powerRoundWinner;
        const loser = winner === 'p1' ? 'p2' : 'p1';
        
        switch(buffType) {
            case 'double':
                this.players[winner].buffs.doublePoints = 2;
                this.showToast(`🔥 ${this.players[winner].name} 2 tur 2x puan alacak!`, 'success');
                break;
            case 'shield':
                this.players[winner].buffs.shield = true;
                this.showToast(`🛡️ ${this.players[winner].name} kalkan kazandı!`, 'success');
                break;
            case 'steal':
                if (this.players[loser].score > 0) {
                    this.players[loser].score--;
                    this.players[winner].score++;
                    this.updateScoreboard();
                }
                this.showToast(`💰 ${this.players[winner].name} puan çaldı!`, 'success');
                break;
            case 'blind':
                // Debuff applies to LOSER
                this.players[loser].debuffs.blind = 1;
                this.showToast(`🎭 ${this.players[loser].name} kör seçim yapacak!`, 'warning');
                break;
            case 'slowStart':
                // Debuff applies to LOSER
                this.players[loser].debuffs.slowStart = 1;
                this.showToast(`🐢 ${this.players[loser].name} yavaş başlayacak (3 kart)!`, 'warning');
                break;
            case 'penalty':
                // Debuff applies to LOSER
                this.players[loser].debuffs.lossPenalty = 1;
                this.showToast(`💀 ${this.players[loser].name} 1 tur kayıp cezası alacak!`, 'warning');
                break;
        }
        
        document.getElementById('power-modal').classList.add('hidden');
        this.isPowerRound = false;
        
        // Set up next power round chance (15%)
        const nextPowerRound = Math.random() < 0.25;
        
        // Check if hands are empty
        const p1HandSize = this.players.p1.hand.length;
        const p2HandSize = this.players.p2.hand.length;
        
        if (p1HandSize === 0 && p2HandSize === 0) {
            setTimeout(() => {
                this.showToast("Bu el bitti! Yeni kart seçimi başlıyor...", 'warning');
                this.round++;
                this.isPowerRound = nextPowerRound;
                this.startDraftPhase('p1');
            }, 1500);
        } else {
            setTimeout(() => {
                this.round++;
                this.isPowerRound = nextPowerRound;
                this.startRound();
            }, 1000);
        }
    }

    applyLoserPenalties(loser) {
        // Check for loss penalty debuff
        if (this.players[loser].debuffs && this.players[loser].debuffs.lossPenalty > 0) {
            if (this.players[loser].score > 0) {
                this.players[loser].score--;
                this.showToast(`💀 ${this.players[loser].name} kayıp cezası: -1 puan!`, 'warning');
            }
        }
        
        // Check for shield buff (if the "loser" has a shield, they don't actually lose)
        // Shield is handled in voting - we could refund if they would have lost
    }

    decrementBuffDebuffCounters() {
        const playersToCheck = this.gameMode === 'local' ? ['p1', 'p2'] : ['p1', 'ai'];
        
        playersToCheck.forEach(playerKey => {
            const player = this.players[playerKey];
            
            // Decrement turn-based debuffs
            if (player.debuffs) {
                if (player.debuffs.lossPenalty > 0) {
                    player.debuffs.lossPenalty--;
                }
                if (player.debuffs.blind > 0) {
                    player.debuffs.blind--;
                }
            }
        });
    }

    updateScoreboard() {
        this.ui.userScore.textContent = this.players.p1.score;
        if (this.gameMode === 'local') {
            this.ui.aiScore.textContent = this.players.p2.score;
        } else {
            this.ui.aiScore.textContent = this.players.ai.score;
        }
        this.ui.roundCount.textContent = this.round;
        
        // Update player names
        const p1NameEl = document.getElementById('p1-name-display');
        const p2NameEl = document.getElementById('p2-name-display');
        if (p1NameEl) p1NameEl.textContent = this.players.p1.name;
        if (p2NameEl) p2NameEl.textContent = this.gameMode === 'local' ? this.players.p2.name : this.players.ai.name;
        
        // Update buff/debuff icons
        this.updateBuffIcons('p1');
        this.updateBuffIcons(this.gameMode === 'local' ? 'p2' : 'ai');
    }
    
    updateBuffIcons(playerKey) {
        const containerId = playerKey === 'ai' ? 'p2-buffs' : `${playerKey}-buffs`;
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = '';
        const player = this.players[playerKey];
        
        // Show buffs
        if (player.buffs) {
            if (player.buffs.doublePoints > 0) {
                container.innerHTML += `<span class="buff-icon buff" title="2x Puan (${player.buffs.doublePoints} tur)">🔥x2</span>`;
            }
            if (player.buffs.shield) {
                container.innerHTML += `<span class="buff-icon buff" title="Kalkan">🛡️</span>`;
            }
        }
        
        // Show debuffs
        if (player.debuffs) {
            if (player.debuffs.blind > 0) {
                container.innerHTML += `<span class="buff-icon debuff" title="Kör Seçim">🎭</span>`;
            }
            if (player.debuffs.slowStart) {
                container.innerHTML += `<span class="buff-icon debuff" title="Yavaş Başlangıç">🐢</span>`;
            }
            if (player.debuffs.lossPenalty > 0) {
                container.innerHTML += `<span class="buff-icon debuff" title="-1 Kayıp (${player.debuffs.lossPenalty} tur)">💀</span>`;
            }
        }
    }
}

// Init Game on Load
window.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
});

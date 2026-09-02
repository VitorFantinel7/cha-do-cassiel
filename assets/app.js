/* =========================================================================
   CONFIGURAÇÃO — edite aqui quando tiver os links reais
   ========================================================================= */
const EXTERNAL_LINKS = {
  listaCompleta: '',   // link da lista na loja Sonho de Criança
  loja: '',            // site / Instagram / mapa da loja Sonho de Criança
  whatsapp: '',        // ex.: '5511999999999' (só números, com DDI)
};
const WHATSAPP_MSG = 'Oi! Vou no chá do Cassiel 💙';
const EVENT = {
  date: '20/09', weekday: 'Domingo', time: '15h30',
  address1: 'Maria Bernardes da Silva, 124', address2: 'Lot São Rafael',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Maria+Bernardes+da+Silva%2C+124+-+Lot+S%C3%A3o+Rafael',
};

/* ===================== DADOS ===================== */
const DIAPERS = [
 {
  "id": "fralda-pampers-premium-rn-20-um",
  "name": "Pampers Premium RN+ 20 um",
  "size": "RN",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/produtos/fralda-pampers-premium-rn.webp",
  "externalUrl": "https://www.mercadolivre.com.br/fraldas-recem-nascido-premium-care-tamanho-rn-com-20-unidades-pampers/p/MLB17336068?pdp_filters=item_id:MLB4585115773#intervention_type=MARKET&position=1&search_layout=grid&type=cart_intervention&tracking_id=6eb87127-27aa-4cc3-94fb-4ef72bc6a0b4"
 },
 {
  "id": "fralda-pompom-protek-rn-18un",
  "name": "Pompom Protek RN 18un",
  "size": "RN",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/produtos/fralda-pompom-rn.webp",
  "externalUrl": "https://www.mercadolivre.com.br/fralda-pom-pom-protek-protecao-de-mae-rn-para-recem-nascido-pacote-com-18-fraldas/p/MLB17335763#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=34&type=product&tracking_id=59671180-5e89-4d02-b4dd-b5d946ca6e03&wid=MLB6326208296&sid=search"
 },
 {
  "id": "fralda-huggies-natural-care-rn-34un",
  "name": "Huggies Natural Care RN 34un",
  "size": "RN",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/produtos/fralda-huggies-rn.webp",
  "externalUrl": "https://www.mercadolivre.com.br/huggies-fralda-descartavel-premium-natural-care-rn-34-unidad/up/MLBU3725829562#polycard_client=search-desktop&float_highlight=last_units&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=50&type=product&tracking_id=59671180-5e89-4d02-b4dd-b5d946ca6e03&wid=MLB4413777277&sid=search"
 },
 {
  "id": "fralda-turma-da-monica-rn-36un",
  "name": "Turma da Mônica RN 36un",
  "size": "RN",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/produtos/fralda-turma-monica-rn.webp",
  "externalUrl": "https://www.mercadolivre.com.br/fralda-descartavel-turma-da-monica-baby-recem-nascido-rn-pacote-36-unidades/p/MLB18392643#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=1&type=product&tracking_id=375434e8-f463-4638-bb54-ea536ad3028e&wid=MLB3967950509&sid=search"
 },
 {
  "id": "fralda-personal-premium-rn-ao-p-36un",
  "name": "Personal Premium RN ao P 36un",
  "size": "RN ao P",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/produtos/fralda-personal-rnp.webp",
  "externalUrl": "https://www.mercadolivre.com.br/fraldas-personal-baby-premium-protection-recemnascido/up/MLBU3517989695#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=6&type=product&tracking_id=d6c77032-9ce3-4933-998b-4a9eefc55a5c&wid=MLB5862834736&sid=search"
 },
 {
  "id": "fralda-mili-rn-18un",
  "name": "Mili RN 18UN",
  "size": "RN",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/produtos/fralda-mili-rn.webp",
  "externalUrl": "https://www.mercadolivre.com.br/fralda-mili-descartavel-lovecare-rn-c18-unidades/p/MLB19939777?pdp_filters=shipping:mercadoenvios%7Cseller_id:345605524#intervention_type=seller&position=1&search_layout=grid&type=cart_intervention&tracking_id=914c7fad-b392-46ee-90cf-fcf1202d74f6"
 },
 {
  "id": "fralda-pampers-confort-sec-p-50un",
  "name": "Pampers Confort Sec P 50un",
  "size": "P",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/produtos/fralda-pampers-confort-p.webp",
  "externalUrl": "https://www.mercadolivre.com.br/p/MLB17335903?pdp_filters=item_id%3AMLB1806456379&sid=cart#polycard_client=cart_list&wid=MLB1806456379&sid=cart"
 },
 {
  "id": "fralda-pampers-supersec-68un",
  "name": "Pampers SuperSec 68un",
  "size": "M",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/produtos/fralda-pampers-supersec-m.webp",
  "externalUrl": "https://www.mercadolivre.com.br/fralda-descartavel-pampers-supersequinha-super-m-68-unidades/p/MLB57445082#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=6&type=product&tracking_id=455e5423-1963-4d95-ab79-2ccd7d43088b&wid=MLB6802410504&sid=search"
 },
 {
  "id": "fralda-mammypoko-m-34un",
  "name": "MammyPoko M 34un",
  "size": "M",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/produtos/fralda-mammypoko-m.webp",
  "externalUrl": "https://www.mercadolivre.com.br/fralda-calca-mamy-poko-superprotecao-jumbo-m-34-unidades/p/MLB44013391#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=12&type=product&tracking_id=455e5423-1963-4d95-ab79-2ccd7d43088b&wid=MLB3919800849&sid=search"
 }
];
const GIFT_CATEGORIES = [
  { key:'Higiene',     img:'assets/img/cat-higiene.png' },
  { key:'Roupinhas',   img:'assets/img/cat-roupinhas.png' },
  { key:'Alimentação', img:'assets/img/cat-alimentacao.png' },
  { key:'Cuidados',    img:'assets/img/cat-cuidados.png' },
  { key:'Quarto',      img:'assets/img/cat-quarto.png' },
  { key:'Outros',      img:'assets/img/cat-outros.png' },
];
const GIFTS = [
 {
  "id": "aspirador-nasal-ursinho-buba",
  "name": "Aspirador Nasal Ursinho (Buba)",
  "category": "Cuidados",
  "description": "Por sucção, com estojo.",
  "price": null,
  "imageUrl": "assets/img/produtos/aspirador-nasal-ursinho-buba.webp",
  "externalUrl": "https://www.mercadolivre.com.br/aspirador-nasal-por-succao-com-estojo-ursinho-buba/p/MLB45858236?pdp_filters=item_id%3AMLB6756251546&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=173090547276&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882728465&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB45858236-product&matt_product_partition_id=2496112860465&matt_target_id=pla-2496112860465&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25hcf5UGev1c2efnDKEw4qeGwKvRFdhchRjb8SbbHHymmDhWJZe4ZPxoCXL8QAvD_BwE"
 },
 {
  "id": "kit-higiene-com-estojo",
  "name": "Kit Higiene com Estojo",
  "category": "Higiene",
  "description": "Cuidados essenciais do dia a dia.",
  "price": null,
  "imageUrl": "assets/img/produtos/kit-higiene-com-estojo.webp",
  "externalUrl": "https://www.amazon.com.br/Kit-Cuidados-Com-Estojo-Verde/dp/B0BZFDTWB7/ref=asc_df_B0BZFDTWB7?mcid=54fbeda62941312cab91ab1b02405142&tag=googleshopp00-20&linkCode=df0&hvadid=709856906370&hvpos=&hvnetw=g&hvrand=5454502914515682346&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074192&hvtargid=pla-2200079017602&psc=1&hvocijid=5454502914515682346-B0BZFDTWB7-&hvexpln=0&language=pt_BR",
  "featured": true
 },
 {
  "id": "saquinhos-de-maternidade-kit-6",
  "name": "Saquinhos de Maternidade (kit 6)",
  "category": "Outros",
  "description": "Organizadores bordados para a mala.",
  "price": null,
  "imageUrl": "assets/img/produtos/saquinhos-de-maternidade-kit-6.webp",
  "externalUrl": "https://www.mercadolivre.com.br/kit-6-saquinho-saco-maternidade-bebe-organizador-tag-bordado/up/MLBU2614818211?pdp_filters=item_id%3AMLB5147524176&matt_event_ts=1788131002209&matt_d2id=ec70b00c-1ba9-459e-9b68-cb30016450c8&matt_tracing_id=6d0a98a9-db28-4bcb-950a-fc34393b7fce#polycard_client=recommendations_home_affiliate-profile&wid=MLB5147524176&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=76718861&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=e439c9e6-60b6-41c7-b653-a0df2fe62217&tracking_id=db933da9-2b82-41bc-8219-3dc108728607&c_id=/home/card-featured/element&c_uid=8c9471fa-9534-4758-8afa-d9716b32eb7a"
 },
 {
  "id": "toalha-de-banho-fralda-karinho",
  "name": "Toalha de Banho Fralda Karinho",
  "category": "Higiene",
  "description": "Macia e absorvente.",
  "price": null,
  "imageUrl": "assets/img/produtos/toalha-de-banho-fralda-karinho.webp",
  "externalUrl": "https://www.amazon.com.br/Toalha-Banho-Fralda-Karinho-multi-colored/dp/B0BV386QWT?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1GJK97JN8WT0M"
 },
 {
  "id": "toalha-de-banho-com-capuz-dinossauro",
  "name": "Toalha de Banho com Capuz Dinossauro",
  "category": "Higiene",
  "description": "Com capuz divertido.",
  "price": null,
  "imageUrl": "assets/img/produtos/toalha-de-banho-com-capuz-dinossauro.webp",
  "externalUrl": "https://www.mercadolivre.com.br/toalha-de-banho-bebe-infantil-com-capuz-de-dinossauro/up/MLBU4343907278?pdp_filters=item_id%3AMLB4902515339&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=191786782441&matt_match_type=&matt_network=g&matt_device=c&matt_creative=782869963094&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5760933778&matt_product_id=MLBU4343907278&matt_product_partition_id=2498039434278&matt_target_id=pla-2498039434278&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25trmG5PyyC19WVvq8yKX5AQfCeosvYMvLRKbW_7zeaj1Lb06asIhBhoC54IQAvD_BwE"
 },
 {
  "id": "paninho-de-boca-com-prendedor-de",
  "name": "Paninho de Boca com Prendedor de Chupeta",
  "category": "Higiene",
  "description": "Estampado 40x40.",
  "price": null,
  "imageUrl": "assets/img/produtos/paninho-de-boca-com-prendedor-de.webp",
  "externalUrl": "https://www.amazon.com.br/Paninho-Prendedor-Chupeta-Estampado-40x40/dp/B0FS9281ZT?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1ZZFT5FULY4LN&th=1"
 },
 {
  "id": "kit-panos-de-boca-algodao-incomfral",
  "name": "Kit Panos de Boca Algodão (Incomfral)",
  "category": "Higiene",
  "description": "Kit de paninhos 100% algodão.",
  "price": null,
  "imageUrl": "assets/img/produtos/kit-panos-de-boca-algodao-incomfral.webp",
  "externalUrl": "https://www.amazon.com.br/Menino-Menina-Algod%C3%A3o-Unidades-Incomfral/dp/B0GK2X7YX8/ref=asc_df_B0GK2T3LSY?mcid=0ed0ba0cd92d366daeb8dda1bddff555&tag=googleshopp00-20&linkCode=df0&hvadid=709857676527&hvpos=&hvnetw=g&hvrand=4013267913925690998&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074192&hvtargid=pla-2466505198001&hvocijid=4013267913925690998-B0GK2T3LSY-&hvexpln=0&language=pt_BR&th=1"
 },
 {
  "id": "kit-panos-de-boca-algodao-ii",
  "name": "Kit Panos de Boca Algodão II (Incomfral)",
  "category": "Higiene",
  "description": "Outra estampa do kit.",
  "price": null,
  "imageUrl": "assets/img/produtos/kit-panos-de-boca-algodao-ii.webp",
  "externalUrl": "https://www.amazon.com.br/Menino-Menina-Algod%C3%A3o-Unidades-Incomfral/dp/B0GK2QLJYV/ref=asc_df_B0GK2T3LSY?mcid=0ed0ba0cd92d366daeb8dda1bddff555&tag=googleshopp00-20&linkCode=df0&hvadid=709857676527&hvpos=&hvnetw=g&hvrand=4013267913925690998&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074192&hvtargid=pla-2466505198001&hvocijid=4013267913925690998-B0GK2T3LSY-&hvexpln=0&language=pt_BR&th=1"
 },
 {
  "id": "trocador-de-fraldas-portatil",
  "name": "Trocador de Fraldas Portátil",
  "category": "Cuidados",
  "description": "Dobrável e impermeável.",
  "price": null,
  "imageUrl": "assets/img/produtos/trocador-de-fraldas-portatil.webp",
  "externalUrl": "https://produto.mercadolivre.com.br/MLB-4438381501-trocador-de-fraldas-portatil-dobravel-e-impermeavel-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic"
 },
 {
  "id": "jogo-de-lencol-para-carrinho",
  "name": "Jogo de Lençol para Carrinho",
  "category": "Quarto",
  "description": "Linho jeans Batistela.",
  "price": null,
  "imageUrl": "assets/img/produtos/jogo-de-lencol-para-carrinho.webp",
  "externalUrl": "https://www.mercadolivre.com.br/jogo-de-lencol-para-carrinho-de-bebe-linho-jeans-batistela/up/MLBU766060697?pdp_filters=item_id%3AMLB3565128611&from=gshop&matt_tool=40566012&matt_word=&matt_source=google&matt_campaign_id=23440873650&matt_ad_group_id=192555038294&matt_match_type=&matt_network=g&matt_device=c&matt_creative=799032782590&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=686238646&matt_product_id=MLBU766060697&matt_product_partition_id=2497299314619&matt_target_id=pla-2497299314619&cq_src=google_ads&cq_cmp=23440873650&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23440873650&gbraid=0AAAAAD93qcCTUhu_dkcRZKINq1LSIWn1M&gclid=CjwKCAjwqc_UBhBKEiwAWbl25sG5-NDl0Jn3PBlxnzv1KNoKDiqwtBZUeAmFW2ahJHL_jp_ct4_gHhoCMccQAvD_BwE"
 },
 {
  "id": "jogo-de-lencol-de-berco-americano",
  "name": "Jogo de Lençol de Berço Americano",
  "category": "Quarto",
  "description": "Algodão verde-oliva.",
  "price": null,
  "imageUrl": "assets/img/produtos/jogo-de-lencol-de-berco-americano.webp",
  "externalUrl": "https://www.mercadolivre.com.br/jogo-lencol-de-berco-americano-em-algodao-verde-escuro-oliva/up/MLBU3229576189?pdp_filters=item_id%3AMLB4092651945&from=gshop&matt_tool=40566012&matt_word=&matt_source=google&matt_campaign_id=23440873650&matt_ad_group_id=192555038294&matt_match_type=&matt_network=g&matt_device=c&matt_creative=799032782590&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5542031579&matt_product_id=MLBU3229576189&matt_product_partition_id=2497299314619&matt_target_id=pla-2497299314619&cq_src=google_ads&cq_cmp=23440873650&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23440873650&gbraid=0AAAAAD93qcCTUhu_dkcRZKINq1LSIWn1M&gclid=CjwKCAjwqc_UBhBKEiwAWbl25hNy6Am13VTSvWWUlGutasRKuBYW5YCjHYxNLauREkeAloFFCYLdzRoCe3cQAvD_BwE"
 },
 {
  "id": "kit-manta-e-naninha-com-pelucia",
  "name": "Kit Manta e Naninha com Pelúcia",
  "category": "Quarto",
  "description": "Cobertinha + naninha.",
  "price": null,
  "imageUrl": "assets/img/produtos/kit-manta-e-naninha-com-pelucia.webp",
  "externalUrl": "https://www.mercadolivre.com.br/kit-manta-e-naninha-de-bebe-c-pelucia-coberta-menino-menina/up/MLBU3825831463?picker=true&quantity=1",
  "featured": true
 },
 {
  "id": "naninha-raposinha",
  "name": "Naninha Raposinha",
  "category": "Quarto",
  "description": "Cinza, para dormir agarradinho.",
  "price": null,
  "imageUrl": "assets/img/produtos/naninha-raposinha.webp",
  "externalUrl": "https://www.mercadolivre.com.br/naninha-de-bichinhos-para-bebe-raposinha-cinza/up/MLBU733338663?pdp_filters=item_id%3AMLB1800269285&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=191786782681&matt_match_type=&matt_network=g&matt_device=c&matt_creative=782869963103&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=355072982&matt_product_id=MLBU733338663&matt_product_partition_id=2495264115769&matt_target_id=pla-2495264115769&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25vru-9dz7e2t7AlyDq1HMgFyOHoGRjStD14Z2lKUPptjpmWPQ88athoCDOUQAvD_BwE"
 },
 {
  "id": "naninha-ursinho-hipoalergenica",
  "name": "Naninha Ursinho Hipoalergênica",
  "category": "Quarto",
  "description": "Pelúcia Flobaby.",
  "price": null,
  "imageUrl": "assets/img/produtos/naninha-ursinho-hipoalergenica.webp",
  "externalUrl": "https://www.mercadolivre.com.br/naninha-hipoalergenica-flobaby--ursinho-pelucia-rosa-azul/up/MLBU3787981377?pdp_filters=item_id%3AMLB6254244494&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=191786782681&matt_match_type=&matt_network=g&matt_device=c&matt_creative=782869963103&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5559696530&matt_product_id=MLBU3787981377&matt_product_partition_id=2495264115769&matt_target_id=pla-2495264115769&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25uAqBSyXoUNznRr1Ze5TAYwA4wwMEs_10QzyGQysHCirb4FbIvCZoRoCqY8QAvD_BwE"
 },
 {
  "id": "manta-de-trico-bichos-da-floresta",
  "name": "Manta de Tricô Bichos da Floresta",
  "category": "Quarto",
  "description": "Super macia.",
  "price": null,
  "imageUrl": "assets/img/produtos/manta-de-trico-bichos-da-floresta.webp",
  "externalUrl": "https://produto.mercadolivre.com.br/MLB-2025410089-cobertor-de-beb-manta-de-tric-super-macia-bichos-floresta-_JM?searchVariation=174204193388#is_advertising=true&searchVariation=174204193388&backend_model=search-backend&be_origin=backend&position=28&search_layout=grid&type=pad&tracking_id=6724f2e2-f3b5-4976-bbeb-f68e57e982eb&ad_domain=VQCATCORE_LST&ad_position=28&ad_click_id=NzdmNzU5MmUtZDA1My00ZjFlLWE5YjQtMTFkNGVmODlkM2Q2"
 },
 {
  "id": "kit-3-mantas-de-muselina",
  "name": "Kit 3 Mantas de Muselina",
  "category": "Quarto",
  "description": "Leves e macias.",
  "price": null,
  "imageUrl": "assets/img/produtos/kit-3-mantas-de-muselina.webp",
  "externalUrl": "https://produto.mercadolivre.com.br/MLB-7243608954-kit-3-mantas-de-muselina-para-beb-macias-e-leves-_JM?matt_tool=15663026&matt_word=&matt_source=google&matt_campaign_id=23369697978&matt_ad_group_id=188694908525&matt_match_type=&matt_network=g&matt_device=c&matt_creative=788903717759&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5826205367&matt_product_id=MLB7243608954&matt_product_partition_id=2394826346049&matt_target_id=pla-2394826346049&cq_src=google_ads&cq_cmp=23369697978&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23369697978&gbraid=0AAAAAD93qcDuQn_8pQtQGkQ25Yl1Lz2Y7&gclid=CjwKCAjwqc_UBhBKEiwAWbl25tvywZc46msfIDdzvO-xkAbdI9kEhWPS1ai_L95wiai-JHzVitOhVRoCk24QAvD_BwE"
 },
 {
  "id": "kit-3-cueiros-flanelados-80x80",
  "name": "Kit 3 Cueiros Flanelados 80x80",
  "category": "Quarto",
  "description": "Minasrey, tamanho grande.",
  "price": null,
  "imageUrl": "assets/img/produtos/kit-3-cueiros-flanelados-80x80.webp",
  "externalUrl": "https://www.mercadolivre.com.br/kit-cueiro-flanelado-grande-p-bebe-3-unid-80x80--minasrey/up/MLBU3858975643?pdp_filters=item_id%3AMLB6513281616&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=191786782681&matt_match_type=&matt_network=g&matt_device=c&matt_creative=782869963103&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=336038238&matt_product_id=MLBU3858975643&matt_product_partition_id=2495264115769&matt_target_id=pla-2495264115769&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25mh6Ba3hzRSMrvvY1qDPnJd062X3fLNS9XOATEeNGxcslZlloffgiRoCOIIQAvD_BwE"
 },
 {
  "id": "kit-3-cestos-organizadores-de-bambu",
  "name": "Kit 3 Cestos Organizadores de Bambu",
  "category": "Quarto",
  "description": "Multiuso com forro.",
  "price": null,
  "imageUrl": "assets/img/produtos/kit-3-cestos-organizadores-de-bambu.webp",
  "externalUrl": "https://www.mercadolivre.com.br/kit-3-cestos-organizador-de-bambu-multiuso-com-forro/p/MLB27981568?pdp_filters=item_id:MLB4185585590&matt_tool=18764903&matt_internal_campaign_id=356617081&matt_word=&matt_source=google&matt_campaign_id=23825084879&matt_ad_group_id=200692392871&matt_match_type=&matt_network=g&matt_device=c&matt_creative=813996966210&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=272241205&matt_product_id=MLB4185585590&matt_product_partition_id=2554060882317&matt_target_id=pla-2554060882317&cq_src=google_ads&cq_cmp=23825084879&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23825084879&gbraid=0AAAAAD93qcCxGtRKWdqRJDSEv8LvTOb5x&gclid=CjwKCAjwqc_UBhBKEiwAWbl25gS1jfXnv6fDW3Li_cihFB80ibQFw7Et2OFL5SbW9EvfhF85J0WIRxoCWJsQAvD_BwE"
 },
 {
  "id": "bolsa-cesto-organizador-de-bebe",
  "name": "Bolsa Cesto Organizador de Bebê",
  "category": "Quarto",
  "description": "Para fraldas e mamadeiras.",
  "price": null,
  "imageUrl": "assets/img/produtos/bolsa-cesto-organizador-de-bebe.webp",
  "externalUrl": "https://www.mercadolivre.com.br/bolsa-cesto-organizador-bebe-fraldas-mamadeira-maternidade/up/MLBU4512481283?picker=true&quantity=1"
 },
 {
  "id": "porta-mamadeira-termico",
  "name": "Porta-Mamadeira Térmico",
  "category": "Alimentação",
  "description": "Bege com urso bordado.",
  "price": null,
  "imageUrl": "assets/img/produtos/porta-mamadeira-termico.webp",
  "externalUrl": "https://www.mercadolivre.com.br/porta-mamadeira-termico-bege-com-urso-bordado-azul-bebe/up/MLBU3679821507?pdp_filters=item_id%3AMLB4371071543&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=193044698394&matt_match_type=&matt_network=g&matt_device=c&matt_creative=787871502884&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5562905253&matt_product_id=MLBU3679821507&matt_product_partition_id=2524474190044&matt_target_id=pla-2524474190044&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25p0brY9E5OkoppPsrYKQw20WPGcN7UkJnecHwY4PtaB0NeJpbXLO-xoCpmMQAvD_BwE"
 },
 {
  "id": "kit-2-chupetas-buba-0-6m",
  "name": "Kit 2 Chupetas Buba 0-6M",
  "category": "Alimentação",
  "description": "Bico de silicone, elefante azul.",
  "price": null,
  "imageUrl": "assets/img/produtos/kit-2-chupetas-buba-0-6m.webp",
  "externalUrl": "https://www.mercadolivre.com.br/kit-2-chupeta-buba-0-6-meses-bico-silicone-comfort-tam-1-cor-elefante-azul/p/MLB58908322?product_trigger_id=MLB63775783&pdp_filters=item_id%3AMLB6618216678&applied_product_filters=MLB58481013&from=gshop&picker=true&matt_tool=80237899&matt_word=&matt_source=google&matt_campaign_id=22090354532&matt_ad_group_id=173090620316&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882733967&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB58481013-product&matt_product_partition_id=2496046917730&matt_target_id=pla-2496046917730&cq_src=google_ads&cq_cmp=22090354532&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354532&gbraid=0AAAAAD93qcC7rt1CJKNqYcnmFOSJNyHo4&gclid=CjwKCAjwqc_UBhBKEiwAWbl25vYwzlpDn-ZfE7Ng_Edy8yrJyior42zpvMBwz6bOcp-1sy7ALBZrjhoCP7EQAvD_BwE&quantity=1"
 },
 {
  "id": "chupeta-philips-avent-ultra-air-0",
  "name": "Chupeta Philips Avent Ultra Air 0-6M",
  "category": "Alimentação",
  "description": "Silicone, para menino.",
  "price": null,
  "imageUrl": "assets/img/produtos/chupeta-philips-avent-ultra-air-0.webp",
  "externalUrl": "https://www.mercadolivre.com.br/chupeta-avent-ultra-air-0-6-meses-philips-silicone-menino/up/MLBU1400682542?pdp_filters=item_id%3AMLB3463384911&from=gshop&matt_tool=80237899&matt_word=&matt_source=google&matt_campaign_id=22090354532&matt_ad_group_id=173090620316&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882733967&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=690107132&matt_product_id=MLBU1400682542&matt_product_partition_id=2496046917730&matt_target_id=pla-2496046917730&cq_src=google_ads&cq_cmp=22090354532&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354532&gbraid=0AAAAAD93qcC7rt1CJKNqYcnmFOSJNyHo4&gclid=CjwKCAjwqc_UBhBKEiwAWbl25pPbeyEydglHBH0eR7u0tI_QSZNGK7HsaTGlvRuckuRV2Gyyza4X3BoCngMQAvD_BwE"
 },
 {
  "id": "mamadeira",
  "name": "Mamadeira",
  "category": "Alimentação",
  "description": "Para as mamadas do dia.",
  "price": null,
  "imageUrl": "assets/img/produtos/mamadeira.webp",
  "externalUrl": "https://shopee.com.br/product/372598521/53406805690?gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTEcgAAAAygTrtrTFMGHj-oJFcPkrmQNn_SyOygtQ9GfZ8cQXEJO0W6rtS7ltF8oWq5B2KyGnzORldi4pHP9e0a0WR2O4Cj3NGwkNln4GvtPEVwlT8a2Y-xLezj_xB8_0cYpaziZnJ_4IR2WaAoRo-4GpwJmQ"
 },
 {
  "id": "mamadeira-perfect-match-ovelha-150ml",
  "name": "Mamadeira Perfect Match Ovelha 150ml",
  "category": "Alimentação",
  "description": "Fluxo lento, 0M+.",
  "price": null,
  "imageUrl": "assets/img/produtos/mamadeira-perfect-match-ovelha-150ml.webp",
  "externalUrl": "https://www.mercadolivre.com.br/mamadeira-perfect-match-0-meses-fluxo-lento-150ml-ovelha/up/MLBU4876668210?pdp_filters=item_id%3AMLB7468635234&from=gshop&matt_tool=53292458&matt_word=&matt_source=google&matt_campaign_id=22120855566&matt_ad_group_id=179138690291&matt_match_type=&matt_network=g&matt_device=c&matt_creative=729092955340&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5406190736&matt_product_id=MLBU4876668210&matt_product_partition_id=2496704471215&matt_target_id=pla-2496704471215&cq_src=google_ads&cq_cmp=22120855566&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22120855566&gbraid=0AAAAAD93qcAD1PwnZge-6zZRTx-QcwBkj&gclid=CjwKCAjwqc_UBhBKEiwAWbl25ivmaS8fJMWLDjOi_HWowSQu6Zx3lvyUU7jZX0DwnmopNqu2VoX7pxoCdBgQAvD_BwE"
 },
 {
  "id": "bolsa-de-maternidade-grande",
  "name": "Bolsa de Maternidade Grande",
  "category": "Outros",
  "description": "Grande capacidade.",
  "price": null,
  "imageUrl": "assets/img/produtos/bolsa-de-maternidade-grande.webp",
  "externalUrl": "https://www.mercadolivre.com.br/bolsa-de-fraldas-grande-capacidade-para-trocar-bebes-c-sin/p/MLB2053003622#polycard_client=recommendations_vpp-cbt&reco_backend=vpp_cbt_retrieval_system&reco_model=rk_ent_v2_retsys_org_cbt&reco_client=vpp-cbt&reco_item_pos=0&reco_backend_type=low_level&reco_id=1132783d-f39f-413b-869c-57a3bd7754e7&wid=MLB5132508043&sid=recos"
 },
 {
  "id": "mobile-eletrico-com-chocalho-musical",
  "name": "Móbile Elétrico com Chocalho Musical",
  "category": "Quarto",
  "description": "Controle de som.",
  "price": null,
  "imageUrl": "assets/img/produtos/mobile-eletrico-com-chocalho-musical.webp",
  "externalUrl": "https://produto.mercadolivre.com.br/MLB-4088363985-mobile-eletrico-de-beb-com-chocalho-musical-controle-de-som-_JM?matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=173090547036&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882728456&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5839284358&matt_product_id=MLB4088363985&matt_product_partition_id=2497776677257&matt_target_id=pla-2497776677257&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25gozzJesz3gdUNOcvsKeYSpLuPo7UWAZuhvdHvYwVt_9_F7CNAv_NBoCOwoQAvD_BwE"
 },
 {
  "id": "ginasio-de-atividades-com-bolinhas",
  "name": "Ginásio de Atividades com Bolinhas",
  "category": "Outros",
  "description": "Tapete interativo com móbile.",
  "price": null,
  "imageUrl": "assets/img/produtos/ginasio-de-atividades-com-bolinhas.webp",
  "externalUrl": "https://www.mercadolivre.com.br/tapete-interativo-bebe-bolinhas-e-mobile-movie-maxi-baby/p/MLB45385463?pdp_filters=item_id%3AMLB5252472588&from=gshop&matt_tool=83257274&matt_word=&matt_source=google&matt_campaign_id=22090193888&matt_ad_group_id=174661975644&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914180463&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB45385463-product&matt_product_partition_id=2495580956535&matt_target_id=pla-2495580956535&cq_src=google_ads&cq_cmp=22090193888&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090193888&gbraid=0AAAAAD93qcBYpeZxnMeJ_izpeRJ30978E&gclid=CjwKCAjwqc_UBhBKEiwAWbl25j2pojgyymBdnwitYh5jY1-km1b3A9EPokIcHbHvwPrmvs4vVSY9CRoCPTwQAvD_BwE"
 },
 {
  "id": "cadeira-de-descanso-musical-leao",
  "name": "Cadeira de Descanso Musical Leão",
  "category": "Outros",
  "description": "Balanço Fun Time (Maxi Baby).",
  "price": null,
  "imageUrl": "assets/img/produtos/cadeira-de-descanso-musical-leao.webp",
  "externalUrl": "https://www.mercadolivre.com.br/maxi-baby-cadeira-de-descanso-e-balanco-bebe-musical-fun-time-felix-leao/p/MLB38625704?matt_event_ts=1788131388675&matt_d2id=ec70b00c-1ba9-459e-9b68-cb30016450c8&matt_tracing_id=a1d28713-61ad-4717-820b-249c031ec39f#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=76718861&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=21eae22a-2b07-46d3-94e4-3d8df04ed3d9&tracking_id=214235e4-c288-48b3-94a9-2da0f60943a3&c_id=/home/card-featured/element&c_uid=efe18d03-121e-452c-822a-c0d2bec8cc71"
 },
 {
  "id": "cinta-termica-para-colica",
  "name": "Cinta Térmica para Cólica",
  "category": "Cuidados",
  "description": "Alívio das cólicas do bebê.",
  "price": null,
  "imageUrl": "assets/img/produtos/cinta-termica-para-colica.webp",
  "externalUrl": "https://shopee.com.br/product/572649927/23197732351?credential_token=8wEwiDL7YDd2Bdu48EvouUQyfTy8Afpob7CfYogPWx&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTElwAAAAzjvPachFaIZ4sK-Ffc19nr7JZ4WQx10NTdvgZLZZrkI8UnaoYzQPu5RxO_VabQiY02ILOWwXyVaY4lI2AAb1o8w6pFE6Acp2eXTQBP0emfJNYAZYRY3YakIL2EqNn9ySLc8Xfy_eBRTrWNQhEX0dFqWNPxIbBiZ_L27RWQH05Nmz2f7nQZgdx29v9WGFEDHWlGOUI&mmp_pid=an_18116240000&uls_trackid=56h0tvps031f&utm_campaign=id_734cd55d1c66fe38&utm_content=descontinhodemamae----&utm_medium=affiliates&utm_source=an_18116240000&utm_term=fgc62228kef9"
 },
 {
  "id": "reprodutor-de-ruido-branco",
  "name": "Reprodutor de Ruído Branco",
  "category": "Quarto",
  "description": "Sons do útero para o sono do bebê.",
  "price": null,
  "imageUrl": "assets/img/produtos/reprodutor-de-ruido-branco.webp",
  "externalUrl": "https://www.mercadolivre.com.br/ruido-bebe-aparelho-com-barulho-de-dormir-ambiente-do-utero-branco-marca-spitfire/p/MLB74748179?pdp_filters=item_id:MLB7070191382#reviews"
 },
 {
  "id": "baba-eletronica-com-visao-noturna",
  "name": "Babá Eletrônica com Visão Noturna",
  "category": "Quarto",
  "description": "Monitor VB603, áudio duplo.",
  "price": null,
  "imageUrl": "assets/img/produtos/baba-eletronica-com-visao-noturna.webp",
  "externalUrl": "https://www.mercadolivre.com.br/baba-eletronica-baby-monitor-vb603-visao-noturna-dual-audio-cor-branco-estary-shop/p/MLB47899174#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=5&type=product&tracking_id=ebfe02ef-899a-488d-aff5-228379b56a73&wid=MLB5351539370&sid=search"
 },
 {
  "id": "esterilizador-de-mamadeiras-micro-ondas",
  "name": "Esterilizador de Mamadeiras (micro-ondas)",
  "category": "Alimentação",
  "description": "Buba, praticidade na rotina.",
  "price": null,
  "imageUrl": "assets/img/produtos/esterilizador-de-mamadeiras-micro-ondas.webp",
  "externalUrl": "https://www.mercadolivre.com.br/esterilizador-de-mamadeiras-para-micro-ondas-buba/p/MLB28067859#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=54&type=product&tracking_id=2497f01b-bccd-4778-a3ea-ee03d9ee88f2&wid=MLB5263675198&sid=search"
 },
 {
  "id": "almofada-protetora-anti-queda-tartaruga",
  "name": "Almofada Protetora Anti-Queda Tartaruga",
  "category": "Cuidados",
  "description": "Mochila protetora de cabeça.",
  "price": null,
  "imageUrl": "assets/img/cat-cuidados.png",
  "externalUrl": "https://www.mercadolivre.com.br/mochila-almofada-protetor-cabeca-seguranca-pimpolho-bebe-cor-verde-tartaruga/p/MLB64099482?pdp_filters=item_id%3AMLB6160692772&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=173090547276&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882728465&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB64099482-product&matt_product_partition_id=2496112860465&matt_target_id=pla-2496112860465&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25jzr5MC9_s7K_aoReGZYu9pIKR-TWdse_cNOFxLFrJ4KkzD9-zsfGxoCa4YQAvD_BwE"
 },
 {
  "id": "tapete-de-atividades-musical-piano",
  "name": "Tapete de Atividades Musical Piano",
  "category": "Outros",
  "description": "Ginásio Lumi verde (Maxi Baby).",
  "price": null,
  "imageUrl": "assets/img/produtos/tapete-de-atividades-musical-piano.webp",
  "externalUrl": "https://www.mercadolivre.com.br/tapete-de-atividades-musical-bebe-piano-lumi-verde-maxi-baby/p/MLB44462288?pdp_filters=seller_id%3A222533718#polycard_client=recommendations_pdp-seller_items-above&reco_backend=ranker-retsys-same-seller&reco_model=fallback_same-seller&reco_client=pdp-seller_items-above&reco_item_pos=0&reco_backend_type=low_level&reco_id=f98375b9-bf7e-474f-a18b-c6d0e3680577&wid=MLB5209262282&sid=recos"
 },
 {
  "id": "carrossel-de-atividades-buba",
  "name": "Carrossel de Atividades (Buba)",
  "category": "Outros",
  "description": "Movimento interativo.",
  "price": null,
  "imageUrl": "assets/img/produtos/carrossel-de-atividades-buba.webp",
  "externalUrl": "https://www.mercadolivre.com.br/carrossel-de-atividades-brinquedo-movimento-interativo-buba/up/MLBU3522522236?pdp_filters=item_id%3AMLB4275609679&matt_event_ts=1788131733801&matt_d2id=ec70b00c-1ba9-459e-9b68-cb30016450c8&matt_tracing_id=06cb7f4b-5b67-4e3b-b108-cff4f765cfac#polycard_client=recommendations_home_affiliate-profile&wid=MLB4275609679&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=76718861&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=5c09480f-c192-4657-9139-058b9bdefb07&tracking_id=b85178c1-ca7f-46ab-a9dd-e03a585766ea&c_id=/home/card-featured/element&c_uid=43a969ef-bad5-429f-a0f5-fcf52382e077"
 },
 {
  "id": "garrafa-termica-buba",
  "name": "Garrafa Térmica Buba",
  "category": "Alimentação",
  "description": "Água quentinha a qualquer hora.",
  "price": null,
  "imageUrl": "assets/img/produtos/garrafa-termica-buba.webp",
  "externalUrl": "https://www.amazon.com.br/dp/B08JXP4NFR?tag=baby-split-20&th=1"
 },
 {
  "id": "conjunto-cookies-carters",
  "name": "Conjunto Cookies Carter’s (P ou M)",
  "category": "Roupinhas",
  "description": "Conjunto 3 peças.",
  "price": null,
  "imageUrl": "assets/img/produtos/conjunto-cookies.webp",
  "externalUrl": "https://www.riachuelo.com.br/conjunto-longo-bebe-3-pecas-cookies-cinza-carter-s-16300106_sku_sku?utm_source=awin&utm_id=1738645_&utm_campaign=affiliate&sv1=affiliate&sv_campaign_id=1738645&awc=86587_1788128442_904812b6e7ea03472497316eaa861af8",
  "featured": true
 },
 {
  "id": "conjunto-tricot-azul-bebe",
  "name": "Conjunto Azul-Bebê Tricot Manga Curta (M)",
  "category": "Roupinhas",
  "description": "Blusa polo + shorts.",
  "price": null,
  "imageUrl": "assets/img/produtos/conjunto-tricot-azul.webp",
  "externalUrl": "https://shopee.com.br/Conjunto-Tricot-Premium-Beb%C3%AA-Menino-Blusa-Polo-Manga-Curta-Shorts-Cl%C3%A1ssico-Elegante-i.1834008345.58261640717?extraParams=%7B%22display_model_id%22%3A239444000907%2C%22model_selection_logic%22%3Anull%7D"
 },
 {
  "id": "conjunto-praia-pinguim",
  "name": "Conjunto Praia Pinguim (3-6 meses)",
  "category": "Roupinhas",
  "description": "Com chapéu e proteção UV.",
  "price": null,
  "imageUrl": "assets/img/produtos/conjunto-praia-pinguim.webp",
  "externalUrl": "https://produto.mercadolivre.com.br/MLB-876289471-conjunto-uv-infantil-proteco-solar-com-chapeu-beb-praia-_JM?attributes=COLOR_SECONDARY_COLOR%3AQXp1bC1jbGFybw%3D%3D%2CSIZE%3AMy02IE0%3D&picker=true&searchVariation=173759067239&matt_event_ts=1788129355760&matt_d2id=ec70b00c-1ba9-459e-9b68-cb30016450c8&matt_tracing_id=1ac0c84d-6a3b-4429-b8f8-23b2cc80ac94&quantity=1"
 },
 {
  "id": "kit-3-macacoes-p",
  "name": "Kit 3 Macacões (P)",
  "category": "Roupinhas",
  "description": "Trio de macacões.",
  "price": null,
  "imageUrl": "assets/img/produtos/kit-3-macacoes.webp",
  "externalUrl": "https://shopee.com.br/product/1777221519/22094979416?credential_token=8wEwiDL7YDXiJxgFLkQVadts9V22zDRCh3CbHYjUJC&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTEmQAAAAyAIJcO36xaSplqMuncObuZADKBC_Wy0pKJOxF9zEXaFwshVx-SzWm4-exuLZYQqFWtNXcr02ilv2PPrwIBrp6YIK8a_l523dg2c5NhF2Z1la4fBKk36u43f6vrpNYSJsI0WA9IsaDd_guQR_cx_F9r7c82WCDvaQ0ad6hoxmHmrrN4UU4vuZQoVC49aMGz03Mvlz-u3g&mmp_pid=an_18319270113&uls_trackid=56h1a4pd003m&utm_campaign=id_1f82e4cd05589b62&utm_content=Enviopromos----&utm_medium=affiliates&utm_source=an_18319270113&utm_term=fgcfe4uwqif1"
 },
 {
  "id": "kit-3-macaquinhos-neutro-m",
  "name": "Kit 3 Macaquinhos Neutro (M)",
  "category": "Roupinhas",
  "description": "Tons neutros.",
  "price": null,
  "imageUrl": "assets/img/produtos/kit-3-macaquinhos.webp",
  "externalUrl": "https://shopee.com.br/product/1206607146/22099049921?credential_token=8wEwiDL7YDXiJxyxM7BEURpTrGq51TcHXzAbJfMHYA&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTEmQAAAAwoHXmk42_W1kYZj0_RryXu_fivmnnJEm7IHTgpVsXBfs5T9PhdK70nMGlMm2w8J4w0Nv85wqt4ZsymVoD5vjtldPPkRad0drCqJBm2u7UoDEzjWwxF0eZcTG-zidLBkEEna4DiJAGWLKNVh-voXadltYI26p0OXN4YkxWHocsIPoYi3Kzo6USNEIYElOg_oK2w7aSmdQ&mmp_pid=an_18319270113&uls_trackid=56h1dmeg00a5&utm_campaign=id_37357442c1bc4118&utm_content=Enviopromos----&utm_medium=affiliates&utm_source=an_18319270113&utm_term=fgci52unu64o"
 },
 {
  "id": "kit-body-raposa-p",
  "name": "Kit Body Raposa Manga Curta (P)",
  "category": "Roupinhas",
  "description": "Malha canelada de algodão.",
  "price": null,
  "imageUrl": "assets/img/produtos/kit-body-raposa.webp",
  "externalUrl": "https://shopee.com.br/Kit-3-Body-Manga-Curta-Estampado-Liso-Roupa-de-Beb%C3%AA-Malha-Canelada-Algod%C3%A3o-Menino-Enxoval-i.477029210.23093967095?xptdk=db4123b9-5519-4b63-8508-2be0c35c475c"
 },
 {
  "id": "kit-3-cueiros",
  "name": "Kit 3 Cueiros",
  "category": "Roupinhas",
  "description": "Cueiros macios.",
  "price": null,
  "imageUrl": "assets/img/produtos/kit-3-cueiros.webp",
  "externalUrl": "https://shopee.com.br/product/683335537/15694363553?credential_token=8wEwiDL7XpU6YKDja6LzdQBZKEPgsiAL68jPzTCK7Q&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTElwAAAAxDPfKl5srus_2hi4pu6InZBuFIVdcJlOKIAQLEPEN-nWEvnHP8w08EbrL473xs3C9IaqkwUjo2Zc9s7DiAZQyn9X1G-C-6J9BXlqml1JsAz-35fHJ_etdmDSH8bZavRhJR3L4BPG08R_y2hXFLPNLEQJ7K18gcRjV_voLMJlpkYrNN591PDOF7kZE0i3UFh3daDMA&mmp_pid=an_18319270113&uls_trackid=56h18s7c002q&utm_campaign=id_4b657974595cf519&utm_content=Enviopromos----&utm_medium=affiliates&utm_source=an_18319270113&utm_term=fgceey33szas"
 },
 {
  "id": "saida-maternidade-azul-trico",
  "name": "Saída Maternidade Azul-Bebê Tricô",
  "category": "Roupinhas",
  "description": "Conjunto completo em tricô.",
  "price": null,
  "imageUrl": "assets/img/produtos/saida-maternidade-trico.webp",
  "externalUrl": "https://shopee.com.br/product/1442901887/57110915772?credential_token=8wEwiDL7ZRzyoYw3Ay4JamMfmezMm39LNE5SFuYJXV&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTEmQAAAAxXbgUR9dRSBAC6huX97nIoHFdvTh-A6_22nNWprHkhB42KsS5o8W1AJDDDT8J7ft-p4sZIez0vp_7lpcNG-QlcHCTCBj_5ioJkz2oVkvt55bD5aFgEPGHh8RUhUUUxsuxT6lKYImjnzsmrGSpaRB5A4rrN-UME6fYO3Sh21iDDvJg_mqbWmuJ-EaHPhpZ88euZbPbn5Q&mmp_pid=an_18319270113&uls_trackid=56h1dec2003m&utm_campaign=id_141189913c7e29aa&utm_content=Enviopromos----&utm_medium=affiliates&utm_source=an_18319270113&utm_term=fgchxgbvhzhd"
 },
 {
  "id": "saida-maternidade-dino",
  "name": "Saída Maternidade Dino",
  "category": "Roupinhas",
  "description": "Look da primeira foto.",
  "price": null,
  "imageUrl": "assets/img/produtos/saida-maternidade-dino.webp",
  "externalUrl": "https://shopee.com.br/product/575397523/45901685352?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTElwAAAAxMErzTti-Wd1Abia4KYtbZdKPukHNcg3Dy9lhZXLY9EkLye8b31XUtdd1HeCE8bey3cEX9dztQoP-NrGR3wOxoMiP5yh32eW95SVYAWVt4PXTOS1ge7RhMHhUPOSplgXHE0MaGaTzncmyNboUQzkp99m4rPzqpdg3USXFQesosIO0M08DTT2e_5imhJvfPfff9N7k&mmp_pid=an_18364220059&uls_trackid=56h193v900a5&utm_campaign=id_bd7f4d1795035b10&utm_content=instagram-obrigadodonacegonha-stories-grupo-storyinstagram&utm_medium=affiliates&utm_source=an_18364220059&utm_term=fgcemaeugdhq"
 }
];

/* ===================== RESERVAS (localStorage) =====================
   Fica só neste navegador. Para compartilhar entre todos os convidados,
   trocar loadReservations/saveReservations por um backend. */
const SUPABASE = {
  url: 'https://dfmqlbwlhszumxrdfaam.supabase.co/rest/v1/compras',
  key: 'sb_publishable_bG6g9ciWWl2-PYgCB_PoMg_2jqJzdhu', // chave publica (somente ler/inserir via RLS)
};
function sbHeaders(){ return { apikey: SUPABASE.key, Authorization: 'Bearer '+SUPABASE.key, 'Content-Type': 'application/json' }; }
// item_id -> nome de quem comprou (presentes). Fraldas nunca bloqueiam.
let purchased = {};
let purchaseRows = [];
async function loadPurchases(){
  try{
    const ctl=new AbortController(); const t=setTimeout(()=>ctl.abort(),7000);
    const res=await fetch(SUPABASE.url+'?select=item_id,guest_name,created_at&order=created_at.asc',{headers:sbHeaders(),signal:ctl.signal});
    clearTimeout(t);
    if(!res.ok) return;
    const rows=await res.json();
    purchaseRows=rows;
    purchased={};
    rows.forEach(r=>{ if(!r.item_id.includes('#')) purchased[r.item_id]=r.guest_name; });
  }catch(e){ /* sem banco, site segue sem bloqueio */ }
}
async function registerPurchase(itemId,name){
  const ctl=new AbortController(); const t=setTimeout(()=>ctl.abort(),8000);
  try{
    const res=await fetch(SUPABASE.url,{method:'POST',headers:{...sbHeaders(),Prefer:'return=minimal'},
      body:JSON.stringify({item_id:itemId,guest_name:name}),signal:ctl.signal});
    clearTimeout(t);
    if(res.status===409) return 'conflict';
    return res.ok ? 'ok' : 'error';
  }catch(e){ clearTimeout(t); return 'error'; }
}
function giftTaken(g){ return !!purchased[g.id]; }

/* ===================== HELPERS ===================== */
const $=(s,el=document)=>el.querySelector(s);
const $$=(s,el=document)=>Array.from(el.querySelectorAll(s));
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function page(){ return document.body.dataset.page||'inicio'; }

/* ===================== LAYOUT COMPARTILHADO ===================== */
const NAV=[['inicio','index.html','Início'],['lista','lista.html','Lista de presentes'],['fraldas','fraldas.html','Fraldas'],['presentes','presentes.html','Presentes'],['sobre','sobre.html','Sobre o chá']];
const ICON_GIFT='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>';

function renderHeader(){
  const cur=page();
  const links=cls=>NAV.map(([id,href,label])=>`<a class="${cls} ${cur===id?'active':''}" href="${href}">${label}</a>`).join('');
  $('#site-header').innerHTML=`
    <div class="header-inner">
      <a class="brand" href="index.html"><img src="assets/img/teddy.png" alt=""><span>Chá do</span><span class="script">Cassiel</span></a>
      <nav class="desktop-nav" aria-label="Principal">${links('nav-link')}</nav>
      <a class="btn btn-primary btn-sm header-cta" href="presentes.html">${ICON_GIFT} Quero presentear</a>
      <button class="hamburger" id="hamburger" aria-label="Abrir menu" aria-expanded="false">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
      </button>
    </div>
    <nav class="mobile-nav" id="mobileNav" aria-label="Menu">${links('mobile-nav-link')}
      <a class="btn btn-primary" href="presentes.html">${ICON_GIFT} Quero presentear</a>
    </nav>`;
  const hb=$('#hamburger'), mn=$('#mobileNav');
  hb.addEventListener('click',()=>{ const o=mn.classList.toggle('open'); hb.setAttribute('aria-expanded',o); });
}

function renderFooter(){
  const el=$('#site-footer'); if(!el) return;
  el.innerHTML=`
    <svg class="wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 30 C 180 0 360 0 540 30 S 900 60 1080 30 S 1350 0 1440 30 V60 H0Z"/></svg>
    <div class="footer-body"><div class="footer-inner">
      <p>Com carinho,<br>Maria &amp; família</p>
      <p class="center">Chá do Cassiel • ${esc(EVENT.date)}</p>
      <img src="assets/img/bear-sleep.png" alt="">
    </div></div>`;
  const fab=$('#whatsappFab'); if(!fab) return;
  if(EXTERNAL_LINKS.whatsapp){ fab.href='https://wa.me/'+EXTERNAL_LINKS.whatsapp+'?text='+encodeURIComponent(WHATSAPP_MSG); }
  else { fab.removeAttribute('target'); fab.addEventListener('click',e=>{ e.preventDefault(); toast('O contato para confirmar presença será divulgado em breve 💙'); }); }
}

function renderModal(){
  document.body.insertAdjacentHTML('beforeend',`
  <div class="modal-overlay" id="modal">
    <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button class="modal-close" id="modalClose" aria-label="Fechar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <h3 id="modalTitle">Que carinho! 💙</h3>
      <p class="modal-product" id="modalProduct"></p>
      <p class="modal-text">Deixe seu nome para riscar esse presente da lista — assim ninguém compra repetido.</p>
      <form class="modal-form" id="reserveForm" novalidate>
        <label for="guestName">Seu nome</label>
        <input id="guestName" type="text" placeholder="Digite seu nome" autocomplete="name" aria-required="true">
        <p class="form-error" id="formError" role="alert" hidden></p>
        <div class="modal-actions">
          <button type="button" class="btn btn-secondary" id="modalCancel">Voltar</button>
          <button type="submit" class="btn btn-primary">Riscar da lista</button>
        </div>
      </form>
    </div>
  </div>
  <div class="toast" id="toast" role="status"></div>`);
  document.body.insertAdjacentHTML('beforeend',`
  <div class="modal-overlay" id="exitPopup">
    <div class="modal-card exit-card" role="dialog" aria-modal="true" aria-labelledby="exitTitle">
      <button class="modal-close" id="exitClose" aria-label="Fechar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <img class="exit-bear" src="assets/img/bear-heart-balloon.png" alt="">
      <h3 id="exitTitle">Não vai escolher nada? 😢</h3>
      <p class="modal-text">O Cassiel ia adorar um mimo seu... Dá uma olhadinha na lista — tem presente de todo jeitinho! 💙</p>
      <div class="modal-actions" style="justify-content:center">
        <button type="button" class="btn btn-secondary" id="exitLater">Agora não</button>
        <a class="btn btn-primary" href="lista.html">Ver a lista de presentes</a>
      </div>
    </div>
  </div>`);
  const exitPopup=$('#exitPopup');
  function closeExit(){ exitPopup.classList.remove('open'); document.body.style.overflow=''; }
  function openExit(){
    try{ if(sessionStorage.getItem('cassiel-exit-shown')) return; sessionStorage.setItem('cassiel-exit-shown','1'); }catch(e){}
    if($('#modal').classList.contains('open')) return;
    exitPopup.classList.add('open'); document.body.style.overflow='hidden';
  }
  $('#exitClose').addEventListener('click',closeExit);
  $('#exitLater').addEventListener('click',closeExit);
  exitPopup.addEventListener('mousedown',e=>{ if(e.target===exitPopup) closeExit(); });
  window.addEventListener('keydown',e=>{ if(e.key==='Escape'&&exitPopup.classList.contains('open')) closeExit(); });
  if(!window.matchMedia('(pointer:coarse)').matches){
    setTimeout(()=>{ document.addEventListener('mouseout',e=>{
      if(!e.relatedTarget && e.clientY<=8) openExit();
    }); },5000);
  }
  const modal=$('#modal'), nameInput=$('#guestName'), err=$('#formError');
  let currentId=null;
  window.openReserve=function(id){
    currentId=id;
    const item=DIAPERS.find(d=>d.id===id)||GIFTS.find(g=>g.id===id);
    if(!item) return;
    $('#modalProduct').textContent=item.size?`Fralda ${item.name} — Tam. ${item.size}`:item.name;
    nameInput.value=''; err.hidden=true;
    modal.classList.add('open'); document.body.style.overflow='hidden';
    setTimeout(()=>nameInput.focus(),60);
  };
  function closeModal(){ modal.classList.remove('open'); document.body.style.overflow=''; currentId=null; }
  $('#modalClose').addEventListener('click',closeModal);
  $('#modalCancel').addEventListener('click',closeModal);
  modal.addEventListener('mousedown',e=>{ if(e.target===modal) closeModal(); });
  window.addEventListener('keydown',e=>{ if(e.key==='Escape'&&modal.classList.contains('open')) closeModal(); });
  $('#reserveForm').addEventListener('submit',async e=>{
    e.preventDefault();
    const name=nameInput.value.trim();
    if(!name){ err.textContent='Por favor, digite seu nome para continuar.'; err.hidden=false; nameInput.focus(); return; }
    err.hidden=true;
    const id=currentId;
    const isDiaper=!!DIAPERS.find(d=>d.id===id);
    const btn=e.target.querySelector('button[type=submit]');
    btn.disabled=true; btn.textContent='Riscando...';
    const result=await registerPurchase(isDiaper? id+'#'+Date.now() : id, name);
    btn.disabled=false; btn.textContent='Riscar da lista';
    if(result==='conflict'){ await loadPurchases(); closeModal(); rerender(); toast('Ops! Alguém acabou de reservar esse presente 💙'); return; }
    if(result==='error'){ err.textContent='Não foi possível reservar agora. Tente de novo em instantes.'; err.hidden=false; return; }
    if(!isDiaper) purchased[id]=name;
    purchaseRows.push({item_id:isDiaper? id+'#x':id, guest_name:name});
    closeModal();
    // animação: risco + carimbo batendo no card visível
    const card=document.querySelector(`[data-lista-card="${id}"]`);
    if(card && !isDiaper){
      const item=GIFTS.find(g=>g.id===id);
      card.outerHTML=listaCard(item,false).replace('item-card riscado','item-card riscado animar');
      setTimeout(()=>rerender(),1500);
    } else { rerender(); }
    toast(`Obrigado, ${name}! Presente riscado da lista 💙`);
  });
}
let toastTimer;
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove('show'),4000); }

// cada página registra aqui o que precisa redesenhar após uma reserva
const rerenderFns=[];
function onRerender(fn){ rerenderFns.push(fn); }
function rerender(){ rerenderFns.forEach(f=>f()); }

/* ===================== COMPONENTES DE PRODUTO ===================== */
function miniDiaper(d){
  return `<div class="mini-card">
    <div class="thumb"><img src="${esc(d.imageUrl)}" alt=""></div>
    <span class="name">${esc(d.name)}<br>Tamanho ${esc(d.size)}</span>
    <a class="btn btn-primary btn-sm" href="${esc(d.externalUrl)}" target="_blank" rel="noopener noreferrer">Quero presentear</a>
  </div>`;
}
function miniGift(g){
  const t=giftTaken(g);
  return `<div class="mini-card ${t?'taken':''}">
    <div class="thumb"><img src="${esc(g.imageUrl)}" alt=""></div>
    <span class="name">${esc(g.name)}</span>
    ${t?'<button class="btn btn-primary btn-sm" disabled>Comprado 💙</button>':`<a class="btn btn-primary btn-sm" href="${esc(g.externalUrl)}" target="_blank" rel="noopener noreferrer">Quero presentear</a>`}
  </div>`;
}
function diaperCard(d){
  return `<article class="product-card reveal">
    <div class="product-media"><img src="${esc(d.imageUrl)}" alt=""></div>
    <div class="product-body">
      <span class="badge">Tamanho ${esc(d.size)}</span>
      <h3>${esc(d.name)}</h3>
      <p class="product-brand">${esc(d.brand)}</p>
      <div class="spacer"></div>
      <a class="btn btn-primary w-full" href="${esc(d.externalUrl)}" target="_blank" rel="noopener noreferrer">Quero presentear</a>
    </div></article>`;
}
function giftCard(g){
  const t=giftTaken(g);
  return `<article class="product-card reveal ${t?'taken':''}">
    <div class="product-media"><img src="${esc(g.imageUrl)}" alt=""></div>
    <div class="product-body">
      <span class="badge soft">${esc(g.category)}</span>
      <h3>${esc(g.name)}</h3>
      <p class="product-desc">${esc(g.description)}</p>
      <div class="spacer"></div>
      ${t?'<span class="status taken">Comprado 💙</span><button class="btn btn-primary w-full" disabled>Comprado</button>':`<a class="btn btn-primary w-full" href="${esc(g.externalUrl)}" target="_blank" rel="noopener noreferrer">Quero presentear</a>`}
    </div></article>`;
}


/* ===================== LISTA DE PRESENTES (cartoes) ===================== */
function listaCard(item,isDiaper){
  const t=!isDiaper&&giftTaken(item);
  const nome=isDiaper?`Fralda ${item.name} — Tam. ${item.size}`:item.name;
  return `<div class="item-card ${t?'riscado':''}" data-lista-card="${item.id}">
    ${t?'<span class="stamp">RESERVADO 💙</span>':''}
    <div class="top"><img src="${esc(item.imageUrl)}" alt=""><span class="nome-item">${esc(nome)}</span></div>
    ${t?`<span class="fita">${esc(purchased[item.id])} vai dar 💙</span>`
       :`<div class="item-actions"><button class="btn btn-primary btn-sm" data-reserve="${item.id}">Vou dar esse!</button><a class="loja-link" href="${esc(item.externalUrl)}" target="_blank" rel="noopener noreferrer">ver na loja ↗</a></div>`}
  </div>`;
}
let listaCat='Todos', listaBusca='', listaPage=1;
const LISTA_PAGE_SIZE=12;
function normaliza(s){ return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(); }
function renderListaPage(){
  const grid=document.getElementById('listaGrid'); if(!grid) return;
  const todos=[...GIFTS.map(g=>({item:g,isDiaper:false,cat:g.category})),
               ...DIAPERS.map(d=>({item:d,isDiaper:true,cat:'Fraldas'}))];
  const cats=['Todos',...GIFT_CATEGORIES.map(c=>c.key),'Fraldas'];
  document.getElementById('listaPills').innerHTML=cats.map(c=>
    `<button role="tab" class="pill ${c===listaCat?'active':''}" aria-selected="${c===listaCat}" data-lcat="${esc(c)}">${esc(c)}</button>`).join('');
  let list=listaCat==='Todos'?todos:todos.filter(x=>x.cat===listaCat);
  if(listaBusca) list=list.filter(x=>normaliza(x.item.name).includes(normaliza(listaBusca)));
  const pages=Math.max(1,Math.ceil(list.length/LISTA_PAGE_SIZE));
  if(listaPage>pages) listaPage=pages;
  const slice=list.slice((listaPage-1)*LISTA_PAGE_SIZE,listaPage*LISTA_PAGE_SIZE);
  grid.innerHTML=slice.length?slice.map(x=>listaCard(x.item,x.isDiaper)).join('')
    :'<p class="lista-vazia">Nenhum presente encontrado com essa busca 💙</p>';
  const pager=document.getElementById('listaPager');
  if(pages<=1){ pager.innerHTML=''; }
  else{
    let nums='';
    for(let i=1;i<=pages;i++) nums+=`<button class="page-btn ${i===listaPage?'active':''}" data-lpage="${i}" ${i===listaPage?'aria-current="page"':''}>${i}</button>`;
    pager.innerHTML=`<button class="page-btn nav" data-lpage="${listaPage-1}" ${listaPage===1?'disabled':''} aria-label="Página anterior">‹</button>${nums}<button class="page-btn nav" data-lpage="${listaPage+1}" ${listaPage===pages?'disabled':''} aria-label="Próxima página">›</button>`;
  }
  document.getElementById('listaInfo').textContent=list.length+(list.length===1?' item':' itens')+(pages>1?` • página ${listaPage} de ${pages}`:'');
}
function initListaPage(){
  const busca=document.getElementById('listaBusca'); if(!busca) return;
  busca.addEventListener('input',()=>{ listaBusca=busca.value; listaPage=1; renderListaPage(); });
  document.getElementById('listaPills').addEventListener('click',e=>{
    const p=e.target.closest('[data-lcat]'); if(!p) return;
    listaCat=p.dataset.lcat; listaPage=1; renderListaPage();
  });
  document.getElementById('listaPager').addEventListener('click',e=>{
    const b=e.target.closest('[data-lpage]'); if(!b||b.disabled) return;
    listaPage=parseInt(b.dataset.lpage,10); renderListaPage();
    document.getElementById('listaBusca').scrollIntoView({behavior:'smooth',block:'start'});
  });
  renderListaPage();
}
function renderListaPreview(){
  const el=document.getElementById('listaPreview'); if(!el) return;
  el.innerHTML=GIFTS.slice(0,8).map(g=>listaCard(g,false)).join('');
}
function initLista(){
  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-reserve]');
    if(b&&!b.disabled) openReserve(b.dataset.reserve);
  });
}
/* ===================== REVEAL ===================== */
const io='IntersectionObserver' in window ? new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.1}) : null;
function observeReveal(){ $$('.reveal:not(.in)').forEach(el=>{ io?io.observe(el):el.classList.add('in'); }); }

/* ===================== BOOT ===================== */
document.addEventListener('DOMContentLoaded',()=>{
  renderHeader(); renderFooter(); renderModal();
  $$('[data-external]').forEach(a=>{
    const key=a.dataset.external, url=EXTERNAL_LINKS[key];
    if(url){ a.href=url; a.target='_blank'; a.rel='noopener noreferrer'; }
    else a.addEventListener('click',ev=>{ ev.preventDefault(); toast('Esse link ainda vai ser divulgado 💙'); });
  });
  if(typeof window.initPage==='function') window.initPage();
  initLista(); onRerender(renderListaPage); onRerender(renderListaPreview);
  observeReveal();
  loadPurchases().then(()=>rerender());
});

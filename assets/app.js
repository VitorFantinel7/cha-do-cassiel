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
  "id": "fralda-personal-rnp",
  "name": "Personal Baby Premium",
  "size": "RN-P",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/diaper.png",
  "externalUrl": "https://www.amazon.com.br/dp/B0C3FSF7KF?tag=baby-split-20"
 },
 {
  "id": "fralda-huggies-rn",
  "name": "Huggies Natural Care",
  "size": "RN",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/diaper.png",
  "externalUrl": "https://www.amazon.com.br/dp/B095R9CKYR?tag=preciosamaternidade-20&linkCode=ogi&th=1&ascsubtag=srctok-3d6c49b302c27abb&btn_type=ss&btn_ref=srctok-3d6c49b302c27abb"
 },
 {
  "id": "fralda-pampers-rn",
  "name": "Pampers Premium Care",
  "size": "RN",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/diaper.png",
  "externalUrl": "https://www.amazon.com.br/dp/B07GQB93FT?tag=baby-split-20"
 },
 {
  "id": "fralda-huggies-p",
  "name": "Huggies Premium Dermacare",
  "size": "P",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/diaper.png",
  "externalUrl": "https://www.amazon.com.br/Fralda-Huggies-Premium-Dermacare-Tamanho/dp/B0DR9P38P8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=R48XB8U2O6QE&dib=eyJ2IjoiMSJ9.q7OaWUoEV2N2D1K24SZd5e_FOOQcunw3eGvHAeZOvFlnJu0pyDM41_devhNEI0TO7ZouSEaId7BjsEdtDdX7OpCDSkRkiZpjlymL5NFhSPc.4P1XGJ4n9NPleY91m-K6M_tcGFsyv_r5F2J9Q6-gYF4&dib_tag=se&keywords=fraldas&psr=PDAY&qid=1782986801&refinements=p_36%3A-9200&rnid=16254006011&s=prime-day&sprefix=fralda%2Cprime-day%2C221&xpid=SfV3YLspUNPw7&th=1&linkCode=sl2&tag=descontinholivia-20&linkId=79c2397684cad59c41051a20034cc82c&ref_=as_li_ss_tl&ascsubtag=srctok-67abba693e0dade4&btn_type=ss&btn_ref=srctok-67abba693e0dade4"
 },
 {
  "id": "fralda-pampers-p",
  "name": "Pampers Premium Care",
  "size": "P",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/diaper.png",
  "externalUrl": "https://www.amazon.com.br/Fralda-Pampers-Premium-Care-Unidades/dp/B07GQ136TS?crid=2IGQVZAFBCRML&dib=eyJ2IjoiMSJ9.lTsyR7SjlXEcyYvS24LAW4wYW5eUFpqO-9C87Gp1VxsM7NSJJCpBG43G89vm8x5kcZ9z0nUzp_3V7QKRIuXl752CKZQEZhWbur03TwkbWnDHOlcsEvx-DVQ1mEHNxq24q31dK90soQa9vQmUAxoxP-Fgr0Z0puk_06wQMIdNToAK5fQy39jjI7AJfzCHWGL2IgAH1oxyQdolJMwMH_xHuNGHKTe-l6_waM0Erf21GX4qDxTe1o1L0TC5AVD4TqrdyVhU-EH-6Q2INFcR_ejsIt3Ds6xHq0kdqZmqmuco3iM.Q7z1LtgLvkWSiQ1ER9WcqZZGHHSB5ESA_XZXDpe2VsY&dib_tag=se&keywords=fraldas+em+promo%C3%A7%C3%A3o&qid=1782122492&sprefix=fraldas+em%2Caps%2C248&sr=8-29&linkCode=sl2&tag=descontinholivia-20&linkId=5a49a241d7fb48ad917864a0a80ebefd&ref_=as_li_ss_tl&ascsubtag=srctok-03cf6f6509d9795f&btn_type=ss&btn_ref=srctok-03cf6f6509d9795f"
 },
 {
  "id": "fralda-personal-m",
  "name": "Personal Baby Premium",
  "size": "M",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/diaper.png",
  "externalUrl": "https://www.amazon.com.br/dp/B0C3FK76V3?tag=preciosamaternidade-20&linkCode=ogi&th=1&psc=1&ascsubtag=srctok-5165515868822877&btn_type=ss&btn_ref=srctok-5165515868822877"
 },
 {
  "id": "fralda-mammypoko-m",
  "name": "MammyPoko",
  "size": "M",
  "brand": "Ou outra marca de sua preferência",
  "quantity": 5,
  "imageUrl": "assets/img/diaper.png",
  "externalUrl": "https://www.amazon.com.br/gp/product/B0DK3M6161?tag=baby-split-20"
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
  "id": "g1",
  "name": "Pomada Deistin",
  "category": "Cuidados",
  "description": "Pomada para prevenir assaduras.",
  "price": null,
  "imageUrl": "assets/img/cat-cuidados.png",
  "externalUrl": "https://www.amazon.com.br/dp/B07DHQZPZV?ascsubtag=srctok-54d5db2196564236&btn_type=ss&btn_ref=srctok-2a833d6efb85a189&th=1&linkCode=sl2&tag=descontinhojhenni-20&linkId=dfc2a9a013fd2223066fdb684664b88a&ref_=as_li_ss_tl"
 },
 {
  "id": "g2",
  "name": "Shampoo Johnson’s RN Baunilha",
  "category": "Higiene",
  "description": "Para o banho do recém-nascido.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/dp/B07D2FKWBT?ascsubtag=srctok-03230322ecd20222&btn_type=ss&btn_ref=srctok-2676f97c199775d4&linkCode=sl2&tag=descontinholivia-20&linkId=fd06d51f36e39179813356d8a0a68ee6&ref_=as_li_ss_tl"
 },
 {
  "id": "g3",
  "name": "Lenços Umedecidos Bepantol (pack)",
  "category": "Higiene",
  "description": "Lenços para a troca de fraldas.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/dp/B096KDKNNQ?ascsubtag=srctok-31bc5cbdf09ae531&btn_type=ss&btn_ref=srctok-5edc31cba944fb21&linkCode=sl2&tag=descontinholivia-20&linkId=d8b61005dbe967aae3f421b549ff54dc&ref_=as_li_ss_tl"
 },
 {
  "id": "g4",
  "name": "Algodão",
  "category": "Higiene",
  "description": "Algodão para a higiene diária.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/dp/B0B5YF3HSW?tag=baby-split-20"
 },
 {
  "id": "g5",
  "name": "Amaciante Baby Confort 1L",
  "category": "Higiene",
  "description": "Para lavar as roupinhas com cuidado.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/gp/product/B07DVM8YHQ?tag=baby-split-20"
 },
 {
  "id": "g6",
  "name": "Sabonete Huggies Extrasuave 600ml",
  "category": "Higiene",
  "description": "Edição Ursinho Pooh.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/dp/B08GZBDWF4?linkCode=sl2&tag=descontinholivia-20&linkId=c72904872d1c2bc105d7640bd64d9fd1&ref_=as_li_ss_tl&ascsubtag=srctok-4484e9a31f8ff524&btn_type=ss&btn_ref=srctok-4484e9a31f8ff524"
 },
 {
  "id": "g7",
  "name": "Higienizador de Mãozinhas",
  "category": "Higiene",
  "description": "Prático para levar na bolsa.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://shopee.com.br/product/985879758/20399547037?credential_token=8wEwiDL7YDMCZ2TqpmohL3CQP91wc2K8wAjqgXNKzz&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTElwAAAAw5UDDN8fP-SoxizmKDmfUXGB7S3Jem5Hpceck97xsw0mSk4ZYUQMAX6h6o5iMlCBgRCY7vCNj4-8hH3zLeJvA5xalGkqzYlIbd6eTTmOHZyuT3IZ4qLrxCsVSlBbALhkzspbISqsyGFHZF8-a6P37OCVUXXMr79KKdfETtD2f_8HdRN7p7a6pb64mtUZqC5J3Vu04&mmp_pid=an_18319270113&uls_trackid=56h1e574001k&utm_campaign=id_eab1a63c283d4705&utm_content=Enviopromos----&utm_medium=affiliates&utm_source=an_18319270113&utm_term=fgcih5ifoq83"
 },
 {
  "id": "g8",
  "name": "Saquinhos de Maternidade (kit 6)",
  "category": "Outros",
  "description": "Organizadores bordados para a mala.",
  "price": null,
  "imageUrl": "assets/img/cat-outros.png",
  "externalUrl": "https://www.mercadolivre.com.br/kit-6-saquinho-saco-maternidade-bebe-organizador-tag-bordado/up/MLBU2614818211?pdp_filters=item_id%3AMLB5147524176&matt_event_ts=1788131002209&matt_d2id=ec70b00c-1ba9-459e-9b68-cb30016450c8&matt_tracing_id=6d0a98a9-db28-4bcb-950a-fc34393b7fce#polycard_client=recommendations_home_affiliate-profile&wid=MLB5147524176&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=76718861&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=e439c9e6-60b6-41c7-b653-a0df2fe62217&tracking_id=db933da9-2b82-41bc-8219-3dc108728607&c_id=/home/card-featured/element&c_uid=8c9471fa-9534-4758-8afa-d9716b32eb7a"
 },
 {
  "id": "g9",
  "name": "Algodão Quadrado Baby",
  "category": "Higiene",
  "description": "Quadrados 100% algodão.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/Algod%C3%A3o-Quadrado-Amamente%C2%AE-Baby-100/dp/B0DMFR1P3K?pf_rd_r=6DQVC6ADPGZYRZTN827J&pf_rd_p=a43a02c5-fe2d-4a34-af71-7d62fff70488&sbo=9ZOMT9Jm0JH%2Ft%2BWi68iDSA%3D%3D&ascsubtag=srctok-6e6c34c229644b32&btn_ref=srctok-469153b326f86c1d&linkCode=sl2&tag=descontinholivia-20&linkId=57277fc4ff4ef93a14d61af046479b6b&ref_=as_li_ss_tl&btn_type=ss"
 },
 {
  "id": "g10",
  "name": "Loção Dersani Baby para Assaduras",
  "category": "Cuidados",
  "description": "Loção oleosa protetora.",
  "price": null,
  "imageUrl": "assets/img/cat-cuidados.png",
  "externalUrl": "https://www.amazon.com.br/Daudt-Dersani-Baby-Lo%C3%A7%C3%A3o-Oleosa/dp/B079VVD8HK/ref=dp_fod_d_sccl_1/142-7024450-8854860?pd_rd_w=78OTb&content-id=amzn1.sym.4f53009d-6d67-4b5d-99e2-f94097efb59f&pf_rd_p=4f53009d-6d67-4b5d-99e2-f94097efb59f&pf_rd_r=9XHVH75E112X42736MN5&pd_rd_wg=0ABmp&pd_rd_r=da4dda02-9e53-458a-aba0-fea8ecc42b98&pd_rd_i=B079VVD8HK&psc=1"
 },
 {
  "id": "g11",
  "name": "Lenços Umedecidos MamyPoko (pack)",
  "category": "Higiene",
  "description": "Toalhas umedecidas.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/Toalhas-Umedecidas-MamyPoko-unidades-Branco/dp/B09BBDVPB1/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=F8OID28DVIOB&dib=eyJ2IjoiMSJ9.BF7O2MAaFNDvjNiJUDxG5b4uMP7ZMTB0gJvhwsWuHyj4YX1oHSZ_X45Imw1QYatfcOm6KQsj6w88JZ3BNVJe2uoltVG6-XWD4osGQ_snDDxppQMTOGyBuWEb2apDwxBQ7uSb9auF-XqhbiLie_bZbS-ly25djkzq5bFyKGpNBx9g-EVVYXECwIcFMEH_Ri93iqKM9AjTgajWSXbYQLUFbnoA_J3iPXsPrKQQQAUP5BAxVjwes2cUePDdfNFHOCjARhuwbhftLt8ZIjKIadikchJJlt6p6nCu7JZWVRn6dQ8.QZWRtXrblKOVcEvnNlAL-RIZuuHHTk4rgcow-A5v2I0&dib_tag=se&keywords=mammypoko%2Blencos&qid=1788132804&s=baby-products&sprefix=mammypoko%2Blenco%2Cbaby%2C208&sr=1-1&th=1"
 },
 {
  "id": "g12",
  "name": "Condicionador Pompom Camomila",
  "category": "Higiene",
  "description": "Suave, com camomila.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/Condicionador-Infantil-Camomila-Pom-Verde/dp/B07F6K9P64?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=26TOVDVYZPZCQ&dib=eyJ2IjoiMSJ9.04pDMLLxMJDjcO-ewfUp6a6crAwTV-64BLlt2rQ9ukuylDhNSSC3p5j7xcDjcEi2Np7Gyy5ThJAkHm8vGhD6hjmaO14H83-JrlQmCbrZTfRvxT1DpPlvFRO4s6o62-rcGcJZltdpVHA7TCJv3piMHdmOvMp0tVoJHvEdaq02sqmGiv0NvPUEbA7mRmwz1it5hRik4G7fZqkFoYFCaYX9r17xPExIXwoIXxDeST5OS6UM3916oYdHn-_CsykKTi_UZv-dj8O9aL7TXpV98qmCA_l1u746cO2NhQqNeyjlzRs.oON4Jn8VUJYt4bkP_PHWezd2Kcl7u-yPrUmHbSmPXK0&dib_tag=se&keywords=condicionador+bebe&qid=1782066742&sprefix=condicionador+bebe%2Caps%2C703&sr=8-9&linkCode=sl2&tag=descontinholivia-20&linkId=c29c57b47be6708b4667400c4744f2ae&ref_=as_li_ss_tl&ascsubtag=srctok-08e5b7b122ae8d32&btn_type=ss&btn_ref=srctok-08e5b7b122ae8d32"
 },
 {
  "id": "g13",
  "name": "Lenços Johnson’s Recém-Nascido",
  "category": "Higiene",
  "description": "Sem fragrância, para RN.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/Johnsons-Baby-Umedecidos-Nascido-Unidades/dp/B0F4G5NL2K?dib=eyJ2IjoiMSJ9.g1ckv71U8XEhIe96aoK2LmK9LynZIZ-_zizHuIZi1SFPsxtHP6go5oVDyZ-YymSyE1Gm2pf74gWlc0QmN8C9yeZJYkR5c8U1MhRtQ137UMVcT7cj_Vuq3m_3LViiounWt4-3YFicGGXFX_LfZPZggJur6bWdxn6h_PahAgc8G9JZR6gmxWYacguHXHNr5CrxIaM3iPJ9lDCb4cSDtmA72PTF6cIZgeC7SUMaCva6LipBz8Cz-KRDhRwYfqFdl7YTAA3odOmpFOtoPti3CTP100kCpLwByAejxtYvzzyEi14.OtJs2yIKLWAy6WdZ9mjQ6OvAj2SOcPrn8IAfM70PHw8&dib_tag=se&qid=1781633140&s=baby-products&xpid=fFThKVnc-KuLq&linkCode=sl2&tag=descontinh0a0-20&linkId=26dc9c8b6ee9c54998dba90224830f44&ref_=as_li_ss_tl"
 },
 {
  "id": "g14",
  "name": "Sabonete Johnson’s Hora do Sono",
  "category": "Higiene",
  "description": "Aroma relaxante para o banho da noite.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/dp/B07DHRS6RN?tag=baby-split-20&th=1"
 },
 {
  "id": "g15",
  "name": "Loção Hidratante Johnson’s",
  "category": "Higiene",
  "description": "Hidratação diária da pele do bebê.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/dp/B07DHRL34V?tag=baby-split-20&th=1"
 },
 {
  "id": "g16",
  "name": "Conjunto 3 Peças Cookies RN (Carter’s)",
  "category": "Roupinhas",
  "description": "Conjunto longo cinza.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://www.riachuelo.com.br/conjunto-longo-bebe-3-pecas-cookies-cinza-carter-s-16300106_sku_sku?utm_source=awin&utm_id=1738645_&utm_campaign=affiliate&sv1=affiliate&sv_campaign_id=1738645&awc=86587_1788128442_904812b6e7ea03472497316eaa861af8",
  "featured": true
 },
 {
  "id": "g17",
  "name": "Kit 5 Bodies Manga Curta RN (Carter’s)",
  "category": "Roupinhas",
  "description": "Bodies lisos brancos.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://www.riachuelo.com.br/kit-body-bebe-5-pecas-manga-curta-lisos-branco-carter-s-14097524_sku_sku?utm_source=awin&utm_id=1738645_&utm_campaign=affiliate&sv1=affiliate&sv_campaign_id=1738645&awc=86587_1788128489_1bee71b2a7a068bb96fd5868194568c4"
 },
 {
  "id": "g18",
  "name": "Macacão Urso Polar 3M (Carter’s)",
  "category": "Roupinhas",
  "description": "Com pezinho, azul.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://www.riachuelo.com.br/macac-o-bebe-com-pezinho-urso-polar-azul-carter-s-16363370_sku_sku?utm_source=awin&utm_id=1738645_&utm_campaign=affiliate&sv1=affiliate&sv_campaign_id=1738645&awc=86587_1788128982_37440b773cff15ca22df9c0d56269dec"
 },
 {
  "id": "g19",
  "name": "Kit 3 Cueiros",
  "category": "Roupinhas",
  "description": "Cueiros macios.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://shopee.com.br/product/683335537/15694363553?credential_token=8wEwiDL7XpU6YKDja6LzdQBZKEPgsiAL68jPzTCK7Q&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTElwAAAAxDPfKl5srus_2hi4pu6InZBuFIVdcJlOKIAQLEPEN-nWEvnHP8w08EbrL473xs3C9IaqkwUjo2Zc9s7DiAZQyn9X1G-C-6J9BXlqml1JsAz-35fHJ_etdmDSH8bZavRhJR3L4BPG08R_y2hXFLPNLEQJ7K18gcRjV_voLMJlpkYrNN591PDOF7kZE0i3UFh3daDMA&mmp_pid=an_18319270113&uls_trackid=56h18s7c002q&utm_campaign=id_4b657974595cf519&utm_content=Enviopromos----&utm_medium=affiliates&utm_source=an_18319270113&utm_term=fgceey33szas"
 },
 {
  "id": "g20",
  "name": "Saída de Maternidade Dino",
  "category": "Roupinhas",
  "description": "Look da primeira foto.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://shopee.com.br/product/575397523/45901685352?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTElwAAAAxMErzTti-Wd1Abia4KYtbZdKPukHNcg3Dy9lhZXLY9EkLye8b31XUtdd1HeCE8bey3cEX9dztQoP-NrGR3wOxoMiP5yh32eW95SVYAWVt4PXTOS1ge7RhMHhUPOSplgXHE0MaGaTzncmyNboUQzkp99m4rPzqpdg3USXFQesosIO0M08DTT2e_5imhJvfPfff9N7k&mmp_pid=an_18364220059&uls_trackid=56h193v900a5&utm_campaign=id_bd7f4d1795035b10&utm_content=instagram-obrigadodonacegonha-stories-grupo-storyinstagram&utm_medium=affiliates&utm_source=an_18364220059&utm_term=fgcemaeugdhq"
 },
 {
  "id": "g21",
  "name": "Conjunto de Praia com Proteção UV",
  "category": "Roupinhas",
  "description": "Com chapéu, proteção solar.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://produto.mercadolivre.com.br/MLB-876289471-conjunto-uv-infantil-proteco-solar-com-chapeu-beb-praia-_JM?attributes=COLOR_SECONDARY_COLOR%3AQXp1bC1jbGFybw%3D%3D%2CSIZE%3AMy02IE0%3D&picker=true&searchVariation=173759067239&matt_event_ts=1788129355760&matt_d2id=ec70b00c-1ba9-459e-9b68-cb30016450c8&matt_tracing_id=1ac0c84d-6a3b-4429-b8f8-23b2cc80ac94&quantity=1"
 },
 {
  "id": "g22",
  "name": "Conjunto 3 Macacões (P)",
  "category": "Roupinhas",
  "description": "Trio de macacões.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://shopee.com.br/product/1777221519/22094979416?credential_token=8wEwiDL7YDXiJxgFLkQVadts9V22zDRCh3CbHYjUJC&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTEmQAAAAyAIJcO36xaSplqMuncObuZADKBC_Wy0pKJOxF9zEXaFwshVx-SzWm4-exuLZYQqFWtNXcr02ilv2PPrwIBrp6YIK8a_l523dg2c5NhF2Z1la4fBKk36u43f6vrpNYSJsI0WA9IsaDd_guQR_cx_F9r7c82WCDvaQ0ad6hoxmHmrrN4UU4vuZQoVC49aMGz03Mvlz-u3g&mmp_pid=an_18319270113&uls_trackid=56h1a4pd003m&utm_campaign=id_1f82e4cd05589b62&utm_content=Enviopromos----&utm_medium=affiliates&utm_source=an_18319270113&utm_term=fgcfe4uwqif1"
 },
 {
  "id": "g23",
  "name": "Kit 3 Bodies Manga Curta (P) Raposa",
  "category": "Roupinhas",
  "description": "Malha canelada de algodão.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://shopee.com.br/Kit-3-Body-Manga-Curta-Estampado-Liso-Roupa-de-Beb%C3%AA-Malha-Canelada-Algod%C3%A3o-Menino-Enxoval-i.477029210.23093967095?xptdk=db4123b9-5519-4b63-8508-2be0c35c475c"
 },
 {
  "id": "g24",
  "name": "Saída de Maternidade Azul",
  "category": "Roupinhas",
  "description": "Conjunto completo azul.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://shopee.com.br/product/1442901887/57110915772?credential_token=8wEwiDL7ZRzyoYw3Ay4JamMfmezMm39LNE5SFuYJXV&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTEmQAAAAxXbgUR9dRSBAC6huX97nIoHFdvTh-A6_22nNWprHkhB42KsS5o8W1AJDDDT8J7ft-p4sZIez0vp_7lpcNG-QlcHCTCBj_5ioJkz2oVkvt55bD5aFgEPGHh8RUhUUUxsuxT6lKYImjnzsmrGSpaRB5A4rrN-UME6fYO3Sh21iDDvJg_mqbWmuJ-EaHPhpZ88euZbPbn5Q&mmp_pid=an_18319270113&uls_trackid=56h1dec2003m&utm_campaign=id_141189913c7e29aa&utm_content=Enviopromos----&utm_medium=affiliates&utm_source=an_18319270113&utm_term=fgchxgbvhzhd"
 },
 {
  "id": "g25",
  "name": "Kit Macaquinho Neutro (M)",
  "category": "Roupinhas",
  "description": "Tons neutros.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://shopee.com.br/product/1206607146/22099049921?credential_token=8wEwiDL7YDXiJxyxM7BEURpTrGq51TcHXzAbJfMHYA&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTEmQAAAAwoHXmk42_W1kYZj0_RryXu_fivmnnJEm7IHTgpVsXBfs5T9PhdK70nMGlMm2w8J4w0Nv85wqt4ZsymVoD5vjtldPPkRad0drCqJBm2u7UoDEzjWwxF0eZcTG-zidLBkEEna4DiJAGWLKNVh-voXadltYI26p0OXN4YkxWHocsIPoYi3Kzo6USNEIYElOg_oK2w7aSmdQ&mmp_pid=an_18319270113&uls_trackid=56h1dmeg00a5&utm_campaign=id_37357442c1bc4118&utm_content=Enviopromos----&utm_medium=affiliates&utm_source=an_18319270113&utm_term=fgci52unu64o"
 },
 {
  "id": "g26",
  "name": "Conjunto Tricô Manga Curta Azul-Bebê",
  "category": "Roupinhas",
  "description": "Blusa polo + shorts.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://shopee.com.br/Conjunto-Tricot-Premium-Beb%C3%AA-Menino-Blusa-Polo-Manga-Curta-Shorts-Cl%C3%A1ssico-Elegante-i.1834008345.58261640717?extraParams=%7B%22display_model_id%22%3A239444000907%2C%22model_selection_logic%22%3Anull%7D"
 },
 {
  "id": "g27",
  "name": "Kit 2 Macacões-Pijama 0-3M (Carter’s)",
  "category": "Roupinhas",
  "description": "Pijamas quentinhos.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://www.amazon.com.br/dp/B07Y2KGR7Y?tag=baby-split-20&th=1&psc=1"
 },
 {
  "id": "g28",
  "name": "Kit de Roupas (P)",
  "category": "Roupinhas",
  "description": "Kit variado de enxoval.",
  "price": null,
  "imageUrl": "assets/img/cat-roupinhas.png",
  "externalUrl": "https://shopee.com.br/product/566592510/23092667013?credential_token=8wEwiDL7YDczz9gPcfKT3u7PjJydVHZZBrkhgJJfQL&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTElwAAAAy9dog5isYuuSYzR3MTfmnx_7HLxsdxEFtmK-50ntZ1QRZL8Psn2VC-BmWHNTdO4poL8z3efXHDDxHV8uEXWTbW_s-mFt9aHpHRoWTdMTAbGzwwVl7s3lx87FOIOHDXjhEghpLOltTi3I2Rg5vzJrmGwvF1LgnDOfvyioFRNxSPwdNQlsZOSimGVEjn-Hq-Yyw9IHw&mmp_pid=an_18319270113&uls_trackid=56h1i6sj00a4&utm_campaign=id_4fbb1a11075f2a36&utm_content=----&utm_medium=affiliates&utm_source=an_18319270113&utm_term=fgcmm6pqowq9"
 },
 {
  "id": "g29",
  "name": "Aspirador Nasal Ursinho (Buba)",
  "category": "Cuidados",
  "description": "Por sucção, com estojo.",
  "price": null,
  "imageUrl": "assets/img/cat-cuidados.png",
  "externalUrl": "https://www.mercadolivre.com.br/aspirador-nasal-por-succao-com-estojo-ursinho-buba/p/MLB45858236?pdp_filters=item_id%3AMLB6756251546&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=173090547276&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882728465&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB45858236-product&matt_product_partition_id=2496112860465&matt_target_id=pla-2496112860465&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25hcf5UGev1c2efnDKEw4qeGwKvRFdhchRjb8SbbHHymmDhWJZe4ZPxoCXL8QAvD_BwE"
 },
 {
  "id": "g30",
  "name": "Kit Escova para Mamadeira e Bico (Buba)",
  "category": "Alimentação",
  "description": "Com ventosa, limpeza profunda.",
  "price": null,
  "imageUrl": "assets/img/cat-alimentacao.png",
  "externalUrl": "https://www.mercadolivre.com.br/kit-escova-mamadeira-bico-buba-com-ventosa-limpeza-profunda/up/MLBU4167366805?pdp_filters=item_id%3AMLB7057492946&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=193044698394&matt_match_type=&matt_network=g&matt_device=c&matt_creative=787871502884&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5691949991&matt_product_id=MLBU4167366805&matt_product_partition_id=2524474190044&matt_target_id=pla-2524474190044&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25vOFaQcqz4N2sEc4NxN_lL2tGvr3WY_LJSHvQrD0KwCxhcu3ddD75RoC008QAvD_BwE"
 },
 {
  "id": "g31",
  "name": "Kit Higiene com Estojo",
  "category": "Higiene",
  "description": "Cuidados essenciais do dia a dia.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/Kit-Cuidados-Com-Estojo-Verde/dp/B0BZFDTWB7/ref=asc_df_B0BZFDTWB7?mcid=54fbeda62941312cab91ab1b02405142&tag=googleshopp00-20&linkCode=df0&hvadid=709856906370&hvpos=&hvnetw=g&hvrand=5454502914515682346&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074192&hvtargid=pla-2200079017602&psc=1&hvocijid=5454502914515682346-B0BZFDTWB7-&hvexpln=0&language=pt_BR",
  "featured": true
 },
 {
  "id": "g32",
  "name": "Toalha de Banho Fralda Karinho",
  "category": "Higiene",
  "description": "Macia e absorvente.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/Toalha-Banho-Fralda-Karinho-multi-colored/dp/B0BV386QWT?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1GJK97JN8WT0M"
 },
 {
  "id": "g33",
  "name": "Toalha de Banho com Capuz Dinossauro",
  "category": "Higiene",
  "description": "Com capuz divertido.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.mercadolivre.com.br/toalha-de-banho-bebe-infantil-com-capuz-de-dinossauro/up/MLBU4343907278?pdp_filters=item_id%3AMLB4902515339&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=191786782441&matt_match_type=&matt_network=g&matt_device=c&matt_creative=782869963094&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5760933778&matt_product_id=MLBU4343907278&matt_product_partition_id=2498039434278&matt_target_id=pla-2498039434278&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25trmG5PyyC19WVvq8yKX5AQfCeosvYMvLRKbW_7zeaj1Lb06asIhBhoC54IQAvD_BwE"
 },
 {
  "id": "g34",
  "name": "Paninho de Boca com Prendedor de Chupeta",
  "category": "Higiene",
  "description": "Estampado 40x40.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/Paninho-Prendedor-Chupeta-Estampado-40x40/dp/B0FS9281ZT?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1ZZFT5FULY4LN&th=1"
 },
 {
  "id": "g35",
  "name": "Kit Panos de Boca Algodão (Incomfral)",
  "category": "Higiene",
  "description": "Kit de paninhos 100% algodão.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/Menino-Menina-Algod%C3%A3o-Unidades-Incomfral/dp/B0GK2X7YX8/ref=asc_df_B0GK2T3LSY?mcid=0ed0ba0cd92d366daeb8dda1bddff555&tag=googleshopp00-20&linkCode=df0&hvadid=709857676527&hvpos=&hvnetw=g&hvrand=4013267913925690998&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074192&hvtargid=pla-2466505198001&hvocijid=4013267913925690998-B0GK2T3LSY-&hvexpln=0&language=pt_BR&th=1"
 },
 {
  "id": "g36",
  "name": "Kit Panos de Boca Algodão II (Incomfral)",
  "category": "Higiene",
  "description": "Outra estampa do kit.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/Menino-Menina-Algod%C3%A3o-Unidades-Incomfral/dp/B0GK2QLJYV/ref=asc_df_B0GK2T3LSY?mcid=0ed0ba0cd92d366daeb8dda1bddff555&tag=googleshopp00-20&linkCode=df0&hvadid=709857676527&hvpos=&hvnetw=g&hvrand=4013267913925690998&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074192&hvtargid=pla-2466505198001&hvocijid=4013267913925690998-B0GK2T3LSY-&hvexpln=0&language=pt_BR&th=1"
 },
 {
  "id": "g37",
  "name": "Trocador de Fraldas Portátil",
  "category": "Cuidados",
  "description": "Dobrável e impermeável.",
  "price": null,
  "imageUrl": "assets/img/cat-cuidados.png",
  "externalUrl": "https://produto.mercadolivre.com.br/MLB-4438381501-trocador-de-fraldas-portatil-dobravel-e-impermeavel-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic"
 },
 {
  "id": "g38",
  "name": "Kit 2 Porta-Fraldas Organizador",
  "category": "Quarto",
  "description": "Para a mala e a cômoda.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.mercadolivre.com.br/kit-2-porta-fraldas-organizador-bebe-maternidade-mala-bolsa/up/MLBU4096825287?product_trigger_id=MLBU4096826833&pdp_filters=seller_id%3A1148293196&applied_product_filters=MLBU4096826833&picker=true&quantity=1"
 },
 {
  "id": "g39",
  "name": "Cesto Organizador de Fraldas em Feltro",
  "category": "Quarto",
  "description": "Com alça.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.mercadolivre.com.br/organizador-fraldas-bebe-cesto-feltro-com-alca/up/MLBU4471114459?pdp_filters=item_id%3AMLB7280350510&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=191786782281&matt_match_type=&matt_network=g&matt_device=c&matt_creative=782869963091&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5806344637&matt_product_id=MLBU4471114459&matt_product_partition_id=2497743728835&matt_target_id=pla-2497743728835&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25poLQ-nNYBOQDavrTkj6tUmysAW0ZGQLmsscugq5GrW5AZSHDLYlaBoCGRcQAvD_BwE"
 },
 {
  "id": "g40",
  "name": "Algodão Quadrado Johnson’s RN",
  "category": "Higiene",
  "description": "Quadrados macios para RN.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://www.amazon.com.br/Quadrados-Algod%C3%A3o-Rec%C3%A9m-Nascido-JOHNSONS%C2%AE-unidades/dp/B0FXN957HN?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1ZZFT5FULY4LN"
 },
 {
  "id": "g41",
  "name": "Jogo de Lençol para Carrinho",
  "category": "Quarto",
  "description": "Linho jeans Batistela.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.mercadolivre.com.br/jogo-de-lencol-para-carrinho-de-bebe-linho-jeans-batistela/up/MLBU766060697?pdp_filters=item_id%3AMLB3565128611&from=gshop&matt_tool=40566012&matt_word=&matt_source=google&matt_campaign_id=23440873650&matt_ad_group_id=192555038294&matt_match_type=&matt_network=g&matt_device=c&matt_creative=799032782590&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=686238646&matt_product_id=MLBU766060697&matt_product_partition_id=2497299314619&matt_target_id=pla-2497299314619&cq_src=google_ads&cq_cmp=23440873650&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23440873650&gbraid=0AAAAAD93qcCTUhu_dkcRZKINq1LSIWn1M&gclid=CjwKCAjwqc_UBhBKEiwAWbl25sG5-NDl0Jn3PBlxnzv1KNoKDiqwtBZUeAmFW2ahJHL_jp_ct4_gHhoCMccQAvD_BwE"
 },
 {
  "id": "g42",
  "name": "Jogo de Lençol de Berço Americano",
  "category": "Quarto",
  "description": "Algodão verde-oliva.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.mercadolivre.com.br/jogo-lencol-de-berco-americano-em-algodao-verde-escuro-oliva/up/MLBU3229576189?pdp_filters=item_id%3AMLB4092651945&from=gshop&matt_tool=40566012&matt_word=&matt_source=google&matt_campaign_id=23440873650&matt_ad_group_id=192555038294&matt_match_type=&matt_network=g&matt_device=c&matt_creative=799032782590&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5542031579&matt_product_id=MLBU3229576189&matt_product_partition_id=2497299314619&matt_target_id=pla-2497299314619&cq_src=google_ads&cq_cmp=23440873650&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23440873650&gbraid=0AAAAAD93qcCTUhu_dkcRZKINq1LSIWn1M&gclid=CjwKCAjwqc_UBhBKEiwAWbl25hNy6Am13VTSvWWUlGutasRKuBYW5YCjHYxNLauREkeAloFFCYLdzRoCe3cQAvD_BwE"
 },
 {
  "id": "g43",
  "name": "Kit Manta e Naninha com Pelúcia",
  "category": "Quarto",
  "description": "Cobertinha + naninha.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.mercadolivre.com.br/kit-manta-e-naninha-de-bebe-c-pelucia-coberta-menino-menina/up/MLBU3825831463?picker=true&quantity=1",
  "featured": true
 },
 {
  "id": "g44",
  "name": "Kit Naninha e Travesseiro Anatômico",
  "category": "Quarto",
  "description": "Com bichinho de pelúcia.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.mercadolivre.com.br/kit-naninha-com-bichinho-pelucia-e-travesseiro-anatomico/up/MLBU2987384436?pdp_filters=item_id%3AMLB6441710548&applied_product_filters=MLBU1375258587&picker=true&quantity=1"
 },
 {
  "id": "g45",
  "name": "Manta de Tricô Bichos da Floresta",
  "category": "Quarto",
  "description": "Super macia.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://produto.mercadolivre.com.br/MLB-2025410089-cobertor-de-beb-manta-de-tric-super-macia-bichos-floresta-_JM?searchVariation=174204193388#is_advertising=true&searchVariation=174204193388&backend_model=search-backend&be_origin=backend&position=28&search_layout=grid&type=pad&tracking_id=6724f2e2-f3b5-4976-bbeb-f68e57e982eb&ad_domain=VQCATCORE_LST&ad_position=28&ad_click_id=NzdmNzU5MmUtZDA1My00ZjFlLWE5YjQtMTFkNGVmODlkM2Q2"
 },
 {
  "id": "g46",
  "name": "Kit 3 Mantas de Muselina",
  "category": "Quarto",
  "description": "Leves e macias.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://produto.mercadolivre.com.br/MLB-7243608954-kit-3-mantas-de-muselina-para-beb-macias-e-leves-_JM?matt_tool=15663026&matt_word=&matt_source=google&matt_campaign_id=23369697978&matt_ad_group_id=188694908525&matt_match_type=&matt_network=g&matt_device=c&matt_creative=788903717759&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5826205367&matt_product_id=MLB7243608954&matt_product_partition_id=2394826346049&matt_target_id=pla-2394826346049&cq_src=google_ads&cq_cmp=23369697978&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23369697978&gbraid=0AAAAAD93qcDuQn_8pQtQGkQ25Yl1Lz2Y7&gclid=CjwKCAjwqc_UBhBKEiwAWbl25tvywZc46msfIDdzvO-xkAbdI9kEhWPS1ai_L95wiai-JHzVitOhVRoCk24QAvD_BwE"
 },
 {
  "id": "g47",
  "name": "Kit 3 Cueiros Flanelados 80x80",
  "category": "Quarto",
  "description": "Minasrey, tamanho grande.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.mercadolivre.com.br/kit-cueiro-flanelado-grande-p-bebe-3-unid-80x80--minasrey/up/MLBU3858975643?pdp_filters=item_id%3AMLB6513281616&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=191786782681&matt_match_type=&matt_network=g&matt_device=c&matt_creative=782869963103&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=336038238&matt_product_id=MLBU3858975643&matt_product_partition_id=2495264115769&matt_target_id=pla-2495264115769&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25mh6Ba3hzRSMrvvY1qDPnJd062X3fLNS9XOATEeNGxcslZlloffgiRoCOIIQAvD_BwE"
 },
 {
  "id": "g48",
  "name": "Naninha Raposinha",
  "category": "Quarto",
  "description": "Cinza, para dormir agarradinho.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.mercadolivre.com.br/naninha-de-bichinhos-para-bebe-raposinha-cinza/up/MLBU733338663?pdp_filters=item_id%3AMLB1800269285&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=191786782681&matt_match_type=&matt_network=g&matt_device=c&matt_creative=782869963103&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=355072982&matt_product_id=MLBU733338663&matt_product_partition_id=2495264115769&matt_target_id=pla-2495264115769&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25vru-9dz7e2t7AlyDq1HMgFyOHoGRjStD14Z2lKUPptjpmWPQ88athoCDOUQAvD_BwE"
 },
 {
  "id": "g49",
  "name": "Naninha Ursinho Hipoalergênica",
  "category": "Quarto",
  "description": "Pelúcia Flobaby.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.mercadolivre.com.br/naninha-hipoalergenica-flobaby--ursinho-pelucia-rosa-azul/up/MLBU3787981377?pdp_filters=item_id%3AMLB6254244494&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=191786782681&matt_match_type=&matt_network=g&matt_device=c&matt_creative=782869963103&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5559696530&matt_product_id=MLBU3787981377&matt_product_partition_id=2495264115769&matt_target_id=pla-2495264115769&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25uAqBSyXoUNznRr1Ze5TAYwA4wwMEs_10QzyGQysHCirb4FbIvCZoRoCqY8QAvD_BwE"
 },
 {
  "id": "g50",
  "name": "Kit 3 Cestos Organizadores de Bambu",
  "category": "Quarto",
  "description": "Multiuso com forro.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.mercadolivre.com.br/kit-3-cestos-organizador-de-bambu-multiuso-com-forro/p/MLB27981568?pdp_filters=item_id:MLB4185585590&matt_tool=18764903&matt_internal_campaign_id=356617081&matt_word=&matt_source=google&matt_campaign_id=23825084879&matt_ad_group_id=200692392871&matt_match_type=&matt_network=g&matt_device=c&matt_creative=813996966210&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=272241205&matt_product_id=MLB4185585590&matt_product_partition_id=2554060882317&matt_target_id=pla-2554060882317&cq_src=google_ads&cq_cmp=23825084879&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23825084879&gbraid=0AAAAAD93qcCxGtRKWdqRJDSEv8LvTOb5x&gclid=CjwKCAjwqc_UBhBKEiwAWbl25gS1jfXnv6fDW3Li_cihFB80ibQFw7Et2OFL5SbW9EvfhF85J0WIRxoCWJsQAvD_BwE"
 },
 {
  "id": "g51",
  "name": "Porta-Mamadeira Térmico",
  "category": "Alimentação",
  "description": "Bege com urso bordado.",
  "price": null,
  "imageUrl": "assets/img/cat-alimentacao.png",
  "externalUrl": "https://www.mercadolivre.com.br/porta-mamadeira-termico-bege-com-urso-bordado-azul-bebe/up/MLBU3679821507?pdp_filters=item_id%3AMLB4371071543&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=193044698394&matt_match_type=&matt_network=g&matt_device=c&matt_creative=787871502884&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5562905253&matt_product_id=MLBU3679821507&matt_product_partition_id=2524474190044&matt_target_id=pla-2524474190044&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25p0brY9E5OkoppPsrYKQw20WPGcN7UkJnecHwY4PtaB0NeJpbXLO-xoCpmMQAvD_BwE"
 },
 {
  "id": "g52",
  "name": "Kit 2 Chupetas Buba 0-6M",
  "category": "Alimentação",
  "description": "Bico de silicone, elefante azul.",
  "price": null,
  "imageUrl": "assets/img/cat-alimentacao.png",
  "externalUrl": "https://www.mercadolivre.com.br/kit-2-chupeta-buba-0-6-meses-bico-silicone-comfort-tam-1-cor-elefante-azul/p/MLB58908322?product_trigger_id=MLB63775783&pdp_filters=item_id%3AMLB6618216678&applied_product_filters=MLB58481013&from=gshop&picker=true&matt_tool=80237899&matt_word=&matt_source=google&matt_campaign_id=22090354532&matt_ad_group_id=173090620316&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882733967&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB58481013-product&matt_product_partition_id=2496046917730&matt_target_id=pla-2496046917730&cq_src=google_ads&cq_cmp=22090354532&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354532&gbraid=0AAAAAD93qcC7rt1CJKNqYcnmFOSJNyHo4&gclid=CjwKCAjwqc_UBhBKEiwAWbl25vYwzlpDn-ZfE7Ng_Edy8yrJyior42zpvMBwz6bOcp-1sy7ALBZrjhoCP7EQAvD_BwE&quantity=1"
 },
 {
  "id": "g53",
  "name": "Chupeta Philips Avent Ultra Air 0-6M",
  "category": "Alimentação",
  "description": "Silicone, para menino.",
  "price": null,
  "imageUrl": "assets/img/cat-alimentacao.png",
  "externalUrl": "https://www.mercadolivre.com.br/chupeta-avent-ultra-air-0-6-meses-philips-silicone-menino/up/MLBU1400682542?pdp_filters=item_id%3AMLB3463384911&from=gshop&matt_tool=80237899&matt_word=&matt_source=google&matt_campaign_id=22090354532&matt_ad_group_id=173090620316&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882733967&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=690107132&matt_product_id=MLBU1400682542&matt_product_partition_id=2496046917730&matt_target_id=pla-2496046917730&cq_src=google_ads&cq_cmp=22090354532&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354532&gbraid=0AAAAAD93qcC7rt1CJKNqYcnmFOSJNyHo4&gclid=CjwKCAjwqc_UBhBKEiwAWbl25pPbeyEydglHBH0eR7u0tI_QSZNGK7HsaTGlvRuckuRV2Gyyza4X3BoCngMQAvD_BwE"
 },
 {
  "id": "g54",
  "name": "Chupeta MAM Supreme 0M+",
  "category": "Alimentação",
  "description": "Bico de silicone, neutra.",
  "price": null,
  "imageUrl": "assets/img/cat-alimentacao.png",
  "externalUrl": "https://www.mercadolivre.com.br/chupeta-supreme-bico-de-silicone-0m-neutra-mam/p/MLB23656240?product_trigger_id=MLB27505215&picker=true&quantity=1"
 },
 {
  "id": "g55",
  "name": "Mamadeira",
  "category": "Alimentação",
  "description": "Para as mamadas do dia.",
  "price": null,
  "imageUrl": "assets/img/cat-alimentacao.png",
  "externalUrl": "https://shopee.com.br/product/372598521/53406805690?gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTEcgAAAAygTrtrTFMGHj-oJFcPkrmQNn_SyOygtQ9GfZ8cQXEJO0W6rtS7ltF8oWq5B2KyGnzORldi4pHP9e0a0WR2O4Cj3NGwkNln4GvtPEVwlT8a2Y-xLezj_xB8_0cYpaziZnJ_4IR2WaAoRo-4GpwJmQ"
 },
 {
  "id": "g56",
  "name": "Kit 2 Mamadeiras MAM Easy Start",
  "category": "Alimentação",
  "description": "130/260ml, azul, anticólica.",
  "price": null,
  "imageUrl": "assets/img/cat-alimentacao.png",
  "externalUrl": "https://www.mercadolivre.com.br/kit-2-mamadeiras-easy-start-set-130260ml-azul-mam/p/MLB22597515?product_trigger_id=MLB22953031&picker=true&quantity=1"
 },
 {
  "id": "g57",
  "name": "Mamadeira Perfect Match Ovelha 150ml",
  "category": "Alimentação",
  "description": "Fluxo lento, 0M+.",
  "price": null,
  "imageUrl": "assets/img/cat-alimentacao.png",
  "externalUrl": "https://www.mercadolivre.com.br/mamadeira-perfect-match-0-meses-fluxo-lento-150ml-ovelha/up/MLBU4876668210?pdp_filters=item_id%3AMLB7468635234&from=gshop&matt_tool=53292458&matt_word=&matt_source=google&matt_campaign_id=22120855566&matt_ad_group_id=179138690291&matt_match_type=&matt_network=g&matt_device=c&matt_creative=729092955340&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5406190736&matt_product_id=MLBU4876668210&matt_product_partition_id=2496704471215&matt_target_id=pla-2496704471215&cq_src=google_ads&cq_cmp=22120855566&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22120855566&gbraid=0AAAAAD93qcAD1PwnZge-6zZRTx-QcwBkj&gclid=CjwKCAjwqc_UBhBKEiwAWbl25ivmaS8fJMWLDjOi_HWowSQu6Zx3lvyUU7jZX0DwnmopNqu2VoX7pxoCdBgQAvD_BwE"
 },
 {
  "id": "g58",
  "name": "Mamadeira Lansinoh Anticólica 160ml",
  "category": "Alimentação",
  "description": "Bico de fluxo lento.",
  "price": null,
  "imageUrl": "assets/img/cat-alimentacao.png",
  "externalUrl": "https://www.mercadolivre.com.br/mamadeira-lansinoh-160ml-anticolica-com-bico-fluxo-lento/up/MLBU4336125946?pdp_filters=item_id%3AMLB7176954074&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=191786783241&matt_match_type=&matt_network=g&matt_device=c&matt_creative=782869963127&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=415983338&matt_product_id=MLBU4336125946&matt_product_partition_id=2495712575174&matt_target_id=pla-2495712575174&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25tULz4XmYBL7JviJmf1wEuXHNeix2D3SLAUQLc-cT3P3v310Jn_gfRoCx0sQAvD_BwE"
 },
 {
  "id": "g59",
  "name": "Bolsa de Maternidade Grande",
  "category": "Outros",
  "description": "Grande capacidade.",
  "price": null,
  "imageUrl": "assets/img/cat-outros.png",
  "externalUrl": "https://www.mercadolivre.com.br/bolsa-de-fraldas-grande-capacidade-para-trocar-bebes-c-sin/p/MLB2053003622#polycard_client=recommendations_vpp-cbt&reco_backend=vpp_cbt_retrieval_system&reco_model=rk_ent_v2_retsys_org_cbt&reco_client=vpp-cbt&reco_item_pos=0&reco_backend_type=low_level&reco_id=1132783d-f39f-413b-869c-57a3bd7754e7&wid=MLB5132508043&sid=recos"
 },
 {
  "id": "g60",
  "name": "Móbile Musical Giratório Coruja",
  "category": "Quarto",
  "description": "Com controle remoto, gira e toca.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.magazineluiza.com.br/mobile-berco-carrinho-bebe-musical-e-giratorio-coruja-multifuncional-com-controle-remoto-e-funcoes-brinquedo-gira-e-toca-infantil-menina-e-menino-baby-style/p/bj9cb7gcf7/br/morc/?seller_id=starshop1"
 },
 {
  "id": "g61",
  "name": "Móbile Musical de Berço Coruja (Baby Style)",
  "category": "Quarto",
  "description": "Com luz e som.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.mercadolivre.com.br/mobile-musical-para-berco-baby-style-coruja-com-luz-e-som-cinza/p/MLB47823976?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id%3AMLB4326652535&from=gshop"
 },
 {
  "id": "g62",
  "name": "Móbile Elétrico com Chocalho Musical",
  "category": "Quarto",
  "description": "Controle de som.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://produto.mercadolivre.com.br/MLB-4088363985-mobile-eletrico-de-beb-com-chocalho-musical-controle-de-som-_JM?matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=173090547036&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882728456&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5839284358&matt_product_id=MLB4088363985&matt_product_partition_id=2497776677257&matt_target_id=pla-2497776677257&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25gozzJesz3gdUNOcvsKeYSpLuPo7UWAZuhvdHvYwVt_9_F7CNAv_NBoCOwoQAvD_BwE"
 },
 {
  "id": "g63",
  "name": "Almofada Protetora Anti-Queda Tartaruga",
  "category": "Cuidados",
  "description": "Mochila protetora de cabeça.",
  "price": null,
  "imageUrl": "assets/img/cat-cuidados.png",
  "externalUrl": "https://www.mercadolivre.com.br/mochila-almofada-protetor-cabeca-seguranca-pimpolho-bebe-cor-verde-tartaruga/p/MLB64099482?pdp_filters=item_id%3AMLB6160692772&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=173090547276&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882728465&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB64099482-product&matt_product_partition_id=2496112860465&matt_target_id=pla-2496112860465&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25jzr5MC9_s7K_aoReGZYu9pIKR-TWdse_cNOFxLFrJ4KkzD9-zsfGxoCa4YQAvD_BwE"
 },
 {
  "id": "g64",
  "name": "Sofazinho de Bebê",
  "category": "Outros",
  "description": "Assento almofadado para alimentação.",
  "price": null,
  "imageUrl": "assets/img/cat-outros.png",
  "externalUrl": "https://produto.mercadolivre.com.br/MLB-1944779167-assento-beb-almofada-infantil-mini-sofa-cadeira-alimentaco-_JM?attributes=Mod_12ee2_vpp%3AVmFxdWluaGE%3D&quantity=1&picker=true&matt_tool=34827903&matt_internal_campaign_id=348855908&matt_word=&matt_source=google&matt_campaign_id=22883155151&matt_ad_group_id=192009060131&matt_match_type=&matt_network=g&matt_device=c&matt_creative=776948595749&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=463315209&matt_product_id=MLB1944779167&matt_product_partition_id=2444504508640&matt_target_id=pla-2444504508640&cq_src=google_ads&cq_cmp=22883155151&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22883155151&gbraid=0AAAAAD93qcDh8198zucemHOSXLVi1G8JK&gclid=CjwKCAjwqc_UBhBKEiwAWbl25kNtJUT6NY2DJKBDI1WxiKxCGinq_av4qs3RGt0T1f5Bhpw_eT3pORoC16MQAvD_BwE"
 },
 {
  "id": "g65",
  "name": "Assento de Apoio para Bebê",
  "category": "Outros",
  "description": "Cadeirinha de conforto.",
  "price": null,
  "imageUrl": "assets/img/cat-outros.png",
  "externalUrl": "https://www.mercadolivre.com.br/assento-de-bebe-sentar-apoio-sofazinho-cadeirinha-conforto/up/MLBU4390658273?pdp_filters=item_id:MLB7233572188#polycard_client=recommendations_vip-pads-up&wid=MLB7233572188&sid=recos&reco_backend=recomm_platform_base_pads_rfa_MERGE_marketplace&reco_model=recos_backend_only&reco_client=vip-pads-up&reco_item_pos=12&reco_backend_type=low_level&reco_id=74b831aa-c25c-4a05-9d09-770d27092ea3&is_advertising=true&ad_domain=VIPDESKTOP_UP&ad_position=13&ad_click_id=YjkwYmU5YTEtNTFiOC00MTEyLWFiMjQtMjIzNzZmZGZmMWUy"
 },
 {
  "id": "g66",
  "name": "Ginásio de Atividades com Bolinhas",
  "category": "Outros",
  "description": "Tapete interativo com móbile.",
  "price": null,
  "imageUrl": "assets/img/cat-outros.png",
  "externalUrl": "https://www.mercadolivre.com.br/tapete-interativo-bebe-bolinhas-e-mobile-movie-maxi-baby/p/MLB45385463?pdp_filters=item_id%3AMLB5252472588&from=gshop&matt_tool=83257274&matt_word=&matt_source=google&matt_campaign_id=22090193888&matt_ad_group_id=174661975644&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914180463&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB45385463-product&matt_product_partition_id=2495580956535&matt_target_id=pla-2495580956535&cq_src=google_ads&cq_cmp=22090193888&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090193888&gbraid=0AAAAAD93qcBYpeZxnMeJ_izpeRJ30978E&gclid=CjwKCAjwqc_UBhBKEiwAWbl25j2pojgyymBdnwitYh5jY1-km1b3A9EPokIcHbHvwPrmvs4vVSY9CRoCPTwQAvD_BwE"
 },
 {
  "id": "g67",
  "name": "Tapete Inflável Tummy Time Splash (Buba)",
  "category": "Outros",
  "description": "Atividades com água.",
  "price": null,
  "imageUrl": "assets/img/cat-outros.png",
  "externalUrl": "https://www.mercadolivre.com.br/tapete-atividades-bebe-agua-inflavel-interativo-buba-splash/p/MLB63985447?pdp_filters=item_id%3AMLB6799925078&from=gshop&matt_tool=49652039&matt_word=&matt_source=google&matt_campaign_id=22090354241&matt_ad_group_id=173090547516&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882728474&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB63985447-product&matt_product_partition_id=2495580956775&matt_target_id=pla-2495580956775&cq_src=google_ads&cq_cmp=22090354241&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354241&gbraid=0AAAAAD93qcCnKx8k7_FNhgBVK2aaNi_Gq&gclid=CjwKCAjwqc_UBhBKEiwAWbl25jxStBLyIhiexGxCoMr51gluYeUxZ1LaqZ-AqRMUMMbGv0WJlFYbhBoC3ggQAvD_BwE"
 },
 {
  "id": "g68",
  "name": "Cinta Térmica para Cólica",
  "category": "Cuidados",
  "description": "Alívio das cólicas do bebê.",
  "price": null,
  "imageUrl": "assets/img/cat-cuidados.png",
  "externalUrl": "https://shopee.com.br/product/572649927/23197732351?credential_token=8wEwiDL7YDd2Bdu48EvouUQyfTy8Afpob7CfYogPWx&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTElwAAAAzjvPachFaIZ4sK-Ffc19nr7JZ4WQx10NTdvgZLZZrkI8UnaoYzQPu5RxO_VabQiY02ILOWwXyVaY4lI2AAb1o8w6pFE6Acp2eXTQBP0emfJNYAZYRY3YakIL2EqNn9ySLc8Xfy_eBRTrWNQhEX0dFqWNPxIbBiZ_L27RWQH05Nmz2f7nQZgdx29v9WGFEDHWlGOUI&mmp_pid=an_18116240000&uls_trackid=56h0tvps031f&utm_campaign=id_734cd55d1c66fe38&utm_content=descontinhodemamae----&utm_medium=affiliates&utm_source=an_18116240000&utm_term=fgc62228kef9"
 },
 {
  "id": "g69",
  "name": "Gel Alivia Febre",
  "category": "Cuidados",
  "description": "Adesivo refrescante.",
  "price": null,
  "imageUrl": "assets/img/cat-cuidados.png",
  "externalUrl": "https://www.amazon.com.br/dp/B0DHSHNWMX?tag=baby-split-20"
 },
 {
  "id": "g70",
  "name": "Reprodutor de Ruído Branco com Luminária",
  "category": "Quarto",
  "description": "Auxiliar de sono portátil.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://shopee.com.br/Reprodutor-Port%C3%A1til-de-Som-de-Sono-para-Crian%C3%A7as-M%C3%BAsica-e-Ru%C3%ADdo-Branco-Dispositivo-Auxiliar-de-Sono-com-M%C3%BAsica-e-Luz-M-i.1807107169.58211803994?extraParams=%7B%22display_model_id%22%3A159554678471%2C%22model_selection_logic%22%3A3%7D"
 },
 {
  "id": "g71",
  "name": "Umidificador Fisher-Price Ultrassônico",
  "category": "Quarto",
  "description": "Bivolt, para o quarto.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.amazon.com.br/Umidificador-Fisher-Ultrass%C3%B4nico-HC115-Bivolt/dp/B07HR1MZQP?pf_rd_r=6J16J52YZVD9YTJC3VNZ&pf_rd_p=a43a02c5-fe2d-4a34-af71-7d62fff70488&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&ascsubtag=srctok-46b4ae490fb1a9c7&btn_type=ss&btn_ref=srctok-7896fc9d532930ca&linkCode=sl2&tag=descontinhojhenni-20&linkId=d23dee9400fc9a90f96cb87e2c1076d8&ref_=as_li_ss_tl"
 },
 {
  "id": "g72",
  "name": "Babá Eletrônica com Visão Noturna",
  "category": "Quarto",
  "description": "Monitor VB603, áudio duplo.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://www.mercadolivre.com.br/baba-eletronica-baby-monitor-vb603-visao-noturna-dual-audio-cor-branco-estary-shop/p/MLB47899174#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=5&type=product&tracking_id=ebfe02ef-899a-488d-aff5-228379b56a73&wid=MLB5351539370&sid=search"
 },
 {
  "id": "g73",
  "name": "Cômoda e Guarda-Roupa",
  "category": "Quarto",
  "description": "Para organizar o enxoval.",
  "price": null,
  "imageUrl": "assets/img/cat-quarto.png",
  "externalUrl": "https://shopee.com.br/product/525824777/22498205096?credential_token=8wEwiDL7YDXo6tZgnciiGbwCFSQpmM18WQMEp3y9fj&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTElwAAAAy_TlRZ3oz7WLFfz8gIyYUTgUWWruOPl8I7bdl1cr2Z5PN6V0cDFjaoY2zbdJ9fP7UVKLC-OCbCHiwdgl0shDOUHscSP3dzUgaNv12kL9zp6JoEvKcCezbtA1QoNbibIAu3FsE_ROWdonVlP9IceuvGUxw_CMFI1rWVVzFEybxJH2mf2wtvw4cFKnB3oMckwNLFYwE&mmp_pid=an_18319270113&uls_trackid=56h1choi022d&utm_campaign=id_aaa189310cc2698c&utm_content=Enviopromos----&utm_medium=affiliates&utm_source=an_18319270113&utm_term=fgch92x9kyef"
 },
 {
  "id": "g74",
  "name": "Esterilizador de Mamadeiras",
  "category": "Alimentação",
  "description": "Praticidade na rotina.",
  "price": null,
  "imageUrl": "assets/img/cat-alimentacao.png",
  "externalUrl": "https://www.amazon.com.br/dp/B0CGSTKQN9?tag=preciosamaternidade-20&linkCode=ogi&th=1&psc=1&ascsubtag=srctok-65866a36c0f30cce&btn_type=ss&btn_ref=srctok-65866a36c0f30cce"
 },
 {
  "id": "g75",
  "name": "Brinquedo Macaco Fisher-Price",
  "category": "Outros",
  "description": "Primeiros brinquedos.",
  "price": null,
  "imageUrl": "assets/img/cat-outros.png",
  "externalUrl": "https://www.amazon.com.br/dp/B07FK31DGB?tag=preciosamaternidade-20&linkCode=ogi&th=1&ascsubtag=srctok-4329d824673c5b4b&btn_type=ss&btn_ref=srctok-4329d824673c5b4b"
 },
 {
  "id": "g76",
  "name": "Almofada de Pescoço Chevron Cinza",
  "category": "Cuidados",
  "description": "Apoio para a cabecinha.",
  "price": null,
  "imageUrl": "assets/img/cat-cuidados.png",
  "externalUrl": "https://shopee.com.br/product/338060016/22398292925?credential_token=8wEwiDL7YDXmuQesPhVfh6DENhc2nDWiZSY8Kgd27i&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTElwAAAAy41HIjPHcH8TjZPgwDM6EDZtbIwtdrIKNpEDZM1mwA3EXtviMHaPMbxqK4D6cey6ktJPyb357p5gxex-PLECGn-6COKVQTnvlOwDTM_jH1SuSdLOhkwzmNhMi6h0zBBh-BJocgdc94oAOn8SI_bOk6vw6dLpI5j66k0siXnw1l6qKrALdvMH2Ql_ujtzsD6wScRXs&mmp_pid=an_18319270113&uls_trackid=56h1eegl023m&utm_campaign=id_03bb883ef67d1b97&utm_content=Enviopromos----&utm_medium=affiliates&utm_source=an_18319270113&utm_term=fgcipr1c2ju9"
 },
 {
  "id": "g77",
  "name": "Cadeira de Descanso Musical Leão",
  "category": "Outros",
  "description": "Balanço Fun Time (Maxi Baby).",
  "price": null,
  "imageUrl": "assets/img/cat-outros.png",
  "externalUrl": "https://www.mercadolivre.com.br/maxi-baby-cadeira-de-descanso-e-balanco-bebe-musical-fun-time-felix-leao/p/MLB38625704?matt_event_ts=1788131388675&matt_d2id=ec70b00c-1ba9-459e-9b68-cb30016450c8&matt_tracing_id=a1d28713-61ad-4717-820b-249c031ec39f#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=76718861&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=21eae22a-2b07-46d3-94e4-3d8df04ed3d9&tracking_id=214235e4-c288-48b3-94a9-2da0f60943a3&c_id=/home/card-featured/element&c_uid=efe18d03-121e-452c-822a-c0d2bec8cc71"
 },
 {
  "id": "g78",
  "name": "Almofada Interativa Tummy Time Zebra",
  "category": "Outros",
  "description": "Com chocalho (Maxi Baby).",
  "price": null,
  "imageUrl": "assets/img/cat-outros.png",
  "externalUrl": "https://www.mercadolivre.com.br/almofada-atividade-bebe-tummy-time-chocalho-maxi-baby-zebra/p/MLB67841573?pdp_filters=seller_id%3A222533718#polycard_client=recommendations_vip-seller_items-above&reco_backend=ranker-retsys-same-seller&reco_model=fallback_same-seller&reco_client=vip-seller_items-above&reco_item_pos=0&reco_backend_type=low_level&reco_id=58a77e18-0077-45f6-941d-26a69043896c&wid=MLB4600501609&sid=recos"
 },
 {
  "id": "g79",
  "name": "Tapete de Atividades Musical Piano",
  "category": "Outros",
  "description": "Ginásio Lumi (Maxi Baby).",
  "price": null,
  "imageUrl": "assets/img/cat-outros.png",
  "externalUrl": "https://www.mercadolivre.com.br/ginasio-tapete-atividades-bebe-piano-lumi-laranja-maxi-baby/p/MLB44425615?pdp_filters=seller_id%3A222533718#reviews"
 },
 {
  "id": "g80",
  "name": "Carrossel de Atividades (Buba)",
  "category": "Outros",
  "description": "Movimento interativo.",
  "price": null,
  "imageUrl": "assets/img/cat-outros.png",
  "externalUrl": "https://www.mercadolivre.com.br/carrossel-de-atividades-brinquedo-movimento-interativo-buba/up/MLBU3522522236?pdp_filters=item_id%3AMLB4275609679&matt_event_ts=1788131733801&matt_d2id=ec70b00c-1ba9-459e-9b68-cb30016450c8&matt_tracing_id=06cb7f4b-5b67-4e3b-b108-cff4f765cfac#polycard_client=recommendations_home_affiliate-profile&wid=MLB4275609679&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=76718861&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=5c09480f-c192-4657-9139-058b9bdefb07&tracking_id=b85178c1-ca7f-46ab-a9dd-e03a585766ea&c_id=/home/card-featured/element&c_uid=43a969ef-bad5-429f-a0f5-fcf52382e077"
 },
 {
  "id": "g81",
  "name": "Nebulizador Ultrassônico Portátil",
  "category": "Cuidados",
  "description": "A pilha e bivolt.",
  "price": null,
  "imageUrl": "assets/img/cat-cuidados.png",
  "externalUrl": "https://shopee.com.br/Nebulizador-Ultrass%C3%B4nico-inalador-port%C3%A1til-a-pilha-e-bivolt-i.1005980154.22397842715?extraParams=%7B%22display_model_id%22%3A109865904636%7D&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMaaRlZwa4TmRr35EbRKe45opqqWzquDpxLoPl6a_nP90XlrFndAmj-Eti4LViLnnfxaArnW_92wfHWioVqmNpcGhlcnRleHTEyAAAAAyY-FzFVDVXjS-k9Zo40YrAxtaL_wRuP48lDdzkkQ7qF7ndR7Ek1F7GsDDi5DltM4kcQqmxzWaOZQ2eGWZou8hTGp_DUqhHtDMqvQLcaQVcfPioaXs4XXDGXRwm7GDJHTjfguAxJSAueXxuiII3RIh5IJOakK4lnuEGczNL3vRyHGSQDFRh9hNOZXZVn2rwgFUovTDFAirixWwqxFIUsimdD-aC5V-_AlkxMLVzciYcrCeeDH0CZPF-VdWuWs94v9Tuw7Hv&mmp_pid=an_18196660011&uls_trackid=56h1hd7q00a4&utm_campaign=id_aa1608580dbaa6f8&utm_content=BABY----&utm_medium=affiliates&utm_source=an_18196660011&utm_term=fgckz7mi3qg3"
 },
 {
  "id": "g82",
  "name": "Brinquedo Buba Zoo Pop-up",
  "category": "Outros",
  "description": "Estimula a coordenação.",
  "price": null,
  "imageUrl": "assets/img/cat-outros.png",
  "externalUrl": "https://www.amazon.com.br/BUBA-17876-Pop-Up-Buba-Zoo/dp/B0CRZDD7MP/ref=dp_fod_d_sccl_3/142-7024450-8854860?pd_rd_w=fvzH5&content-id=amzn1.sym.4f53009d-6d67-4b5d-99e2-f94097efb59f&pf_rd_p=4f53009d-6d67-4b5d-99e2-f94097efb59f&pf_rd_r=01DSS5CE90140DH52GZT&pd_rd_wg=TcQ6f&pd_rd_r=09c4176d-a318-448a-a5e7-34e66812a0b7&pd_rd_i=B0CRZDD7MP&psc=1"
 },
 {
  "id": "g83",
  "name": "Picluck para Vacinas",
  "category": "Cuidados",
  "description": "Conforto na hora da vacina.",
  "price": null,
  "imageUrl": "assets/img/cat-cuidados.png",
  "externalUrl": "https://www.amazon.com.br/dp/B07MBTRWSH?tag=baby-split-20"
 },
 {
  "id": "g84",
  "name": "Termômetro de Banheira Girafinha (Buba)",
  "category": "Higiene",
  "description": "Temperatura ideal do banho.",
  "price": null,
  "imageUrl": "assets/img/cat-higiene.png",
  "externalUrl": "https://produto.mercadolivre.com.br/MLB-5026443856-termmetro-de-banheira-para-banho-beb-girafinha-buba-_JM?searchVariation=184535663713&matt_event_ts=1788132968373&matt_d2id=ec70b00c-1ba9-459e-9b68-cb30016450c8&matt_tracing_id=3253f648-6359-4e2e-88c3-d25fa66af833#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=57038857&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=69bd0ccd-bf1a-4f33-8390-43b9f1c5bddc&tracking_id=e7c3d4d0-f8fa-4574-8d2c-ff92022bd076&c_id=/home/card-featured/element&c_uid=d069a141-1c09-42af-a4e2-577abdc7afe7"
 },
 {
  "id": "g85",
  "name": "Garrafa Térmica Buba",
  "category": "Alimentação",
  "description": "Água quentinha a qualquer hora.",
  "price": null,
  "imageUrl": "assets/img/cat-alimentacao.png",
  "externalUrl": "https://www.amazon.com.br/dp/B08JXP4NFR?tag=baby-split-20&th=1"
 }
];

/* ===================== RESERVAS (localStorage) =====================
   Fica só neste navegador. Para compartilhar entre todos os convidados,
   trocar loadReservations/saveReservations por um backend. */
const STORAGE_KEY = 'cassiel-reservations';
function loadReservations(){ try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}'); }catch(e){ return {}; } }
function saveReservations(d){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); return true; }catch(e){ return false; } }
let reservations = loadReservations();
function addClaim(id,name){ const r=reservations[id]||{claims:[]}; if(!Array.isArray(r.claims)) r.claims=[]; r.claims.push({guestName:name,timestamp:Date.now()}); reservations[id]=r; }

/* ===================== HELPERS ===================== */
const $=(s,el=document)=>el.querySelector(s);
const $$=(s,el=document)=>Array.from(el.querySelectorAll(s));
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function page(){ return document.body.dataset.page||'inicio'; }

/* ===================== LAYOUT COMPARTILHADO ===================== */
const NAV=[['inicio','index.html','Início'],['fraldas','fraldas.html','Fraldas'],['presentes','presentes.html','Presentes'],['sobre','sobre.html','Sobre o chá']];
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
      <div id="modalForm">
        <h3 id="modalTitle">Que carinho! 💙</h3>
        <p class="modal-product" id="modalProduct"></p>
        <p class="modal-text">Deixe seu nome registrado para a família saber do seu carinho — em seguida você vai direto para a loja.</p>
        <form class="modal-form" id="reserveForm" novalidate>
          <label for="guestName">Seu nome</label>
          <input id="guestName" type="text" placeholder="Digite seu nome" autocomplete="name" aria-required="true">
          <p class="form-error" id="formError" role="alert" hidden></p>
          <div class="modal-actions">
            <button type="button" class="btn btn-secondary" id="modalCancel">Voltar</button>
            <button type="submit" class="btn btn-primary">Confirmar e ir para a loja</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="toast" id="toast" role="status"></div>`);
  const modal=$('#modal'), nameInput=$('#guestName'), err=$('#formError');
  let current=null;
  window.openModal=function(id,type){
    current={ item:(type==='diaper'?DIAPERS:GIFTS).find(x=>x.id===id), type };
    if(!current.item) return;
    $('#modalProduct').textContent=current.item.name+(current.item.size?' — Tamanho '+current.item.size:'');
    $('#modalForm').hidden=false;
    nameInput.value=''; err.hidden=true;
    modal.classList.add('open'); document.body.style.overflow='hidden';
    setTimeout(()=>nameInput.focus(),60);
  };
  function closeModal(){ modal.classList.remove('open'); document.body.style.overflow=''; current=null; }
  $('#modalClose').addEventListener('click',closeModal);
  $('#modalCancel').addEventListener('click',closeModal);
  modal.addEventListener('mousedown',e=>{ if(e.target===modal) closeModal(); });
  window.addEventListener('keydown',e=>{ if(e.key==='Escape'&&modal.classList.contains('open')) closeModal(); });
  $('#reserveForm').addEventListener('submit',e=>{
    e.preventDefault();
    const name=nameInput.value.trim();
    if(!name){ err.textContent='Por favor, digite seu nome para continuar.'; err.hidden=false; nameInput.focus(); return; }
    err.hidden=true;
    reservations=loadReservations();
    const {item}=current;
    addClaim(item.id,name);
    saveReservations(reservations);
    if(item.externalUrl) window.open(item.externalUrl,'_blank','noopener,noreferrer');
    closeModal();
    toast(`Obrigado, ${name}! Abrimos a loja em uma nova aba 💙`);
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
    <button class="btn btn-primary btn-sm" data-choose="${d.id}" data-type="diaper">Quero presentear</button>
  </div>`;
}
function miniGift(g){
  return `<div class="mini-card">
    <div class="thumb"><img src="${esc(g.imageUrl)}" alt=""></div>
    <span class="name">${esc(g.name)}</span>
    <button class="btn btn-primary btn-sm" data-choose="${g.id}" data-type="gift">Quero presentear</button>
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
      <button class="btn btn-primary w-full" data-choose="${d.id}" data-type="diaper">Quero presentear</button>
    </div></article>`;
}
function giftCard(g){
  return `<article class="product-card reveal">
    <div class="product-media"><img src="${esc(g.imageUrl)}" alt=""></div>
    <div class="product-body">
      <span class="badge soft">${esc(g.category)}</span>
      <h3>${esc(g.name)}</h3>
      <p class="product-desc">${esc(g.description)}</p>
      <div class="spacer"></div>
      <button class="btn btn-primary w-full" data-choose="${g.id}" data-type="gift">Quero presentear</button>
    </div></article>`;
}

/* ===================== REVEAL ===================== */
const io='IntersectionObserver' in window ? new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.1}) : null;
function observeReveal(){ $$('.reveal:not(.in)').forEach(el=>{ io?io.observe(el):el.classList.add('in'); }); }

/* ===================== BOOT ===================== */
document.addEventListener('DOMContentLoaded',()=>{
  renderHeader(); renderFooter(); renderModal();
  document.addEventListener('click',e=>{
    const ch=e.target.closest('[data-choose]'); if(ch&&!ch.disabled){ e.preventDefault(); openModal(ch.dataset.choose, ch.dataset.type); }
  });
  $$('[data-external]').forEach(a=>{
    const key=a.dataset.external, url=EXTERNAL_LINKS[key];
    if(url){ a.href=url; a.target='_blank'; a.rel='noopener noreferrer'; }
    else a.addEventListener('click',ev=>{ ev.preventDefault(); toast('Esse link ainda vai ser divulgado 💙'); });
  });
  if(typeof window.initPage==='function') window.initPage();
  observeReveal();
});

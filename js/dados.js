//Lista de pontos de descarte no estado da Bahia
let dadosBA = [
    {
      titulo: "Salvador Reciclagem",
      endereco:"Av. Jorge Amado, 40 - Imbuí, Salvador - BA,",
      horario:"SEG-SAB 08:00 às 17:00",
      link: "https://www.instagram.com/salvadorreciclagem/",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "Recicla Salvador",
      endereco:"R. Édson Saldanha, 210a - Luís Anselmo, Salvador - BA",
      horario:"SEG-SEX 08:30 às 17:30 | SAB 08:30 às 15:30",
      link: "https://www.instagram.com/reciclasalvador/",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Cajazeiras",
      endereco:"Campo da Pronaica, Cajazeiras X, Salvador - BA",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Imbuí",
      endereco:"Praça do Imbuí - Av. Jorge Amado - Imbuí, Salvador - BA",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Mussurunga (Assaí)",
      endereco:"Assaí Mussurunga - R. Prof. Plínio Garcez de Sena, 1240 - Mussurunga, Salvador - BA",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Patamares",
      endereco:"Av. Ibirapitanga, Patamares - Em frente a Escola Pan Americana da Bahia, ao lado da parada de ônibus - Patamares, Salvador - BA",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Periperi",
      endereco:"Praça da Revolução - Periperi, Salvador - BA",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Pilar",
      endereco:"R. do Pilar - Comércio, Salvador - BA",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Pituba",
      endereco:"Praça Ana Lucia Magalhães - Pituba, Salvador - BA",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Ribeira",
      endereco:"Largo do Papagaio - Ribeira, Salvador - BA",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Rio Vermelho",
      endereco:"Vila Caramuru - Praça Caramuru, 2 - Rio Vermelho, Salvador - BA",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Stella Maris",
      endereco:"Praça de Stella Maris, Alameda Praia de Guaratuba, s/n - Stella Maris, Salvador - BA",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Ondina",
      endereco:"Rua Nossa Senhora de Fátima, nº 2829  - Ondina, Salvador - BA",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Feira",
      endereco:"Centro Comercial de Camaçari , Rua Costa Pinto s/n - Centro, Camaçari - BA.",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
  ];
  //Lista de pontos de descarte no estado do Paraná
  let dadosPR = [
    {
      titulo: "BR Aparas - Reciclagem e Gerenciamento de Resíduos",
      endereco:"Estr. do Ganchinho, 2981 - Umbará, Curitiba - PR",
      horario:"SEG-SEX 07:30 às 17:30",
      link: "https://braparas.com.br/",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados pp ps pvc sacola sacolas metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Caiuá",
      endereco:"Av. Juscelino Kubitschek de Oliveira - Ld, 6800, Curitiba - PR",
      horario:"SEG-SAB 08:00 às 17:00",
      link: "https://www.curitiba.pr.gov.br/servicos/ecopontos-descarte-correto-de-residuos/716",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados caliça madeiras mobiliários moveis móveis metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Cajuru",
      endereco:"R. Neusa Vieira Bet, 255, Curitiba - PR",
      horario:"SEG-SAB 08:00 às 17:00",
      link: "https://www.curitiba.pr.gov.br/servicos/ecopontos-descarte-correto-de-residuos/716",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados caliça madeiras mobiliários moveis móveis metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | CIC",
      endereco:"R. Orestes Thá, 1765, Curitiba - PR",
      horario:"SEG-SAB 08:00 às 17:00",
      link: "https://www.curitiba.pr.gov.br/servicos/ecopontos-descarte-correto-de-residuos/716",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados caliça madeiras mobiliários moveis móveis metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Metropolitano",
      endereco:"R. da Independência, 340, Curitiba - PR",
      horario:"SEG-SAB 08:00 às 17:00",
      link: "https://www.curitiba.pr.gov.br/servicos/ecopontos-descarte-correto-de-residuos/716",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados caliça madeiras mobiliários moveis móveis metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Sambaqui",
      endereco:"R. Rad. Souza Moreno, 30, Curitiba - PR",
      horario:"SEG-SAB 08:00 às 17:00",
      link: "https://www.curitiba.pr.gov.br/servicos/ecopontos-descarte-correto-de-residuos/716",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados caliça madeiras mobiliários moveis móveis metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Batel",
      endereco:"Ecoponto Parque Gomm - Parque Gomm, R. Hermes Fontes, 204 - Batel, Curitiba - PR",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 08:00 às 12:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | CIC",
      endereco:"Ecoponto CIC - R. Orestes Thá, 1800 - Cidade Industrial De Curitiba - Curitiba-PR",
      horario:"SEG-SEX 08:00 às 17:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Mercado Municipal",
      endereco:"Av. Sete de Setembro, 1865, BOX 96 - Centro, Curitiba - PR",
      horario:"TER-SAB 08:00 às 17:45",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Vila Sandra",
      endereco:"R. João Dembinski, 900-986 - Cidade Industrial de Curitiba, Curitiba - PR",
      horario:"TER-SAB 08:00 às 17:45",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | Itaqui",
      endereco:"Av. Porcelana, 621 Em frente à fábrica da Porcelana Schimidt, Campo Largo - PR",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "SO+MA Vantagens | CIOSP",
      endereco:"R. Centenário, 2245 - Centro, Campo Largo - PR (Em frente ao CIOSP), Campo Largo - PR",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
  ];
  //Lista de pontos de descarte no estado de Santa Catarina
  let dadosSC = [
    {
      titulo: "SO+MA Vantagens | Selina",
      endereco:"Rod. Jorn. Manoel de Menezes, 2001 Praia Mole (estacionamento), Florianópolis - SC",
      horario:"SEG-SEX 08:00 às 17:00 | SAB 09:00 às 13:00",
      link: "https://somosasoma.com.br/#/inicio",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Itacorubi",
      endereco:"Rodovia Admar Gonzaga, 72, Florianópolis - SC,",
      horario:"SEG-DOM 07:00 às 19:00",
      link: "https://www.pmf.sc.gov.br/entidades/residuos/index.php?cms=ecopontos+da+smma&menu=4&submenuid=150",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados isopor compostáveis compostaveis pneus esponjas livros metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Morro das Pedras",
      endereco:"Rua Francisco Vieira, 198, em frente à Padaria Moreira, Florianópolis - SC,",
      horario:"SEG-DOM 07:00 às 18:30",
      link: "https://www.pmf.sc.gov.br/entidades/residuos/index.php?cms=ecopontos+da+smma&menu=4&submenuid=150",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados isopor compostáveis compostaveis pneus esponjas livros metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Canasvieiras",
      endereco:"Rua Desembargador Maurílio Coimbra (próximo campo da Amocan), Florianópolis - SC,",
      horario:"SEG-SEX 07:30 às 17:30 | SAB 07:30 às 11:30",
      link: "https://www.pmf.sc.gov.br/entidades/residuos/index.php?cms=ecopontos+da+smma&menu=4&submenuid=150",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados isopor compostáveis compostaveis pneus esponjas livros metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Capoeiras",
      endereco:"Terminal de Capoeiras, Rua Professor Egídio Ferreira, s/n, Florianópolis - SC,",
      horario:"SEG-DOM 07:00 às 19:00",
      link: "https://www.pmf.sc.gov.br/entidades/residuos/index.php?cms=ecopontos+da+smma&menu=4&submenuid=150",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados isopor compostáveis compostaveis pneus esponjas livros metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Monte Cristo",
      endereco:"Rua Professor Joaquim, Nabuco, 2948 (ao lado da Associação Recicladores Esperança Aresp), Florianópolis - SC,",
      horario:"SEG-DOM 07:00 às 19:00",
      link: "https://www.pmf.sc.gov.br/entidades/residuos/index.php?cms=ecopontos+da+smma&menu=4&submenuid=150",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados isopor esponjas livros metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Rio Vermelho",
      endereco:"Rua Cândido Pereira dos Anjos, s/n, Florianópolis - SC,",
      horario:"SEG-DOM 07:00 às 19:00",
      link: "https://www.pmf.sc.gov.br/entidades/residuos/index.php?cms=ecopontos+da+smma&menu=4&submenuid=150",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados isopor compostáveis compostaveis pneus esponjas livros metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Ingleses",
      endereco:"Rua Via Local Insular, Projeto 50346, S/N (atrás da subestação da CELESC), Florianópolis - SC,",
      horario:"SEG-DOM 07:00 às 19:00",
      link: "https://www.pmf.sc.gov.br/entidades/residuos/index.php?cms=ecopontos+da+smma&menu=4&submenuid=150",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados isopor compostáveis compostaveis pneus esponjas livros metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Costeira",
      endereco:"Avenida Jorge Lacerda, nº 1374 (ao lado do NEIM Costeira), Florianópolis - SC,",
      horario:"SEG-DOM 07:00 às 19:00",
      link: "https://www.pmf.sc.gov.br/entidades/residuos/index.php?cms=ecopontos+da+smma&menu=4&submenuid=150",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados isopor compostáveis compostaveis pneus esponjas livros metal lata ferro aço aco"
    },
    {
      titulo: "Ecoponto | Coloninha",
      endereco:"Rua Araci Vaz Callado, nº 2000, Florianópolis - SC,",
      horario:"SEG-DOM 07:00 às 19:00",
      link: "https://www.pmf.sc.gov.br/entidades/residuos/index.php?cms=ecopontos+da+smma&menu=4&submenuid=150",
      tipoResiduo: "leite longa vida  longavida tetra paks  tetrapaks alumínio aluminio óleos oleos papel papeis papelão papelao pet plásticos plasticos vidros eletros eletrodomésticos eletrônicos eletroportáteis eletrodomesticos eletronicos eletroportateis roupas calçados calcados isopor compostáveis compostaveis pneus esponjas livros metal lata ferro aço aco"
    },
  ];
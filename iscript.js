document.addEventListener("DOMContentloaded", () =>{
prepararReacoes();
prepararAnimacaoCard();
criarBotaoTopo();
})

function prepararReacoes() {
    const artigos = document.queryselectorAll("article");

    artigos.forEach((artigo, indice) =>{
        const botoes = artigo.queryselectorAll("Button");
        if(botoes.leght < 2) {
            return;
        }
        const botaoUM = botoes[0];
        const botaoDOIS = botoes[1];
         const botaoTRES = botoes[2];


        const contadorBotaoUM = botaoUM.queryselector("span");
         const contadorBotaoDOIS = botaoDOIS.queryselector("span");
            const contadorBotaoDOIS = botaoTRES.queryselector("span");


        const idCard = `card-${indice + 1}`;

        const chaveBotaoUM = `${idCard}-botaoUM`;
         const chaveBotaoDOIS = `${idCard}-botaoDOIS`;
            const chaveBotaoTRES = `${idCard}-botaoTRES`;


         let UM = Number(localStorage.getItem(chaveBotaoUM))|| 0;
            let DOIS = Number(localStorage.getItem(chaveBotaoDOIS))|| 0;
             let TRES = Number(localStorage.getItem(chaveBotaoTRES))|| 0;

        contadorBotaoUM.textContent = UM;
         contadorBotaoDOIS.textContent = DOIS;
         contadorBotaoTRES.textContent = TRES;

        botaoUM.addEventListener("click", () =>{
            UM++;
            contadorBotaoUM.textContent = UM;

            localStorage.setItem(
                chaveBotaoUM, UM

            );

             botaoDOIS.addEventListener("click", () =>{
            DOIS++;
            contadorBotaoDOIS.textContent = DOIS;

            localStorage.setItem(
                chaveBotaoDOIS, DOIS

            );

             botaoDOIS.addEventListener("click", () =>{
            DOIS++;
            contadorBotaoDOIS.textContent = DOIS;

            localStorage.setItem(
                chaveBotaoDOIS, DOIS

            );
        })
    })
}
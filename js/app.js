        // DECLAÇÃO DAS VARIÁVEIS DO JOGO:

        //contador de jogadas
        let contJogadas = 0

        //Estado de jogo
            // 0 --> jogo em andamento.
            // 1 --> vitória do jogador X.
            // 2 --> vitória do jogador O.
            // 3 --> jogo empatado.
        let estado = 0

        // Vez do jogador.
        let x = true
        let o = false

        // Retorna informações para os usuários.
        let retorno = document.getElementById('retorno')

        // Seleciona o texto jogador da vez.
        let jogadorDavez = document.getElementById('jogadorDaVez')

        // Variáveis que marcam as jogadas.
        let b1 = null;
        let b2 = null;
        let b3 = null;
        let b4 = null;
        let b5 = null;
        let b6 = null;
        let b7 = null;
        let b8 = null;
        let b9 = null;

        // Calculando o tamanho da tela de jogo ideal.
        const alturaDaJanela = window.innerHeight
        const larguraDaJanela = window.innerWidth
        const menorLadoDaJanela = alturaDaJanela > larguraDaJanela ? larguraDaJanela : alturaDaJanela
        const telaDeJogoIdeal = Math.trunc(menorLadoDaJanela * 0.7)

        // Aplicando o tamanho da tela ao jogo.
        const tela = document.getElementById("tela")
        tela.style.width = `${telaDeJogoIdeal}px`
        tela.style.height = `${telaDeJogoIdeal}px`

        // Calculando o tamanho dos botões.
        const tamanhoBotoes = Math.trunc((telaDeJogoIdeal - 10) / 3)

        // Calculando o tamanho da fonte para os botões.
        const fonteBotoes = Math.trunc(tamanhoBotoes * 0.4)

        // Aplicando o tamanho dos botões e o tamanho da fonte.
        const botoes = document.getElementsByClassName('bt-jogo')
        for(i = 0; i < botoes.length; i++){
            botoes[i].style.width = `${tamanhoBotoes}px`
            botoes[i].style.height = `${tamanhoBotoes}px`
            botoes[i].style.fontSize = `${fonteBotoes}px`
            botoes[i].addEventListener('click',inserirJogada)
        }

        //Função que insere as jogadas com o clique dos botões de jogo.
        function inserirJogada(){
            let elementoClicado = this.getAttribute('id')
            let erro = false
            if(contJogadas < 9 && estado == 0){

                // Adiciona o texto X ou O a variável jogada.
                let jogada = x === true ? "X" : "O"

                // Adiciona X ou O a variável que marca os valores de cada casa.
                // Retorna um erro caso a jogada já tenha sido feita.
                switch (elementoClicado){
                    case 'b1':
                        if(b1 == null){
                            b1 = jogada
                        }else{
                            erro = true
                        }
                        break
                    case 'b2':
                        if(b2 == null){
                            b2 = jogada
                        }else{
                            erro = true
                        }
                        break
                    case 'b3':
                        if(b3 == null){
                            b3 = jogada
                        }else{
                            erro = true
                        }
                        break
                    case 'b4':
                        if(b4 == null){
                            b4 = jogada
                        }else{
                            erro = true
                        }
                        break
                    case 'b5':
                        if(b5 == null){
                            b5 = jogada
                        }else{
                            erro = true
                        }
                        break
                    case 'b6':
                        if(b6 == null){
                            b6 = jogada
                        }else{
                            erro = true
                        }
                        break
                    case 'b7':
                        if(b7 == null){
                            b7 = jogada
                        }else{
                            erro = true
                        }
                        break
                    case 'b8':
                        if(b8 == null){
                            b8 = jogada
                        }else{
                            erro = true
                        }
                        break
                    case 'b9':
                        if(b9 == null){
                            b9 = jogada
                        }else{
                            erro = true
                        }
                        break
                }

                // Verifica se um erro foi registrado.
                // Executa ações caso não haja erros.
                // O erro é retornado caso aquele botão já tenha sido marcado.
                if(erro == false){

                    // Verifica de quem é o próximo a jogar.
                    if (x === true){
                        x = false
                        o = true
                    }else{
                        o = false
                        x = true
                    }

                    // Informa quem é o próximo a jogar.
                    // Insere o texto no span do parágrafo[id jogadorDaVez]
                    if(x == true){
                        jogadorDavez.innerText = "X"
                    }else{
                        jogadorDavez.innerText = "O"
                    }

                    // Coloca a jogada na Tela do jogo, no botão clicado [X ou O].
                    this.innerText = jogada
                    this.style.color = "black"
                    contJogadas++

                    // Verifica o esdado atual do jogo.
                    verificarJogo()
                    
                }
                
            }
            
            if(estado == 1){
                retorno.innerHTML = "Jogador [X]: venceu o jogo. Clique em recomeçar!"
            }else if(estado == 2){
                retorno.innerHTML = "Jogador [O]: venceu o jogo! Clique em recomeçar!"
            }else if(estado == 3){
                retorno.innerHTML = "O jogo está empatado! Clique em recomeçar!"
            }


        }

        function verificarJogo(){

            // Avaliação horizontal...
            if(b1 == 'X' && b2 == 'X' && b3 == 'X'){
                botoes[0].style.color = 'red'
                botoes[1].style.color = 'red'
                botoes[2].style.color = 'red'
                estado = 1
            }if(b1 == 'O' && b2 == 'O' && b3 == 'O'){
                botoes[0].style.color = 'red'
                botoes[1].style.color = 'red'
                botoes[2].style.color = 'red'
                estado = 2
            }else if(b4 == 'X' && b5 == 'X' && b6 == 'X'){
                botoes[3].style.color = 'red'
                botoes[4].style.color = 'red'
                botoes[5].style.color = 'red'
                estado = 1
            }else if(b4 == 'O' && b5 == 'O' && b6 == 'O'){
                botoes[3].style.color = 'red'
                botoes[4].style.color = 'red'
                botoes[5].style.color = 'red'
                estado = 2
            }else if(b7 == 'X' && b8 == 'X' && b9 == 'X'){
                botoes[6].style.color = 'red'
                botoes[7].style.color = 'red'
                botoes[8].style.color = 'red'
                estado = 1
            }
            else if(b7 == 'O' && b8 == 'O' && b9 == 'O'){
                botoes[6].style.color = 'red'
                botoes[7].style.color = 'red'
                botoes[8].style.color = 'red'
                estado = 2
            }

            // Avaliação vertical...
            if(b1 == 'X' && b4 == 'X' && b7 == 'X'){
                botoes[0].style.color = 'red'
                botoes[3].style.color = 'red'
                botoes[6].style.color = 'red'
                estado = 1
            }if(b1 == 'O' && b4 == 'O' && b7 == 'O'){
                botoes[0].style.color = 'red'
                botoes[3].style.color = 'red'
                botoes[6].style.color = 'red'
                estado = 2
            }else if(b2 == 'X' && b5 == 'X' && b8 == 'X'){
                botoes[1].style.color = 'red'
                botoes[4].style.color = 'red'
                botoes[7].style.color = 'red'
                estado = 1
            }else if(b2 == 'O' && b5 == 'O' && b8 == 'O'){
                botoes[1].style.color = 'red'
                botoes[4].style.color = 'red'
                botoes[7].style.color = 'red'
                estado = 2
            }else if(b3 == 'X' && b6 == 'X' && b9 == 'X'){
                botoes[2].style.color = 'red'
                botoes[5].style.color = 'red'
                botoes[8].style.color = 'red'
                estado = 1
            }else if(b3 == 'O' && b6 == 'O' && b9 == 'O'){
                botoes[2].style.color = 'red'
                botoes[5].style.color = 'red'
                botoes[8].style.color = 'red'
                estado = 2
            }

            //Avaliação diagonal...
            if(b1 == 'X' && b5 == 'X' && b9 == 'X'){
                botoes[0].style.color = 'red'
                botoes[4].style.color = 'red'
                botoes[8].style.color = 'red'
                estado = 1
            }else if(b1 == 'O' && b5 == 'O' && b9 == 'O'){
                botoes[0].style.color = 'red'
                botoes[4].style.color = 'red'
                botoes[8].style.color = 'red'
                estado = 2
            }else if(b3 == 'X' && b5 == 'X' && b7 == 'X'){
                botoes[2].style.color = 'red'
                botoes[4].style.color = 'red'
                botoes[6].style.color = 'red'
                estado = 1
            }else if(b3 == 'O' && b5 == 'O' && b7 == 'O'){
                botoes[2].style.color = 'red'
                botoes[4].style.color = 'red'
                botoes[6].style.color = 'red'
                estado = 2
            }

            // Verifica se o jogo está empatado.
            if(estado == 0 && contJogadas == 9){
                retorno.innerHTML = "Jogo empatado! Clique em recomeçar!"
                estado = 3
            }

        }

        function fimDeJogo(){

            // Zera os marcadores de jogada.
            b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = null

            // Zera o contador de jogadas.
            contJogadas = 0

            // Limpa as jogadas e altera a cor do texto.
            for(i = 0; i < botoes.length; i++){
                botoes[i].style.color = "aliceblue"
            }

            // Volta o estado de joga para 0 --> em andamento.
            estado = 0

            // Retorna a informação da vez do jogador.
            jogadorDavez.innerHTML = "Jogador: <span id='jogadorDaVez'>X</span>"
        
        }
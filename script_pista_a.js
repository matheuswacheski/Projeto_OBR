//variáveis
let pontos_beco = 0;
let pontos_gangorra = 0;
let pontos_gap = 0;
let pontos_intersecao = 0;
let pontos_lombada = 0;
let pontos_obstaculo = 0;
let pontos_rampa = 0;

let pontos_perigo = 0;
let pontos_ladrilhos = 0;

//função atualizar pontos de perigos
function atualizar_pontos_perigo() {
    pontos_perigo = pontos_beco + pontos_gangorra + pontos_gap + pontos_intersecao + pontos_lombada + pontos_obstaculo + pontos_rampa;
    document.getElementById('visualisador_obstaculo').innerHTML = pontos_perigo;
}

function recalcularAltura() {
    // Recalcula o layout
    document.body.style.height = 'auto';
    document.body.style.height = `${document.body.scrollHeight}px`;
}

/*Pontuação do beco*/
document.getElementById('beco_1').addEventListener("change", function () {
    if (!this.checked) {
        document.getElementById('beco_2_container').classList.add('oculto');
        document.getElementById('beco_2').checked = false;

        pontos_beco = 0;

        document.getElementById('beco_3_container').classList.add('oculto');
        document.getElementById('beco_3').checked = false;
    } else {
        document.getElementById('beco_2_container').classList.remove('oculto');
        pontos_beco = 10;
    }

    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('beco_2').addEventListener("change", function () {
    if (!this.checked) {
        document.getElementById('beco_3_container').classList.add('oculto');
        document.getElementById('beco_3').checked = false;

        pontos_beco = 10;
    } else {
        document.getElementById('beco_3_container').classList.remove('oculto');
        pontos_beco = 20;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('beco_3').addEventListener("change", function () {
    if (!this.checked) {
        pontos_beco = 20;
    } else {
        pontos_beco = 30;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})
/*Pontuação do beco*/


/*Pontuação da gangorra*/
document.getElementById('gangorra_1').addEventListener("change", function () {
    if (!this.checked) {
        document.getElementById('gangorra_2_container').classList.add('oculto');
        document.getElementById('gangorra_2').checked = false;

        pontos_gangorra = 0;
    } else {
        document.getElementById('gangorra_2_container').classList.remove('oculto');
        pontos_gangorra = 20;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('gangorra_2').addEventListener("change", function () {
    if (!this.checked) {
        pontos_gangorra = 20;
    } else {
        pontos_gangorra = 40;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})
/*Pontuação da gangorra*/


/*Pontuação do gap*/
document.getElementById('gap_1').addEventListener("change", function () {
    if (!this.checked) {
        document.getElementById('gap_2_container').classList.add('oculto');
        document.getElementById('gap_2').checked = false;

        pontos_gap = 0;

        document.getElementById('gap_3_container').classList.add('oculto');
        document.getElementById('gap_3').checked = false;
    } else {
        document.getElementById('gap_2_container').classList.remove('oculto');
        pontos_gap = 10;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('gap_2').addEventListener("change", function () {
    if (!this.checked) {
        document.getElementById('gap_3_container').classList.add('oculto');
        document.getElementById('gap_3').checked = false;

        pontos_gap = 10;
    } else {
        document.getElementById('gap_3_container').classList.remove('oculto');
        pontos_gap = 20;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('gap_3').addEventListener("change", function () {
    if (!this.checked) {
        pontos_gap = 20;
    } else {
        pontos_gap = 30;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})
/*Pontuação do gap*/


/*Pontuação da intersecção*/
document.getElementById('intersecao_1').addEventListener("change", function () {
    if (!this.checked) {
        pontos_intersecao = 0;

        document.getElementById('intersecao_2_container').classList.add('oculto');
        document.getElementById('intersecao_2').checked = false;

        document.getElementById('intersecao_3_container').classList.add('oculto');
        document.getElementById('intersecao_3').checked = false;

        document.getElementById('intersecao_4_container').classList.add('oculto');
        document.getElementById('intersecao_4').checked = false;

        document.getElementById('intersecao_5_container').classList.add('oculto');
        document.getElementById('intersecao_5').checked = false;

        document.getElementById('intersecao_6_container').classList.add('oculto');
        document.getElementById('intersecao_6').checked = false;

        document.getElementById('intersecao_7_container').classList.add('oculto');
        document.getElementById('intersecao_7').checked = false;

        document.getElementById('intersecao_8_container').classList.add('oculto');
        document.getElementById('intersecao_8').checked = false;

        document.getElementById('intersecao_9_container').classList.add('oculto');
        document.getElementById('intersecao_9').checked = false;

        document.getElementById('intersecao_10_container').classList.add('oculto');
        document.getElementById('intersecao_10').checked = false;

    } else {
        document.getElementById('intersecao_2_container').classList.remove('oculto');
        pontos_intersecao = 10;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('intersecao_2').addEventListener("change", function () {
    if (!this.checked) {
        pontos_intersecao = 10;

        document.getElementById('intersecao_3_container').classList.add('oculto');
        document.getElementById('intersecao_3').checked = false;

        document.getElementById('intersecao_4_container').classList.add('oculto');
        document.getElementById('intersecao_4').checked = false;

        document.getElementById('intersecao_5_container').classList.add('oculto');
        document.getElementById('intersecao_5').checked = false;

        document.getElementById('intersecao_6_container').classList.add('oculto');
        document.getElementById('intersecao_6').checked = false;

        document.getElementById('intersecao_7_container').classList.add('oculto');
        document.getElementById('intersecao_7').checked = false;

        document.getElementById('intersecao_8_container').classList.add('oculto');
        document.getElementById('intersecao_8').checked = false;

        document.getElementById('intersecao_9_container').classList.add('oculto');
        document.getElementById('intersecao_9').checked = false;

        document.getElementById('intersecao_10_container').classList.add('oculto');
        document.getElementById('intersecao_10').checked = false;

    } else {
        document.getElementById('intersecao_3_container').classList.remove('oculto');
        pontos_intersecao = 20;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('intersecao_3').addEventListener("change", function () {
    if (!this.checked) {
        pontos_intersecao = 20;

        document.getElementById('intersecao_4_container').classList.add('oculto');
        document.getElementById('intersecao_4').checked = false;

        document.getElementById('intersecao_5_container').classList.add('oculto');
        document.getElementById('intersecao_5').checked = false;

        document.getElementById('intersecao_6_container').classList.add('oculto');
        document.getElementById('intersecao_6').checked = false;

        document.getElementById('intersecao_7_container').classList.add('oculto');
        document.getElementById('intersecao_7').checked = false;

        document.getElementById('intersecao_8_container').classList.add('oculto');
        document.getElementById('intersecao_8').checked = false;

        document.getElementById('intersecao_9_container').classList.add('oculto');
        document.getElementById('intersecao_9').checked = false;

        document.getElementById('intersecao_10_container').classList.add('oculto');
        document.getElementById('intersecao_10').checked = false;

    } else {
        document.getElementById('intersecao_4_container').classList.remove('oculto');
        pontos_intersecao = 30;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('intersecao_4').addEventListener("change", function () {
    if (!this.checked) {
        pontos_gap = 30;

        document.getElementById('intersecao_5_container').classList.add('oculto');
        document.getElementById('intersecao_5').checked = false;

        document.getElementById('intersecao_6_container').classList.add('oculto');
        document.getElementById('intersecao_6').checked = false;

        document.getElementById('intersecao_7_container').classList.add('oculto');
        document.getElementById('intersecao_7').checked = false;

        document.getElementById('intersecao_8_container').classList.add('oculto');
        document.getElementById('intersecao_8').checked = false;

        document.getElementById('intersecao_9_container').classList.add('oculto');
        document.getElementById('intersecao_9').checked = false;

        document.getElementById('intersecao_10_container').classList.add('oculto');
        document.getElementById('intersecao_10').checked = false;

    } else {
        document.getElementById('intersecao_5_container').classList.remove('oculto');
        pontos_intersecao = 40;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('intersecao_5').addEventListener("change", function () {
    if (!this.checked) {
        pontos_intersecao = 40;

        document.getElementById('intersecao_6_container').classList.add('oculto');
        document.getElementById('intersecao_6').checked = false;

        document.getElementById('intersecao_7_container').classList.add('oculto');
        document.getElementById('intersecao_7').checked = false;

        document.getElementById('intersecao_8_container').classList.add('oculto');
        document.getElementById('intersecao_8').checked = false;

        document.getElementById('intersecao_9_container').classList.add('oculto');
        document.getElementById('intersecao_9').checked = false;

        document.getElementById('intersecao_10_container').classList.add('oculto');
        document.getElementById('intersecao_10').checked = false;

    } else {
        document.getElementById('intersecao_6_container').classList.remove('oculto');
        pontos_intersecao = 50;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('intersecao_6').addEventListener("change", function () {
    if (!this.checked) {
        pontos_intersecao = 50;

        document.getElementById('intersecao_7_container').classList.add('oculto');
        document.getElementById('intersecao_7').checked = false;

        document.getElementById('intersecao_8_container').classList.add('oculto');
        document.getElementById('intersecao_8').checked = false;

        document.getElementById('intersecao_9_container').classList.add('oculto');
        document.getElementById('intersecao_9').checked = false;

        document.getElementById('intersecao_10_container').classList.add('oculto');
        document.getElementById('intersecao_10').checked = false;

    } else {
        document.getElementById('intersecao_7_container').classList.remove('oculto');
        pontos_intersecao = 60;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('intersecao_7').addEventListener("change", function () {
    if (!this.checked) {
        pontos_intersecao = 60;

        document.getElementById('intersecao_8_container').classList.add('oculto');
        document.getElementById('intersecao_8').checked = false;

        document.getElementById('intersecao_9_container').classList.add('oculto');
        document.getElementById('intersecao_9').checked = false;

        document.getElementById('intersecao_10_container').classList.add('oculto');
        document.getElementById('intersecao_10').checked = false;

    } else {
        document.getElementById('intersecao_8_container').classList.remove('oculto');
        pontos_intersecao = 70;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('intersecao_8').addEventListener("change", function () {
    if (!this.checked) {
        pontos_intersecao = 70;

        document.getElementById('intersecao_9_container').classList.add('oculto');
        document.getElementById('intersecao_9').checked = false;

        document.getElementById('intersecao_10_container').classList.add('oculto');
        document.getElementById('intersecao_10').checked = false;

    } else {
        document.getElementById('intersecao_9_container').classList.remove('oculto');
        pontos_intersecao = 80;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('intersecao_9').addEventListener("change", function () {
    if (!this.checked) {
        pontos_intersecao = 80;

        document.getElementById('intersecao_10_container').classList.add('oculto');
        document.getElementById('intersecao_10').checked = false;
    } else {

        document.getElementById('intersecao_10_container').classList.remove('oculto');
        pontos_intersecao = 90;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('intersecao_10').addEventListener("change", function () {
    if (!this.checked) {
        pontos_intersecao = 90;
    } else {
        pontos_intersecao = 100;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})
/*Pontuação da intersecção*/


/*Pontuação da lombada*/
document.getElementById('lombada_1').addEventListener("change", function () {
    if (!this.checked) {
        document.getElementById('lombada_2_container').classList.add('oculto');
        document.getElementById('lombada_2').checked = false;

        pontos_lombada = 0;

        document.getElementById('lombada_3_container').classList.add('oculto');
        document.getElementById('lombada_3').checked = false;
    } else {
        document.getElementById('lombada_2_container').classList.remove('oculto');
        pontos_lombada = 10;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('lombada_2').addEventListener("change", function () {
    if (!this.checked) {
        document.getElementById('lombada_3_container').classList.add('oculto');
        document.getElementById('lombada_3').checked = false;

        pontos_lombada = 10;
    } else {
        document.getElementById('lombada_3_container').classList.remove('oculto');
        pontos_lombada = 20;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('lombada_3').addEventListener("change", function () {
    if (!this.checked) {
        pontos_lombada = 20;
    } else {
        pontos_lombada = 30;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})
/*Pontuação da lombada*/


/*Pontuação do obstáculo*/
document.getElementById('obstaculo_1').addEventListener("change", function () {
    if (!this.checked) {
        document.getElementById('obstaculo_2_container').classList.add('oculto');
        document.getElementById('obstaculo_2').checked = false;

        pontos_obstaculo = 0;

        document.getElementById('obstaculo_3_container').classList.add('oculto');
        document.getElementById('obstaculo_3').checked = false;
    } else {
        document.getElementById('obstaculo_2_container').classList.remove('oculto');
        pontos_obstaculo = 20;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('obstaculo_2').addEventListener("change", function () {
    if (!this.checked) {
        document.getElementById('obstaculo_3_container').classList.add('oculto');
        document.getElementById('obstaculo_3').checked = false;

        pontos_obstaculo = 20;
    } else {
        document.getElementById('obstaculo_3_container').classList.remove('oculto');
        pontos_obstaculo = 40;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('obstaculo_3').addEventListener("change", function () {
    if (!this.checked) {
        pontos_obstaculo = 40;
    } else {
        pontos_obstaculo = 60;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})
/*Pontuação do obstáculo*/


/*Pontuação da rampa*/
document.getElementById('rampa_1').addEventListener("change", function () {
    if (!this.checked) {
        pontos_rampa = 0;

        document.getElementById('rampa_2_container').classList.add('oculto');
        document.getElementById('rampa_2').checked = false;

        document.getElementById('rampa_3_container').classList.add('oculto');
        document.getElementById('rampa_3').checked = false;

        document.getElementById('rampa_3_container').classList.add('oculto');
        document.getElementById('rampa_3').checked = false;

        document.getElementById('rampa_4_container').classList.add('oculto');
        document.getElementById('rampa_4').checked = false;
    } else {
        document.getElementById('rampa_2_container').classList.remove('oculto');
        pontos_rampa = 10;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('rampa_2').addEventListener("change", function () {
    if (!this.checked) {
        document.getElementById('rampa_3_container').classList.add('oculto');
        document.getElementById('rampa_3').checked = false;

        document.getElementById('rampa_4_container').classList.add('oculto');
        document.getElementById('rampa_4').checked = false;

        pontos_rampa = 10;
    } else {
        document.getElementById('rampa_3_container').classList.remove('oculto');
        pontos_rampa = 20;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('rampa_3').addEventListener("change", function () {
    if (!this.checked) {
        document.getElementById('rampa_4_container').classList.add('oculto');
        document.getElementById('rampa_4').checked = false;

        pontos_rampa = 20;
    } else {
        pontos_rampa = 30;
        document.getElementById('rampa_4_container').classList.remove('oculto');
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('rampa_4').addEventListener("change", function () {
    if (!this.checked) {
        pontos_rampa = 30;
    } else {
        pontos_rampa = 40;
    }
    atualizar_pontos_perigo();
    atualizar_pontos_total();
    recalcularAltura();
})
/*Pontuação da rampa*/


/*Quantidade ladrilhos*/
document.getElementById('alcance_checkpoint').addEventListener("change", function () {
    let seletor_tentativa = document.getElementById('seletor_tentativa');
    let secao_seletor_ladrilhos = document.getElementById('secao_seletor_ladrilhos')
    if (this.checked) {
        seletor_tentativa.classList.remove('oculto');
        secao_seletor_ladrilhos.classList.remove('oculto');

    } else {
        document.getElementById('primeira_tentativa').checked = false;
        document.getElementById('segunda_tentativa').checked = false;
        document.getElementById('terceira_tentativa').checked = false;

        seletor_tentativa.classList.add('oculto');
        secao_seletor_ladrilhos.classList.add('oculto');
    }
    atualizar_pontos_ladrilhos();
    recalcularAltura();
})

function handleToggle(selectedId) {
    const switches = ['primeira_tentativa', 'segunda_tentativa', 'terceira_tentativa'];
    switches.forEach(switchId => {
        if (switchId !== selectedId) {
            document.getElementById(switchId).checked = false;
        }
    });
}

document.getElementById('primeira_tentativa').addEventListener('click', () => handleToggle('primeira_tentativa'));
document.getElementById('segunda_tentativa').addEventListener('click', () => handleToggle('segunda_tentativa'));
document.getElementById('terceira_tentativa').addEventListener('click', () => handleToggle('terceira_tentativa'));

let valor_a_multiplicar = 0;

function atualizar_pontos_ladrilhos() {
    let quantidade_ladrilho = document.getElementById('quantidade_ladrilhos').value;
    pontos_ladrilhos = valor_a_multiplicar * quantidade_ladrilho;
    document.getElementById('visualisador_ladrilhos').innerHTML = pontos_ladrilhos;
}

document.getElementById('primeira_tentativa').addEventListener('change', function () {
    if (this.checked) {
        valor_a_multiplicar = 5;
    } else {
        valor_a_multiplicar = 0;
    }
    atualizar_pontos_ladrilhos();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('segunda_tentativa').addEventListener('change', function () {
    if (this.checked) {
        valor_a_multiplicar = 3;
    } else {
        valor_a_multiplicar = 0;
    }
    atualizar_pontos_ladrilhos();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('terceira_tentativa').addEventListener('change', function () {
    if (this.checked) {
        valor_a_multiplicar = 1;
    } else {
        valor_a_multiplicar = 0;
    }
    atualizar_pontos_ladrilhos();
    atualizar_pontos_total();
    recalcularAltura();
})

document.getElementById('quantidade_ladrilhos').addEventListener('change', function () {
    atualizar_pontos_ladrilhos();
    atualizar_pontos_total();
    recalcularAltura();
})
/*Quantidade ladrilhos*/

//Função para atualizar a pontuação total
function atualizar_pontos_total() {
    let pontos_total = pontos_perigo + pontos_ladrilhos;
    document.getElementById('visualisador_pontuacao_pista').innerHTML = pontos_total;
}
/*comandos ladrlho_inicio.html*/

document.getElementById('alcance_checkpoint_inicio').addEventListener('change', function() {
    let analise_tentativa = document.getElementById('analise_tentativa');
    if (!this.checked) {
        analise_tentativa.classList.add('hidden');
        document.getElementById('visualisador_pontuacao_inicial').innerText = 0;
    } else {
        analise_tentativa.classList.remove('hidden');
    }
});

function handleToggle(selectedId) {
    const switches = ['primeira_tentativa_inicio', 'segunda_tentativa_inicio', 'terceira_tentativa_inicio'];
    switches.forEach(switchId => {
        if (switchId !== selectedId) {
            document.getElementById(switchId).checked = false;
        }
    });
}

document.getElementById('primeira_tentativa_inicio').addEventListener('click', () => handleToggle('primeira_tentativa_inicio'));
document.getElementById('segunda_tentativa_inicio').addEventListener('click', () => handleToggle('segunda_tentativa_inicio'));
document.getElementById('terceira_tentativa_inicio').addEventListener('click', () => handleToggle('terceira_tentativa_inicio'));

document.getElementById('primeira_tentativa_inicio').addEventListener('change', function(){
    if(this.checked){
        document.getElementById('visualisador_pontuacao_inicial').innerText = 5;
    }else{
        document.getElementById('visualisador_pontuacao_inicial').innerText = 0;
    }
})

document.getElementById('segunda_tentativa_inicio').addEventListener('change', function(){
    if(this.checked){
        document.getElementById('visualisador_pontuacao_inicial').innerText = 3;
    }else{
        document.getElementById('visualisador_pontuacao_inicial').innerText = 0;
    }
})

document.getElementById('terceira_tentativa_inicio').addEventListener('change', function(){
    if(this.checked){
        document.getElementById('visualisador_pontuacao_inicial').innerText = 1;
    }else{
        document.getElementById('visualisador_pontuacao_inicial').innerText = 0;
    }
})

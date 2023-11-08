document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.getElementById('idform');
    const listdados = document.getElementById('listdados');
    const main = document.getElementById('idmain');

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        const tarefa = document.getElementById('tarefa').value;
        const descricao = document.getElementById('desc').value;

        const novoItemLista = document.createElement('li');
        novoItemLista.textContent = `Tarefa: ${tarefa}, Descricao: ${descricao}`;

        listdados.appendChild(novoItemLista);

        main.addEventListener('click', function(){
            
        })

        novoItemLista.addEventListener('click', function(){
            if (novoItemLista.classList.contains('concluido')){
                novoItemLista.classList.remove('concluido');
            }else{
                novoItemLista.classList.add('concluido');
            }
       

        console.log('tarefa:' ,tarefa);
        console.log('desc' , descricao);

    })
        
    })
})

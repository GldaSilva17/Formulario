document.addEventListener('DOMContentLoaded', () => {
    const buscarAleatorioButton = document.getElementById('buscarAleatorioButton');
    const atualizarButton = document.getElementById('atualizarButton');
    const idInput = document.getElementById('id');
    const usuarioInput = document.getElementById('usuario');
    const tituloInput = document.getElementById('titulo');
    const corpoInput = document.getElementById('corpo');

    buscarAleatorioButton.addEventListener('click', () => {
    const randomId = Math.floor(Math.random() * 100) + 1;
    fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}`)
            .then(response => response.json())
            .then(data => {
                
                idInput.value = data.id;
                usuarioInput.value = data.userId;
                tituloInput.value = data.title;
                corpoInput.value = data.body;
            })
            .catch(error => console.error('Erro ao buscar dados da API:', error));
    });

    atualizarButton.addEventListener('click', () => {
       
        const postId = idInput.value;
        const userId = usuarioInput.value;
        const title = tituloInput.value;
        const body = corpoInput.value;
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: postId,
                userId: userId,
                title: title,
                body: body
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Resposta da API:', data);
            })
            .catch(error => console.error('Erro ao atualizar o post:', error));
    });
});

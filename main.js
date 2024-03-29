$(document).ready(function () {

    const name = document.getElementById('name')
    const username = document.getElementById('username')
    const avatar = document.getElementById('avatar')
    const following = document.getElementById('following')
    const followers = document.getElementById('followers')
    const repos = document.getElementById('repository')
    const link = document.getElementById('link')

    $('#btn-busca-perfil').click(function () {
        const usuario = $('#busca-perfil').val()
        const endPoint = `https://api.github.com/users/${usuario}`

        fetch(endPoint)
            .then(function (resposta) {
                if (!resposta.ok) {
                    throw new Error('Usuário não encontrado.');
                }
                return resposta.json()
            })
            .then(function (json) {
                console.log(json)
                name.innerText = json.name;
                username.innerText = json.login;
                avatar.src = json.avatar_url;
                following.innerText = json.following;
                followers.innerText = json.followers;
                repos.innerText = json.public_repos;
                link.href = json.html_url
            }).catch(function (error) {
                alert(error.message)
            })
    })
})
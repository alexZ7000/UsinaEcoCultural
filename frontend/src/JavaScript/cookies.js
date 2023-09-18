var msgCookies = document.getElementById('cookies-msg');


function aceito(){ //local storage -> forma de guardar dados dentro do seu navegador, ou seja, usuário apos aceitar os cookies, determinado dado sera guardado na memória do navegador
    localStorage.lgpd = "sim"//lgpd -> lei geral de proteção de dadas, caso queira trocar os nomes em entre aspas simples e duplas é possivel, (lgdp usado para ser o local de chave dentro do navegador)
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}

// caso queira ver o localStorage dentro do navegador: inspecionar -> aplicativos -> localStorage -> pronto, todos os dados coletados dos usuários estão ali
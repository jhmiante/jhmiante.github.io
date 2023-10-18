
// Função para Redirecionamento de Página
function url(url, nova_aba=false) {
    if (nova_aba) {
        window.open(url, nova_aba);        
    } else {
        window.location.href = url;
    }   
    
}
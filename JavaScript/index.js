/////////////////////// Le modal d'inscription ///////////////////////////////////////
function userinfo() {

    // Création des variable de stockage
    const utilisateur = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const checkpassword = document.getElementById("checkpassword").value;
  
    // Si le password est égale au Checkpassword
    if(password === checkpassword){
        localStorage.setItem("utilisateur", utilisateur);
        localStorage.setItem("password", password);
    } 

    // Si la condition n'est pas respecter
    else {
        alert("Votre Mot de passe ne correspond pas. Veuillez Réessayer.");
        // document.getElementById("id01").style.display = "block";
    }
}

///////////////////////////// Le modal de Connexion ////////////////////////////

// function userlogin(event){
//     event.preventDefault()

//     // Création des variable de stockage
//     const utilisateur = document.getElementById("emaillogin").value;
//     const password = document.getElementById("passwordlogin").value;
  
//     // Ajouter les variable au localstorage
//     const utilisateurlogin = localStorage.getItem("utilisateur");
//     const passwordlogin = localStorage.getItem("password");
  
//     // Si le Nom d'utilisateur et le Password corresponde à celle dans le locastorage
//     if(utilisateur === utilisateurlogin && password === passwordlogin){
//         // window.location.replace("../accueil.html")
//         document.location = "accueil.html";
//     } 
//     // Si les condition ne sont pas respecter
//     else{
//       alert("Votre Nom d'utilisateur ou Mot de passe est incorrect")
//     }
// }

function userlogin(event) {
    event.preventDefault();
    // Création des variables de stockage
    const utilisateur = document.getElementById("emaillogin").value;
    const password = document.getElementById("passwordlogin").value;

    // Récupérer les informations d'identification du localStorage
    const utilisateurlogin = localStorage.getItem("utilisateur");
    const passwordlogin = localStorage.getItem("password");

    // Vérifier si le localStorage est vide
    if (utilisateurlogin === null || passwordlogin === null) {

        // Afficher un message d'alerte pour l'inviter a s'incrire
        alert("Vous devez d'abord vous inscrire.");
    } else {
        // Si les informations d'identification sont disponibles, vérifier les informations saisies par l'utilisateur
        if (utilisateur === utilisateurlogin && password === passwordlogin) {
            // Rediriger vers la page d'accueil si les informations d'identification sont correctes
            document.location = "accueil.html";
        } else {
            // Afficher un message d'erreur si les informations d'identification sont incorrectes
            alert("Votre Nom d'utilisateur ou Mot de passe est incorrect");
        }
    }
}












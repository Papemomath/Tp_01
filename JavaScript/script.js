function save(){
    let nom = document.getElementById("lastname").value;
    let prenom = document.getElementById("firstname").value;

    
    alert(nom + ", " + prenom)
    localStorage.setItem("nom", nom);
    localStorage.setItem("prénom", prenom);

    window.location.replace(acceuil.html);
}



// Crée variable de stockage 
const taskInput = document.getElementById("taskInput") ;

const addTaskBtn = document.getElementById("addTask") ;

const taskList = document.getElementById("taskList") ;

const clearAll = document.getElementById("clearAll")

var task = "undone task ";
var done = "task done ";
var i = 0;
var j = 0;
// La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et

//nouvelles lignes) au début et à la fin d'une chaîne.


addTaskBtn.addEventListener("click", addTask);


// Fonction pour afficher la barre latéral
// Fonction pour ouvrir la barre latérale
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

// Fonction pour fermer la barre latérale
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Fonction d'ajout des tâches
function addTask() {
    // Récupère le texte de la tâche et supprime les espaces vides
    const taskText = taskInput.value.trim();

    // Vérifie si le texte de la tâche n'est pas vide
    if (taskText !== "") {
        // Crée un nouvel élément de liste
        const listItem = document.createElement("li");
        
        // Ajoute le texte de la tâche à l'élément de liste
        listItem.textContent = taskText;
        
        // Ajoute l'élément de liste à la liste des tâches
        taskList.appendChild(listItem);
        
        // Effacer le champ d'entrée de la tâche après l'ajout
        taskInput.value = "";

        // Crée un bouton "Fait" pour marquer la tâche comme terminée
        const doneBtn = document.createElement("img");
        doneBtn.setAttribute("src", "./Images/icons8-checkmark-50.png");
        doneBtn.setAttribute('height', '18px');
        doneBtn.setAttribute('width', '18px');
        listItem.appendChild(doneBtn);
        
        // Ajoute un événement pour marquer la tâche comme terminée lorsque le bouton "Fait" est cliqué
        doneBtn.addEventListener("click", () => {
            listItem.id = "taskDone"
        });

        // Crée un bouton "Modifier" pour modifier la tâche
        const editBtn = document.createElement("img");
        editBtn.setAttribute("src", "./Images/icons8-edit-file-50.png");
        editBtn.setAttribute('height', '18px');
        editBtn.setAttribute('width', '18px');
        listItem.appendChild(editBtn);
        
        // Ajoute un événement pour permettre la modification de la tâche lorsque le bouton "Modifier" est cliqué
        editBtn.addEventListener("click", () => {
            taskInput.value = listItem.textContent
            listItem.remove()
        });

        // Crée un bouton "Supprimer" pour supprimer la tâche
        const deleteBtn = document.createElement("img");
        deleteBtn.setAttribute("src", "./Images/icons8-delete-60.png");
        deleteBtn.setAttribute('height', '18px');
        deleteBtn.setAttribute('width', '18px');
        listItem.appendChild(deleteBtn);
        
        // Ajoute un événement pour supprimer la tâche lorsque le bouton "Supprimer" est cliqué
        deleteBtn.addEventListener("click", () => {
            listItem.remove();
        });
    } else {
        // Affiche une alerte si aucun texte de tâche n'est entré
        alert("Veuillez entrer une tâche valide.");
    }

    // Sauvegarde les tâches dans le localStorage
    localStorage.setItem(task.concat(i), (taskText), i++)
    
    // Ajoute un événement pour effacer toutes les tâches du localStorage lorsque le bouton "Tout effacer" est cliqué
    clearAll.addEventListener("click", () => {
        localStorage.clear();
    });
}

// Fonction pour trier les tâches par ordre alphabétique
function parordre() {
    // Récupérer la liste des tâches
    const tasks = document.querySelectorAll("#taskList li");

    // Convertir NodeList en tableau pour pouvoir utiliser la méthode sort()
    const tasksArray = Array.from(tasks);

    // Trier les tâches par leur texte
    tasksArray.sort((a, b) => {
        const textA = a.textContent.toLowerCase();
        const textB = b.textContent.toLowerCase();
        return textA.localeCompare(textB);
    });

    // Effacer la liste des tâches actuelle
    taskList.innerHTML = "";

    // Ajouter les tâches triées à la liste des tâches
    tasksArray.forEach(task => {
        taskList.appendChild(task);
    });
}



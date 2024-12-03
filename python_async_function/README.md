# Python - Async

## Coroutine
1. Qu'est-ce qu'une Coroutine ?

Une coroutine est une fonction spéciale qui peut:
S'interrompre et reprendre son exécution à un point précis
Permettre à d'autres tâches de s'éxecuter pendant sa "pause"
Fonctionner de manière coopérative plutôt que préemptive


Une fonction est défini comme une coroutine par le mot clé `async def`

Exemple comparatif :
```
pythonCopy# Approche synchrone (bloquante)
def fonction_sync():
    time.sleep(2)  # Bloque tout le programme pendant 2 secondes
    print("Fin de la fonction synchrone")

# Coroutine asynchrone
async def coroutine_async():
    await asyncio.sleep(2)  # Permet à d'autres tâches de s'exécuter
    print("Fin de la coroutine asynchrone")
```

2. Asynchrone vs Synchrone

Synchrone (Séquentiel)

Les tâches s'exécutent les unes après les autres.
Chaque tâche bloque l'exécution jusqu'à sa complétion
Simple mais inefficace pour les opérations longues

```
pythonCopydef taches_synchrones():
    download_fichier1()  # Attend la fin
    download_fichier2()  # Ne commence qu'après le premier
    process_data()       # Ne commence qu'après les downloads
```

Asynchrone (Concurrent)

Une seule thread, mais avec changement de contexte
Permet à d'autres tâches de s'exécuter pendant l'attente
Idéal pour les opérations I/O (réseau, fichiers)

```
async def taches_asynchrones():
    # Démarre les téléchargements sans attendre
    task1 = asyncio.create_task(download_fichier1())
    task2 = asyncio.create_task(download_fichier2())

    # Attend les deux en parallèle
    await asyncio.gather(task1, task2)

    # Traite les données une fois les downloads terminés
    await process_data()
```

3. Event Loop : Le Cœur de l'Asynchrone

```
import asyncio

async def tache1():
    print("Tâche 1 commence")
    await asyncio.sleep(2)
    print("Tâche 1 terminée")

async def tache2():
    print("Tâche 2 commence")
    await asyncio.sleep(1)
    print("Tâche 2 terminée")

async def main():
    # Exécute les deux tâches concurremment
    await asyncio.gather(tache1(), tache2())

# Lance l'event loop
asyncio.run(main())
```
Sortie probable:
```
Tâche 1 commence
Tâche 2 commence
Tâche 2 terminée
Tâche 1 terminée
```

## asyncio

1. asyncio.sleep()
```
import asyncio

async def exemple_sleep():
    print("Début de l'attente")
    await asyncio.sleep(2)  # Attend 2 secondes sans bloquer
    print("Fin de l'attente")

# Différence avec time.sleep()
# asyncio.sleep() libère la main à l'event loop
# time.sleep() bloque complètement l'exécution
```
Caractéristiques :

* Non bloquant
* Permet à d'autres tâches de s'exécuter pendant l'attente
* Simuler des délais sans immobiliser le programme

2. asyncio.gather()
```
import asyncio

async def tache1():
    await asyncio.sleep(1)
    return "Résultat 1"

async def tache2():
    await asyncio.sleep(2)
    return "Résultat 2"

async def main():
    # Exécute plusieurs coroutines en parallèle
    resultats = await asyncio.gather(tache1(), tache2())
    print(resultats)  # ['Résultat 1', 'Résultat 2']
```
Caractéristiques :

* Lance plusieurs coroutines simultanément
* Attend la fin de toutes les tâches
* Retourne les résultats dans l'ordre

3. asyncio.run()
```
import asyncio

async def main():
    print("Début du programme")
    await asyncio.sleep(1)
    print("Fin du programme")

# Point d'entrée principal pour les programmes asyncio
asyncio.run(main())
```
Caractéristiques :

* Point d'entrée pour les programmes asynchrones
* Gère l'event loop
* Crée, exécute et ferme l'event loop
* Utilisé une seule fois par programme

4. asyncio.Task() ou asyncio.create_task()
Crée une tâche ce qui signifie transformer une coroutine en un objet gérable par l'event loop asyncio, qui peut être:
* Planifiée
* Surveillée
* Potentiellement interrompue
* Exécutée de manière non bloquante

Concrètement dans l'exemple de la T3:

`task = asyncio.Task(wait_random(max_delay))`

transforme la coroutine `wait_random()` en objet puis la planifie dans l'event loop pour être prêt à être exécutée

## Lexique

### A

**Asynchrone :**

Approche de programmation permettant l'exécution non bloquante de tâches
Permet de gérer plusieurs opérations simultanément sans bloquer le thread principal
Idéal pour les opérations I/O (réseau, fichiers)



### C

**Coroutine :**

Fonction spéciale définie avec async def
Peut être suspendue et reprise à tout moment
Utilise await pour marquer les points de suspension
Permet une exécution non linéaire et coopérative



### E

**Event Loop (Boucle d'événements) :**

Mécanisme central de la programmation asynchrone
Gère et coordonne l'exécution des tâches asynchrones
Décide quand et comment exécuter chaque tâche
Permet le passage d'une tâche à une autre sans blocage



### S

**Scheduling (Ordonnancement) :**

Processus d'ajout d'une tâche à la file d'attente de l'event loop
Indique qu'une tâche doit être exécutée quand possible
Ne bloque pas l'exécution des autres tâches



### T

**Task (Tâche) :**

Wrapper d'une coroutine dans l'event loop
Permet un contrôle plus fin de l'exécution asynchrone
Peut être :

Surveillée
Potentiellement interrompue
Exécutée de manière non bloquante



### P

**Préemptif vs Coopératif :**

Préemptif : Le système interrompt une tâche à tout moment
Coopératif : Les tâches doivent volontairement céder le contrôle

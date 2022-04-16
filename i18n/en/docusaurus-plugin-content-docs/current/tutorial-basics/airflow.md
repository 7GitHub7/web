---
sidebar_position: 6
---

# Airflow

Jest narzędziem do tworzenia procesów w formie Directed Acyclic Graphs (DAGs). Użytkownik może kontrolować przebieg, łączyć przejścia, testować oraz monitorować wydajność. Wierzchołkami grafu są krótkie programy napisane w języku Python. Wykonywane są one jeden po drugim. Stany każdego z wierzchołków są zapsiywane w bazie danych co pozwala prostym sposobem zachować wysoką dostępność aplikacji nawet w przypadku restartu lub dłużej nie aktywności.

## Architektura

Podstawą są DAGi które opisują zależności pomiędzy taskami. 
Taski są programami napisanymi w języku Python.
W systemie możemy wyróżnić takie komponenty jak:
- scheduler - planuje oraz wyzwala zaplanowane zadania
- executor - uruchamia taski(podstawowa wersja uruchamia je wewnątrz scheduler), preferowanym rozwiązaniem jest posiadanie zewnętrznych workerów tj: celeryExecutor lub kubernetesExecutor lub połączenie obu czyli celeryKubernetesExecutor  
- webserver - zawiera interfejs graficzny użytkownika 
- baza danych - używane przez scheduler, executor oraz webserver 


CeleryKubernetesExecutor - celery executor umożliwa posiadanie kilku stałych workerów, natomiast Kubernetes executor umożliwia na dynamiczne generowanie workerów(w nomenklaturze kubernetes jest to Pod). Zestawienie tych dwóch typów daje nam ogromne możliwości w skalowaniu aplikacji.
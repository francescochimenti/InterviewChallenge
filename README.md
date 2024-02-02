# Web Application per la Visualizzazione di Utenti

Questa applicazione web visualizza una lista di utenti, utilizzando i dati forniti da [Random User Generator API](https://randomuser.me/).

## Funzionalità Richieste:

- **Visualizzazione Utenti:**

  - Creare una pagina con un elenco di utenti in stile Infinite Scroll, caricando 50 utenti alla volta.
  - Mostrare per ogni utente: nome, cognome, foto e location.

- **Ricerca lato Client:**

  - Implementare un algoritmo di ricerca basato su nome/cognome, sesso e nazionalità, senza richiamare ulteriori dati dall'API.

- **Pagina Dettaglio Utente:**

  - Creare una pagina dedicata per ciascun utente, mostrando tutte le informazioni disponibili dalla risposta dell'API.

- **Gestione Dati con Redux:**

  - Utilizzare Redux per creare una "cache lato client" e ridurre le chiamate all'API.

- **Supporto Responsive:**
  - Assicurare che l'applicazione sia responsive, compatibile almeno con Desktop e smartphone.

## Linee Guida per l'Utilizzo di Librerie Esterne:

- Utilizzare, se necessario, librerie esterne per gestire l'API, la paginazione o la navigazione.

## Standard di Codifica:

- Il codice dovrebbe essere pulito, ben strutturato e seguire le best practice di ReactJS.
- Deve essere facilmente leggibile e manutenibile.

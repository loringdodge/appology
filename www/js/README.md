TABLE OF CONTENTS - JS
==================================

```
  /js
    /agent <-- agent route
    /auth <-- authentication including login, logout
    /cards <-- cards module - used in proposals
    /checklist <-- checklist route
    /directives <-- all directives
    /interview <-- interview route - accessed when a user chooses a proposal
    /location <-- google location module to get list of agents
    /modal <-- modal box
    /proposal <-- proposal route
    /request <-- request route
    /splash <-- splash screen
    /utils <-- includes any utilities generally used but not installed via bower or npm
  app.js <-- root file
```

$localStorage
-------------
Here's a reference of all the properties that are intentionally persisted across the app.
Data referenced in $localStorage are persisted even after the app closes.

$window.localStorage= {

  // whether tutorial splash is completed
  didTutorial: boolean,

  // login information for user
  user: object,

  // list of checklist items
  checklist: array,

  // list of analytics queues that need to be sent to google analytics
  analyticsQueue: array

}
Title: Excel Formula Filler Bot

Synopsis: The purpose of this bot is to create a platform that will be able to 
          allow people using microsoft excel spreadsheets to quickly and easily generate 
          new formulas that they can use in their spreadsheets.

Necessary Components:
 - Backend:
    - OpenAI API connection with authorization and payment
    - Node.js server running on heroku (May be needed to process the requests and send them to openAI)
 - Frontend:
    - Website with a clean look and easy payment track (funnel)
    - Excel tool that can create and access different cells within the spreadsheet as well as access
      the openAI API or the heroku server
    - A chrome extension that can interface with google sheets

Notes:
 - Authentication and user accounts will need to be created, this is most likely where the main use
   of a server (node.js) comes into play. It could be done with firebase as well possibly. It just needs 
   to help keep track of who has paid and who hasn'text
 - A payment service needs to be looked into as the best way to collect payment. This service would have
   to collect the payments and then relay that information to the backend to register the user accounts
   as paid for.

   
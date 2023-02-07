Title: Excel Formula Filler Bot

Synopsis: The purpose of this bot is to create a platform that will be able to 
          allow people using microsoft excel spreadsheets to quickly and easily generate 
          new formulas that they can use in their spreadsheets.

Description: The majority of the app will be built in react, javascript, html + css,
             and some basic c#. The site will consist of a frontend website which visitors
             first see. From there, if they would like to sign up for the site, they can then
             get to the paywalled part of the site. This is the second component. In addition
             to these compoonents, we will need a server to run authentication as well as to
             relay the openAI API calls that are made from the paywalled site. Finally, there
             will be two plugins, one for chrome and one for excel. They will both need to 
             be able to interface and interact with the spreadsheet programs as well as send 
             commands to the server and the openAI API. The chrome extension is a javascript 
             program while the excel plugin must be written in c#. 

             The major capabilities are as follows. The paywalled site must be able to help
             users create, find, and use formulas on excel. Additionally, it should be able to
             help them with other simple information retrieval tasks. The plugins must be able to
             be authenticated by the server, do the same things that can be done on the paywalled
             site, and they must be able to recognize when a user plugs a command into a spread
             sheet that would be used to access our interface.

             The estimated build time for this project, considering all components, is around 4-6
             weeks for basic beta versions. For a more in depth, capable production version, we are
             most likely looking at 8-10 weeks of development. The cost for the project should not
             exceed more than $100 for the basic code and the testing of the code. All components 
             are openly available with either free trials or cheap tiers. 

             The sites that will need to be used are, of course, openAI, Heroku, A domain hosting
             site, Firebase, and possibly a database hosted with either mongoDB or another platform.
             
To-Do: 
 - A name needs to be chosen and some domain names found.
 - A color scheme needs to be chosen
 - Basic advertising concepts
   - Visuals
   - Where will it be promoted
   - Socials
   - Slogans
 - Pricing tiers
 - Full features concept list
 - Update frontend and paidend readme.md documents
 - Test Api failure points
 - Create sellable spreadsheet templates (Excel and Sheets)
   - Exportable and fillable files complete with equations
   - Changable styles for corporate needs
   - Common templates (ex: accounting, invoicing, etc.)
 
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


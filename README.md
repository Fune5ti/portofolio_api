# Environment Variables

The app contains two environment variables:<br>

- PORT: The http port on which the api runs
- MONGODB_URI: The connection MONGODB URL on which the apps stores and retrieves data

# Testing environment

For testing purposes the following MONGODB_URI can be used:<br>

**mongodb+srv://appuser:portofolioApiPass@portofoliocluster.ceupe.mongodb.net/portofolio?retryWrites=true&w=majority**

With the app, it is included a [Docs](docs) folder where you can find a collection of the endpoints, which is a JSON file that was written using a vscode extension called [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client).

# Running the REST API

In order to run the application, follow the below steps:

- Run `yarn` to install the dependencies.
- Create a `.env` file on the root of the application and initialize the above environment variables.
- Finally run `yarn start`

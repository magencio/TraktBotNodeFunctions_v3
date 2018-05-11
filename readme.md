# Info
These Azure functions are used to ask TraktBot to send [dialog based Proactive Messages](https://docs.microsoft.com/en-us/azure/bot-service/nodejs/bot-builder-nodejs-proactive-messages) to users. For more info check my [traktbotnode_v3 GitHub project](https://github.com/magencio/traktbotnode_v3).

I followed these steps to develop and try these Azure functions locally:
[Code and test Azure Functions locally](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local)
You can find in there how to install version 1.x of the runtime and tools, how to create a local Functions project, how to configure it with a local.settings.json file, how to create individual Functions, and how to run them.

You can deploy them to Azure Functions from a Git Repository.

# Try the functions locally
Rename sample.settings.json to local.settings.json and modify it with your own settings.
Use this command to run the functions:
**func host start**
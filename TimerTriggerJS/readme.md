# TimerTrigger - JavaScript

This function runs on a schedule. When it runs, it reads all the documents that the bot stored in its CosmosDB database to remember the addresses of all users accessing the bot. Then it sends the ids of those documents to a queue for QueeTriggerJS to process them one by one.

## How it works

For a `TimerTrigger` to work, you provide a schedule in the form of a [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression)(See the link for full details). A cron expression is a string with 6 separate expressions which represent a given schedule via patterns. The pattern we use to represent every 5 minutes is `0 */5 * * * *`. This, in plain text, means: "When seconds is equal to 0, minutes is divisible by 5, for any hour, day of the month, month, day of the week, or year".


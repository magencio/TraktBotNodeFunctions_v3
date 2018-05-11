# QueueTrigger - JavaScript

This function runs every time the Azure Storage Queue gets a new id to process from TimerTriggerJS. When it runs, it gets the corresponding id and sends it to the notification endpoint of the bot for further processing.

## How it works

For a `QueueTrigger` to work, you provide a path which dictates where the queue messages are located inside your container.

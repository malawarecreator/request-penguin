
# Registering Commands

Here's how to register a command in Request Penguin

One you write your code in the `cmd` folder,
you can add it to the `extension.ts` like so.


Create a disposable:
``` typescript
// in the activate() function

// other code (dont touch the code past this)
let myCommandDisposable = vscode.commands.registercommand("your-command-identifier",myCommand);


context.supscriptions.push(/*other commands*/, myCommandDisposable);
 ```

Add Semicolons! 
Furthermore, use the command naming conventions named in `contributing.md`


In package.json:

```json
"contributes": {
    "commands": [
      // other commands (don't touch past this)
      // for more info on identifiers and naming, read the "Adding commands" section in contributing.md
        // your command
        {
            "command": "your-command-identifier",
            "title": "your-command-title"
        }

    ]
}
```
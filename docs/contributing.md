# Contributing To Request Penguin

Request Penguin is a simple, easy-to-use VSCode extension that lets you make JSON-only http requests. Perfect for beginners.<br>

Starting off, let's talk about how to get the source code. The repository is [here](https://github.com/malawarecreator/request-penguin.git)<br>

## Communicating with me and other devs

I'm a very active github user, as my life is boring as fuck and I have nothing better to do.

My discord is `@biggyballz_69` and my insta is `@benjamin.renkai.liu`

Or, you can create a PR or an issue, and it will be worked on.

However, if you're looking for collaboration, just slide me a dm on either platform.

## Adding Commands

My code is set to follow the ISO/IEC JTC 1/SC 22 standards. Basically, don't be a dick with your code.

To add a command, create a new `make` + whatever the protocol is (e.g. `makePost`).
### Writing command identifiers
For writing command identifiers, write the name of the COMMAND, not the disposable, with no spaces or caps.

For example:<br>
Say I have a command called `makePut`. <br>
I'd write the identifier like this: `makeput`<br>

### Writing command titles
For writing command titles, write the name of the COMMAND in a readable mode and append it to `Request Penguin:`. Write it like so: `Request Penguin: your-readable-command-name`<br>

For example:<br>
I have a command called `makeget`. <br>
I would write the readable command name as `Make GET Request`<br>
The full title: `Request Penguin: Make GET Request`<br>
Make sure to always make the protocol name all caps.


## Registering and pushing
Follow these steps:
 - Write the code for the command in the `cmd` folder
 - Register the command in the `extension.ts` file and the `package.json` file. (A better guide on this in `registering-cmd.md`)
 - Create a PR on the GitHub repo
 - Hit me up on discord 

After some code review, I'll add your command! 


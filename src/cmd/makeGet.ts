import * as vscode from 'vscode';

export async function makeGet() {

    const addr = await vscode.window.showInputBox({
        placeHolder: "Enter URL for request",
        prompt: "Enter a valid url"
    });
    if (addr) {
        fetch(addr).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error. Status: ${response.status}`);
            }
            return response.json();
        }).then((responsedata) => {
            vscode.window.showInformationMessage(`Success: ${JSON.stringify(responsedata)}`);
        }).catch((err) => {
            console.error(err);
            vscode.window.showErrorMessage(`Error: ${err.message}`);
        });
    }
}
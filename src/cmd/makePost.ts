import * as vscode from 'vscode';

export async function makePost() {
    const addr = await vscode.window.showInputBox({
        placeHolder: "URL for Request",
        prompt: "Enter a valid URL",
    });
    
    const data = await vscode.window.showInputBox({
        placeHolder: "valid JSON data",
        prompt: "Enter JSON data",
    });
    if (addr) {
        fetch(addr, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data,
        }).then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error STATUS: ${res.status}`);
            }
            return res.json();
        }).then((data) => {
            vscode.window.showInformationMessage(`RESPONSE: ${data}`);
        })
        .catch((err) => {
            vscode.window.showErrorMessage(`ERROR: ${err}`);
        });
    }
}
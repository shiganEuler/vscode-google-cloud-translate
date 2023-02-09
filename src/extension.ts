import * as vscode from 'vscode';

const { Translate } = require('@google-cloud/translate').v2;

function get_select_text() {
	let editor = vscode.window.activeTextEditor;
	if (!editor) {
		return "";
	}

	let selection = editor.selection;
	return editor.document.getText(selection);
}

async function translate_select(replace: boolean) {
	const apikey = vscode.workspace.getConfiguration().get("google-cloud-translate.google-cloud-api-key")

	const translate = new Translate({ key: apikey });

	const text = get_select_text();

	const target = vscode.workspace.getConfiguration().get("google-cloud-translate.target-language");

	const [translation] = await translate.translate(text, target);

	if (replace) {
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		let selection = editor.selection;
		editor.edit(editBuilder => {
			editBuilder.replace(selection, translation);
		});
	} else {
		// insert translation to the end of selection text, and keep the selection as original text
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		var insertTranslation = "\n\n" + translation;
		let selection = editor.selection;
		editor.edit(editBuilder => {
			editBuilder.insert(selection.end, insertTranslation);
		});

		editor.selection = new vscode.Selection(selection.start, selection.end);
	}
}

export function activate(context: vscode.ExtensionContext) {
	let translateToNewlineDisposable = vscode.commands.registerCommand('google-cloud-translate.translate-to-newline', () => {
		translate_select(false);
	});

	let translateAndReplaceDisposable = vscode.commands.registerCommand('google-cloud-translate.translate-and-replace', () => {
		translate_select(true);
	});

	context.subscriptions.push(translateAndReplaceDisposable);
}

export function deactivate() { }

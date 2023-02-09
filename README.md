# Google Cloud Translate

A VSCode extension to translate text using Google Cloud Translate API.

## Usage

Currently, the extension only supports translating text from the active editor selection. 

To translate the selected text, press `Ctrl+Alt+T` (Windows, Linux) or `Ctrl+Cmd+T` (macOS), and the translated text will be insert to the end of the selection. 

If you want to replace the selected text with the translated text, press `Ctrl+Alt+R` (Windows, Linux) or `Ctrl+Cmd+R` (macOS).

## Extension Settings

### `google-cloud-translate.google-cloud-api-key`

To use this extension, you need to create a Google Cloud Platform project and enable the Cloud Translation API. Then, you need to create a API key and set it to the `google-cloud-translate.google-cloud-api-key` setting.

There're 3 kinds of auth methods for Google Cloud Translation API (API key, OAuth 2.0 Client ID, Service Account), and this extension currently only supports the API key method. 

Please follow this url to get a api key: https://cloud.google.com/translate/docs/quickstart-client-libraries

Attention:

Google Cloud Translation API has a free quota of 500,000 characters per month. If you exceed the quota, you will be charged for the usage. Please refer to this url for more details: https://cloud.google.com/translate/pricing

### `google-cloud-translate.target-language`

The target language to translate the selected text. The default value is `zh-cn`.

To find the language code, please refer to this url: https://cloud.google.com/translate/docs/languages

## Release Notes

### 0.0.1

Initial release of Google Cloud Translate extension.

---

Github Project

https://github.com/shinganEuler/vscode-google-cloud-translate

PRs are welcome!

**Enjoy!**

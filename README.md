# Scheduled Notify


## requirements
* [node](https://nodejs.org/en/) (v8.10.0++)
* [npm](https://www.npmjs.com/) (v5.6.0++)
* [serverless](https://serverless.com/)

## 使い方
* [LINE Notify](https://notify-bot.line.me/ja/)でAPI TOKENを発行する。
* このリポジトリをcloneして必要な値を設定する。
  * ```$  git clone git@github.com:makutak/scheduled-notify.git```
  * ```$ npm install```
  * ```$ cp template.serverless.yml serverless.yml```
  * ```serverless.yml```の ```provider.environment.TOKEN```にAPI TOKENを貼り付ける。
  * 必要があれば、cronの時間を再設定する。
* deploy
  * ```$ sls deploy```

## LICENSE
MIT

@echo off
cd %~dp0\..
echo --- 現在のバージョンを確認します ---
cmd.exe /c node_modules\.bin\cnako3 -e "「なでしこのバージョン: {ナデシコバージョン}」を表示"
echo --- なでしこをアップデートします ---
cmd.exe /c .\nodejs\npm install npm-check-updates
echo --- 最新版を確認します ---
cmd.exe /c .\node_modules\.bin\ncu -u
echo --- 必要ならインストールします ---
cmd.exe /c .\nodejs\npm install
echo --- アップデート後のバージョンを確認します ---
cmd.exe /c node_modules\.bin\cnako3 -e "「なでしこのバージョン: {ナデシコバージョン}」を表示"
echo --- 作業完了です ---
pause

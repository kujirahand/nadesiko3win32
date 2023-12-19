rem make nodejs.7z

cd ..
SET BIN7Z=".\bin\7z.exe"
rem === z7 ===
%BIN7Z% a .\nodejs.7z .\nodejs\
rem === move ===
move .\nodejs.7z setup\nodejs.7z
pause

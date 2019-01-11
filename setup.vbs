rem ---------------------------
rem execute nako3server script
rem ---------------------------

Set fso = createObject("Scripting.FileSystemObject")
Set shell = WScript.CreateObject("WScript.Shell")
Set env = shell.Environment("Process")

dim home
dim path
home = fso.getParentFolderName(WScript.ScriptFullName)

MsgBox "これから、なでしこ3のセットアップを始めます。" & _
       "この後、コマンドプロンプト画面が二回表示されます。" & _
       "セットアップは初回だけですので、少々、お待ちください。"

rem --- nodejs.7zの解凍 ---
if not fso.FolderExists(home & "\nodejs") then
  cmd7z = home & "\bin\7z.exe"
  cmd_unzip = """" & cmd7z & """ x -y .\nodejs.7z"
  call shell.Run(cmd_unzip, 1, True)
end if

rem --- パスの登録 ---
path = _
  home & "\bin;" & _
  home & "\nodejs;" & _
  shell.ExpandEnvironmentStrings("%PATH%")

env.Item("NAKO_HOME") = home
env.Item("PATH") = path

rem --- NPM ---
call shell.Run("npm install --production", 1, True)

rem --- MSG ---
if not fso.FolderExists(home & "\node_modules\fs-extra") then
  MsgBox "セットアップに失敗しました。再試行してください。" & _
         "もし、ネットワークパス上で実行する場合、" & _
         "一度、Cドライブにコピーしてから実行してください。"
else
  MsgBox "セットアップ完了です。"
end if

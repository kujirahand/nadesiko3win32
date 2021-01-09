rem ---------------------------
rem execute nako3server script
rem ---------------------------

Set fso = createObject("Scripting.FileSystemObject")
Set shell = WScript.CreateObject("WScript.Shell")
Set env = shell.Environment("Process")

dim home
dim path, modName
home = fso.getParentFolderName(WScript.ScriptFullName)

MsgBox "これから、なでしこ3のモジュールをインストールします。"
modName = InputBox("モジュール名は?", "インストールする名前", "")
If modName = "" Then
  WScript.Quit
End If

rem --- パスの登録 ---
path = _
  home & "\bin;" & _
  home & "\nodejs;" & _
  shell.ExpandEnvironmentStrings("%PATH%")

env.Item("NAKO_HOME") = home
env.Item("PATH") = path

rem --- NPM ---
call shell.Run("npm install " & modName, 1, True)
MsgBox "セットアップ完了です。"

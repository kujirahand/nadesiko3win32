rem ---------------------------
rem execute nako3server script
rem ---------------------------

Set fso = createObject("Scripting.FileSystemObject")
Set shell = WScript.CreateObject("WScript.Shell")
Set env = shell.Environment("Process")

dim home
dim path

home = fso.getParentFolderName(WScript.ScriptFullName)
path = _
  home & "\bin;" & _
  home & "\nodejs;" & _
  shell.ExpandEnvironmentStrings("%PATH%")

env.Item("NAKO_HOME") = home
env.Item("PATH") = path

MsgBox "なでしこ3のインストールを始めます。"
call shell.Run("npm install --production", 1, True)
MsgBox "完了です。start.vbsをクリックすると始まります。"


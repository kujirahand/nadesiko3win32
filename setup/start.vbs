rem ---------------------------
rem execute nako3server script
rem ---------------------------

Set fso = createObject("Scripting.FileSystemObject")
Set shell = WScript.CreateObject("WScript.Shell")
Set env = shell.Environment("Process")

dim home
dim path

home = fso.getParentFolderName(WScript.ScriptFullName)

rem --- check setup ---
if not fso.FolderExists(home & "\node_modules\fs-extra") then
  call shell.Run(home & "\setup.vbs", 1, True)
end if


rem --- register path ---
path = _
  home & "\bin;" & _
  home & "\nodejs;" & _
  shell.ExpandEnvironmentStrings("%PATH%")

env.Item("NAKO_HOME") = home
env.Item("PATH") = path

shell.Run("node " & home & "\src\nako3server.mjs")

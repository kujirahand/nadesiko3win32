rem ---------------------------
rem execute nako3server script
rem ---------------------------

Set fso = createObject("Scripting.FileSystemObject")
Set shell = WScript.CreateObject("WScript.Shell")
Set env = shell.Environment("Process")

dim home
dim path

home = fso.getParentFolderName(WScript.ScriptFullName)
home = fso.getParentFolderName(home)
path = _
  home & "\bin;" & _
  home & "\nodejs;" & _
  shell.ExpandEnvironmentStrings("%PATH%")

env.Item("NAKO_HOME") = home
env.Item("PATH") = path

nodePath = home & "\nodejs\node.exe"
cnakoPath = home & "\node_modules\nadesiko3\src\cnako3.mjs"
batchPath = home & "\node_modules\nadesiko3\batch\download-extlib.nako3"
scriptPath = home & "\node_modules\nadesiko3\src\nako3server.mjs"
cssPath = home & "\node_modules\nadesiko3\demo\extlib\pure-min.css"

If Not fso.FileExists(cssPath) Then
  cmd = """" & nodePath & """ """ & cnakoPath & """ """ & batchPath & """"
  shell.Run cmd, 1, True
End If

cmd = """" & nodePath & """ """ & scriptPath & """"
shell.Run cmd, 2, True


rem ----------------------------
rem nako3edit execute script
rem ----------------------------

Set fso = createObject("Scripting.FileSystemObject")
Set shell = WScript.CreateObject("WScript.Shell")
Set env = shell.Environment("Process")

dim home
dim path
dim cmd

home = fso.getParentFolderName(WScript.ScriptFullName)
home = fso.getParentFolderName(home)
path = _
  home & "\bin;" & _
  home & "\nodejs;" & _
  shell.ExpandEnvironmentStrings("%PATH%")

env.Item("NAKO_HOME") = home
env.Item("PATH") = path

nodePath = home & "\nodejs\node.exe"
nako3Path = home & "\node_modules\nadesiko3"
cnakoPath = nako3Path & "\src\cnako3.mjs"
scriptPath = nako3Path & "\tools\nako3edit\index.mjs"

cmd = """" & nodePath & """ """ & scriptPath & """"
shell.Run cmd, 1

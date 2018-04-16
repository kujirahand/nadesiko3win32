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
shell.Run(home & "\bin\nakopad.exe")


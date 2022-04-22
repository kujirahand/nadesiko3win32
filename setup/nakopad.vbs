rem ----------------------------
rem nako3edit execute script
rem ----------------------------

Set fso = createObject("Scripting.FileSystemObject")
Set shell = WScript.CreateObject("WScript.Shell")
Set env = shell.Environment("Process")

dim home

home = fso.getParentFolderName(WScript.ScriptFullName)
home = fso.getParentFolderName(home)

rem --- check setup ---
if not fso.FolderExists(home & "\node_modules\fs-extra") then
  call shell.Run(home & "\setup.vbs", 1, True)
end if

rem --- nakopad ---
shell.Run(home & "\bin\nakopad.exe")


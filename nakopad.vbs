rem ----------------------------
rem nako3edit execute script
rem ----------------------------

Set fso = createObject("Scripting.FileSystemObject")
Set shell = WScript.CreateObject("WScript.Shell")
Set env = shell.Environment("Process")

dim home
dim path
dim cmd

rem --- install check ---
if not fso.FolderExists(home & "\node_modules\fs-extra") then
  call shell.Run("npm install --production", 1, True)
end if

home = fso.getParentFolderName(WScript.ScriptFullName)
shell.Run(home & "\bin\nakopad.exe")


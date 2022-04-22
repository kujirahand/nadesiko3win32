rem ---------------------------
rem execute nako3server script
rem ---------------------------

Set fso = createObject("Scripting.FileSystemObject")
Set shell = WScript.CreateObject("WScript.Shell")
Set env = shell.Environment("Process")

dim home
dim path
dim setup_dir

setup_dir = fso.getParentFolderName(WScript.ScriptFullName)
home = fso.getParentFolderName(setup_dir)

MsgBox "����ł́A�Ȃł���3�̃Z�b�g�A�b�v���n�߂܂��B" &  Chr(13) & Chr(10) &_
       "�Z�b�g�A�b�v�͏��񂾂��ł��̂ŁA���X�A���҂����������B"

rem --- nodejs.7z�̉� ---
if not fso.FolderExists(home & "\nodejs") then
  cmd7z = home & "\bin\7z.exe"
  cmd_unzip = """" & cmd7z & """ x -y " & """" & setup_dir & "\nodejs.7z"""
  call shell.Run(cmd_unzip, 1, True)
end if

rem --- node_modules�̉� ---
if not fso.FolderExists(home & "\node_modules") then
  cmd7z = home & "\bin\7z.exe"
  cmd_unzip = """" & cmd7z & """ x -y " & """" & setup_dir & "\node_modules.7z"""
  call shell.Run(cmd_unzip, 1, True)
end if

rem --- �p�X�̓o�^ ---
path = _
  home & "\bin;" & _
  home & "\nodejs;" & _
  shell.ExpandEnvironmentStrings("%PATH%")

env.Item("NAKO_HOME") = home
env.Item("PATH") = path

rem --- NPM ---
rem call shell.Run("npm install --production", 1, True)

rem --- MSG ---
if not fso.FolderExists(home & "\node_modules\fs-extra") then
  MsgBox "�Z�b�g�A�b�v�Ɏ��s���܂����B�Ď��s���Ă��������B" & _
         "�����A�l�b�g���[�N�p�X��Ŏ��s����ꍇ�A" & _
         "��x�AC�h���C�u�ɃR�s�[���Ă�����s���Ă��������B"
else
  MsgBox "�����܂ł����B�Z�b�g�A�b�v�����ł��B"
end if

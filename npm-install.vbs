rem ---------------------------
rem execute nako3server script
rem ---------------------------

Set fso = createObject("Scripting.FileSystemObject")
Set shell = WScript.CreateObject("WScript.Shell")
Set env = shell.Environment("Process")

dim home
dim path, modName
home = fso.getParentFolderName(WScript.ScriptFullName)

MsgBox "���ꂩ��A�Ȃł���3�̃��W���[�����C���X�g�[�����܂��B"
modName = InputBox("���W���[������?", "�C���X�g�[�����閼�O", "")
If modName = "" Then
  WScript.Quit
End If

rem --- �p�X�̓o�^ ---
path = _
  home & "\bin;" & _
  home & "\nodejs;" & _
  shell.ExpandEnvironmentStrings("%PATH%")

env.Item("NAKO_HOME") = home
env.Item("PATH") = path

rem --- NPM ---
call shell.Run("npm install " & modName, 1, True)
MsgBox "�Z�b�g�A�b�v�����ł��B"

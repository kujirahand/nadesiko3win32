@echo off
cd %~dp0\..
echo --- ���݂̃o�[�W�������m�F���܂� ---
cmd.exe /c node_modules\.bin\cnako3 -e "�u�Ȃł����̃o�[�W����: {�i�f�V�R�o�[�W����}�v��\��"
echo --- �Ȃł������A�b�v�f�[�g���܂� ---
cmd.exe /c .\nodejs\npm install npm-check-updates
echo --- �ŐV�ł��m�F���܂� ---
cmd.exe /c .\node_modules\.bin\ncu -u
echo --- �K�v�Ȃ�C���X�g�[�����܂� ---
cmd.exe /c .\nodejs\npm install
echo --- �A�b�v�f�[�g��̃o�[�W�������m�F���܂� ---
cmd.exe /c node_modules\.bin\cnako3 -e "�u�Ȃł����̃o�[�W����: {�i�f�V�R�o�[�W����}�v��\��"
echo --- ��Ɗ����ł� ---
pause

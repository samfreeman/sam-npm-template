@echo off

echo -- Executing jest command...
call jest --verbose --no-color 2>tools/logs/tests.log

code -r tools/logs/tests.log

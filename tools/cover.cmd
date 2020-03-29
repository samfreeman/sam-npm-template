@echo off

echo -- Executing jest command...
call jest --coverage --no-color 1>tools/logs/coverage.log

code -r tools/logs/coverage.log

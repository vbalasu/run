# run

Execute any command-line as a child process
and return an object containing the command, exitcode, stdout and stderr 

Works even for invalid commands and arguments

##Examples

Command: `node run.js dir`

Output: `{ command: [ 'dir' ],
  exitcode: 0,
  stdout: ' Volume in drive C is Windows\r\n Volume Serial Number is 1426-58F1\r\n\r\n Directory of C:\\wamp\\www\\nodejs\\run\r\n\r\n02/24/2018  08:20 AM    <DIR>          .\r\n02/24/2018  08:20 AM    <DIR>          ..\r\n02/24/2018  08:23 AM               178 README.md\r\n02/24/2018  08:02 AM               738 run.js\r\n               2 File(s)            916 bytes\r\n               2 Dir(s)  37,344,219,136 bytes free\r\n',
  stderr: '' }
`

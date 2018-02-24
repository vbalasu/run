# run

Execute any command-line as a child process
and return an object containing the command, exitcode, stdout and stderr 

Works even for invalid commands and arguments

## Examples

## Node JS
`var r = require('./run.js')

r.run(['dir', '/b']).then(function(result){console.log(result)})
`

Output: `{ command: [ 'dir', '/b' ],
  exitcode: 0,
  stdout: 'example.txt\r\nREADME.md\r\nrun.js\r\n',
  stderr: '' }`

## Command Line

### Shell Command
Command: `node run.js dir`

Output: `{ command: [ 'dir' ],
  exitcode: 0,
  stdout: ' Volume in drive C is Windows\r\n Volume Serial Number is 1426-58F1\r\n\r\n Directory of C:\\wamp\\www\\nodejs\\run\r\n\r\n02/24/2018  08:20 AM    <DIR>          .\r\n02/24/2018  08:20 AM    <DIR>          ..\r\n02/24/2018  08:23 AM               178 README.md\r\n02/24/2018  08:02 AM               738 run.js\r\n               2 File(s)            916 bytes\r\n               2 Dir(s)  37,344,219,136 bytes free\r\n',
  stderr: '' }
`

### Invalid Command
Command: `node run.js invalidcommand`

Output: `{ command: [ 'invalidcommand' ],
  exitcode: 1,
  stdout: '',
  stderr: '\'invalidcommand\' is not recognized as an internal or external command,\r\noperable program or batch file.\r\n' }
`

### Call an external  program with parameters
Command: `node run.js sqlite3 --help`

Output: `{ command: [ 'sqlite3', '--help' ],
  exitcode: 1,
  stdout: '',
  stderr: 'Usage: sqlite3 [OPTIONS] FILENAME [SQL]\r\nFILENAME is the name of an SQLite database. A new database is created\r\nif the file does not previously exist.\r\nOPTIONS include:\r\n   -bail                stop after hitting an error\r\n   -batch               force batch I/O\r\n   -column              set output mode to \'column\'\r\n   -cmd COMMAND         run "COMMAND" before reading stdin\r\n   -csv                 set output mode to \'csv\'\r\n   -echo                print commands before execution\r\n   -init FILENAME       read/process named file\r\n   -[no]header          turn headers on or off\r\n   -help                show this message\r\n   -html                set output mode to HTML\r\n   -interactive         force interactive I/O\r\n   -line                set output mode to \'line\'\r\n   -list                set output mode to \'list\'\r\n   -mmap N              default mmap size set to N\r\n   -newline SEP         set newline character(s) for CSV\r\n   -nullvalue TEXT      set text string for NULL values. Default \'\'\r\n   -separator SEP       set output field separator. Default: \'|\'\r\n   -stats               print memory stats before each finalize\r\n   -version             show SQLite version\r\n   -vfs NAME            use NAME as the default VFS\r\n' }
`


### Pass in a file as input
Command: `node run.js "cat <example.txt"`

Output: `{ command: [ 'cat <example.txt' ],
  exitcode: 0,
  stdout: 'Hello\r\n',
  stderr: '' }
`

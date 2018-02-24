/* Execute any command-line as a child process
   and return an object containing the command, exitcode, stdout and stderr 
   Works even for invalid commands and commandWithArgs */

const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports.run = async function (commandWithArgs) {
  try {
    const { error, stdout, stderr } = await exec(commandWithArgs.join(' '));
    return {command:commandWithArgs, exitcode:0, stdout:stdout, stderr:stderr}
  } catch(err) {return {command:commandWithArgs, exitcode:err.code, stdout:err.stdout, stderr:err.stderr}}
}

async function main() { //If called from the command line
  process.argv.shift()
  process.argv.shift()
  var output = await module.exports.run(process.argv)
  console.log(output)
}

if (require.main === module) main()

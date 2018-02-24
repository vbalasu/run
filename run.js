/* Execute any command-line as a child process
   and return an object containing the command, exitcode, stdout and stderr 
   Works even for invalid commands and arguments */

const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports.run = async function () {
  process.argv.shift()
  process.argv.shift()
  try {
    const { error, stdout, stderr } = await exec(process.argv.join(' '));
    return {command:process.argv, exitcode:0, stdout:stdout, stderr:stderr}
  } catch(err) {return {command:process.argv, exitcode:err.code, stdout:err.stdout, stderr:err.stderr}}
}

async function main() {
  var output = await module.exports.run()
  console.log(output)
}
main()

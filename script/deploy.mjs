#!/usr/bin/env zx

import { $, cd, echo } from "zx";

const secret_key = './secret/id_rsa'

const { stdout } = await $`test -f ${secret_key} && echo true || echo false`
if (stdout.trim() === 'false') {
    echo('Secret key not found')
    $`exit`
}

function exec_remote_cmd(cmd) {
    return $`ssh -i ${secret_key} ubuntu@150.158.12.202 '${cmd}'`
}

function upload_file(file_path){
    return $`scp -i ${secret_key} ${file_path} ubuntu@150.158.12.202:/home/ubuntu/jobs_ci`
}

echo('Deploying...')
cd('.vitepress/dist')
await $`zip -r dist.zip .`
cd('../..')
await upload_file('./.vitepress/dist/dist.zip')
await $`rm ./.vitepress/dist/dist.zip`
await exec_remote_cmd(`sudo bash /home/ubuntu/jobs_ci/ci.sh`)
echo('Deployed!')

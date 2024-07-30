#!/bin/bash
sh -c "echo 'From inside container:' && echo 'User: $(whoami) UID: $(id -u) GID: $(id -g)' "
#ls -la /usr/src/app/*
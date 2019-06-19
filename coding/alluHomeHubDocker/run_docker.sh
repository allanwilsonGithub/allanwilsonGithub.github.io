#!/usr/bin/env bash

docker build -t allu-home-hub-docker .

time docker run \
           --net=host \
           --security-opt seccomp:unconfined \
           --shm-size "256M" \
           beacon-cloud-robot-framework
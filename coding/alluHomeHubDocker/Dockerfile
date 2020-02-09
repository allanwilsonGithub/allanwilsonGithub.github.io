FROM ubuntu:18.04

MAINTAINER "Allan Wilson"

LABEL name="Docker build AlluHomeHub"

RUN apt-get update && apt-get install -y git && apt-get install -y wget && apt-get install unzip
RUN mkdir /DATA/
RUN mkdir /DATA/git
RUN cd /DATA/git
RUN chmod 777 /DATA/git
RUN wget https://github.com/allanwilsonGithub/allanwilsonGithub.github.io/archive/master.zip
RUN unzip -xvf master.zip

#get the internal IP with ifconfig
#update package.json with internal IP

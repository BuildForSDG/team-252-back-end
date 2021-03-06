A one-liner phrase describing this project or app

[![Codacy Badge](https://img.shields.io/badge/Code%20Quality-D-red)](https://img.shields.io/badge/Code%20Quality-D-red)


## About

What is this project about. Ok to enrich here or the section above it with an image. 

Once this repo has been setup on Codacy by the TTL, replace the above badge with the actual one from the Codacy dashboard, and add the code coverage badge as well. This is mandatory

This is a simple python starter repo template for setting up your project. The setup contains:

- install: pipenv via pip. pipenv is a dependecy manager.

- pipenv: configuration in pipenv.lock

- pylint: for linting

- black: for code formatting

## Why

Talk about what problem this solves, what SDG(s) and SGD targets it addresses and why these are important

## Usage
How would someone use what you have built, include URLs to the deployed app, service e.t.c when you have it setup


## Setup
You should have **Python 3.5+**, **git**, and **node** installed. 

1. Clone the repo you've created from the template herein and change into the directory

    ``
    git clone <Your Repository>
    ``

2. Change into repo directory

    ``
    cd into root CDPA directory
    ``

3. Install pipenv, a dependecy manager for python.

    Run:

    ``
    pip install pipenv
    ``

4. Create a new virtual environment.

    ``
    pipenv shell
    ``

5. On a separate terminal window, while in the root directory run

    ``
    npm install
    ``

6. To install Pytorch and TorchVision, you will need to have Anaconda installed. Run
    ``
    pip install torch==1.5.0+cpu torchvision==0.6.0+cpu -f https://download.pytorch.org/whl/torch_stable.html
    ``

## Running the project.
1. On the node terminal, while in the root directory run
    ``
    npm run dev
    ``

2. On the python terminal, cd into the CDPA directory where the manage.py file is located and run
    ``
    python manage.py runserver
    ``

3. Copy the url in the python terminal and view the project on your browser

#### Hints

- Run tests using the command: `pytest`
- To recreate the database, Ensure you are in the folder with the **manage.py** file and run
  ``
    python manage.py makemigrations
    python manage.py migrate
  ``

- The model file is quite huge, so I will be sharing it on the slack channel. Find a link to my gdrive. Copy the file and add it to the **class_models** folder inside **API**
- Run your project:
  Navigate to the folder containing manage.py and run
  `python manage.py runserver`


## Authors

List the team behind this project. Their names linked to their Github, LinkedIn, or Twitter accounts should siffice. Ok to signify the role they play in the project, including the TTL and mentor

## Contributing
If this project sounds interesting to you and you'd like to contribute, thank you!
First, you can send a mail to buildforsdg@andela.com to indicate your interest, why you'd like to support and what forms of support you can bring to the table, but here are areas we think we'd need the most help in this project :
1.  Dataset Labelling. (We would appreciate a hand in identifing various crop diseases seen on leaves)
2.  area two (e.g you want people to opt-in and try using your staging app at staging.project-name.com and report any bugs via a form)
3.  area three (e.g here is the zoom link to our end-of sprint webinar, join and provide feedback as a stakeholder if you can)

## Acknowledgements

Did you use someone else’s code?
Do you want to thank someone explicitly?
Did someone’s blog post spark off a wonderful idea or give you a solution to nagging problem?

It's powerful to always give credit.

## LICENSE
MIT
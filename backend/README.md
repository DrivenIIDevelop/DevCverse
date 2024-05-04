# Backend Development Setup

To run the backend on your local development, make sure you've downloaded Python in your own machine.

In root of the backend directory, in the following order:

- Create a virtual environment folder by running the command: `python3 -m venv venv`
  Look to see if you have ('venv' : venv) anywhere at the bottom of your vscode; if you see it, you're good to go.

- Set up your Python Interpreter

  1. Navigate to: View > Command Palette > Python Interpreter > Enter your own interpreter
  2. Type in this exact line (Again, make sure you have the latest version of Python installed) : `./backend/venv/bin/python`

- Add the following files in the backend root directory of the project:

  - renai.db
  - .env
  - follow the instructions on `.env.example` and add your `SECRET_KEY`

- Create the virtual environment and install dependencies
  1. In the terminal, run the following command: `source venv/bin/activate`. You should see a `(venv)` before your command line now in the terminal.
  2. Run the following commands:
     - `pip install -r requirements.txt`
     - `uvicorn main:app --reload`
  3. For now we're using `http://localhost:8000/docs#/` as a way to test api routes

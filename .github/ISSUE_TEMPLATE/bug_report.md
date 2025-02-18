name: Bug report
description: Template for bug reports
labels:
  - bug
body:
  - type: textarea
    id: description
    attributes:
      label: Describe the bug
      description: A clear and concise description of what the bug is.
    validations:
      required: true
  - type: textarea
    id: expected-behaviour
    attributes:
      label: Expected Behaviour
      description: A clear and concise description of what you expected to happen.
    validations:
      required: true
  - type: textarea
    id: code
    attributes:
      label: Code
      description: The whole code to compile (paste a link if it's too long).
      placeholder: console['\x6c\x6f\x67']('\x61');
      render: JavaScript
    validations:
      required: true
  - type: textarea
    attributes:
      label: Logs
      description: The whole console output in case of an error.
      render: Text

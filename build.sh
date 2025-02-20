#!/bin/bash

# Output to verify that the script is being executed
echo "Running collectstatic..."

# Run collectstatic and output the result
python manage.py collectstatic --noinput

# Confirm if collectstatic ran
echo "collectstatic completed"

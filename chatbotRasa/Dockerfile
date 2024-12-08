FROM rasa/rasa:3.0.0-full

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

EXPOSE 5005

CMD ["rasa", "run", "--enable-api", "--cors", "*", "--debug"]

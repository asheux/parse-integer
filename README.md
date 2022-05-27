# Parse Integer

### Setup application

- Clone repo

```
$ git clone https://github.com/asheux/parse-integer.git
$ cd parse-integer
```

- Virtual Environment

```
$ python3 -m venv venv
$ source venv/bin/activate
```

- Install requirements

```
$ pip install -r requirements.txt
```

- Run tests

```
$ py.test --cov=app tests/
```

- Run application

```
$ python3 run.py
```

### Test application

- On postman

- [http://127.0.0.1:5000/api/v1/computations/](http://127.0.0.1:5000/api/v1/computations/)

- Using curl command

```
$ curl -i http://127.0.0.1:5000/api/v1/computations/
```

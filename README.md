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
$ py.test tests/
```

- Run application

```
$ python3 run.py
```

### Test application

- On postman

- [http://127.0.0.1:5000/api/v1/computations/{number}](http://127.0.0.1:5000/api/v1/computations/{number})

- Using curl command

```
$ curl -i http://127.0.0.1:5000/api/v1/computations/{number}
```

- Run FrontEnd

```
### Please make sure your backend is running

$ cd UI
$ npm install
$ npm start
```

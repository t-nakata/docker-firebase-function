





Dockerへ入る

```
$ docker run -it -p 9005:9005 axia/firedoc /bin/sh
```

```
$ docker run -it -p 9005:9005 -v $PWD:/app axia/firedoc /bin/sh
```
```
$ firebase init functions
```


```
$ docker run -it -p 5000:5000 -v $PWD:/app axia/firedoc /bin/sh
```
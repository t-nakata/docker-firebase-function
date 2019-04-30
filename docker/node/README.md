
### Dockerへ入る

```
$ docker run -it -p 9005:9005 axia/firedoc /bin/sh
```

### RootディレクトリとDocker内のディレクトリを共有する

```
$ docker run -it -p 9005:9005 -v $PWD:/app axia/firedoc /bin/sh
```

### firebase functionsを使用するための初期化

```
$ firebase init functions
```


### ローカルでテストするためのコマンド
```
$ docker run -it -p 5000:5000 -v $PWD:/app axia/firedoc /bin/sh
$ cd functions
$ npm run shell

# firebase エミュレータに入る
# question 関数の呼び出し
firebase > question()
```
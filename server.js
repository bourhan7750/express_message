
const express = require('express');
//サーバ作成
const app = express()

// Webルートリクエスト(POST)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`middleware: all. url: ${req.url}`);

    //CROS設定: 全てのドメインに対して許可 
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    next();
});

app.post("/", (req, res) => {
    console.log('post');
    let message=req.body.message;
    let result = {
        'message':message,
        'datetime':new Date(),
    };
    res.send(result);
})

app.get('/', (req, res) => {
    //GET パラメータ取得 (id)
    let id = req.query.id;
    console.log(id);

    let result = { 
        'id' : id, 
        
    };

    //レスポンス
    res.send(result);
});

app.listen(3000);
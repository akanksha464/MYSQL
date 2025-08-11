// mysql database CRUDE operations functionality
 // insert ,update,elete,etc


 'user strict';
 var sql = require('./MYSQL/mysqlconnect');

 //define model
 var QuestionBank = function(question){
    this.subjectid =question.subjectid;
    this.title = question.title;
    this.a = question.a;
    this.b = question.b;
    this.c = question.c;
    this.d = question.d;
    this.answerkey = question.answerkey;
    this.evaluationcriteriaid = question.evaluationcriteriaid;
 };


 QuestionBank.createQuestion = function (newQuestion, result) {
    sql.query("INSERT INTO questionbank set ?",newQuestion, function(err,res){
        if(err){
            console.log("error:", err);
            result(err,null);
        }else{
            console.log(res.insertID);
            result(null,res.insertID);
        }
    });
 };


 QuestionBank.getAll = function(result) {
    sql.query("SELECT * FROM questionbank ",function(err, res){
         if(err){
            console.log("error:", err);
            result(null,err);
        }else{
            console.log('question : ',res);
            result(null, res);
        }
    });   
 };


 QuestionBank.getById = function( questionId, result) {
    sql.query("SELECT * from questionbank where id = ? ",  questionId ,function(err, res){
         if(err){
            console.log("error:", err);
            result(err,null);
        }else{
            
         result(null, res);
        }
    });   
 };

QuestionBank.updateById = function(id ,question , result) {
    sql.query("UPDATE questionbank SET ? where id = ?",  [ question,id ],
        function (err,res){
         if (err){
            console.log("error:", err);
            result(null,err);
        }else{
             result(null, res);
        }
    });   
 };

 QuestionBank.remove = function(id, result){
    sql.query("DELETE FROM questionbank WHERE id = ?", [id], function (err,res){
         if (err){
            console.log("error:", err);
            result(err,null);
        }else{
             result(null, res);
        }
    });   
 };

 module.exports = QuestionBank